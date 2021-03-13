import React from 'react'
import './Logout.css'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
  
    const logout = (e) => {
      dispatch(logout());
    };
    return (
        <div className='logout'>
            <h1>Welcome<span  className='user__name'>{user.name}</span></h1>
            <button onClick={(e) => logout(e)} className='logout__button'>Logout</button>
        </div>
    )
}

export default Logout
