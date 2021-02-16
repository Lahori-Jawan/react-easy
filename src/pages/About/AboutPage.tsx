import { useEasyState } from '@/store';
import React from 'react';

function AboutPage() {
  const users = useEasyState((state) => state.users);
  return (
    <div>
      <h3>About Us</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
