import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from "../component/Main/main";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
