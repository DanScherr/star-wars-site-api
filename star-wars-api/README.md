# StarWarsApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

***

# **Initial Config**:

## Creating a new workspace and initial application:
1. ```$ ng new star-wars-api```
    - Would you like to add Angular routing? yes
    - Which stylesheet format would you like to use? CSS

## Serveing the application:
1. ```$ ng serve --open```

## Import Angular Material and Configuring it on ./src/:
### 1. Install:
```$ ng add @angular/material```
### 2. Import into app.module
### 3. Donwload hamerjs
- 3.1. ```$ npm install --save hammejs```
- 3.2. import it on ./src/main.ts
- so that the sliders components may work
### 4. CSS Angular Material config:
- 4.1. import on /src/style.css (where we import global styles)
### 5. Import font on ./src/index.html.

***

# **Dashboard dependencies**:

## Create **dashboard/welcome** dependencies:
- ###  1. **Module**:
    - #### 1.1. Create:
        - ```$ ng g module dashboard/welcome```
    - #### 1.2. Barrils method to import module on app.module:
        - 1.2.1. Create index.ts in /welcome/ folder
            - export welcome.module on index.ts
        - 1.2.2. Create index.ts in /dashboard/
            - export welcome folder on index.ts
        - 1.2.3. Import welcome module in app.module

- ### 2. **Component**:
    - #### 2.1. Create:
        - ```$ ng g component dashboard/welcome/components```
    - #### 2.2. Barrils method to import and declare component on dashboard.module:
        - 2.2.1. Create index.ts in /welcome/ folder
            - exports component
        - 2.2.2. Update app/dashboard/dashboard.module

<br>

## Create **dashboard/dashboard** dependecies:
- ### 1. **Module**:
    - #### 1.1. Create:
        - ```$ ng g module dashboard/dashboard```
    - #### 1.2. Barrils method to import module on app.module:
        - 1.2.1. Create index.ts in /dashboard/dashboard folder
            - export welcome.module on index.ts
        - 1.2.2. Update index.ts in app/dashboard folder
            - export dashboard folder on index.ts
        - 1.2.3. Import dashboard module in app.module

- ### 2. **Component**:
    - #### 2.1. Create:
        - ```$ ng g component dashboard/dashboard/components/dashboard```
    - #### 2.2. Barrils method to import and declare component on app.module:
        - 2.2.1. Create index.ts in /dashboard/dashboard folder
            - exports component
        - 2.2.2. Update app/dashboard/dashboard.module

***

# **Route dependencies**:

- **Create Route files** to each created module (*welcome and dashboard*):

## 1. Dashboard/Welcome/ dependencies:
- ### 1. **Create Route files** on /Welcome/:
    - #### 1.1. Create Module:
        - 1.1.1. ```$ ng g class dashboard/welcome/welcome-routing.module```
- ### 2. Create door entry for our Route on Component:
    - #### 2.1. Create Component:
        - 2.1.1. ```$ ng g class dashboard/welcome/components/welcome-routing.component```

## 2. Dashboard/Dashboard/ dependencies:
- ### 1. **Create Route files** on Dashboard/Dashboard/:
    - #### 1.1. Create Module:
        - 1.1.1. ```$ ng g class dashboard/dashboard/dashboard-routing.module```
- ### 2. Create door entry for our Route on Component:
    - #### 2.1. Create Component:
        - 2.1.1. ```$ ng g class dashboard/dashboard/components/dashboard-routing.component```

## 3. Configure our app-routing.module for root
- ### 3.1. import it on app.module
    - must be the last one in the imported modules.
- ### 3.2. Add directive in app.component.html
    - Angular adds submodules inside application through the directive.
    - So that all child submodules will be inserted the same directive.

## 4. Configure Route for Child Module on dashboard/welcome/:
- ### 4.1. Implements welcome-routing.components
- ### 4.2. Update /welcome/components/index.ts to export welcome-routing.component
- ### 4.3. Configure welcome-routing.module
- ### 4.4. Update Welcome.module    
    - Import and Declare welcome-routing.module
    - don't forget to import RouterModule as well
- ### 4.5. Update app.module
    - Import WelcomeRoutingModule

## 5. Configure Route for Child Module on dashboard/dashboard/:
- ### 5.1. Implements dashboard-routing.components
- ### 5.2. Update /dashboard/components/index.ts to export dashboard-routing.component
- ### 5.3. Configure dashboard-routing.module
- ### 5.4. Update dashboard.module
    - Import and Declare dashboard-routing.module
    - don't forget to import RouterModule as well
- ### 5.5. Update app.module
    - Import DashboardRoutingModule

***

# **Screen Development**:
## 1. **Create Welcome Screen**:
- ### 1.1. Import libraries to welcome.module
    - import libraries that are going to be used to implement screen
        - ReactiveFormsModule
        - HttpClientModule
        - FlexLayoutModule
            - install it: ```npm i -s @angular/flex-layout @angular/cdk```
        - MatButtonModule

- ### 1.2. Implement welcome.component.html and .css
- ### 1.3. Implement Rout Change when Click of Button on welcome.component.html

## 2. **Create Dashboard Screen**:
- ### 2.1. Implement Dashboards on dashboard.component.html.
- ### 2.2. Create src/environment folder with environment.ts file
    - implement it
- ### 2.3. Create Service Dashboard:
    - 2.3.1. ```$ ng g service dashboard/dashboard/components/dashboard```
    - 2.3.2. Create index.ts and export service file
    - 2.3.3. Implementing Dashboard Service:
    - 2.3.4. import and provide service on dashboard.module
    