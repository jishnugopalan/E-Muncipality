import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifictaionPage } from './notifictaion.page';

describe('NotifictaionPage', () => {
  let component: NotifictaionPage;
  let fixture: ComponentFixture<NotifictaionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifictaionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifictaionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
