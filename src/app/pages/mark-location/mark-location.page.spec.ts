import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarkLocationPage } from './mark-location.page';

describe('MarkLocationPage', () => {
  let component: MarkLocationPage;
  let fixture: ComponentFixture<MarkLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkLocationPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
