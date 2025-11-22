# Redux with React

# How To Install Redux

npm install redux

now you get its version -- "redux": "^5.0.1",

# पूरे Redux के Concept को Cake Shop में Short Summary

Redux Concept	Cake Shop Example
Store	गोदाम जिसमें cakes का data रखा है
Action	ग्राहक की डिमांड — "केक दो!"
Reducer	दुकानदार जो action देखकर stock कम करता है
Dispatch	action को भेजना
Subscribe	जब भी cakes कम हों, नोट करना

# ✔ Final Example (Easy Hindi)

Redux = एक बड़ा गोदाम
Actions = customer की demand
Reducer = दुकानदार
Store = जहां पूरा डेटा रखा है
Dispatch = demand को दुकानदार तक पहुँचाना
Subscribe = बदलावों को सुनना

# Expalin In Details

⭐ Redux क्या है?

Redux एक state management library है जिसे आप React, Angular, Vue, या किसी भी JavaScript ऐप में इस्तेमाल कर सकते हो।
इसका मुख्य मकसद है — आपकी ऐप में मौजूद data (state) को एक ही जगह पर रखना और सब जगह से उसे आसानी से manage करना।

⭐ Redux के 3 Main Concepts

Store

Action

Reducer

इन तीनों को हम Cake Shop example से समझेंगे।

🍰 Cake Shop Example

कल्पना करो आपके पास एक Cake Shop है जहाँ आप cakes बेचते हो।

मान लो आपके दुकान में 10 cakes हैं।

1️⃣ Store (गोडाउन / गोदाम)

Redux का store ऐसा है जैसे आपके cake shop का गोदाम
जहाँ आपके सभी cakes का data रखा होता है।

Example:
const store = {
  numberOfCakes: 10
}


यह आपके स्टोर की current state है।

2️⃣ Action (ग्राहक की रिक्वेस्ट)

Action वह object होता है जो बताता है कि दुकान में कौन-सी activity होनी चाहिए।

जैसे कोई ग्राहक आए और बोले:

"एक केक दे दो!"

इस रिक्वेस्ट को Redux में Action कहते हैं।

Example Action:
{
  type: "BUY_CAKE"
}

>>>>>>> Other Consepts <<<<<<<<<<<<

const BUY_CAKE="BUY_CAKE"

function makeCake(){
    
     return{
          type:BUY_CAKE,
          info:'first redux action'       
          }      
 }

const initialState={
  numOfCakes:30
}

const reducer=(state=initialState,action)=>{
     switch(action.type){
       case BUY_CAKE:return{
           ...state,
           numOfCakes:state.numOfCakes-1
           }
      }
      default:return state
}


बस इतना ही — action सिर्फ बताएगा क्या करना है, कैसे करना है यह नहीं।

3️⃣ Reducer (दुकानदार)

Reducer वह function है जो बताता है:

Action मिलने पर Store की state कैसे बदलेगी?

अगर action था "BUY_CAKE"
तो दुकानदार (reducer) क्या करेगा?

👉 गोदाम में जाकर केक की quantity 1 कम कर देगा।

Reducer Example:
function cakeReducer(state = { numberOfCakes: 10 }, action) {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default:
      return state;
  }
}

⭐ पूरा Flow (Cake Shop Flow)
1. Store बनाया → गोदाम तैयार
2. Customer आता है → Action भेजता है
3. Reducer Action देखता है → Store अपडेट करता है
4. सभी जगह नया state दिख जाता है
🧠 Redux के अन्य Concepts (Cake Shop में)
🔹 Dispatch

Dispatch मतलब action को भेजना।

जैसे ग्राहक बोलता है: "एक cake देना"

store.dispatch({ type: "BUY_CAKE" });

🔹 Subscribe

अगर आप हर बार state change होने पर ये जानना चाहते हो:

जैसे दुकानदार register में लिखता है:

“आज एक cake बिक गया!”

store.subscribe(() => {
  console.log(store.getState());
});

