const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')

// define middleware here
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
// end

function buyCake(){
    return{
    type:BUY_CAKE,
    info:"customer wants to buy cake"
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:"customer wants to buy ice cream"
    }
}


const initialCakeState = {
        numOfCakes:30,
    }

const initialIceCreamsState = {
    numOfIceCream:20
}

// Here we create multiple reducer

// First Reducer
const cakeReducer = (state = initialCakeState,action)=>{
    switch(action.type){
        
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        default:return state;
    }
}

// Second Reducer
const iceCreamReduce = (state=initialIceCreamsState,action)=>{

    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state
    }

}

// Now Combine These Reducer..

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReduce
})

// now here apply middleware
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State",store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

// output is

// so here each reducer manage its own parts of globle state
// the state parameter is different for every reducer and its corresponds 
// to the part of the state its manage


// Initial State { cake: { numOfCakes: 30 }, icecream: { numOfIceCream: 20 } }
// update state { cake: { numOfCakes: 29 }, icecream: { numOfIceCream: 20 } }        
// update state { cake: { numOfCakes: 28 }, icecream: { numOfIceCream: 20 } }        
// update state { cake: { numOfCakes: 27 }, icecream: { numOfIceCream: 20 } }        
// update state { cake: { numOfCakes: 27 }, icecream: { numOfIceCream: 19 } }        
// update state { cake: { numOfCakes: 27 }, icecream: { numOfIceCream: 18 } }        
// update state { cake: { numOfCakes: 27 }, icecream: { numOfIceCream: 17 } }  