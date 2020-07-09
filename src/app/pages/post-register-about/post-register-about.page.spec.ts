import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostRegisterAboutPage } from './post-register-about.page';

describe('PostRegisterAboutPage', () => {
  let component: PostRegisterAboutPage;
  let fixture: ComponentFixture<PostRegisterAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegisterAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostRegisterAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
