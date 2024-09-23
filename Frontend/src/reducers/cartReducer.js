// const initialState = {
//     cartItems: [],
//     cartCounter: 0,
//     totalPrice:0,
//     extraCost:50,
//     taxes:0,
//     grandTotal:0
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
//         console.log('++++++++++++:',action.payload);
        
//         if (existingItemIndex !== -1) {
//           const updatedCartItems = state.cartItems.map((item, index) => {
//             if (index === existingItemIndex) {
//               return { ...item, quantity:item.quantity + 1,total_item_price:(item.quantity + 1) * item.price };
//             }
//             return item;
//           });
//           return {
//             ...state,
//             cartItems: updatedCartItems,
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.price,
//             taxes:(state.totalPrice + action.payload.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.price
//           };
//         } else {
//           return {
//             ...state,
//             cartItems: [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price }],
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.price,
//             taxes:(state.totalPrice + action.payload.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.price
//           };
//         }
//       case 'REMOVE_FROM_CART':
//         const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
//         const removedItem = state.cartItems.find(item => item.id === action.payload.id);
//         return {
//           ...state,
//           cartItems: updatedCartItems,
//           cartCounter: state.cartCounter - removedItem.quantity,
//           totalPrice: state.totalPrice - (removedItem.price * removedItem.quantity),
//           taxes:(state.totalPrice + action.payload.price) * 0.18,
//           grandTotal: state.totalPrice + state.taxes + action.payload.price
//         };
//       default:
//         return state;
//     }
//   };
  
  
//   export default cartReducer;



const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice:0,
  extraCost:50,
  taxes:0,
  grandTotal:0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':


      // console.log(localStorage.getItem('cartarray'));
      if(localStorage.getItem('test') == null){
        console.log("In IF of LocalStorage code");
        // let product = action.payload.product;
        // let cartarray = [...cartarray, product];
        // localStorage.setItem('cartarray', cartarray);
        // let test = [{name: "manoj", age:22}];
        let test = [action.payload.product];
        localStorage.setItem('test',JSON.stringify(test));
        console.log(localStorage.getItem('test'));
        console.log(typeof(localStorage.getItem('test')));
        console.log(JSON.parse(localStorage.getItem('test')));
        console.log(typeof(JSON.parse(localStorage.getItem('test'))));
      }

      else{
        console.log("In ELSE of LocalStorage code");
        let newProduct = action.payload.product;
        let cartarray = JSON.parse(localStorage.getItem('test'));
        // cartarray.push(newProduct);
        cartarray = [...cartarray, newProduct];
        localStorage.setItem('test', JSON.stringify(cartarray));
        console.log(JSON.parse(localStorage.getItem('test')));
      }

    // localStorage.setItem('cartarray',JSON.stringify(action.payload))

      // const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      // console.log(action.payload);
      // console.log(action.payload.product.price);
      // console.log('-------------:',existingItemIndex);
      // console.log('In Reducer---+++++++++++++');
      
      // if (existingItemIndex!==-1) {
      //   console.log('In Reducer---IFIFIFIF+++++++++++++');
      //   const updatedCartItems = state.cartItems.map((item, index) => {
      //     if (index === existingItemIndex) {
      //       return { ...item, quantity: item.quantity + 1,total_item_price: (item.quantity + 1) * item.price };
      //     }

      //     return item;
      //   });

      //   console.log(state);
        
      //   return {
      //     ...state,
      //     cartItems: updatedCartItems,
      //     cartCounter: state.cartCounter + 1,
      //     totalPrice: state.totalPrice + action.payload.product.price,
      //     taxes:(state.totalPrice + action.payload.product.price) * 0.18,
      //     grandTotal: state.totalPrice + state.taxes + action.payload.product.price
      //   };
      // } else {
      //   console.log('In Reducer---ELSELSEELSE+++++++++++++');
      //   console.log(state);
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems, { ...action.payload.product, quantity: 1, price: action.payload.product.price }],
      //     cartCounter: state.cartCounter + 1,
      //     totalPrice: state.totalPrice + action.payload.product.price,
      //     taxes:(state.totalPrice + action.payload.product.price) * 0.18,
      //     grandTotal: state.totalPrice + state.taxes + action.payload.product.price
      //   };
      return state;
      // }
      
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const removedItem = state.cartItems.find(item => item.id === action.payload.id);
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter - removedItem.quantity,
        totalPrice: state.totalPrice - (removedItem.price * removedItem.quantity),
        taxes:(state.totalPrice + action.payload.price) * 0.18,
        grandTotal: state.totalPrice + state.taxes + action.payload.price
      };
    default:
      return state;
  }
};


export default cartReducer;