import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbidennComponent } from './forbidenn.component';

describe('ForbidennComponent', () => {
  let component: ForbidennComponent;
  let fixture: ComponentFixture<ForbidennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbidennComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbidennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
