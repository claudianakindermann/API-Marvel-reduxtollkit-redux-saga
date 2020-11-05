import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import Characters from './character/Characters';
import CharacterProfile from './character/CharacterProfile/CharacterProfile';

const Routes = () => (  //dúvida clau pq não abre chaves??
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Characters} />
            <Route path='/characters/:id' component={CharacterProfile} /> 
        </Switch>
    </BrowserRouter>
);

// Para receber parâmetros no react-router-dom: use : seguido do nome do parâmetro
// Exact: sem o exact o react para na primeira rota, com exact só vai parar se não tiver nada após a barra

export default Routes;
