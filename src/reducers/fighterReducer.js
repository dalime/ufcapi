export default function characterReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_CHARACTER':
      let char = Object.assign({}, action.payload);
      return char;
      break;
    default:
      return state;
  }
}
