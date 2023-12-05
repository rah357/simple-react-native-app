import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//         console.log(state)
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// // console.log(counterSlice.actions.increment)
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
async function fetchTodosFunction() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return res?.json();
}

export const fetchTodos = createAsyncThunk("fetchTodos", fetchTodosFunction);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
