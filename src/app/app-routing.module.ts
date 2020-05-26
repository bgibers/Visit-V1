import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab1',
    pathMatch: 'full'
  },
  {
    path: 'tab1',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
      }
    ]
  },
  {
    path: 'tab2',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/notifications-page/notifications.module').then(m => m.NotificationsPageModule)
      }
    ]
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/modals/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/modals/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'map-filter',
    loadChildren: () => import('./pages/modals/map-filter/map-filter.module').then( m => m.MapFilterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
