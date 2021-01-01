const HANDLE_NAME_CLiCK = "HANDLE_NAME_CLiCK";

export default function reducer(state, action) {
  console.log("state: ", state)
  console.log("action: ", action)
  switch (action.type) {
    case HANDLE_NAME_CLiCK:
      const { id, name, imgUrl } = action;
      return Object.assign({}, state, {
        selectedData: state.selectedData.some(entry => entry.id === id) ? (
          state.selectedData.filter(entry => entry.id !== id)
        ) : (
            [...state.selectedData, { id, name, imgUrl }]
          )
      })

    default:
      return state;
  }
}