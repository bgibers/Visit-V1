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
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './backend/models/httpConfigInterceptor';
import { AuthGuard } from './backend/services/AuthGuard.service';
import { AccountsService } from './backend/clients';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, SearchPageModule, AddPageModule,
     HttpClientModule, UserTimelinePageModule, MapFilterPageModule
  ],
  providers: [
    AuthGuard,
    StatusBar,
    SplashScreen,
    AccountsService,
    Camera,
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
