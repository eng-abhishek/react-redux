const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

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

const initialState = {
        numOfCakes:30,
        numOfIceCream:50
    }

const reducer = (state = initialState,action) => {
    switch(action.type){
       case BUY_CAKE:
        return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        case BUY_ICECREAM:
           return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
            }

        default:
            return state
            
    }
}

 const store = createStore(reducer)

 console.log("initial state",store.getState());

 const unsubscribe = store.subscribe(()=>{
    console.log("Updated State",store.getState());
 });

 store.dispatch(buyCake())
 store.dispatch(buyIceCream())


unsubscribe();