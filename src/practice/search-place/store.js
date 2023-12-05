// import { createStore, combineReducers } from "redux";
// import placeReducer from "./reducer/placeReducer";

// const rootReducer = combineReducers({
//   places: placeReducer,
// });
// const configureStore = () => {
//   return createStore(rootReducer);
// };
// export default configureStore;



import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});



// import { configureStore } from "@reduxjs/toolkit";
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { pokemonApi } from "./../../service/pokemon";

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// });

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
