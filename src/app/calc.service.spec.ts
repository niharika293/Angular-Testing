import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

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
  it('should multiply 2 numbers', () =>{ // Test specification
    const calc = new CalcService(); //Creating instance of the service
    const result = calc.multiply(3,5); // storing result
    expect(result).toBe(15); //expecting result by using expect utility
  });
});