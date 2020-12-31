import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import useToken from './Components/App/useToken';

function App () {
    const {token, setToken} = useToken();

    const logOut = ()=>{
        localStorage.clear();
        window.location.reload(true);
    }

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
            <Header logOut={logOut}/> 
            <BrowserRouter>
            <Switch>
                <Route path="/"> <Home/> </Route>
                <Route path="/login"> <Login setToken={setToken}/> </Route>
            </Switch>                
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
