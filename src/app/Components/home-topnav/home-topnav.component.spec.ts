import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopnavComponent } from './home-topnav.component';

describe('HomeTopnavComponent', () => {
  let component: HomeTopnavComponent;
  let fixture: ComponentFixture<HomeTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
