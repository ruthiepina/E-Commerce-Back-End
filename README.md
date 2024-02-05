# E-Commerce Back End

![License Badge](./assets/badge.svg)

## Description

This application started with a working Express.js API that was then confirmed to interact with a MySQL database through the use of
Sequelize, which is an Object-Relational Mapper (ORM) tool.

The walkthrough video below shows the app's functionality for GET, POST, PUT, and DELETE API routes, demonstrated b use of RESTful CRUD
operations.

The app also uses the MySQL2 package to connect to the MySQL database and perform queries, the Sequelize package to interact with the
database using OOP and JavaScript instead of having to use SQL commands in the terminal, and the dotenv package to secure sensitive data
like the username, password, and database name of your MySQL.

## Table of Contents

-  [User Story](#user-story)
-  [Acceptance Criteria](#acceptance-criteria)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Example](#example)
-  [Deliverables](#deliverables)
-  [License](#license)
-  [Questions](#questions)

## User Story

```
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database
```

## Installation

1. install node.js

2. instal mysql 2 package

3. install sequelize package

4. install dotenv package

5. update .gitignore file as needed

## Usage

1. finish installation, connect to mysql database

2. create database

3. exit mysql, seed database tables

4. run app with npm start

5. make sure app is connected to db using sequelize

6. once connection and database seeded, use insomnia to test routes for GET, POST, PUT, DELETE

## Example

## Deliverables

[Walkthrough Video]()

[GitHub Repository For E-Commerce Back End](https://github.com/ruthiepina/E-Commerce-Back-End)

## License

Copyright (c) 2024 Ruthie Pina. All rights reserved.

Licensed under the [MIT License](https://choosealicense.com/licenses/mit).

## Questions

E-Commerce Back End created by [Ruthie Pina](https://github.com/ruthiepina).

For any additional questions or comments, please send an email to: <ruthiepina@gmail.com> .
