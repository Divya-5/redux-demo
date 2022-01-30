const redux = require('redux');
const createStore=redux.createStore;
const BUY_EGG = 'BUY_EGG'
const BUY_CHICKEN = 'BUY_CHICKEN'
//action creators
function buyEgg(){
    return{
        type:BUY_EGG,
        info:'Buying Egg'
    }
}
function buyChicken(){
    return{
        type:BUY_CHICKEN,
        info:'Buying Chicken'
    }
}
const initialState={
    numOfEggs:100,
    numOfChickens:20
}

const reducer = (state=initialState, action) => {
switch(action.type){
    case BUY_EGG: return{//object destructing 
        ...state,//spread operator
        numOfEggs:state.numOfEggs-1
    }
    case BUY_CHICKEN: return{
        ...state,
        numOfChickens:state.numOfChickens-1
    }
  default: return state;
}

}

const store=createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()));
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyChicken());
unsubscribe();