# AssignmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Projet Angular / MBDS 2022

#Développeurs:
	- KANGA KOUAKOU DOMINIQUE
	- AHIBO KOFFI SIMEON

#Données:

#Lien Github:
	- Backend: https://github.com/KevElliot/Angular-back
	- Frontend: https://github.com/KevElliot/Angular-front
	
#Lien Heroku:
	- Backend: https://mbdsangularback.herokuapp.com/
	- Frontend: https://mbdsangularfront.herokuapp.com/

#Fonctionnalités:
	- Gestion de login/password avec JWT et gestion de roles
	- Inscription des utilisateurs avec les rôles étudiant, professeur et admin.
	- Ajout de nouvelles collections et propriétés: 
		=> Collections: Assignments, Matières, Users
		=> Propriétés: Auteur, Matière, image de la matière, photo du prof, note, remarques
	- Assignment sous forme d'une Material Card
	- Liste - pagination - infinite scroll - detail assignment
	- Formulaire de type Stepper : Modification(snackbar material) + note
    - Navigation (navbar)
	- Drag and drop Rendu et Non rendu
	- Messages de notification a la suppression d'un assignment
	- Collection d'élèves et de profs (Users)
	- Hébergement sur Heroku.com

#Utilisation en locale:
	- Backend:
		=> Télécharger fichier zip du projet git
		=> Extraire le fichier zip dans un dossier
		=> Executer la commande dans le dossier du projet : npm install
		=> Pour lancer, executer la commande : npm start
	- Frontend:
		=> Télécharger le fichier zip du projet git
		=> extraire le fichier zip dans un dossier
		=> executer la commande dans le dossier du projet : npm install
		=> pour lancer, executer la commande : ng serve

#Vidéo démo:
	. https://youtu.be/Zi7SZcEahqA
		
#Accès:
	- Etudiant:
		=> ex: 
			.Email: jok@test.com
			.Mot de passe: 123456789
		=> non accès liste rendu/ non rendu, pas accès a noté assignment
		
	- Prof:
		=> ex: 
			.Email: dominiquekanga9@gmail.com
			.Mot de passe: 123456789
		=> accès à toutes les fonctionnalités

#Collections:
	- Assignments: _id - nom - prof - imageProf - matiere - imageMatiere - note - remarque - dateRendu - rendu
	- Matieres : _id - designation - image - prof - imageProf
	- Users: _id - name - email - password - role(Prof / Etudiant)

#Architecture:
[API]
	- Technologie: nodeJs 
	
	- Routes disponibles:
		=> GET /api/assignments
		=> POST /api/assignments
		=> PUT /api/assignments/:_id
		=> DELETE /api/assignments/:_id
        => GET /api/assignmentsRenduTrue/:rendu
        => GET /api/assignmentsRenduFalse/:rendu
		=> GET /api/assignments/:_id
        => POST /api/auth/register
		=> POST /api/auth/login
        => POST /api/auth/logout
		=> GET /api/assignments/student/:_id
        => GET /api/matiere
		
[ANGULAR]
	- Technologie: Angular (typescript)
	
	- Pages disponibles:
		=> login & register
		=> liste des assignments: rendu - non rendu - paginnation - delete assignment(notification)
        => liste des devoirs drag and drop - infinite scrolling
		=> assignment detail - suppression - modification - note(stepper) assignment
		=> ajout assignment
		
#Sources:
	- JWT : 
        => https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
		=> https://dev-academy.com/angular-jwt/

    - Stepper : 
        => https://www.freakyjolly.com/angular-material-stepper-tutorial-with-examples/

    - Drag and drop : 
        => https://stackblitz.com/angular/akmmvnrgqor?file=src%2Fapp%2Fcdk-drag-drop-connected-sorting-example.html

	- Card, pagination, Stepper, notification, snackbar : 
		=> https://material.angular.io/

	- CRUD :
		=> https://github.com/micbuffa/AngularMBDSCoteIvoire2021_2022.git
		=> https://github.com/micbuffa/MBDSCoteIvoireAPI.git
	- Données de test: 
		=> https://mockaroo.com/

	- Design et idées css:
		=> https://material.angular.io/
		=> https://getbootstrap.com/

    

		