const HANDLE_NAME_CLiCK = "HANDLE_NAME_CLiCK";
const HANDLE_SLIDE_BTN = "HANDLE_SLIDE_BTN";

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

    case HANDLE_SLIDE_BTN:
      switch (action.way) {
        case 'LEFT':
          return Object.assign({}, state, { sliderBtn: { left: true, right: false } })
        case 'RIGHT':
          return Object.assign({}, state, { sliderBtn: { left: false, right: true } })
        case 'BOTH':
          return Object.assign({}, state, { sliderBtn: { left: true, right: true } })
        case 'NONE':
          return Object.assign({}, state, { sliderBtn: { left: false, right: false } })
        default:
          return {}
      }

    default:
      return state;
  }
}