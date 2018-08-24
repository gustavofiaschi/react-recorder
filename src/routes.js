import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Carregando...</div>;
}

const Ativos = Loadable({
  loader: () => import('./views/Ativos'),
  loading: Loading
});

const Temas = Loadable({
  loader: () => import('./views/Temas'),
  loading: Loading
})

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/ativos', name: 'Ativos', component: Ativos },  
  { path:'/temas', name:'Temas', component: Temas}
];

export default routes;
