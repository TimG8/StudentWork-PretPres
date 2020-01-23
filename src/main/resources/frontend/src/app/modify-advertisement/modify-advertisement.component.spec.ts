import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAdvertisementComponent } from './modify-advertisement.component';

describe('ModifyAdvertisementComponent', () => {
  let component: ModifyAdvertisementComponent;
  let fixture: ComponentFixture<ModifyAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
