import * as types from "./type"
import axios from "axios"

export const postuser = (first_name,last_name,email,password) =>async (dispatch) => {
  dispatch({ type: types.USER_LOADING });
  try {
    console.log("here in action",first_name,last_name,email,password)
    let res = await axios
    .post(`http://localhost:5000/api/user/register`,{
      first_name,
      last_name,
      email,
      password
      
    }) 
    console.log("new response",res)
    dispatch({ type: types.USER_SUCCESS, payload:(res.data.message)})
    
    return res.data.message
  } catch (error) {
    dispatch({ type: types.USER_ERROR, payload: error.message })
  }
  

};