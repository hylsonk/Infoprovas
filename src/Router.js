import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Importar aqui outras telas
import Main from './components/Main'


// Adicionar rotas para as telas
const Routes = () => (
  <Router sceneStyle={{paddingTop:50}}>
    {/* initil faz iniciar com a Main */}
    <Scene key='main' component={Main} initil title='Main' />
  </Router>
);

export default Routes;
