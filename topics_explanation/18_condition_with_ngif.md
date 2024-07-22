## Condition with ngif

Using `*ngIf` for conditional rendering in Angular. The `*ngIf` directive is a powerful structural directive that allows you to add or remove elements from the DOM based on a condition.



```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  template: `
    <h2>Basic ngIf</h2>
    <p *ngIf="showElement">This paragraph is conditionally rendered.</p>
    <button (click)="toggleElement()">Toggle Element</button>

    <h2>ngIf with else</h2>
    <p *ngIf="isLoggedIn; else loggedOut">Welcome, User!</p>
    <ng-template #loggedOut>
      <p>Please log in.</p>
    </ng-template>

    <h2>ngIf with then and else</h2>
    <div *ngIf="userRole === 'admin'; then adminBlock else userBlock"></div>
    <ng-template #adminBlock>
      <p>Welcome, Admin!</p>
    </ng-template>
    <ng-template #userBlock>
      <p>Welcome, User!</p>
    </ng-template>

    <h2>ngIf with async pipe</h2>
    <p *ngIf="(userObservable | async) as user; else loading">
      Welcome, {{ user.name }}!
    </p>
    <ng-template #loading>
      <p>Loading user data...</p>
    </ng-template>

    <h2>Multiple conditions</h2>
    <div [ngSwitch]="userType">
      <p *ngSwitchCase="'admin'">Admin Panel</p>
      <p *ngSwitchCase="'manager'">Manager Dashboard</p>
      <p *ngSwitchCase="'user'">User Profile</p>
      <p *ngSwitchDefault>Unknown User Type</p>
    </div>

    <h2>ngIf with ng-container</h2>
    <ng-container *ngIf="showContainer">
      <h3>This heading is inside ng-container</h3>
      <p>This paragraph is also inside ng-container</p>
    </ng-container>

    <h2>Complex conditions</h2>
    <p *ngIf="user && user.age >= 18 && user.hasPermission">
      You have access to this content.
    </p>
  `
})
export class NgIfDemoComponent {
  showElement = true;
  isLoggedIn = false;
  userRole = 'user';
  userType = 'manager';
  showContainer = true;
  user = { age: 25, hasPermission: true };

  userObservable = new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'John Doe' }), 2000);
  });

  toggleElement() {
    this.showElement = !this.showElement;
  }
}

```

Now, let's break down the key aspects of using `*ngIf` in Angular:

1. Basic Syntax:
   - Use `*ngIf="condition"` to conditionally render an element.
   - The element and its children are added to or removed from the DOM based on the condition.

2. ngIf with else:
   - Use `*ngIf="condition; else elseBlock"` to specify an alternative template.
   - The `elseBlock` refers to a `<ng-template>` with a template reference variable.

3. ngIf with then and else:
   - Use `*ngIf="condition; then thenBlock else elseBlock"` to specify templates for both true and false conditions.
   - Both `thenBlock` and `elseBlock` refer to `<ng-template>` elements.

4. Using with Async Pipe:
   - `*ngIf` works well with the async pipe for handling observables.
   - Use the `as` keyword to create a local variable for the resolved value.

5. Multiple Conditions:
   - For multiple mutually exclusive conditions, consider using `[ngSwitch]` instead of multiple `*ngIf` directives.

6. Using with ng-container:
   - `<ng-container>` is a grouping element that doesn't add extra nodes to the DOM.
   - Useful for applying `*ngIf` to multiple elements without adding an extra wrapper element.

7. Complex Conditions:
   - `*ngIf` can handle complex boolean expressions.
   - For very complex conditions, consider moving the logic to the component or a method.

8. Performance Considerations:
   - `*ngIf` completely removes elements from the DOM, which can be more performant than hiding elements with CSS.
   - However, frequent addition/removal of complex sub-trees can impact performance.

9. Combining with Other Directives:
   - `*ngIf` can be combined with other structural directives using `ng-container`.
   - Example:
     ```html
     <ng-container *ngIf="condition">
       <div *ngFor="let item of items">{{ item }}</div>
     </ng-container>
     ```

10. Null Coalescing:
    - Use the safe navigation operator (`?.`) or nullish coalescing operator (`??`) for properties that might be undefined.
    - Example: `*ngIf="user?.isAdmin ?? false"`

11. Type Narrowing:
    - `*ngIf` can help with TypeScript type narrowing in the template.
    - Example:
      ```html
      <div *ngIf="user && user.type === 'admin'">
        {{ user.adminSpecificProperty }}
      </div>
      ```

12. Hidden Alternative:
    - For simple show/hide scenarios where you don't want to remove elements from the DOM, consider using `[hidden]` instead.

13. Animations:
    - When using Angular animations, `*ngIf` can trigger enter and leave animations.

14. Testing:
    - When testing components with `*ngIf`, you may need to trigger change detection to see updates in your tests.


The `*ngIf` directive is a fundamental tool in Angular for creating dynamic, condition-based templates. It provides a clean, declarative way to control the presence of elements in your application's view.
