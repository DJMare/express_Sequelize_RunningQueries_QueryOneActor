# express_Sequelize_RunningQueries_QueryOneActor
An express app utilizing sequelize to connect to mySQL and running specific query for one item. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RunningQueries_QueryOneActor: 

    express --view=hbs express_Sequelize_RunningQueries_QueryOneActor

(6) Once the process is complete, navigate into the express_Sequelize_RunningQueries_QueryOneActor directory: 

    cd express_Sequelize_RunningQueries_QueryOneActor

(7) Now in the express_Sequelize_RunningQueries_QueryOneActor directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RunningQueries_QueryOneActor directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file.: ![open index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68560100-8921c880-040d-11ea-883a-9fff7d4ec784.JPG)

(14) Require mysql2 in routes/index.js file: ![require mysql2 in index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68560131-ab1b4b00-040d-11ea-966e-17847dcee166.JPG)

COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and filed in project:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database: ![open config json file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68606621-d1c49a80-047c-11ea-8b7c-43870e26a8bc.JPG)

![update database info in config json file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68606810-3da70300-047d-11ea-9fa8-436b64480fc8.JPG)

COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application: ![open app js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607026-b3ab6a00-047d-11ea-8968-ade3d0a43943.JPG)

![require models in app js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607590-ef92ff00-047e-11ea-80bb-b2b0401eb61e.JPG)

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![add models sequelize sync in app js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607638-13eedb80-047f-11ea-9075-b0b00fb20cbc.JPG)

(23) In the views folder, create a actors.hbs file and add code to show the names of the actors.: ![create actors hbs file in views folder and add code to view actors (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607774-6a5c1a00-047f-11ea-805d-7edc5e9a79c0.JPG)

(24) In the routes/index.js file, require the models.: ![require models in the index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607881-adb68880-047f-11ea-90dc-5f7636eb4fe3.JPG)

(25) Add a get() route for /actors to the routes/index.js file.: ![add get() route for actors in index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607991-e0f91780-047f-11ea-9113-afd70f581fc8.JPG)

COMMAND PROMPT

(26) Run nodemon in terminal to see DB sync'd up: 

    nodemon

WEB BROWSER

(27) Navigate to localhost3000/actors to view the list of all actors.: ![navigate to localhost3000-actors in browser to view list of all actors](https://user-images.githubusercontent.com/35668707/68608112-21589580-0480-11ea-9d78-e7ffd398d3ae.JPG)


NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
