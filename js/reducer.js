let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function render(){
    document.body.textContent = state.count
}

function dispatch(action){
  state = changeState(state, action)
  render()
}

render()


//In this lesson, we've introduced a new function called the dispatch function. Our dispatch function solved two problems for us.

// First, it persisted changes to our state. This is because we called the dispatch function, the dispatch function called our reducer, and then we took the return value from the reducer and assigned it to be our new state.
//
// Second, it ensured that each time our state updates, our HTML updates to reflect these changes. It does this by simply calling the render function. Each time we call dispatch it's as if we are then calling render. Don't worry about re-rendering too much. Remember that when we integrate with React, React will only be virtually re-rendering the DOM, and then updating the DOM with the smallest number of changes to ensure a performant application.
