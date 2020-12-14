import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IPage } from './i.page';

describe('IPage', () => {
  let component: IPage;
  let fixture: ComponentFixture<IPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
