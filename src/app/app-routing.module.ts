import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros.module').then( m => m.LivrosPageModule)
  },
  {
    path: 'revistas',
    loadChildren: () => import('./revistas/revistas.module').then( m => m.RevistasPageModule)
  },
  {
    path: 'jornais',
    loadChildren: () => import('./jornais/jornais.module').then( m => m.JornaisPageModule)
  },
  {
    path: 'notebooks',
    loadChildren: () => import('./notebooks/notebooks.module').then( m => m.NotebooksPageModule)
  },
  {
    path: 'musicas',
    loadChildren: () => import('./musicas/musicas.module').then( m => m.MusicasPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
