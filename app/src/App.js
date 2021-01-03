import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import cookie from 'react-cookies';

function App () {
    const [auth, setAuth] = useState(false);

    //alert(cookie.load('_xp'));

    useEffect(() => { 
        if(cookie.load('_xp')){
            setAuth(true);
        }
    },[]);

    const logOut = ()=>{
        cookie.remove('_xp');
        setAuth(false);
    }

    if(!auth) {
        return <div><Login /> <Footer /></div>
    }

    return (
        <div className="App">
            <Header logOut={logOut}/>
            <BrowserRouter>
            <Switch>
                <Route path="/"> <Home logOut={logOut}/> </Route>
                <Route path="/login"> <Login/> </Route>
            </Switch>                
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
