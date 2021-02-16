import React from 'react';
import { Layout, Menu, Anchor } from 'antd';
import { Link } from 'react-router-dom';

// const { Link } = Anchor;
const { Header } = Layout;

function AppHeader() {
  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <div className="logo flex">
            <i className="fas fa-bolt"></i>
            <Anchor>
              <Link to="/" title="Tech" />
            </Anchor>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="home" active>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="features">Features</Menu.Item>
            <Menu.Item key="works">How it works</Menu.Item>
            <Menu.Item key="faqs">FAQs</Menu.Item>
            <Menu.Item key="pricing">Pricing</Menu.Item>
            <Menu.Item key="contact">Contact Us</Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
}

export default AppHeader;
