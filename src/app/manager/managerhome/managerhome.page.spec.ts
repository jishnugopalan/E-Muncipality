import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerhomePage } from './managerhome.page';

describe('ManagerhomePage', () => {
  let component: ManagerhomePage;
  let fixture: ComponentFixture<ManagerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
