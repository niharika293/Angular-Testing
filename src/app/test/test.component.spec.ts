import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render test works!', () =>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('test works!');
  });

  it('should not display the paragraph with id "subscribed" initially', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subscribedElement = compiled.querySelector('#subscribed');
    expect(subscribedElement).toBeNull(); // The element should not exist in the DOM
  });

  it('should display the paragraph with id "subscribed" when subscribed is true' , () =>{
    component.subscribed = true; // Change the state
    fixture.detectChanges(); // Detetct changes

    const compiled = fixture.nativeElement as HTMLElement;
    const subscribedElement = compiled.querySelector('#subscribed');
    
    expect(subscribedElement).toBeTruthy(); // The element should exist
    expect(subscribedElement?.textContent).toContain('Subscribed!'); // Check the text content
  });

  it('should update subscribed and button text on click', () => {
    const button = fixture.nativeElement.querySelector('#subscribeBtn') as HTMLButtonElement;

    button.click(); // Simulate the button click
    fixture.detectChanges(); 

    expect(component.subscribed).toBe(true);
    expect(button?.textContent).toBe('Unsubscribe');
  });
});
