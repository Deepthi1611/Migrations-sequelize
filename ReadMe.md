# Migrations in Sequelize - nodeJS

## Development Requirements

1. NodeJS
2. MSSQL Server
3. GIT

## Required Softwares : 

1. Node 
2. Azure Data Studio ( https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-v16 tabs=redhat-install%2Credhat-uninstall )

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.18.2

    $ npm --version
    9.8.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

## Install

    * open terminal where project root directory

    * check node version using > node -v ( v18.18.2 ) 

    * If node version is not v18.18.2 then run nvm use 18.18.2

    * check npm version using > npm -v ( v9.8.1 )

    * after use npm install to install all packages for project 
## Configure app

TO DO: Need to add project configuration steps

    * .env.development 

## Running the project

  ### Development
    * use npm start / node index.js to start node server 
    * after successfully running the server at port 3004. search this url ( http://localhost:3004/arena/ ) for queue jobs

## Commands for migrations in Squelize

### Installing the CLI
To install the Sequelize CLI:


    $ npm install --save-dev sequelize-cli

### Project bootstrapping
To create an empty project you will need to execute init command

    $ npx sequelize-cli init

### Configuration
Before continuing further we will need to tell the CLI how to connect to the database. To do that let's open default config file `config/config.json`. It looks something like this:

``` {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
### Creating the first Model (and Migration)

We will use `model:generate` command. This command requires two options:

* `name`: the name of the model;
* `attributes`: the list of model attributes.

Example:

    $ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

### Running Migrations

Now to actually create that table in the database you need to run `db:migrate` command.

    $ npx sequelize-cli db:migrate

### Undoing Migrations

You can use `db:migrate:undo`, this command will revert the most recent migration.

    $ npx sequelize-cli db:migrate:undo

You can revert back to the initial state by undoing all migrations with the `db:migrate:undo:all` command. You can also revert back to a specific migration by passing its name with the `--to` option.


    $ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

### Creating the first seed

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database tables with sample or test data.

    $ npx sequelize-cli seed:generate --name demo-user

This command will create a seed file in `seeders` folder. File name will look something like `XXXXXXXXXXXXXX-demo-user.js`. It follows the same `up / down` semantics as the migration files.

Now we should edit this file to insert demo user to `User` table.

```
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

### Running Seeds

In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command.


    $ npx sequelize-cli db:seed:all

### Undoing Seeds

Seeders can be undone if they are using any storage. There are two commands available for that:

If you wish to undo the most recent seed:

    $ npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

    $ npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

    $ npx sequelize-cli db:seed:undo:all

### Migration Skeleton

The following skeleton shows a typical migration file.

```
module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  }
}
```
We can generate this file using `migration:generate`. This will create `xxx-migration-skeleton.js` in your migration folder.

    $ npx sequelize-cli migration:generate --name migration-skeleton