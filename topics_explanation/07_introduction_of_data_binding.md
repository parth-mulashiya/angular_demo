## Introduction to Data Binding

Data binding is a core feature in Angular that provides a way to communicate between a component class and its template. It allows you to synchronize data between the model (component class) and the view (template). Let's dive into the details of data binding in Angular:

Types of Data Binding:

Angular supports four types of data binding:

1. Interpolation (One-way, Component to View):
   - Syntax: {{ expression }}
   - Used to display component data in the template.
   
   Example:
   ```html
   <h1>Welcome, {{ userName }}!</h1>
   ```

2. Property Binding (One-way, Component to View):
   - Syntax: [property]="expression"
   - Used to set properties of HTML elements or directives.
   
   Example:
   ```html
   <img [src]="userImageUrl">
   ```

3. Event Binding (One-way, View to Component):
   - Syntax: (event)="expression"
   - Used to handle events from the view.
   
   Example:
   ```html
   <button (click)="onSubmit()">Submit</button>
   ```

4. Two-way Binding:
   - Syntax: [(ngModel)]="property"
   - Combines property binding and event binding.
   - Requires FormsModule to be imported in your Angular module.
   
   Example:
   ```html
   <input [(ngModel)]="userName">
   ```

Key Concepts:

1. Expression Context:
   - Expressions in data bindings are evaluated within the context of the component instance.

2. Change Detection:
   - Angular automatically detects changes in component properties and updates the view accordingly.

3. Binding to Different Types:
   - You can bind to properties, attributes, classes, and styles.

4. Safe Navigation Operator:
   - Use the `?.` operator to guard against null or undefined values in property paths.
   
   Example:
   ```html
   <p>{{ user?.address?.street }}</p>
   ```

5. Pipes:
   - Used with interpolation and property binding to transform data before display.
   
   Example:
   ```html
   <p>{{ dateOfBirth | date:'short' }}</p>
   ```

6. Template Reference Variables:
   - Allow you to reference elements in the template.
   
   Example:
   ```html
   <input #nameInput>
   <button (click)="greet(nameInput.value)">Greet</button>
   ```

7. Property Binding vs Attribute Binding:
   - Property binding: [property]="expression"
   - Attribute binding: [attr.attribute-name]="expression"

   Example:
   ```html
   <td [attr.colspan]="columnSpan">Content</td>
   ```

8. Class and Style Bindings:
   - Class binding: [class.class-name]="expression"
   - Style binding: [style.style-property]="expression"

   Example:
   ```html
   <div [class.active]="isActive" [style.color]="textColor">Content</div>
   ```

9. Event Binding Payload:
   - You can pass event payload using $event.
   
   Example:
   ```html
   <input (input)="onInput($event)">
   ```

10. Two-way Binding Under the Hood:
    - [(ngModel)]="property" is syntactic sugar for:
      [ngModel]="property" (ngModelChange)="property = $event"


Data binding is a powerful feature that simplifies the synchronization between your component's data and its view. It reduces the amount of boilerplate code you need to write and helps in creating more dynamic and responsive user interfaces.
