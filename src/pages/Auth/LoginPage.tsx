import React, { useState } from 'react';
import { ILoginProps } from '@/app/types/IProps';

function Login({ setToken }: ILoginProps) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function login(e: any) {
    console.log({ value: e.target.value });
    e.preventDefault();
    // const token = login({username, password})
  }
  setTimeout(() => {
    setToken('some-length-token');
  }, 2000);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Please Log In</h1>
      <form onSubmit={login}>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
