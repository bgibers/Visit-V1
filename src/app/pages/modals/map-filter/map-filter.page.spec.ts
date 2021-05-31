import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { MapFilterPage } from "./map-filter.page";

describe("MapFilterPage", () => {
  let component: MapFilterPage;
  let fixture: ComponentFixture<MapFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapFilterPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MapFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
