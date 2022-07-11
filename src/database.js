export const db = {
  categories: [
    {
      id: 1,
      name: "vegan",
    },
    {
      id: 2,
      name: "vegetarian",
    },
    {
      id: 3,
      name: "lowcarb",
    },
    {
      id: 4,
      name: "meat",
    },
    {
      id: 5,
      name: "chicken",
    },
    {
      id: 6,
      name: "vegetable",
    },
    {
      id: 7,
      name: "fruit",
    },
    {
      id: 8,
      name: "nut",
    },
    {
      id: 9,
      name: "sweet",
    },
    {
      id: 11,
      name: "animalproduct",
    },
    {
      id: 12,
      name: "highfat",
    },
    {
      id: 13,
      name: "glutenfree",
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

  meals_ingredients: [
    {
      ingredients_id: [1, 2, 3, 4],
      meals_id: 1,
    },
    {
      ingredients_id: [1, 3],
      meals_id: 2,
    },
    {
      ingredients_id: [2, 3],
      meals_id: 3,
    },
    {
      ingredients_id: [1],
      meals_id: 4,
    },
    {
      ingredients_id: [3, 8],
      meals_id: 5,
    },
    {
      ingredients_id: [1, 2, 4, 7],
      meals_id: 6,
    },
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

  members_needs: [
    {
      members_id: 1,
      needs_id: 1,
    },
    {
      members_id: 2,
      needs_id: 5,
    },
    {
      members_id: 3,
      needs_id: 2,
    },
  ],

  needs: [
    {
      id: 1,
      name: "vegan",
    },
    {
      id: 2,
      name: "keto diet",
    },
    {
      id: 3,
      name: "weightloss",
    },
    {
      id: 4,
      name: "pregnant",
    },
    {
      id: 5,
      name: "meateater",
    },
    {
      id: 6,
      name: "gluten allergy",
    },
  ],

  needs_categories: [
    {
      categories_id: [1,6,7],
      needs_id: 1,
    },
    {
      categories_id: [3,8,11,12],
      needs_id: 2,
    },
    {
      categories_id: [4,5,11],
      needs_id: 5,
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
