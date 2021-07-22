import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SearchPageModule } from './pages/modals/search/search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageModule } from './pages/modals/add/add.module';
import { MapFilterPageModule } from './pages/modals/map-filter/map-filter.module';
import { ForgotPasswordPageModule} from './pages/modals/forgot-password/forgot-password.module';
import { UserTimelinePageModule } from './pages/user-timeline/user-timeline.module';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './backend/models/httpConfigInterceptor';
import { AuthGuard } from './backend/services/AuthGuard.service';
import { AccountsService, UserService, PostService } from './backend/clients';
import { MarkLocationPageModule } from './pages/mark-location/mark-location.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { LocationSelector } from './objects/location-json/location.selector';
import { AddPostPageModule } from './pages/add-post/add-post.module';
import { AddPostImagePageModule } from './pages/add-post-image/add-post-image.module';
import { UserSettingsPageModule } from './pages/user-settings/user-settings.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SignInWithApple } from '@ionic-native/sign-in-with-apple/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxIonicImageViewerModule,
    IonicStorageModule.forRoot(),
    Ng2SearchPipeModule,
    AppRoutingModule,
    SearchPageModule,
    AddPageModule,
    HttpClientModule,
    UserTimelinePageModule,
    MapFilterPageModule,
    MarkLocationPageModule,
    AddPostPageModule,
    UserSettingsPageModule,
    AddPostImagePageModule,
    ForgotPasswordPageModule,
    IonicSelectableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    AuthGuard,
    AccountsService,
    UserService,
    PostService,
    LocationSelector,
    SignInWithApple,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
