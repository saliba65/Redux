export default function todos(state = [], action) {
  //{type: "ADD_TODO",text: Fazer Cafe};

  switch (action.type) {
    case "ADD_TODO":
      //add novo todo
      return [...state, { 
        id: Math.random(), 
        text: action.text,
      }];
    default:
      return state;
  }
}
