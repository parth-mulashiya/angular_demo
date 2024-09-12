# Understanding Angular's Hierarchical Injector

Angular's dependency injection system uses a hierarchical injector to manage the creation and lifetime of dependencies. This hierarchy closely mirrors the component tree of your application, providing a powerful and flexible way to manage services and their scopes.

## Basic Concept

The Hierarchical Injector in Angular works on a parent-child relationship:

1. If a component requests a dependency, Angular first looks for it in its own injector.
2. If not found, it looks in the injector of its parent component.
3. This process continues up the component tree until it reaches the root injector.
4. If the dependency is still not found, Angular throws an error.

## Levels of Injectors

Angular has three main levels of injectors:

1. **Root Injector (App Level)**
   - Created for the entire application
   - Configured in the `@NgModule` decorator of `AppModule`

2. **Module Injectors**
   - Created for each lazy-loaded module
   - Configured in the `@NgModule` decorator of feature modules

3. **Component Injectors**
   - Created for each component
   - Configured in the `@Component` decorator

## Provider Scope and Visibility

The scope and visibility of a service depend on where it's provided:

1. **Root-provided services** (`providedIn: 'root'`)
   - Available application-wide
   - Single instance shared across the entire app

2. **Module-provided services**
   - Available to all components within the module
   - For eager-loaded modules, behaves like root-provided services
   - For lazy-loaded modules, creates a new instance of the service

3. **Component-provided services**
   - Available only to the component and its child components
   - New instance created for each component

## Example of Hierarchical Injection

Consider this component structure:

```
AppComponent
└── ParentComponent
    └── ChildComponent
```

If `ParentComponent` provides `ServiceA`, both `ParentComponent` and `ChildComponent` will share the same instance of `ServiceA`. `AppComponent` won't have access to it.

```typescript
@Component({
  selector: 'app-parent',
  providers: [ServiceA]
})
export class ParentComponent { }

@Component({
  selector: 'app-child'
})
export class ChildComponent {
  constructor(private serviceA: ServiceA) { }
}
```

## Overriding Providers

Child injectors can override providers from parent injectors:

```typescript
@Component({
  selector: 'app-parent',
  providers: [{ provide: ServiceA, useClass: ServiceA }]
})
export class ParentComponent { }

@Component({
  selector: 'app-child',
  providers: [{ provide: ServiceA, useClass: ServiceAChild }]
})
export class ChildComponent {
  constructor(private serviceA: ServiceA) { 
    // This will be an instance of ServiceAChild
  }
}
```

## Resolution Modifiers

Angular provides resolution modifiers to control how dependencies are resolved:

1. **@Optional()**: Allows Angular to consider a dependency as optional
2. **@Self()**: Only looks for the dependency in the component's own injector
3. **@SkipSelf()**: Skips the component's injector and looks in the parent
4. **@Host()**: Looks in the component's injector, then in the injectors of host components up to, but not including, the module injector

Example:

```typescript
@Component({
  selector: 'app-child',
  providers: [ServiceB]
})
export class ChildComponent {
  constructor(
    @Optional() private serviceA: ServiceA,
    @Self() private serviceB: ServiceB,
    @SkipSelf() private serviceC: ServiceC
  ) { }
}
```

## Benefits of Hierarchical Injection

1. **Encapsulation**: Services can be scoped to specific parts of the app
2. **Performance**: Allows for more efficient memory usage
3. **Flexibility**: Provides fine-grained control over service instances
4. **Testability**: Easier to provide mock services for testing

Here are the key points to remember:

1. Angular's Hierarchical Injector works on a parent-child relationship, mirroring the component tree.
2. There are three main levels of injectors: Root, Module, and Component.
3. The scope and visibility of a service depend on where it's provided (root, module, or component level).
4. Child injectors can override providers from parent injectors.
5. Angular provides resolution modifiers (@Optional(), @Self(), @SkipSelf(), @Host()) to control how dependencies are resolved.
6. The Hierarchical Injector system provides benefits like encapsulation, performance, flexibility, and improved testability.
