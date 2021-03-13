import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";

function App() {

  const user= useSelector(selectUser)
  return (
    <div >
     {user? <Logout/>:<Login />}
    </div>
  );
}

export default App;
