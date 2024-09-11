# Understanding Dependency Injection in Angular

Dependency Injection (DI) is a design pattern and a core concept in Angular that allows you to develop loosely coupled components. It's a way to create and deliver dependent objects to classes, rather than having the classes create the objects themselves.

## Key Concepts

1. **Dependency**: An object that a class needs to function properly.
2. **Injector**: The Angular subsystem responsible for creating instances of dependencies and injecting them into components, directives, pipes, or services.
3. **Provider**: An object that tells the injector how to obtain or create a dependency.
4. **Token**: A key used to identify a dependency. It can be a string, a class, or a special object called `InjectionToken`.

## How DI Works in Angular

1. Angular creates an application-wide injector during the bootstrap process.
2. The injector creates instances of dependencies using providers.
3. When a component, directive, pipe, or service requests a dependency, Angular uses the injector to find and deliver the dependency.

## Types of Injectors

1. **Root Injector**: Created for the entire application.
2. **Module Injectors**: Created for each lazy-loaded module.
3. **Element Injectors**: Created for each component.

## Configuring Providers

Providers can be configured at different levels:

1. **Application-wide**: In the `providers` array of `@NgModule` decorator in `app.module.ts`.
2. **Module-level**: In the `providers` array of a specific module.
3. **Component-level**: In the `providers` array of `@Component` decorator.

Example:

```typescript
@NgModule({
  providers: [MyService]
})
export class AppModule { }
```

## Injection Tokens

Injection tokens are used to uniquely identify dependencies:

1. **Class-based tokens**: The class itself serves as the token.
2. **String tokens**: A string is used as the token (not recommended due to potential naming conflicts).
3. **`InjectionToken`**: A special object provided by Angular for non-class dependencies.

Example of `InjectionToken`:

```typescript
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
```

## Dependency Injection in Practice

1. **Constructor Injection**:
   ```typescript
   constructor(private myService: MyService) { }
   ```

2. **@Inject() Decorator**:
   ```typescript
   constructor(@Inject(APP_CONFIG) config: AppConfig) { }
   ```

3. **Optional Dependencies**:
   ```typescript
   constructor(@Optional() private logger: Logger) { }
   ```

## Hierarchical Injection

Angular uses a hierarchical injection system. If a dependency isn't found in a component's injector, it looks up to the parent component, then to the module injector, and finally to the root injector.

## Benefits of DI

1. **Loose coupling**: Components don't need to know how to create their dependencies.
2. **Reusability**: Dependencies can be easily swapped or mocked for testing.
3. **Maintainability**: Changes to dependencies don't require changes in the components using them.

## Advanced Topics

1. **forRoot() and forChild() methods**: Used for configuring services in lazy-loaded modules.
2. **Resolution modifiers**: Like `@Self()`, `@SkipSelf()`, `@Optional()`, and `@Host()`.
3. **Multi Providers**: Allow multiple services to be injected for a single token.

Understanding and effectively using Dependency Injection is crucial for building scalable and maintainable Angular applications.
