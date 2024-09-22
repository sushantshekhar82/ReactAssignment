import * as types from "./type"
import axios from "axios"

export const loginuser = (email,password) =>async (dispatch) => {
  dispatch({ type: types.USER_LOADING });
  try {
    let res = await axios
    .post(`http://localhost:5000/api/user/login`,{
      email,
      password
    }) 
    console.log("in login",res)
    dispatch({ type: types.USER_SUCCESS, payload:(res.data)})
    return res.data
  } catch (error) {
    dispatch({ type: types.USER_ERROR, payload: error.message })
  }
  

};