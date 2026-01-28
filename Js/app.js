const states = {
    apple: 5
}

const reducer = (state = states, action) => {
    switch (action.type) {
        case "BUY_APPLE":
            return {apple: state.apple - 1}                
        default:
            return state
    }
}

const store = Redux.createStore(reducer);

// console.log(store.getState());

store.subscribe(() => {
    // console.log(store.getState());
    document.getElementById('apple_count').innerHTML = "Apples Count:" + store.getState().apple
})

// store.dispatch({type: "BUY_APPLE"})
// store.dispatch({type: "BUY_APPLE"})
// store.dispatch({type: "BUY_APPLE"})
// store.dispatch({type: "BUY_APPLE"})

document.getElementById('buy_apple').addEventListener('click',()=>{
    store.dispatch({type: "BUY_APPLE"})
})

document.getElementById('apple_count').innerHTML = "Apples Count:" + store.getState().apple
