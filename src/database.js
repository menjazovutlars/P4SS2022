export const db = {
  members: [
    {
      id: 1,
      name: "Lars",
      picture_url: "memberImgs/karotte.jpg",
    },
    {
      id: 2,
      name: "Elli",
      picture_url: "memberImgs/kartoffeln.jpg",
    },
    {
      id: 3,
      name: "Leander",
      picture_url: "memberImgs/knoblauch.jpg",
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Zwiebel",
    },
    {
      id: 2,
      name: "Knoblauch",
    },
    {
      id: 3,
      name: "Kartoffel",
    },
    {
      id: 4,
      name: "Karotte",
    },
  ],

  meals: [
    {
      id: 1,
      name: "Kartoffelsalat",
    },
    {
      id: 2,
      name: "Suppe",
    },
    {
      id: 3,
      name: "Testgericht",
    },
    {
      id: 4,
      name: "Mein Lieblingsessen YUMMY",
    },
  ],
  
  meals_ingredients:

  [
    {
        ingredients_id: [1,2,3,4], 
        meals_id: 1
    },
    {
        ingredients_id: [1,3],
        meals_id: 2
    },
    {
        ingredients_id: [2,3],
        meals_id: 3
    },
    {
        ingredients_id: [1],
        meals_id: 4
    }
],

  meals_steps: [
    {
      meals_id: 1,
      steps_id: [1, 2, 3],
    },
    {
      meals_id: 2,
      steps_id: [1, 2, 4],
    },
    {
      meals_id: 3,
      steps_id: [2, 3, 4],
    },
    {
      meals_id: 3,
      steps_id: [1, 3, 4],
    },
  ],

  members_meals: [
    {
      members_id: 1,
      meals_id: [1,3],
    },
    {
      members_id: 2,
      meals_id: [2,4],
    },
    {
      members_id: 3,
      meals_id: [2],
    },
  ],

  steps: [
    {
      id: 1,
      step: "Kartoffelsalat machen",
    },
    {
      id: 2,
      step: "Die Hände waschen und sich dann tief gegenseitig in die Augen schauen.",
    },
    {
      id: 3,
      step: "Das Gewehr aus dem Schrank nehmen und nach langer Überlegung in feine Würfel schneiden.",
    },
    {
      id: 4,
      step: "What am I even doing?",
    },
  ],
};
