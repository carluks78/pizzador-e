const p = (name) => `/images/products/${name}.webp`;

export const categories = [
  {
    id: "tomate",
    label: "Base tomate",
    intro: "Nos classiques généreux, préparés sur une base de sauce tomate.",
    items: [
      ["Marguerita", "Sauce tomate, mozzarella fior di latte, origan, basilic.", "9 €", "11 €", p("pizza-napolitaine-au-basilic-frais")],
      ["Calzone (soufflée)", "Sauce tomate, mozzarella fior di latte, jambon, champignons de Paris, œuf, crème fraîche, emmental gratiné, origan.", "11 €", "13,90 €", p("4b731f6f-1659-4f1f-9f9a-2c16da5409bb")],
      ["Régina", "Sauce tomate, mozzarella fior di latte, jambon, champignons de Paris, origan.", "11 €", "13,90 €", p("pizza-rustique-aux-champignons-et-jambon")],
      ["4 Fromages", "Sauce tomate, mozzarella fior di latte, chèvre affiné, gorgonzola, emmental gratiné, origan.", "11 €", "13,90 €", p("pizza-rustique-aux-herbes-sechees")],
      ["Italienne", "Sauce tomate, mozzarella fior di latte, anchois, câpres, olives, origan.", "11 €", "13,90 €", p("pizza-aux-anchois-olives-et-capres")],
      ["Bolognaise", "Sauce tomate, mozzarella fior di latte, tomates fraîches, bœuf haché pur bœuf, poivrons frais, copeaux de parmesan.", "11 €", "13,90 €", p("pizza-rustique-aux-tomates-et-viande-epicee")],
      ["Orientale", "Sauce tomate, mozzarella fior di latte, merguez, poivrons frais, olives, œuf, origan.", "11 €", "13,90 €", p("pizza-rustique-a-luf-et-poivrons")],
      ["Original Chicken", "Sauce tomate, mozzarella fior di latte, émincé de poulet, oignons rouges, sauce barbecue fumée, origan.", "11 €", "13,90 €", p("pizza-poulet-oignons-rouges-et-barbecue")],
      ["Pacéenne", "Sauce tomate, mozzarella fior di latte, champignons de Paris, bœuf haché pur bœuf, Boursin®, emmental, origan.", "11 €", "13,90 €", p("pizza-rustique-au-buf-et-champignons")],
      ["4 Saisons", "Sauce tomate, mozzarella fior di latte, poivrons, champignons, artichauts, tomates fraîches, roquette, huile d’olive, origan.", "11 €", "13,90 €", p("pizza-genereusement-garnie-de-roquette")],
      ["Chilienne", "Sauce tomate, mozzarella fior di latte, chorizo, pepperoni, poivrons, piment, origan.", "11 €", "13,90 €", p("pizza-genereuse-au-chorizo-croustillant")],
      ["Raclette", "Sauce tomate, mozzarella fior di latte, pommes de terre, jambon, raclette, oignons rouges, origan.", "11 €", "13,90 €", p("pizza-raclette-gourmande-au-jambon-et-pommes-de-terre")]
    ]
  },
  {
    id: "creme",
    label: "Base crème",
    intro: "Des recettes fondantes et réconfortantes sur une base de crème fraîche.",
    items: [
      ["Pêcheur", "Crème fraîche, mozzarella fior di latte, thon mariné à l’huile, œuf, fromage frais, origan.", "11 €", "13,90 €", p("pizza-au-thon-ricotta-et-uf-coulant")],
      ["Hawaïenne", "Crème fraîche, mozzarella fior di latte, jambon, ananas frais, champignons de Paris, origan.", "11 €", "13,90 €", p("pizza-doree-a-lananas-jambon-et-champignons")],
      ["Dorée", "Crème fraîche, mozzarella fior di latte, jambon, chorizo, emmental gratiné, origan.", "11 €", "13,90 €", p("pizza-rustique-aux-viandes-et-poivrons")],
      ["Fromagère", "Crème fraîche, mozzarella fior di latte, camembert, raclette, emmental gratiné, copeaux de parmesan, origan.", "11 €", "13,90 €", p("pizza-blanche-rustique-aux-eclats-de-parmesan")],
      ["Chèvre Miel", "Crème fraîche, mozzarella fior di latte, chèvre affiné, miel artisanal, œuf. Noix en supplément.", "11 €", "13,90 €", p("pizza-rustique-au-chevre-et-uf-coulant")],
      ["Montagnarde", "Crème fraîche, mozzarella fior di latte, pommes de terre, lardons fumés, reblochon au lait cru, origan.", "11 €", "13,90 €", p("pizza-montagnarde-sans-olives-noires")],
      ["Norvégienne", "Crème fraîche, mozzarella fior di latte, saumon fumé, aneth, origan. Servie avec un quartier de citron.", "11 €", "13,90 €", p("pizza-au-saumon-fume-citron-et-olives")],
      ["Bergère", "Crème fraîche, mozzarella fior di latte, chèvre affiné, lardons fumés, miel artisanal, origan.", "11 €", "13,90 €", p("pizza-rustique-au-brie-et-lardons")],
      ["Istanbul", "Crème fraîche, mozzarella fior di latte, viande de kebab, tomates fraîches, oignons rouges, salade fraîche.", "11 €", "13,90 €", p("pizza-au-parmesan-poivrons-et-tomates-cerises")]
    ]
  },
  {
    id: "speciale",
    label: "Base spéciale",
    intro: "Deux créations à la personnalité bien trempée.",
    items: [
      ["Burger", "Sauce façon Big Mac maison, mozzarella fior di latte, bœuf haché, tomates fraîches, oignons rouges, cornichons américains, cheddar.", "11 €", "13,90 €", p("pizza-burger")],
      ["Indienne", "Sauce curry maison, mozzarella fior di latte, émincé de poulet, champignons de Paris, poivrons frais, oignons rouges, origan.", "11 €", "13,90 €", p("pizza-garnie-sans-olives-noires")]
    ]
  },
  {
    id: "paninis",
    label: "Paninis",
    intro: "Tous nos paninis sont proposés à 6 €.",
    items: [
      ["4 Fromages", "Pain panini, mozzarella, chèvre, gorgonzola, emmental.", "6 €", null, p("baguette-au-chevre-fondant-et-herbes")],
      ["Jambon", "Pain panini, mozzarella, jambon, champignons, tomates fraîches.", "6 €", null, p("sandwich-baguette-aux-champignons-et-tomates-fondantes")],
      ["Poulet", "Pain panini, crème fraîche, poulet, emmental, mozzarella.", "6 €", null, "/images/panini-poulet.webp"],
      ["Chèvre Miel", "Pain panini, fromage de chèvre, mozzarella, miel. Noix en supplément.", "6 €", null, p("panini-chevre-miel-et-herbes")]
    ]
  },
  {
    id: "salades",
    label: "Salades",
    intro: "Fraîches, généreuses, toutes nos salades sont à 8 €.",
    items: [
      ["Italienne", "Roquette, tomates fraîches, jambon, artichauts, parmesan, vinaigrette maison.", "8 €", null, p("salade-italienne-a-la-roquette-et-parmesan")],
      ["César", "Salade, tomates fraîches, poulet, croûtons, parmesan, vinaigrette maison.", "8 €", null, p("salade-cesar-au-poulet-grille-et-parmesan")],
      ["Tomate mozzarella basilic", "Tomates fraîches, mozzarella, basilic, huile d’olive et vinaigre balsamique.", "8 €", null, p("salade-caprese-au-basilic-et-balsamique")]
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    intro: "La touche sucrée pour finir en beauté.",
    items: [
      ["Pizza Nutella", "Nutella, sucre glace, graines de sésame.", "8 €", "10 €", p("pizza-chocolatee-au-sesame-et-vermicelles-colores")],
      ["Tiramisu maison", "Caramel beurre salé maison ou Nutella.", "3,20 €", null, p("34a63e86-aeec-4a07-aef8-745b2a861331")],
      ["Fondant au chocolat", "", "3,20 €", null, p("img-4177")],
      ["Sorbet framboise", "Pot généreux de 150 ml.", "4 €", null, p("sorbet-framboise-aux-framboises-fraiches")],
      ["Sorbet poire", "Pot généreux de 150 ml.", "4 €", null, p("sorbet-granite-a-la-poire-en-coupe")],
      ["Sorbet citron", "Pot généreux de 150 ml.", "4 €", null, p("sorbet-citron-au-quartier-de-citron")],
      ["Sorbet mangue", "Pot généreux de 150 ml.", "4 €", null, p("sorbet-cremeux-a-la-mangue-fraiche")],
      ["B&J Chocolate Fudge Brownie", "Ben & Jerry’s · 150 ml : 3,50 € · 500 ml : 7,50 €.", "3,50 €", "7,50 €", p("a9f9b9bc-37d1-4c3d-8063-6d584a50ad1b")],
      ["B&J Half Baked", "Ben & Jerry’s · 150 ml : 3,50 € · 500 ml : 7,50 €.", "3,50 €", "7,50 €", p("71654467-2280-4029-8107-94472a708483")],
      ["B&J Cookie Dough", "Ben & Jerry’s · 150 ml : 3,50 € · 500 ml : 7,50 €.", "3,50 €", "7,50 €", p("0dee8136-83bc-4a26-8ed5-c9c4ed76cd0f")],
      ["B&J Peanut Butter Cup", "Ben & Jerry’s · 150 ml : 3,50 € · 500 ml : 7,50 €.", "3,50 €", "7,50 €", p("37995edb-3533-4a6b-bf84-56d6ef925164")],
      ["B&J Cookie Vermont-ster", "Ben & Jerry’s · 500 ml.", "7,50 €", null, p("ben-jerrys-cookie-vermontster")]
    ]
  }
];

export const drinks = {
  cans: ["Coca", "Coca zéro", "Coca cherry", "Schweppes agrumes", "Fanta orange", "Fanta citron", "Orangina", "Perrier", "Oasis tropical", "Oasis pomme cassis framboise", "Fuze Tea", "Tropico", "Sprite"],
  bottles: ["Coca", "Coca zéro", "Fanta orange", "Orangina", "Tropico"]
};
