import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserTestComponent } from './app-user-test.component';

describe('AppUserTestComponent', () => {
  let component: AppUserTestComponent;
  let fixture: ComponentFixture<AppUserTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
