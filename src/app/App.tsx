import React, { useState } from 'react';
import { Layout, Space } from 'antd';
import '@/assets/css/main.css';
// import 'antd/dist/antd.css';

import AppHeader from '@/components/common/Header';
import Routes from '@/app/router';
import LoginPage from '@/pages/Auth/LoginPage';
import { useEasyState, useStoreActions } from '@/store';

// const LoginPage = React.lazy(() => import('@/pages/Auth/LoginPage'));

const { Content } = Layout;

function App() {
  const [token, setToken] = useState();
  const users = useEasyState((state) => state.users);

  const getUsers = useStoreActions((actions) => actions.getUsers);

  React.useEffect(() => {
    getUsers();
    return () => {
      // cleanup
    };
  }, []);

  return !users.length ? (
    <LoginPage setToken={setToken} />
  ) : (
    <Layout className="mainLayout">
      <Space direction="vertical" size={60}>
        <AppHeader />
        <Content>
          <Routes />
        </Content>
      </Space>
    </Layout>
  );
}

export default App;
