import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = async (dispatch) => {
 try{
   const userPost = await axios.get("https://jsonplaceholder.typicode.com/posts")
   dispatch(fetchPostSuccess(userPost.data));

 }
 catch(error){
   console.log(error)
   dispatch(fetchPostFailure(error));
 }
}
/* promises
pending
success
rejected
*/

const userPostSlice = createSlice({
  name: "userPost",
  initialState:{
    post:[],
    status:"pending",
    error:false
  },
  reducer:{
   fetchPostStart:(state) =>{
    state.status("pending")
   },
   fetchPostSuccess:(state,action) =>{
    state.status("success")
    state.posts = action.payload
    state.error
   },
   fetchPostFailure:(state) =>{
    state.status("rejected")
    state.posts = "rejected"
    state.error = true
   }
  }
})
export const {fetchPostStart, fetchPostSuccess, fetchPostFailure} = userPostSlice.actions;
export default userPostSlice.reducer;