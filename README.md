# E-Commerce Back End

![License Badge](./assets/badge.svg)

## Description

This application started with a working Express.js API that was then confirmed to interact with a MySQL database through the use of
Sequelize, which is an Object-Relational Mapper (ORM) tool.

The walkthrough video below shows the app's functionality for GET, POST, PUT, and DELETE API routes, demonstrated by use of RESTful CRUD
operations.

The app also uses the MySQL2 package to connect to the MySQL database and perform queries, the Sequelize package to interact with the
database using OOP and JavaScript instead of having to use SQL commands in the terminal, and the dotenv package to secure sensitive data
like the username, password, and database name of your MySQL.

## Table of Contents

-  [User Story](#user-story)
-  [Acceptance Criteria](#acceptance-criteria)
-  [Installation](#installation)
-  [Usage](#usage)
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

1. Create repository in GitHub, clone this repo into your local one!

1. Install node.js.

1. Install npm MySQL 2 package.

1. Install npm Sequelize package.

1. Install npm dotenv package.

1. Update your .gitignore file as needed!

## Usage

1. Once you finish installation instructions, connect to MySQL database (mysql -u root -p).

2. Once you are connected, create the database (source db/schema.sql;).

3. Exit mysql, and then seed the database tables (npm run seed OR node seeds/index).

4. Now run the app with npm start from your local main branch.

5. Make sure the app is connected to database using Sequelize.

6. Once you are connected and database is seeded, use Insomnia to test routes for GET, POST, PUT, DELETE.

## Deliverables

[Walkthrough Video](https://drive.google.com/file/d/1w3xHzfNK8eX64MEhVUZ6ZAKwrK6YmyOS/view)

[GitHub Repository For E-Commerce Back End](https://github.com/ruthiepina/E-Commerce-Back-End)

## License

Copyright (c) 2024 Ruthie Pina. All rights reserved.

Licensed under the [MIT License](https://choosealicense.com/licenses/mit).

## Questions

E-Commerce Back End created by [Ruthie Pina](https://github.com/ruthiepina).

For any additional questions or comments, please send an email to: <ruthiepina@gmail.com> .
