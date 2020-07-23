import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountsService } from './api/accounts.service';
import { BlobStorageService } from './api/blobStorage.service';
import { PostService } from './api/post.service';
import { PostTestDataService } from './api/postTestData.service';
import { TagService } from './api/tag.service';
import { UserService } from './api/user.service';
import { UserLocationService } from './api/userLocation.service';
import { UserMessageService } from './api/userMessage.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountsService,
    BlobStorageService,
    PostService,
    PostTestDataService,
    TagService,
    UserService,
    UserLocationService,
    UserMessageService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
