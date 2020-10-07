import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SearchPageModule} from './pages/modals/search/search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageModule } from './pages/modals/add/add.module';
import { MapFilterPageModule } from './pages/modals/map-filter/map-filter.module';
import { UserTimelinePageModule } from './pages/user-timeline/user-timeline.module';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './backend/models/httpConfigInterceptor';
import { AuthGuard } from './backend/services/AuthGuard.service';
import { AccountsService, UserService } from './backend/clients';
import { MarkLocationPageModule } from './pages/mark-location/mark-location/mark-location.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, SearchPageModule, AddPageModule,
     HttpClientModule, UserTimelinePageModule, MapFilterPageModule, MarkLocationPageModule
  ],
  providers: [
    AuthGuard,
    StatusBar,
    SplashScreen,
    AccountsService,
    UserService,
    Camera,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
