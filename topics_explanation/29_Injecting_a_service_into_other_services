# Injecting a Service into other services

1. Understanding Angular Services

Services in Angular are singleton objects that get instantiated only once during the lifetime of an application. They contain methods that maintain data throughout the life of an application, thus providing a means to share data and functionality across components, directives, and other services.

2. Creating a Service

Let's start by creating a simple service:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log(`LoggerService: ${message}`);
  }
}
```

This `LoggerService` has a simple `log` method that we'll use in other services.

3. Injecting a Service into Another Service

Now, let's create another service that will use our `LoggerService`:

```typescript
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  constructor(private logger: LoggerService) {
    this.logger.log('DataService initialized');
  }

  addData(item: string) {
    this.data.push(item);
    this.logger.log(`Added item: ${item}`);
  }

  getData(): string[] {
    this.logger.log('Data retrieved');
    return this.data;
  }
}
```

Here's what's happening:

- We import the `LoggerService`.
- In the constructor, we inject the `LoggerService` by declaring it as a parameter.
- Angular's dependency injection system will create an instance of `LoggerService` (if it doesn't already exist) and pass it to our `DataService`.
- We can then use the `logger` throughout our `DataService`.

4. How Dependency Injection Works

When you inject a service, Angular's injector looks for the provider of that service. The provider tells Angular how to create the service. In our examples, we've used `providedIn: 'root'`, which makes the service available application-wide.

5. Injection Tokens

For more complex scenarios, you might use injection tokens. These are especially useful when you want to inject values or when you have multiple services implementing the same interface.

```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('api_url');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(@Inject(API_URL) private apiUrl: string) {}
}
```

6. Hierarchical Injection

Services can be provided at different levels: root, module, or component. This creates a hierarchy of injectors. If a service is not found at one level, Angular looks up the injector tree.

7. Using a Service in a Component

While not directly related to service-to-service injection, it's worth noting that you inject services into components the same way:

```typescript
@Component({
  selector: 'app-my-component',
  template: '...'
})
export class MyComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getData();
    // Use data...
  }
}
```

8. Testing Considerations

One of the benefits of dependency injection is improved testability. You can easily mock services in unit tests:

```typescript
describe('DataService', () => {
  let dataService: DataService;
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: LoggerService, useValue: spy }
      ]
    });

    dataService = TestBed.inject(DataService);
    loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it('should log when adding data', () => {
    dataService.addData('test');
    expect(loggerServiceSpy.log).toHaveBeenCalledWith('Added item: test');
  });
});
```

This approach to service injection in Angular promotes a modular and maintainable codebase. It allows for easy refactoring, testing, and scalability of your application.
