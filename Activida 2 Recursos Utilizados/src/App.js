import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import { gapi } from "gapi-script"
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';




function App() {

  const clientID = "241417756099-4vnt38utid60t4flsh1i3giglr44j6cm.apps.googleusercontent.com";
  const [user , setUser] = useState({});


  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response) => {
    setUser(response.profileObj);
  }

  const onFailure = () => {
    console.log("Something went wrong")
  }

  return (
  <div className="App">
    <header class="bg-success text-dark text-center py-3">
        <h2>Registro e inicio de sesion</h2>
    </header>
    <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <RegisterForm />
          </div>
          <div className="col-md-6">
            <LoginForm />
          </div>
        </div>
        <br></br>
        <div className='btn'>
          <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
          />
        </div>
        <div className={user? "profile":"hidden"}>
          <img src={user.imageUrl} alt=""/>
          <h3>{user.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
