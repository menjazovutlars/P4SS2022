export const db = {
  categories: [
    {
      id: 1,
      name: "vegan",
    },
    {
      id: 2,
      name: "vegetarisch",
    },
    {
      id: 3,
      name: "low carb",
    },
    {
      id: 4,
      name: "laktosehaltig",
    },
    {
      id: 5,
      name: "karottenhaltig",
    },
    {
      id: 6,
      name: "regional",
    },
    {
      id: 7,
      name: "Tierprodukt",
    },
    {
      id: 8,
      name: "Fleisch",
    },
  ],

  ingredients: [
    {
      available: 0,
      id: 1,
      name: "Zwiebel",
    },
    {
      available: 1,
      id: 2,
      name: "Knoblauch",
    },
    {
      available: 0,
      id: 3,
      name: "Kartoffel",
    },
    {
      available: 1,
      id: 4,
      name: "Karotte",
    },
    {
      available: 0,
      id: 5,
      name: "Salami",
    },
    {
      available: 0,
      id: 6,
      name: "Sonnenblumenöl",
    },
    {
      available: 1,
      id: 7,
      name: "Olivenöl",
    },
    {
      available: 1,
      id: 8,
      name: "Gemüsebrühe",
    },
    {
      available: 0,
      id: 9,
      name: "Schlagsahne",
    },
    {
      available: 0,
      id: 10,
      name: "Créme fraîche",
    },
    {
      available: 0,
      id: 11,
      name: "Chili",
    },
    {
      available: 0,
      id: 12,
      name: "Zucchini",
    },
    {
      available: 0,
      id: 13,
      name: "Champignon",
    },
    {
      available: 0,
      id: 14,
      name: "Tomate",
    },
    {
      available: 0,
      id: 15,
      name: "Italienische Kräuter",
    },
    {
      available: 0,
      id: 16,
      name: "Ei",
    },
    {
      available: 0,
      id: 17,
      name: "Käse",
    },
    {
      available: 0,
      id: 18,
      name: "Blumenkohl",
    },
  ],

  ingredients_categories: [
    {
      categories_id: [1, 6],
      ingredients_id: 1,
    },
    {
      categories_id: [1],
      ingredients_id: 2,
    },
    {
      categories_id: [1, 6],
      ingredients_id: 3,
    },
    {
      categories_id: [1, 6, 3, 5],
      ingredients_id: 4,
    },
    {
      categories_id: [7, 8],
      ingredients_id: 5,
    },
    {
      categories_id: [1, 3],
      ingredients_id: 6,
    },
    {
      categories_id: [1],
      ingredients_id: 7,
    },
    {
      categories_id: [1, 3],
      ingredients_id: 8,
    },
    {
      categories_id: [2, 4, 7],
      ingredients_id: 9,
    },
    {
      categories_id: [2, 4, 7],
      ingredients_id: 10,
    },
    {
      categories_id: [1, 3],
      ingredients_id: 11,
    },
    {
      categories_id: [1, 3, 6],
      ingredients_id: 12,
    },
    {
      categories_id: [1, 3, 6],
      ingredients_id: 13,
    },
    {
      categories_id: [1, 3],
      ingredients_id: 14,
    },
    {
      categories_id: [1],
      ingredients_id: 15,
    },
    {
      categories_id: [2, 6],
      ingredients_id: 16,
    },
    {
      categories_id: [4, 7],
      ingredients_id: 17,
    },
    {
      categories_id: [1, 6],
      ingredients_id: 18,
    },
  ],

  meals: [
    {
      id: 1,
      name: "Cremiges Süppchen",
    },
    {
      id: 2,
      name: "Gemüseauflauf",
    },
    {
      id: 3,
      name: "Flower-Power Pizza",
    },
  ],

  meals_ingredients: [
    {
      ingredients_id: [3, 6, 8, 9, 10],
      meals_id: 1,
    },
    {
      ingredients_id: [1, 4, 11, 12, 13, 14],
      meals_id: 2,
    },
    {
      ingredients_id: [2, 5, 7, 15, 16, 17, 18],
      meals_id: 3,
    },
  ],

  meals_steps: [
    {
      meals_id: 1,
      steps_id: [1, 2, 3],
    },
    {
      meals_id: 2,
      steps_id: [4, 5, 6, 7],
    },
    {
      meals_id: 3,
      steps_id: [8, 9, 10, 11, 12, 13],
    },
  ],

  members: [
    {
      id: 1,
      name: "Julia",
    },
    {
      id: 2,
      name: "Peter",
    },
    {
      id: 3,
      name: "Dominik",
    },
  ],

  members_frames: [
    {
      members_id: 1,
      frames_id: 2,
    },
    {
      members_id: 2,
      frames_id: 1,
    },
    {
      members_id: 3,
      frames_id: 3,
    },
  ],

  frames: [
    {
      id: 1,
      name: "vegan",
    },
    {
      id: 2,
      name: "vegetarisch",
    },
    {
      id: 3,
      name: "Keto Diät",
    },
  ],

  frames_categories: [
    {
      categories_id: [1],
      frames_id: 1,
    },
    {
      categories_id: [1, 2, 4],
      frames_id: 2,
    },
    {
      categories_id: [4, 7, 8],
      frames_id: 3,
    },
  ],

  steps: [
    {
      id: 1,
      step: "Kartoffeln schälen und mit etwas Öl ein wenig anbraten. Danach den Topf mit Wasser füllen und 15 - 20 Minuten köcheln lassen. Nach weiteren 10 Minuten pürieren und mit Salz und Pfeffer verfeinern.",
    },
    {
      id: 2,
      step: "Kartoffeln waschen und schälen. Ca. 5 Kartoffeln in kleine Würfel, den Rest in dünne Scheiben schneiden. In einer Pfanne etwas Öl erhitzen, darin die Kartoffelwürfel knusprig braten. Auf Küchenkrepp legen und für die Einlage aufheben.",
    },
    {
      id: 3,
      step: "Butter in einem breiten Topf aufschäumen lassen, Kartoffelscheiben und die feinwürfelig geschnittene Zwiebel darin anschwitzen. Mit Gemüsebrühe aufgießen, mit Salz und Pfeffer abschmecken und die Kartoffeln in etwa 15 Minuten weich kochen. Danach das Lorbeerblatt herausnehmen, die Sahne und die Crème fraîche beigeben und alles mit dem Stabmixer pürieren. Mit Salz, Pfeffer und einem Hauch Muskat abschmecken und mit den gebratenen Kartoffelwürfeln bestreuen.",
    },
    {
      id: 4,
      step: "Beliebige Soße mit etwas Wasser in einer kleinen Auflaufform mischen und etwas würzen. Anschließend die Karotten schälen, in Scheiben schneiden und in die Auflaufform geben. Die Zucchini ebenfalls in Scheiben schneiden und schön über die Karotten geben. Die Champignons putzen und halbieren, über die Zucchini geben (ggf. bei größeren Stücken auch vierteln). Nochmal etwas würzen (für alle die es scharf mögen).",
    },
    {
      id: 5,
      step: "Die Zwiebeln in halbe Ringe schneiden und über den Champignons verteilen. Die passierten Tomaten darüber geben. Nun den Strunk vom Chicorée entfernen und die einzelnen Blätter ablösen. Der Länge nach durchschneiden und überlappend über das Gemüse geben.",
    },
    {
      id: 6,
      step: "Den Backofen auf 250°C (Ober-/Unterhitze) vorheizen und das Gemüse für etwa 30 - 40 Minuten zugedeckt in den Backofen geben. Anschließend abdecken und die Hitze auf 150°C reduzieren. Nochmal 5 - 10 Minuten im Ofen lassen.",
    },
    {
      id: 7,
      step: "Da dieses Gericht völlig fettfrei ist und die Zutaten sehr wenig Kalorien haben, ist es bestens für eine Diät geeignet. Ich würze es zusätzlich noch mit einer klein gehackten scharfen Chilischote.",
    },
    {
      id: 8,
      step: "Alle Strünke und Blätter des Blumenkohls entfernen, den Kohl in kleine Stücke zerteilen. In der Küchenmaschine häckseln, bis es aussieht wie Grieß. Wer keine Küchenmaschine hat, kann es auch mit einer Käsereibe, einem scharfen Messer (abrasieren vom ganzen Kopf) oder mit einem Zauberstab (aber nicht zu dolle, es soll kein Püree werden) versuchen.",
    },
    {
      id: 9,
      step: "Den gehackten Blumenkohl in eine mikrowellenfeste Schüssel geben und ca. 8 Min. garen. Es muss kein Wasser dazugegeben werden, da die natürliche Feuchtigkeit reicht. Wie man das macht, wenn man keine Mikrowelle hat, weiß ich nicht. Ich vermute, es kann auch mit aufgetautem TK-Kohl oder mit vorher gekochtem Kohl klappen. Da hatte ich noch nicht genügend Testmöglichkeiten.",
    },
    {
      id: 10,
      step: 'Ein großer Blumenkohl produziert 3 - 4 "Becher" (ca. 250 ml pro Becher). Pro Pizza für 2 - 3 Personen wird ein Becher benötigt. Der restliche Kohl-Krümel-Teig kann bis zu 1 Woche im Kühlschrank aufbewahrt werden.',
    },
    {
      id: 11,
      step: "Den Ofen auf ca. 230 °C Ober-/Unterhitze vorheizen. Ein Blech mit Backpapier oder Backfolie auslegen. In einer Schüssel 1 Becher (ca. 200 g) Blumenkohl, ein Ei und ca. 200 g geriebenen Käse zu einem Brei vermischen. Dazu kommen die Kräuter, der Knoblauch und das Salz. Alles kräftig vermengen. Hier soll einfach ein Brei entstehen. Ich habe anfangs gedacht, das kann doch nie was werden ... der hat schließlich eine ganz andere Konsistenz als Hefeteig, aber durch diese Zweifel muss man durch und einfach weitermachen.",
    },
    {
      id: 12,
      step: "Den Teig auf dem Blech verteilen und mit den Händen in die gewünschte Form und Dicke ausbreiten. Wer mag, kann die Oberfläche mit Olivenöl bestreichen, um die Bräunung zu unterstützen. Im heißen Backofen ca. 15 Minuten backen (bis es lecker gebräunt aussieht).",
    },
    {
      id: 13,
      step: "Aus dem Ofen nehmen und mit Pizzasauce bestreichen. Dann nach Wunsch belegen (allerdings kein rohes Hackfleisch verwenden, da die Pizza nun nur noch überbacken wird). Das Ganze noch mal ca. 10 min. in den heißen Ofen geben, bis der Käse zerflossen oder gebräunt ist.",
    },
  ],
};
