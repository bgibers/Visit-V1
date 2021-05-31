import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTimelinePage } from './user-timeline.page';

describe('UserTimelinePage', () => {
  let component: UserTimelinePage;
  let fixture: ComponentFixture<UserTimelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTimelinePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
