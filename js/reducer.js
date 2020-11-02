let state = {count: 0};

const changeState = (state, action) => {
  switch(action.type) {
    case 'INCREASE':
      return {count: state.count + 1}
    case 'DECREASE':
      return {count: state.count - 1} 
    default: 
      return state;
  }
}

render = () => {document.body.textContent = state.count}

dispatch = action => {
  state = changeState(state, action)
  render()
}

dispatch({type: 'INCREASE'})

dispatch({type: 'INCREASE'})

dispatch({type: 'INCREASE'})

// state should now have a count of 3