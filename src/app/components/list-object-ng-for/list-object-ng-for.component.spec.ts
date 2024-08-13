import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObjectNgForComponent } from './list-object-ng-for.component';

describe('ListObjectNgForComponent', () => {
  let component: ListObjectNgForComponent;
  let fixture: ComponentFixture<ListObjectNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListObjectNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListObjectNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
