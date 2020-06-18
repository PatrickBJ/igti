import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TestCrud from '../components/TestCrud';
import DesafioCor from '../components/DesafioCor';
import HomePage from '../components/Home';
import PaginaNaoEncontrada from '../components/PaginaNaoEncontrada';
import DesafioModulo1 from '../components/DesafioModulo1';
import TrabalhoModulo3 from '../components/TrabalhoModulo3';
import {AssignmentInd, Home, InvertColors, MoneyOff} from '@material-ui/icons';

const listaPaginas = [
    {
      rota: '/',
      nome: 'Home',
      icone: <Home/>,
      component: HomePage,
    },
    {
      rota: 'TestCrud',
      nome: 'TestCrud',
      icone: <AssignmentInd/>,
      component: TestCrud
    },
    // {
    //   rota: 'TestCrud 2',
    //   nome: 'TestCrud 2',
    //   icone: <Home/>,
    // },
    {
      rota: 'DesafioCor',
      nome: 'Desafio Cor',
      icone: <InvertColors/>,
      component: DesafioCor,
    },
    {
      rota: 'DesafioModulo1',
      nome: 'Desafio Modulo1',
      icone: <AssignmentInd/>,
      component: DesafioModulo1
    },
    {
        rota: 'TrabalhoModulo3',
        nome: 'Trabalho Modulo3',
        icone: <MoneyOff/>,
        component: TrabalhoModulo3
    }
  ];

const ComponetRoute = () =>
{  
    return(
    <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/testCrud" exact={true} component={TestCrud} />
        <Route path="/desafioCor" exact={true} component={DesafioCor} />
        <Route path="/desafioModulo1" exact={true} component={DesafioModulo1} />
        <Route path="/TrabalhoModulo3" exact={true} component={TrabalhoModulo3} />
        <Route path='*' component={PaginaNaoEncontrada} />
    </Switch>
    );
}

  export default ComponetRoute;
  export {listaPaginas};