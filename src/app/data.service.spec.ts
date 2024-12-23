import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { DataService } from './data.service';
import {users} from './mock-data/users';


// without mentioning the httpClient, this file may break as the service has dependency on  httpClient
// instead of providing HttpClient as a dependency, we use HttpClientTestingModule so that real HTTP requests are not hit.

// Use imports for registering Angular modules like HttpClientTestingModule.
// Use providers for custom services, mocks, or overrides.
// By adding HttpClientTestingModule to imports, you ensure proper initialization of its testing capabilities and replacement of the actual HTTP client for your tests.

// To populate the testdata, we need to use HttpTestController

describe('DataService', () => {
  let service: DataService;
  let testingController : HttpTestingController; // utility to mock and verify HTTP requests made by the HttpClient in your Angular application during unit tests.

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController); 
  });

  afterEach(() =>{
    // Ensure that no unexpected HTTP calls are pending.
    testingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', ()=>{
    service.getAllUsers().subscribe((users : any) =>{
      expect(users).toBeTruthy(); // Use when you just need to check that the value exists (not null) and isn't falsy.
      expect(users).toEqual(users); // Deep equality (value and structure match)
      expect(users.length).toBe(10);
      const someUSer = users.find((user : any) => user?.id == 8);
      expect(someUSer.name).toBe("Nicholas Runolfsdottir V");
    });
    // Invoke a mock request using expectOne()
    // Expect an HTTP GET request to the correct URL.
    const mockReq = testingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(mockReq.request.method).toEqual('GET');

    // Respond with mock data.
    // Simulates a server response to the captured HTTP request.
    mockReq.flush(users);

  });
});

