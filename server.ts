import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route - AI Concierge
  app.post("/api/concierge", async (req, res) => {
    try {
      const { mood, craving, localTime, weather } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "") {
        const recommendations = getLocalFallbackRecommendations(mood, craving);
        return res.json({
          sommelierGreeting: recommendations.sommelierGreeting,
          recommendations: recommendations.recommendations,
          partingToast: recommendations.partingToast,
          isFallback: true,
          message: "Showing curated signature recommendations. Add your GEMINI_API_KEY in secrets to allow the live AI agent to think!"
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemPrompt = `You are the chief "Chaaye Sommelier" and culinary ambassador of Chaaye Khana Multan. 
Your goal is to recommend custom beverage and food pairings from our authentic Pakistani/continental menu based on the guest's current mood, cravings, Multan local weather, and time of day.

Our Signature Menu items to consider:
1. Karak Chai (#1 Bestseller): Strong tea boiled with milk, loaded with cardamom and saffron. (180 PKR)
2. Peshawari Kehwa: Traditional green tea with lemon, cardamom, mint, served with sugar crystals or honey. (190 PKR)
3. Saffron Doodh Patti: Rich full-cream milk tea slowly simmered with original saffron strands. (250 PKR)
4. Nutella French Toast: Thick-cut fluffy toast filled with Nutella, topped with caramel and vanilla ice cream. (450 PKR)
5. Traditional Turkish Breakfast: Olives, cheese, signature organic sunny-side up eggs, sausages, fresh honey comb, paratha, and two cups of tea. (950 PKR)
6. Multani Halwa Platter: Traditional warm Sohan Halwa served with clotted cream (Malai) and pooris. (650 PKR)
7. Gourmet Beef Cheese Burger: Charcoal-grilled smash beef patty, caramelized onions, cheddar cheese, secret sauce, artisanal brioche. (790 PKR)
8. Creamy Fettuccine Alfredo: Rich parmesan cream sauce, grilled chicken breast, wild forest mushrooms, herbs. (850 PKR)
9. Multani Tikka Pizza: Sourdough crust, spicy marinated chicken tikka, local red onions, green chilies, mozzarella, mint drizzle. (990 PKR)
10. Molten Lava Cake: Warm chocolate cake with a molten Belgian chocolate center, served with vanilla bean scoop. (490 PKR)
11. Mint Margarita: Crushed fresh mint, lime, sugar syrup, carbonated fizz, blended with ice. (320 PKR)

Be warm, hospitable, and highly storytelling. Use a premium and elegant tone. Describe why these elements match their current mood. Recommend exactly 3 items.
Format your output strictly as a JSON object with this shape:
{
  "sommelierGreeting": "A warm welcome narrative tailored to their mood (1-2 sentences)...",
  "recommendations": [
    {
      "name": "Item Name",
      "price": "PKR price",
      "rationale": "Detailed explanation of why this item fits their specific mood and Multan weather/time."
    }
  ],
  "partingToast": "A poetic final sentence inviting them in..."
}`;

      const userMessage = `Guest details:
      - Current Mood: ${mood || "Relaxed"}
      - Food Cravings: ${craving || "Something traditional & warm"}
      - Contextual Time: ${localTime || "Evening"}
      - Current Weather: ${weather || "Warm & Sunny"}
      
      Recommend 3 optimal pairings matching these parameters.`;

      // Use gemini-3.5-flash for friendly text intelligence as per key requirements
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText.trim());
      res.json({ ...parsedData, isFallback: false });

    } catch (error: any) {
      console.error("AI Sommelier Error:", error);
      const recommendations = getLocalFallbackRecommendations(req.body.mood, req.body.craving);
      res.json({
        sommelierGreeting: recommendations.sommelierGreeting,
        recommendations: recommendations.recommendations,
        partingToast: recommendations.partingToast,
        isFallback: true,
        message: "Failed to connect to active AI model. Displaying authentic curated suggestions."
      });
    }
  });

  // Vite development vs production asset serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://0.0.0.0:${PORT}`);
  });
}

function getLocalFallbackRecommendations(mood?: string, craving?: string) {
  const m = (mood || "").toLowerCase();
  const c = (craving || "").toLowerCase();

  const greeting = "As you seek a peaceful sanctuary today at Chaaye Khana Multan, let us weave a tailored culinary narrative for you under our glorious local skies.";
  const toast = "We await your presence where our fresh brew leads to deep conversations.";

  if (m.includes("tired") || m.includes("exhausted") || m.includes("work") || m.includes("stress")) {
    return {
      sommelierGreeting: greeting + " We understand you've had a demanding session. Allow us to soothe your thoughts with warm, comforting signatures.",
      recommendations: [
        {
          name: "Saffron Doodh Patti",
          price: "250 PKR",
          rationale: "Laid with pure saffron threads and simmered on slow heat, this rich tea restores energy and calms active brainwaves instantly."
        },
        {
          name: "Nutella French Toast",
          price: "450 PKR",
          rationale: "Luxuriously sweet and fluffy, our artisanal toast is the perfect comfort reward to wash away workday fatigue."
        },
        {
          name: "Mint Margarita",
          price: "320 PKR",
          rationale: "Crisp and refreshing, it serves as a wonderful contrasting cold palate cleanser to awaken your senses."
        }
      ],
      partingToast: toast
    };
  }

  if (c.includes("sweet") || c.includes("dessert") || c.includes("chocolate") || m.includes("happy")) {
    return {
      sommelierGreeting: greeting + " Celebrate the sweet side of life. Our dessert selection is tuned to release rich dopamine and match elegant Multani hospitality.",
      recommendations: [
        {
          name: "Molten Lava Cake",
          price: "490 PKR",
          rationale: "Liquid Belgian chocolate flowing delicately onto a premium vanilla ice cream scoop. Absolute sensory bliss."
        },
        {
          name: "Karak Chai",
          price: "180 PKR",
          rationale: "Our robust boiled cardamon Karak tea cuts beautifully through rich chocolate, creating a perfect balanced warmth."
        },
        {
          name: "Multani Halwa Platter",
          price: "650 PKR",
          rationale: "Embracing legendary local Multan heritage—warm traditional Sohan Halwa served with fresh thick malai and pooris."
        }
      ],
      partingToast: toast
    };
  }

  return {
    sommelierGreeting: greeting + " Explore our premium signatures that represent modern coffee shop and authentic tea lounge excellence.",
    recommendations: [
      {
        name: "Karak Chai",
        price: "180 PKR",
        rationale: "Our crowd favorite. Boiled with aromatic cardamoms, dense and heavy, satisfying the traditional Multani tea soul."
      },
      {
        name: "Multani Tikka Pizza",
        price: "990 PKR",
        rationale: "Local slow-roasted chicken tikka spices over a lightweight sourdough base, finished with fresh mint oil. Crafted for delightful evenings."
      },
      {
        name: "Traditional Turkish Breakfast",
        price: "950 PKR",
        rationale: "An artistic array of cheese, olives, sunny-side eggs, sausages, paratha and bottomless Karak tea, ideal for premium mornings."
      }
    ],
    partingToast: toast
  };
}

startServer();
