# Injecting Services into Components in Angular

Service injection is a core concept in Angular that allows components to use shared services without needing to create those services themselves. This promotes a separation of concerns and makes your code more modular and testable.

## Basic Injection

The most common way to inject a service into a component is through the constructor:

```typescript
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: '<p>{{data}}</p>'
})
export class MyComponent {
  data: string;

  constructor(private myService: MyService) {
    this.data = this.myService.getData();
  }
}
```

Here's what's happening:

1. We import the service class.
2. In the constructor, we declare a private property of the service type.
3. Angular's dependency injection system provides an instance of the service.

## Injection Tokens

For class-based services, the class itself serves as the injection token. For other dependencies, you might need to use `InjectionToken`:

```typescript
import { InjectionToken } from '@angular/core';

export const MY_CONFIG = new InjectionToken<string>('config');

// In your component:
constructor(@Inject(MY_CONFIG) private config: string) {}
```

## Optional Dependencies

If a service might not be available, you can mark it as optional:

```typescript
import { Optional } from '@angular/core';

constructor(@Optional() private myService?: MyService) {}
```

## Multiple Service Instances

By default, services are singletons. If you need multiple instances, provide the service in the component:

```typescript
@Component({
  ...
  providers: [MyService]
})
export class MyComponent {
  constructor(private myService: MyService) {}
}
```

Now each instance of this component will get its own instance of MyService.

## Injecting Services into Other Services

Services can also be injected into other services:

```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
}
```

## Using Injected Services

Once injected, you can use the service throughout your component:

```typescript
@Component({
  selector: 'app-my-component',
  template: '<button (click)="onClickButton()">Click me</button>'
})
export class MyComponent {
  constructor(private myService: MyService) {}

  onClickButton() {
    this.myService.doSomething();
  }

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      // handle data
    });
  }
}
```

## Lazy Injection

For performance reasons, you might want to inject a service only when it's needed:

```typescript
import { Injectable } from '@angular/core';

@Component({
  ...
})
export class MyComponent {
  private myService: MyService;

  constructor(private injector: Injector) {}

  someMethod() {
    if (!this.myService) {
      this.myService = this.injector.get(MyService);
    }
    this.myService.doSomething();
  }
}
```

## Testing Components with Injected Services

When unit testing components, you'll need to provide mock services:

```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let mockMyService: jasmine.SpyObj<MyService>;

  beforeEach(async () => {
    mockMyService = jasmine.createSpyObj('MyService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      providers: [
        { provide: MyService, useValue: mockMyService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // More tests...
});
```


Here are the key points to remember:

1. Services are typically injected through the component's constructor.
2. The class itself usually serves as the injection token for class-based services.
3. You can use `@Optional()` for dependencies that might not be available.
4. By default, services are singletons, but you can create multiple instances by providing the service in the component.
5. Services can be injected into other services as well.
6. Once injected, you can use the service throughout your component.
7. For performance reasons, you might want to use lazy injection in some cases.
8. When testing components with injected services, you'll need to provide mock services.
