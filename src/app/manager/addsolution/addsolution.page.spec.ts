import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsolutionPage } from './addsolution.page';

describe('AddsolutionPage', () => {
  let component: AddsolutionPage;
  let fixture: ComponentFixture<AddsolutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsolutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
