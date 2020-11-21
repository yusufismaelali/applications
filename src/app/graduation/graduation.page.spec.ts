import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraduationPage } from './graduation.page';

describe('GraduationPage', () => {
  let component: GraduationPage;
  let fixture: ComponentFixture<GraduationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraduationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
