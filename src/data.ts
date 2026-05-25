import { MenuItem, AreaInfo, TableZone } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  // --- BREAKFAST ---
  {
    id: "br-1",
    name: "Traditional Turkish Breakfast Platter",
    category: "Breakfast",
    price: 950,
    description: "An artistically layered morning feast. Organic sunny-side eggs, sliced turkey sausage, imported feta and halloumi cheeses, black and green olives, natural honeycomb with clotted cream (Malai), crisp paratha, and two cups of hot Karak Chai.",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 1,
    isChefSpecial: true,
    prepTime: "20 mins"
  },
  {
    id: "br-2",
    name: "Nutella Stuffed French Toast",
    category: "Breakfast",
    price: 1675,
    description: "Thick sourdough triangles stuffed with premium Nutella hazelnut spread, griddled to golden creaminess, drizzled with organic honey syrup and topped with cold crushed hazelnuts.",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    isBestseller: true,
    prepTime: "15 mins"
  },
  {
    id: "br-3",
    name: "Multani Desi Breakfast Stand",
    category: "Breakfast",
    price: 590,
    description: "Generous traditional platter starring organic spiced omelette (onions, green chilies, tomatoes), aromatic chana masala, two crispy multi-layered parathas, house-made pickle, and sweet cardamon lassi.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 2,
    prepTime: "18 mins"
  },
  {
    id: "br-4",
    name: "Sunny Side Up",
    category: "Breakfast",
    price: 1050,
    description: "Two country-fresh organic eggs fried to perfect golden runniness, seasoned with crushed Himalayan salt and black pepper grains. Served with golden toast.",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "br-5",
    name: "Scrambled Egg",
    category: "Breakfast",
    price: 1050,
    description: "Whisper-light farm eggs slowly whisked with fresh local butter and warm dairy cream for an exceptionally moist and velvety texture. Served with buttered artisan bread.",
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-6",
    name: "Plain Omelet",
    category: "Breakfast",
    price: 1050,
    description: "A delicate French-style country egg omelet pan-fried in premium clarified butter. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-7",
    name: "Spanish Omelet",
    category: "Breakfast",
    price: 1150,
    description: "Traditional rustic omelette loaded with thinly sliced round potatoes, sweet onions, and country seasonings. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "br-8",
    name: "Mushroom Omelet",
    category: "Breakfast",
    price: 1150,
    description: "Gently folded farm omelette stuffed with butter-sautéed wild forest mushrooms and garlic chives. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-9",
    name: "Cheese Omelet",
    category: "Breakfast",
    price: 1150,
    description: "A decadent fluffy omelet wrapping a melting, premium core of sharp Cheddar and warm Mozzarella string cheese. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    isBestseller: true,
    prepTime: "10 mins"
  },
  {
    id: "br-10",
    name: "Spinach Omelet",
    category: "Breakfast",
    price: 1150,
    description: "Vibrant freshly ironed omelette folded with organic baby spinach, fresh coriander, and hint of cream. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-11",
    name: "Pakistani Omelet",
    category: "Breakfast",
    price: 1150,
    description: "Authentic Pakistani street omelette prepared with finely chopped red country onions, green capsicums, spicy green chilies, and ripe tomatoes. Made with 2 eggs. Add an extra egg for Rs. 150.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 2,
    prepTime: "8 mins"
  },
  {
    id: "br-12",
    name: "Sausage",
    category: "Breakfast",
    price: 595,
    description: "Twin skewers of chef's special hand-stuffed plump chicken breast link sausages, grilled with hickory wood smoke.",
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 1,
    prepTime: "8 mins"
  },
  {
    id: "br-13",
    name: "Croissant",
    category: "Breakfast",
    price: 425,
    description: "Classic golden crescent of pastry rolled with imported grass-fed butter, providing flaky golden exterior shells and a tender warm interior.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "br-14",
    name: "Paratha",
    category: "Breakfast",
    price: 200,
    description: "Superbly crisp and golden, hand-stretched multi-layered round flatbread griddled with pure desi ghee on iron skillet.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "7 mins"
  },
  {
    id: "br-15",
    name: "Whole Wheat Paratha",
    category: "Breakfast",
    price: 200,
    description: "Nutritious multi-layered flatbread crafted strictly from premium whole wheat (Lal Atta) flour, skillet-baked with a delicate touch of ghee.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "7 mins"
  },
  {
    id: "br-16",
    name: "Aloo Paratha",
    category: "Breakfast",
    price: 550,
    description: "Mouthwatering wheat bread stuffed stuffed with delicious mashed potatoes, whole cumin seed, crushed hand-picked red pepper, and cilantro leaves.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 1,
    prepTime: "12 mins"
  },
  {
    id: "br-17",
    name: "Gurr Paratha",
    category: "Breakfast",
    price: 575,
    description: "Beautiful sweet paratha stuffed with melted sweet Multani sugarcane jaggery (Gurr) and toasted black sesame seeds, yielding caramelized edges.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "br-18",
    name: "Chicken Qeema",
    category: "Breakfast",
    price: 1325,
    description: "Premium minced chicken slow-simmered in a traditional iron wok with crushed black pepper, cloves, diced tomatoes, ginger, and green cardamoms.",
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 2,
    prepTime: "15 mins"
  },
  {
    id: "br-19",
    name: "Beef Qeema",
    category: "Breakfast",
    price: 1325,
    description: "A royal Mughal breakfast legacy. Sautéed prime minced beef slow-braised with sweet curd, cinnamon logs, coriander seeds, julienned ginger, and fresh mint.",
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 2,
    isChefSpecial: true,
    prepTime: "15 mins"
  },
  {
    id: "br-20",
    name: "Naan",
    category: "Breakfast",
    price: 145,
    description: "Puffy yard-soft traditional leavened flatbread freshly baked in our clay tandoor and layered with clean salted butter.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "br-21",
    name: "Roti",
    category: "Breakfast",
    price: 145,
    description: "Ghar-style round hand-rolled wheat flour flatbread baked over clay tandoor walls for a light, soft morning bite.",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "br-22",
    name: "Roghni Naan",
    category: "Breakfast",
    price: 200,
    description: "Soft leavened royal flatbread, deeply hand-patterned and generously sprinkled with sesame seeds and washed in sweet ghee.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "br-23",
    name: "Garlic Mushroom on Toast",
    category: "Breakfast",
    price: 1150,
    description: "Gourmet wild forest button mushrooms sautéed in a rich garlic cream reduction and sweet parsley, poured generously over toasted thick sourdough bread.",
    imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "br-24",
    name: "Croissant with Egg & Cheese",
    category: "Breakfast",
    price: 1150,
    description: "French split-baked croissant stuffed with fluffy warm cooked scrambled eggs and melting golden sharp Cheddar cheese squares.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-25",
    name: "Crepe Stuffed with Scrambled Eggs and Sausage",
    category: "Breakfast",
    price: 1650,
    description: "Gourmet thin sweet-buttermilk crepe stuffed with velvet scrambled eggs, herb chicken sausage coins, and melted Monterey Jack cheese.",
    imageUrl: "https://images.unsplash.com/photo-1519676867240-7e35e7853758?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "br-26",
    name: "Nutella Crepe",
    category: "Breakfast",
    price: 1675,
    description: "A paper-thin silk crepe folded with rich layer of premium hazelnut Nutella chocolate, decorated with strawberry slices and warm fudge syrup.",
    imageUrl: "https://images.unsplash.com/photo-1519676867240-7e35e7853758?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-27",
    name: "Crepes",
    category: "Breakfast",
    price: 775,
    description: "Two simple classical sweet French crepes, elegantly served with a wedge of lemon, clean sweet butter, and powdered confectioner sugar dusting.",
    imageUrl: "https://images.unsplash.com/photo-1519676867240-7e35e7853758?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "br-28",
    name: "French toast",
    category: "Breakfast",
    price: 875,
    description: "Classic French-style griddled thick bread soaked in an egg cream custard with clean vanilla, freshly ground cinnamon, and topped with whipped sweet butter.",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "br-29",
    name: "Pancakes",
    category: "Breakfast",
    price: 895,
    description: "A towering stack of three light-and-airy buttermilk pancakes topped with sweet whipped butter creams and genuine warm maple drizzle.",
    imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "11 mins"
  },
  {
    id: "br-30",
    name: "Waffles",
    category: "Breakfast",
    price: 1125,
    description: "Crispy-edged deep-grooved luxury Belgian waffle, dusted with confectionary sugar glaze and sweet maple syrup pools.",
    imageUrl: "https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "br-31",
    name: "Waffles with Ice Cream & Chocolate Syrup",
    category: "Breakfast",
    price: 1575,
    description: "Giant hot Belgian waffle crowned with dual spheres of cool French vanilla ice cream and drizzled beautifully with warm dark chocolate fudge.",
    imageUrl: "https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "11 mins"
  },
  {
    id: "br-32",
    name: "Halwa Puri (Single)",
    category: "Breakfast",
    price: 975,
    description: "Traditional local morning delight. Highly flavorful spiced channay masala, dry Alu Bhujia curry, and delicious almond halwa. Served with 1 hot puffy puri or whole wheat puri.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 1,
    prepTime: "12 mins"
  },
  {
    id: "br-33",
    name: "Halwa Puri (Double)",
    category: "Breakfast",
    price: 1725,
    description: "Generous traditional platter perfect for sharing. Dual portions of spiced channay, alu bhujia, sweet semolina halwa, and 2 warm inflated puris.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 1,
    isChefSpecial: true,
    prepTime: "14 mins"
  },
  {
    id: "br-34",
    name: "Khagina",
    category: "Breakfast",
    price: 1050,
    description: "Classic Mughlai scrambled eggs cooked beautifully with rich butter, whole mustard cumin seeds, diced onions, red tomatoes, and spicy green chilies.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 1,
    prepTime: "10 mins"
  },
  {
    id: "br-35",
    name: "Beef Nihari",
    category: "Breakfast",
    price: 1850,
    description: "Royal slow-stewed breakfast legacy. Prime choice shank of tender juicy beef slow-simmered overnight in stock gravy, dressed with slivers of hot ginger, lemon water, and mint oil.",
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 2,
    isChefSpecial: true,
    prepTime: "15 mins"
  },

  // --- TEA COLLECTION ---
  {
    id: "tea-1",
    name: "Classic Karak Chai",
    category: "Tea Collection",
    price: 180,
    description: "Our signature blend. Highly robust premium black tea leaves slowly boiled with pure milk, whole cardamoms, and a whisper of saffron. Thick, sweet, and comforting.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 0,
    isBestseller: true,
    prepTime: "8 mins"
  },
  {
    id: "tea-2",
    name: "Saffron Royal Doodh Patti",
    category: "Tea Collection",
    price: 250,
    description: "Waterless tea brewed directly in rich buffalo milk. Slowly simmered for hours with genuine Iranian saffron strands and crushed green cardamoms, served in a traditional clay teapot.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    isChefSpecial: true,
    prepTime: "10 mins"
  },
  {
    id: "tea-3",
    name: "Peshawari Cardamom Kehwa",
    category: "Tea Collection",
    price: 190,
    description: "Clear mountain-harvested green tea loaded with split cardamoms, fresh garden mint, and organic lemon slides. Served with traditional crystal sugar chunks.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    isVeg: true,
    prepTime: "6 mins"
  },
  {
    id: "tea-4",
    name: "Kashmiri Pink Pistachio Tea",
    category: "Tea Collection",
    price: 240,
    description: "Traditional salt-and-bicarbonate brew producing a luxurious pink color, simmered with cream and liberally showered with shredded almond and pistachio skins.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "10 mins"
  },

  // --- COFFEE CONNECTION ---
  {
    id: "cof-1",
    name: "Artisanal Caramel Macchiato",
    category: "Coffee Collection",
    price: 460,
    description: "Double stream of hot Arabica espresso poured gently over vanilla-sweetened steamed milk, sealed with thick microfoam and house-made salted caramel sauce crosshatches.",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "cof-2",
    name: "Hazelnut Cold Brew Fusion",
    category: "Coffee Collection",
    price: 490,
    description: "Crafted espresso beans cold-steeped for 18 hours, shaken with gourmet roasted hazelnut syrup, poured over crystal ice spheres and layered with thick plant cream floating top.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },

  // --- SALADS, SOUPS & SANDWICHES ---
  {
    id: "sss-1",
    name: "Spinach Stack Panini Wrap",
    category: "Salads Soups & Sandwiches",
    price: 1325,
    description: "Crispy iron-rich baby spinach wilted down with slow-charred farm veggies, roasted garlic cloves, and layered mozzarella cheese pressed inside an artisan flaxseed panini flatbread wrap.",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "sss-2",
    name: "Chicken & Fries Panini Wrap",
    category: "Salads Soups & Sandwiches",
    price: 1495,
    description: "Juicy sliced char-grilled chicken tenders rolled alongside crispy golden salted French fries, double cheddar cheese slices, and our legendary smoky garlic-peppercorn aioli inside a pressed wheat wrap.",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 1,
    prepTime: "12 mins"
  },
  {
    id: "sss-3",
    name: "Spicy Chicken Melt",
    category: "Salads Soups & Sandwiches",
    price: 1325,
    description: "Fiery skillet-grilled chicken strips seasoned in local chili flakes, red capsicums, and heavily loaded with melting spicy pepper jack cheese over toasted crusty panini slices.",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 2,
    isBestseller: true,
    prepTime: "10 mins"
  },
  {
    id: "sss-4",
    name: "Toasted Chicken Supreme",
    category: "Salads Soups & Sandwiches",
    price: 1495,
    description: "Shredded chicken supreme baked in butter, sliced smoked chicken mortadella, pickled farm cucumbers, sweet honey-dijon splash, toasted in double-thick crusty premium bread.",
    imageUrl: "https://images.unsplash.com/photo-1475090169767-40ed8d18a67d?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 1,
    prepTime: "11 mins"
  },
  {
    id: "sss-5",
    name: "Crispy Chicken Zinger",
    category: "Salads Soups & Sandwiches",
    price: 1495,
    description: "Crispy-fried chicken thigh coated in our signature high-crunch hot seasoning, stuffed with fresh creamy slaw and cheddar melt on toasted sesame bun. Served with golden fries.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 2,
    prepTime: "12 mins"
  },
  {
    id: "sss-6",
    name: "Grilled Chicken & Cheese Sandwich",
    category: "Salads Soups & Sandwiches",
    price: 1495,
    description: "Succulent flame-grilled chicken cuts, melted sharp cheddar, mozzarella cheese strings, and sweet basil pesto on thick country rye. Served with your choice of side: French Fries, Mashed Potatoes, or Cole Slaw.",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "sss-7",
    name: "Steak Sandwich",
    category: "Salads Soups & Sandwiches",
    price: 1595,
    description: "Skillet beef tenderloin strips sautéed with wild cardamoms, garlic butter, glazed caramelized onions, and melting provolone cheese inside toasted french baguettes. Served with your choice of side: French Fries, Mashed Potatoes, or Cole Slaw.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 1,
    isChefSpecial: true,
    prepTime: "15 mins"
  },
  {
    id: "sss-8",
    name: "Bun Kabab",
    category: "Salads Soups & Sandwiches",
    price: 1450,
    description: "True street companion elevated for connoisseurs. Pan-fried spiced chana dal and mutton patty dipped in whipped egg foam, layered with mint coriander infusion and red onion rings in soft griddled buns.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 1,
    prepTime: "8 mins"
  },
  {
    id: "sss-9",
    name: "Club Sandwich",
    category: "Salads Soups & Sandwiches",
    price: 1825,
    description: "Triple-layer rye sandwich packed with grilled chicken chunks, fluffy pan-fried egg, cucumber slides, sharp mozzarella, cold butterhead lettuce, and delicious olive mayonnaise cream.",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    isBestseller: true,
    prepTime: "14 mins"
  },

  // --- BURGERS & SANDWICHES ---
  {
    id: "burg-1",
    name: "Gourmet Smoky Beef Smash",
    category: "Burgers",
    price: 790,
    description: "Double smash prime beef patties, high-heat seared with crispy edges, layered with smoked cheddar, charred caramelized onions, and our secret peppercorn sauce housed in a toasted butter brioche.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 1,
    isBestseller: true,
    prepTime: "15 mins"
  },
  {
    id: "burg-2",
    name: "Crusty Club Sandwich De Lux",
    category: "Burgers",
    price: 640,
    description: "Triple-layered light rye toast carrying hickory-roasted shredded chicken breast, fried egg, cucumber slides, sharp mozzarella, cold lettuce, and dynamic Dijon olive spread.",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "12 mins"
  },

  // --- PIZZA ---
  {
    id: "piz-3",
    name: "Spinach & olives",
    category: "Pizza",
    price: 1725,
    description: "Classic hand-stretched sourdough crust dressed with slow-roasted baby spinach leaves, premium Greek Kalamata olives, crushed garlic, seasoned olive oil, and bubbling low-moisture mozzarella.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    isVeg: true,
    prepTime: "14 mins"
  },
  {
    id: "piz-4",
    name: "Chicken & jalapeno",
    category: "Pizza",
    price: 1725,
    description: "Tender grilled chicken pieces, spicy green jalapeno slices, roasted red bell peppers, and fresh cilantro, melted over rich marinara sauce and sharp mozzarella.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 2,
    prepTime: "15 mins"
  },
  {
    id: "piz-5",
    name: "Margherita",
    category: "Pizza",
    price: 1475,
    description: "The timeless Italian classic. Rich rustic tomato sauce, creamy fresh buffalo mozzarella, fragrant local sweet basil leaves, and a generous drizzle of premium extra virgin olive oil.",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    isVeg: true,
    prepTime: "10 mins"
  },
  {
    id: "piz-6",
    name: "Pepperoni",
    category: "Pizza",
    price: 1725,
    description: "Piles of premium artisanal beef pepperoni slices curling up to crispy perfection over bubbling whole-milk mozzarella cheese and our signature robust tomato herb sauce.",
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 1,
    isBestseller: true,
    prepTime: "12 mins"
  },

  // --- CONTINENTAL & PASTA ---
  {
    id: "cont-1",
    name: "Creamy Chicken Alfredo Fettuccine",
    category: "Continental",
    price: 850,
    description: "Al dente spinach-infused fettuccine ribbons folded gently in a rich sauce of heavy cream, garlic cloves, mature Parmigiano-Reggiano, and topped with a tender herb-grilled chicken breast.",
    imageUrl: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    isBestseller: true,
    prepTime: "14 mins"
  },
  {
    id: "cont-2",
    name: "English Afternoon High Tea Stand",
    category: "Continental",
    price: 1450,
    description: "An elegant two-tiered experience. Tier 1: English cucumber sandwiches, smoked chicken pinwheels. Tier 2: Mini fruit tarts, buttery scones with house strawberry reduction and Multani clotted malai. Served with bottomless organic loose tea.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "25 mins"
  },

  // --- EXQUISITE DESSERTS ---

  {
    id: "des-3",
    name: "Skillet cookie with ice cream",
    category: "Desserts",
    price: 1475,
    description: "Intensely warm, fresh-baked giant chocolate chip cookie served piping hot in a cast-iron skillet, crowned with dual cold scoops of premium vanilla bean gelato and dark chocolate fudge swirls.",
    imageUrl: "https://images.unsplash.com/photo-1585502762283-9beec23ee4e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "15 mins"
  },
  {
    id: "des-4",
    name: "Chocolate Molten Cake",
    category: "Desserts",
    price: 1250,
    description: "Decadent, rich chocolate sponge cake with an incredibly warm, gooey melted cocoa center oozing with premium Belgian chocolate. Served with premium vanilla bean ice cream.",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "12 mins"
  },
  {
    id: "des-5",
    name: "Chocolate Mud Cake",
    category: "Desserts",
    price: 550,
    description: "An incredibly moist, dense, and rich chocolate fudge slice layered with thick chocolate ganache glaze for ultimate chocolate indulgence.",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "des-6",
    name: "Banana Bread",
    category: "Desserts",
    price: 395,
    description: "Freshly baked, deliciously moist banana cake loaf slice sweetened with ripe local bananas, brown sugar, and toasted walnut crunch.",
    imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "des-7",
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 450,
    description: "Superb fudgy, chewy chocolate brownie bar filled directly with chocolate chunks, crisp shiny skin on top, served warm.",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "des-8",
    name: "Donut",
    category: "Desserts",
    price: 250,
    description: "Perfectly soft and pillowy fried ring donut, beautifully glazed with dark milk chocolate coating and colorful sprinkles.",
    imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "des-9",
    name: "Chocolate Croissant",
    category: "Desserts",
    price: 450,
    description: "Warm, flaky French butter croissant layered precisely with premium melted dark chocolate sticks inside and finished with chocolate drizzle.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },

  // --- MOCKTAILS ---
  {
    id: "mck-1",
    name: "Emerald Mint Margarita",
    category: "Mocktails",
    price: 320,
    description: "Vibrant and frosty. Crushed fresh garden mint and sharp key lime juice blended with sweet syrup and fine ice flakes, topped with active mineral fizz.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    isVeg: true,
    prepTime: "4 mins"
  },

  // --- DRINKS ---
  {
    id: "drk-1",
    name: "Peach Iced Tea",
    category: "Drinks",
    price: 725,
    description: "Perfect brewed black tea fully infused with sweet imported peach nectar and fresh hand-pulled summer mint, served over crystal ice blocks.",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-2",
    name: "Strawberry Iced Tea",
    category: "Drinks",
    price: 725,
    description: "Refreshing cold-shaken black tea mixed beautifully with fresh strawberry reduction, sugar syrup, and fresh lime slices.",
    imageUrl: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-3",
    name: "Mango Iced Tea",
    category: "Drinks",
    price: 725,
    description: "A gorgeous tropical tea fusion featuring fresh sweet Multani mango pulps, premium steep tea, and frosty ice crystals.",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-4",
    name: "Peach & Lime Iced Tea",
    category: "Drinks",
    price: 725,
    description: "A double refreshing blend of sweet peach nectar and zesty squeezed key lime, shaken with premium iced black tea.",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-5",
    name: "Iced Spanish Latte",
    category: "Drinks",
    price: 1025,
    description: "Rich, smooth espresso combined elegantly with caramelized condensed milk, whole farm milk, and poured over heavy ice block layers.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-6",
    name: "Iced Vanilla Latte",
    category: "Drinks",
    price: 1125,
    description: "Perfect double shot of Arabica espresso blended with cold fresh dairy, sweet French vanilla pods, and active foam toppings.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-7",
    name: "Iced Americano",
    category: "Drinks",
    price: 550,
    description: "Bold and simple filter alternative. Distinctly rich double espresso shot poured directly over chilled mineral water on active ice spheres.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-8",
    name: "Regular Iced Tea",
    category: "Drinks",
    price: 695,
    description: "Traditional sun-brewed black tea leaves, lightly sweetened to perfection and finished with direct lemon wedges.",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-9",
    name: "Pina Colada",
    category: "Drinks",
    price: 775,
    description: "A super-creamy tropical classic. Thick pineapple juice blended silky-smooth with light coconut milk, sweet dairy cream, and crushed ice.",
    imageUrl: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-10",
    name: "Lemon Fizz",
    category: "Drinks",
    price: 550,
    description: "Zesty freshly squeezed key limes, cane syrup, and premium sparkling carbonated water poured on ice.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-11",
    name: "Mint Magic",
    category: "Drinks",
    price: 675,
    description: "An incredibly vibrant fusion of hand-plucked garden mint leaves, fresh key lime, sweet sugar cane, and cold fizzy mineral splash.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-12",
    name: "Lemonade",
    category: "Drinks",
    price: 550,
    description: "A timeless simple refresher. Country lemon water freshly squeezed daily with pink Himalayan rock salt and brown cane sugar syrup.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-13",
    name: "Fresh lime with 7up",
    category: "Drinks",
    price: 275,
    description: "Crispy thirst-quencher. Squeezed lime juices splashed into chilled aerated 7Up on ice bubbles.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "3 mins"
  },
  {
    id: "drk-14",
    name: "Oreo Shake",
    category: "Drinks",
    price: 975,
    description: "Decadent dessert shake. Thick milk cream blended dynamically with sweet vanilla gelato and crushed Oreo cookie rings, finished with cookie crumbs.",
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-15",
    name: "Chocolate Brownie Shake",
    category: "Drinks",
    price: 850,
    description: "Extravagant high-churn shake loaded with home-baked fudgy chocolate brownie squares, dairy cream, and melted chocolate fudge drizzle.",
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-16",
    name: "Banana Milkshake",
    category: "Drinks",
    price: 695,
    description: "Wholesome morning or afternoon nutrient booster. Fresh sweet bananas whipped cleanly with farm milk and a touch of organic honey.",
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-17",
    name: "Fresh Apple Juice",
    category: "Drinks",
    price: 795,
    description: "Seasonal fresh juices & vegetable juices are available. Pure, cold-pressed daily juice extracted from sweet premium orchards apples.",
    imageUrl: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-18",
    name: "Lassi Sweet",
    category: "Drinks",
    price: 525,
    description: "Classic sweet local yogurt lassi whipped beautifully with fresh country milk and sweet sugarcane syrup, served ice-cold.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-19",
    name: "Lassi Namkeen",
    category: "Drinks",
    price: 525,
    description: "Authentic salted yogurt refreshment whisked precisely with micro-roasted cumin seed powder and black mineral salt.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-20",
    name: "Soft drinks",
    category: "Drinks",
    price: 275,
    description: "A refreshingly cold, thirst-quenching selection of premium carbonated sugar sodas on ice.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    spiceLevel: 0,
    prepTime: "2 mins"
  },
  {
    id: "drk-21",
    name: "Diet soft drinks",
    category: "Drinks",
    price: 295,
    description: "Chilled selection of premium light, zero-sugar diet sodas served ice-cold with lemon wheels.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "2 mins"
  },
  {
    id: "drk-22",
    name: "Mineral Water Large",
    category: "Drinks",
    price: 325,
    description: "Perfectly pure carbon-filtered premium spring water bottles, served ice-cold (1.5 Liters).",
    imageUrl: "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "1 min"
  },
  {
    id: "drk-23",
    name: "Mineral Water Small",
    category: "Drinks",
    price: 175,
    description: "Perfectly pure premium spring water bottle, served perfectly chilled (500ml).",
    imageUrl: "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "1 min"
  },
  {
    id: "drk-24",
    name: "Regular Chaaye",
    category: "Drinks",
    price: 375,
    description: "Robust local black tea leaves boiled gently with pure farm milk on a low flame for a rich daily cup.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-25",
    name: "Doodh Patti",
    category: "Drinks",
    price: 395,
    description: "Premium black tea leaves cooked entirely inside rich buffalo milk, infused with organic green cardamom pod oils.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "drk-26",
    name: "Matka Chaaye",
    category: "Drinks",
    price: 395,
    description: "Rich, creamy milk tea poured and simmered inside charcoal-baked clay pots (Matkas) for that earthy authentic touch.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "drk-27",
    name: "Roasted Tea",
    category: "Drinks",
    price: 475,
    description: "Special dry-roasted tea leaves and sugar caramelized in a pan before simmering with fresh country-fresh milk.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "drk-28",
    name: "CK Karak Chaaye",
    category: "Drinks",
    price: 475,
    description: "Our signature high-strength spicy black tea, slow boiled with crushed cardamoms and premium saffron shreds.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 0,
    prepTime: "7 mins"
  },
  {
    id: "drk-29",
    name: "Special Chaaye",
    category: "Drinks",
    price: 695,
    description: "Chef's gourmet royal morning tea prepared with condensed thick cream, crushed almonds, pistachios, and luxury cardamoms.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "drk-30",
    name: "CK Masala Chaaye",
    category: "Drinks",
    price: 575,
    description: "An incredibly comforting wellness tea steeped with sweet cinnamon sticks, crushed cloves, ginger slices, and black peppercorn seeds.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "7 mins"
  },
  {
    id: "drk-31",
    name: "Gurr Ki Chaaye",
    category: "Drinks",
    price: 395,
    description: "Organic local tea sweetened to dynamic levels using raw, unrefined Multani sugarcane jaggery (Gurr).",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "8 mins"
  },
  {
    id: "drk-32",
    name: "Apple Tea",
    category: "Drinks",
    price: 325,
    description: "Comforting fruit infusion combining dried sweet apple pieces, cloves, and premium organic cinnamon bark.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-33",
    name: "Mystic Spice Blend",
    category: "Drinks",
    price: 325,
    description: "A mysterious blend of fragrant green cardamom seeds, toasted star anise, cloves, and luxury cinnamon infusion.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-34",
    name: "Hibiscus Tea",
    category: "Drinks",
    price: 325,
    description: "A deeply tart, sweet pink-hued organic tea brewed from hand-dried sour crimson hibiscus flower petals.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-35",
    name: "Detoxify Tea",
    category: "Drinks",
    price: 325,
    description: "Wellness herbal tea containing fresh ginger juice, key lemon juice, garden mint, and premium clear loose green tea.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-36",
    name: "Sea Buckthorn Tea",
    category: "Drinks",
    price: 325,
    description: "Exquisite wild sea buckthorn berry brew rich in natural vitamins and carrying a unique sweet-sour character.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-37",
    name: "Hunza Tea",
    category: "Drinks",
    price: 325,
    description: "Traditional longevity tea from Hunza. Ginger roots, active mint leaves, green cardamom seeds, and raw high-altitude mountain honey.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-38",
    name: "Peshawari Kehva",
    category: "Drinks",
    price: 325,
    description: "Light, grassy Peshawari green tea leaves double-boiled beautifully with split green cardamom seeds.",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-39",
    name: "Kashmiri Chaaye",
    category: "Drinks",
    price: 550,
    description: "The pink morning standard. Luxurious salt-brewed Kashmiri green leaves simmered with buffalo cream and ground green pistachios.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "10 mins"
  },
  {
    id: "drk-40",
    name: "Mocha Coffee",
    category: "Drinks",
    price: 525,
    description: "Double extraction espresso blended beautifully with warm dark chocolate syrup, steamed milk, and active cocoa toppings.",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-41",
    name: "Cappuccino",
    category: "Drinks",
    price: 525,
    description: "Standard balanced single shot Arabica combined precisely with 1/3 hot milk and 1/3 light microfoam layers.",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "6 mins"
  },
  {
    id: "drk-42",
    name: "Coffee with donut",
    category: "Drinks",
    price: 450,
    description: "A delightful afternoon pair. An authentic single-shot warm milk latte accompanied by a classic glazed sweet ring donut.",
    imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "5 mins"
  },
  {
    id: "drk-43",
    name: "Espresso Double",
    category: "Drinks",
    price: 575,
    description: "An intense, strong double extraction of freshly crushed gourmet coffee beans under a thick golden hazelnut crema.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-44",
    name: "Espresso Single",
    category: "Drinks",
    price: 450,
    description: "A pure high-pressure extraction of premium single-source Arabica coffee beans.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    spiceLevel: 0,
    prepTime: "4 mins"
  },
  {
    id: "drk-45",
    name: "Latte",
    category: "Drinks",
    price: 475,
    description: "Warm single shot espresso layered gently under velvety country-fresh steamed milk, decorated with simple crema art.",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    spiceLevel: 0,
    prepTime: "5 mins"
  }
];

export const MULTAN_DELIVERY_AREAS: AreaInfo[] = [
  { name: "Gulgasht Colony (Local Area)", estimateMin: "10-15 mins", deliveryFee: 40, minOrder: 300 },
  { name: "Multan Cantonment (Cantt)", estimateMin: "25-30 mins", deliveryFee: 100, minOrder: 500 },
  { name: "Bosan Road", estimateMin: "15-20 mins", deliveryFee: 60, minOrder: 400 },
  { name: "Shah Rukn-e-Alam Colony", estimateMin: "28-35 mins", deliveryFee: 120, minOrder: 600 },
  { name: "Mumtazabad", estimateMin: "30-40 mins", deliveryFee: 150, minOrder: 700 },
  { name: "Northern Bypass Residences", estimateMin: "30-35 mins", deliveryFee: 120, minOrder: 600 },
  { name: "Officers Colony", estimateMin: "20-25 mins", deliveryFee: 80, minOrder: 500 }
];

export const TABLE_ZONES: TableZone[] = [
  {
    id: "cozy-indoor",
    name: "Indoors Cozy Couch Lounge",
    description: "Surrounded by rich wooden bookshelves, warm table lamps, and luxury leather Chesterfields. Best for deep literary conversations and working.",
    capacityText: "1 to 6 people",
    baseFee: 0,
    icon: "BookOpen"
  },
  {
    id: "rooftop-skyline",
    name: "Rooftop Landmark Skyline",
    description: "Sits under twinkling stringed bulb canopies overlooking historical Multan horizons. Features direct air cooling and romantic candle warmth.",
    capacityText: "2 to 8 people",
    baseFee: 300,
    icon: "CloudSun"
  },
  {
    id: "tea-veranda",
    name: "Heritage Tea Veranda",
    description: "Semi-covered garden-side terrace capturing Multan's gentle evening breeze. Adorned with copper accents and green hanging climbers.",
    capacityText: "1 to 4 people",
    baseFee: 0,
    icon: "Sparkles"
  },
  {
    id: "royal-private",
    name: "Royal Private Enclave",
    description: "Insulated luxury cabin space with individual sound system control, exclusive call bell, and fine dining cutlery themes.",
    capacityText: "4 to 12 people",
    baseFee: 1000,
    icon: "Crown"
  }
];
