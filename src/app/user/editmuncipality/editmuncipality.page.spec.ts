import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmuncipalityPage } from './editmuncipality.page';

describe('EditmuncipalityPage', () => {
  let component: EditmuncipalityPage;
  let fixture: ComponentFixture<EditmuncipalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmuncipalityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmuncipalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
