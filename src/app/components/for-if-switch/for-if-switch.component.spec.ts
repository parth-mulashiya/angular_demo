import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForIfSwitchComponent } from './for-if-switch.component';

describe('ForIfSwitchComponent', () => {
  let component: ForIfSwitchComponent;
  let fixture: ComponentFixture<ForIfSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForIfSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForIfSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
