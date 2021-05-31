import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NewsFeedPage } from './news-feed.page';

describe('NewsFeedPage', () => {
  let component: NewsFeedPage;
  let fixture: ComponentFixture<NewsFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsFeedPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
