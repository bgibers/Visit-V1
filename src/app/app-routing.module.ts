import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
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
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'user-timeline',
    loadChildren: () => import('./pages/user-timeline/user-timeline.module').then( m => m.UserTimelinePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'post-register-about',
    loadChildren: () => import('./pages/post-register-about/post-register-about.module')
      .then( m => m.PostRegisterAboutPageModule)
  },
  {
    path: 'post-register-locations',
    loadChildren: () => import('./pages/post-register-locations/post-register-locations/post-register-locations.module')
      .then( m => m.PostRegisterLocationsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
