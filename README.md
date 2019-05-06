# WebProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## access to the project
ng serve
http://localhost:4200/accueil
http://localhost:4200/auth/login

## git
déposer un projet sur github
se positionnr dans le projet

$ git init   // initialise le dosier local comme un repo local 

$ git add .   // ajouter ls fichiers au repo local

$ git comit -m "Prmier commit"

$ git remote add origin https://github.com/noraBelhadj/webproject.git

$ git push -u origin master  // commiter les modifications sur la trunk ( master)

$ git pull 

## creation de branches
se positionner dans un repertoire distiné à la branche
$ git init
$ git add .
$ git remote add origin https://github.com/noraBelhadj/webproject.git
$ git fetch   // affiche l'ensemble des branches
$ git checkout webproject-feature
$ git checkout -b webproject-feature origin/webproject-feature // recuprer la branch feature 
$ git commit -a -m "commit feature"
$ git push
$ git pull // Tout mettre à jour
$ npm install
$ ng serve

lorsqu'on ajoute de nouveau components ou fichier,il faut executer git add . pour ls ajouter puis commit et push

## routing
exemple la route /home 

le component s'ajout autaumatiquement aux déclaration du fichier app.module, pui ajouter la route { path:'home', component:HomeComponent}
 ==> avec le lazy loading:
 atape:1
 creer un  fichier home.module.ts
 export const routes =  [{ path:'', component: HomeComponent} ];
 @NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class HomeModule {}
Remarque : laisser le champs path vide car le path sera ajouter dans le fichier app.module

etape2:

ajouter la route: 

{ path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  }
  
 pour un lien profond: ex /home/subscribe
 
 ajouter dans la déclaration de SubscribeComponent dans home.module.ts et la route export const routes =  [{ path:'', component: HomeComponent} , {path:'subcribe', component: HomeComponent}];
 
 


 
 
 
 

## lien
https://www.concretepage.com/angular-2/angular-2-4-child-routes-and-relative-navigation-example


https://itnext.io/child-routes-with-respective-components-in-angular-4-36f1be42278e


https://stackblitz.com/angular/jbgeoqlbyea?file=src%2Fapp%2Fapp.component.ts

