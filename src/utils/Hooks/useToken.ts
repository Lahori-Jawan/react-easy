import { useState } from 'react';

export const TOKEN = 'token';

type token = 'string' | undefined;
export default function useToken() {
  // https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
  const getToken = (): token => {
    const tokenString = localStorage.getItem(TOKEN);
    const userToken = JSON.parse(tokenString || '{}');
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: token) => {
    if (!userToken) return;
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
