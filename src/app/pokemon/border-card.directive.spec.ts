import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';
import { Component } from '@angular/core';

@Component({
  template: '<div appBorderCard [borderColor]="someColor"></div>'
})
class TestComponent {
  someColor = 'red';
}

describe('BorderCardDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderCardDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should apply border color', () => {
    const directiveElement = fixture.nativeElement.querySelector('[appBorderCard]');
    const borderColor = getComputedStyle(directiveElement).borderColor;
    expect(borderColor).toBe('red'); 
  });
});
