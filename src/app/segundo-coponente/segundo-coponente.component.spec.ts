import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCoponenteComponent } from './segundo-coponente.component';

describe('SegundoCoponenteComponent', () => {
  let component: SegundoCoponenteComponent;
  let fixture: ComponentFixture<SegundoCoponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoCoponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoCoponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
