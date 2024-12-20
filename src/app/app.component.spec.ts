import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

describe('AppComponent', () => { // test - suite : has 3 test specs here
  let shared : SharedService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [
        SharedService
      ]
    }).compileComponents();
    shared = TestBed.inject(SharedService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  });

  it("should spy on getData", () =>{
    spyOn(shared, 'getData').and.returnValue('Mock data from spy on');
    //The returnValue method in Jasmine is used to specify the value a
    //  spy should return when the spied-on method is called.
    const result = shared.getData();
    expect(shared.getData).toHaveBeenCalled(); //to check if the method was called
    expect(result).toBe("Mock data from spy on");
  });

  it('should call the dependency method using createSpyObj', () =>{
    // jasmine.createSpyObj(shared,["getData"]).and.returnValue('mock data'); // gives error as i tried to modify the actual object
    // const result = shared.getData();
    // expect(shared.getData).toHaveBeenCalled();
    // expect(result).toBe('mock data');
    // above - erroreneous as original implementations : altered
    // correction -
    // Create a spy object for the SharedService & mock the getData method
    // const mockShared = jasmine.createSpyObj(shared,["getData"]).and.returnValue('mock data'); // still error
    // incorrect usage of jasmine.createSpyObj. The first argument of jasmine.createSpyObj should be the name of the mock object as a string 
    // (used for debugging purposes), not an actual object like shared.
    // use the mock object instead of actual service.
    //Additionally, and.returnValue needs to be chained to the specific method spy, 
    // not the object returned by jasmine.createSpyObj.
    // correction - 
    // 1. Create a spy object for the SharedService
    const mockShared = jasmine.createSpyObj("SharedService",["getData"])
    // 2. mock the getData method
    mockShared.getData.and.returnValue('mock data');
    // 3. Use the mock object
    const result = mockShared.getData();
    // Expectations
    expect(mockShared.getData).toHaveBeenCalled();
    expect(result).toBe('mock data');
  });
});
