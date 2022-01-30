const redux = require('redux');
const createStore=redux.createStore;
const combineReducers= redux.combineReducers;
const reduxLogger=require('redux-logger');
const applyMiddleware=redux.applyMiddleware;
const logger=reduxLogger.createLogger();
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
const initialEggState={
    numOfEggs:100
}
const initialChickenState={
    numOfChickens:20
}

const eggReducer = (state=initialEggState, action) => {
switch(action.type){
    case BUY_EGG: return{//object destructing 
        ...state,//spread operator
        numOfEggs:state.numOfEggs-1
    }
  default: return state;
}
}

const chickenReducer = (state=initialChickenState, action) => {
    switch(action.type){
        case BUY_CHICKEN: return{
            ...state,
            numOfChickens:state.numOfChickens-1
        }
      default: return state;
    }
    
    }

    const rootReducer=combineReducers({
        egg:eggReducer,
        chicken:chickenReducer
    })
const store=createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(()=> {});
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyChicken());
store.dispatch(buyChicken());
unsubscribe();