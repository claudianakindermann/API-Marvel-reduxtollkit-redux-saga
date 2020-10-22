import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import Characters from './character/Characters';

const Routes = () => (  //dúvida clau pq não abre chaves??
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Characters} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
