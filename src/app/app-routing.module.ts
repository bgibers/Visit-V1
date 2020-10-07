import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './backend/services/AuthGuard.service';

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
          import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedPageModule),
          canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'tab2',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/notifications-page/notifications.module').then(m => m.NotificationsPageModule),
          canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/modals/search/search.module').then( m => m.SearchPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/modals/add/add.module').then( m => m.AddPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'map-filter',
    loadChildren: () => import('./pages/modals/map-filter/map-filter.module').then( m => m.MapFilterPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-timeline',
    loadChildren: () => import('./pages/user-timeline/user-timeline.module').then( m => m.UserTimelinePageModule),
    canActivate: [AuthGuard]
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
  },
  {
    path: 'mark-location',
    loadChildren: () => import('./pages/mark-location/mark-location/mark-location.module').then( m => m.MarkLocationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
