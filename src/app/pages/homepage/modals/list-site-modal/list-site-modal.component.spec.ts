import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiteModalComponent } from './list-site-modal.component';

describe('ListSiteModalComponent', () => {
  let component: ListSiteModalComponent;
  let fixture: ComponentFixture<ListSiteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSiteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
