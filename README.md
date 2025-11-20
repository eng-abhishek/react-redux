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