⭐ पूरे Redux के Concept को Cake Shop में Short Summary
Redux Concept	Cake Shop Example
Store	गोदाम जिसमें cakes का data रखा है
Action	ग्राहक की डिमांड — "केक दो!"
Reducer	दुकानदार जो action देखकर stock कम करता है
Dispatch	action को भेजना
Subscribe	जब भी cakes कम हों, नोट करना


# React Redux with Cake and Ice Cream Shop Example

## नीचे मैं React Redux को एक बहुत आसान Cake & Ice-Cream Shop Example के साथ पूरा हिंदी में समझा रहा हूँ — बिल्कुल शुरुआत से लेकर पूरा फ्लो तक।

🧁 React Redux – Cake & Ice-Cream Example (Hindi Explanation)

मान लीजिए हमारे पास एक cake & ice-cream shop है।
इस दुकान में दो आइटम हैं: केक और आइसक्रीम।

अब Redux का काम क्या है?

Redux एक state management tool है — मतलब आपकी सारी ऐप का data एक जगह मैनेज रखता है।

Redux में 5 main concepts होते हैं:

✅ 1. State (डाटा)

State आपके shop की current स्थिति होती है।

जैसे:

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}


मतलब:

दुकान में 10 केक हैं

20 आइसक्रीम हैं

✅ 2. Actions (क्या करना है?)

Action बताता है कि क्या करना है, जैसे —

केक खरीदना

आइसक्रीम खरीदना

Action सिर्फ type बताता है:

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


और action creator:

function buyCake() {
  return { type: BUY_CAKE }
}

function buyIceCream() {
  return { type: BUY_ICECREAM }
}

✅ 3. Reducer (Action का हिसाब-किताब)

Reducer वह जगह है जहाँ action के हिसाब से state update होती है।

जैसे — अगर केक खरीदा तो numOfCakes को 1 कम करो।

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return { 
        ...state,
        numOfCakes: state.numOfCakes - 1
      }

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }

    default:
      return state
  }
}

✅ 4. Store (पूरी दुकान की Book-Keeping जगह)

Redux Store पूरे app की state को रखता है।

const store = createStore(reducer)


Store यह काम करता है:

पूरे state को hold करना

action dispatch करना

reducer को call करना

updated state देना

✅ 5. Dispatch (Action भेजना)

Dispatch वह तरीका है जिससे action reducer तक पहुँचता है।

store.dispatch(buyCake())
store.dispatch(buyIceCream())


मतलब:

एक केक खरीदो

एक आइसक्रीम खरीदो

🎯 पूरा Flow एक लाइन में:

1️⃣ UI → user "Buy Cake" क्लिक करता है
2️⃣ Action dispatch होता है → { type: BUY_CAKE }
3️⃣ Reducer action के अनुसार state update करता है
4️⃣ Store नया state रखता है
5️⃣ UI नया result दिखाता है

🔥 React में Redux कैसे जोड़ेंगे?

React में react-redux लाइब्रेरी से Provider और useSelector/useDispatch का इस्तेमाल करते हैं।

Provider Setup
import { Provider } from 'react-redux'
import store from './store'

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

💡 Component – Cake Buying Button
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "./cakeActions"

function CakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()

  return (
    <>
      <h2>केक बचे: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  )
}

🍦 Ice-Cream Component
function IceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <>
      <h2>आइसक्रीम बचे: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </>
  )
}

⭐ Summary (एकदम आसान भाषा में)

Redux = दुकान का हिसाब-किताब

Concept	Example
State	दुकान में कितने केक और आइसक्रीम हैं
Action	Buy Cake / Buy Ice-Cream
Reducer	केक 1 कम करो, आइसक्रीम 1 कम करो
Store	पूरी दुकान की बहीखाता
Dispatch	Action भेजना

अगर आप चाहें तो मैं पूरा working React + Redux कोड भी दे सकता हूँ या इसे Redux Toolkit में भी समझा सकता हूँ (जो आजकल standard है)।