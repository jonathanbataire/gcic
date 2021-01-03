import { useState } from 'react';
import cookie from 'react-cookies';

export default function useToken() {

  const [auth, setAuth] = useState();

  const setToken = ()=> {
    setAuth(cookie.load('_xp'));
  };

  return {
    setToken: setToken,
    auth
  }
}