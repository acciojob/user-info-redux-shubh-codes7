import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import './../styles/App.css';
import {updateName, updateEmail} from '../redux/userSlice.js'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <div>
        <h1>User Information</h1>
        <div>
        <label>Name: </label>
        <input type="text" name="Name" onChange={(e)=>dispatch(updateName(e.target.value))}/>
        </div>

        <div>
        <label>Email: </label>
        <input type="email" name="Email" onChange={(e)=>dispatch(updateEmail(e.target.value))}/>
        </div>

        <p>Current values in store</p>
        <div className="output">Name - {user.Name}</div>
        <div className="output">Email - {user.Email}</div>
    </div>
  )
}

export default App
