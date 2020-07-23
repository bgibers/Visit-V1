export * from './accounts.service';
import { AccountsService } from './accounts.service';
export * from './blobStorage.service';
import { BlobStorageService } from './blobStorage.service';
export * from './post.service';
import { PostService } from './post.service';
export * from './postTestData.service';
import { PostTestDataService } from './postTestData.service';
export * from './tag.service';
import { TagService } from './tag.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './userLocation.service';
import { UserLocationService } from './userLocation.service';
export * from './userMessage.service';
import { UserMessageService } from './userMessage.service';
export const APIS = [AccountsService, BlobStorageService, PostService, PostTestDataService, TagService, UserService, UserLocationService, UserMessageService];
