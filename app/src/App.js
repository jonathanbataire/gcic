import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import useToken from './Components/App/useToken';

function App () {
    const {auth, setToken} = useToken();

    const logOut = ()=>{
        localStorage.clear();
        window.location.reload(true);
    }

    if(!auth) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
            <Header logOut={logOut}/> 
            <BrowserRouter>
            <Switch>
                <Route path="/"> <Home/> </Route>
            </Switch>                
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
