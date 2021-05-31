import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostRegisterLocationsPage } from './post-register-locations.page';

describe('PostRegisterLocationsPage', () => {
  let component: PostRegisterLocationsPage;
  let fixture: ComponentFixture<PostRegisterLocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostRegisterLocationsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostRegisterLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
