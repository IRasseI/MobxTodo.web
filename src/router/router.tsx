import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Counter from '../component/Counter';
import Todo from '../component/Todo';
import Main from '../component/Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route excat={true} path="/" component={Main} />
                <Route exact={true} path="/counter" component={Counter} />
                <Route exact={true} path="/todo" component={Todo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
