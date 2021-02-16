// examples -> https://codesandbox.io/examples/package/react-router-dom
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from '@/pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
