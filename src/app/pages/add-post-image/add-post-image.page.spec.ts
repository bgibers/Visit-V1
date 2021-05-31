import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPostImagePage } from './add-post-image.page';

describe('AddPostImagePage', () => {
  let component: AddPostImagePage;
  let fixture: ComponentFixture<AddPostImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostImagePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPostImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
