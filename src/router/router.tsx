import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Counter from '../component/Counter';
import Todo from '../component/Todo';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Counter} />
                <Route exact={true} path="/todo" component={Todo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
