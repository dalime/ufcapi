export default function charactersReducer(state = [], action) {
  switch(action.type) {
    case 'GET_CHARACTERS':
      let currList = state;
      currList = currList.concat(action.payload);
      return currList;
      break;
    default:
      return state;
  }
}
