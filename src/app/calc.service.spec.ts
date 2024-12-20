import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

// describe('CalcService', () => {
//   let service: CalcService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalcService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('CalcService', () =>{ // 1. create a test suite
  let shared : SharedService;
  let calc : CalcService;
  beforeEach(() =>{
    console.log("Inside before each"); // will be called for every test spec & thus useful to share common code
    // So, instead of instantiating the services in each specification , we can do that here
    shared = new SharedService()
    calc = new CalcService(shared);
  });

  it('should multip;ly 2 numbers', () =>{ // Test specification
    // const shared = new SharedService();
    // const calc = new CalcService(shared); //Creating instance of the service
    const result = calc.multiply(3,5); // storing result
    expect(result).toBe(15); //expecting result by using expect utility
  });

  it('should add 2 numbers', () =>{ // Test specification
    // const shared = new SharedService();
    // const calc = new CalcService(shared); //Creating instance of the service
    const result = calc.add(3,5); // storing result
    expect(result).toBe(8); //expecting result by using expect utility
  });

  // to know specifically that the mySharedService() is being called from another service
  // create a new spec
  
  // it('should call mySharedFunction()', () => {
  //   const shared  = new SharedService();
  //   const calc = new CalcService(shared);
  //   // spyOn(shared,"mySharedFunction"); // will not call the mySharedFunction, this ()  was being called from above spec.
  //   // spyOn : to spy / detect.
  //   // To call the mySharedFunction() :
  //   spyOn(shared,"mySharedFunction").and.callThrough(); 
  //   const result = calc.multiply(3,5); // we need it to trigger the call made to mySharedFunction();
  //   expect(shared.mySharedFunction).toHaveBeenCalled();  // Now the actual implementation will be called.
  //   // toHaveBeenCalled expects spy object, without it test will break
  //   // expect(result).toBe(15);
  // });

  // Passing the shared service instance in calcservice would actually instatntiate the original service & thus 
  // call the construtcor, How can we stop making calls to the constructor? 
  // By mocking the service using "createSpyObj()" and by giving the list of function names.

  // it('should call mySharedFunction()', () => {
  //   // const shared  = new SharedService();
  //   const shared = jasmine.createSpyObj("SharedService",["mySharedFunction"]); //using mock service as a dependency
  //   const calc = new CalcService(shared); 
  //   const result = calc.multiply(3,5);
  //   expect(shared.mySharedFunction).toHaveBeenCalled();  // Now the actual implementation will be called.
  // });

  
});