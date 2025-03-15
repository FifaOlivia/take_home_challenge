# Importing XLSX data into MySQL

**This project enables you to quickly import a list of people saved in an XLSX file into a MySQL database. The import is designed to take less than 1 minute, even for files containing up to 30,000 lines.**

## Technologies used

- [Node.js](https://nodejs.org/) JavaScript runtime environment
- [MySQL](https://www.mysql.com/) Relational database
- A package manager like npm or yarn

## Installation

1. Clone this project's repository :

```bash
git clone git@github.com:FifaOlivia/take_home_challenge.git

```

2. Install dependencies: **npm install**
3. Create a database for the project
4. Create a table to store people data.
5. The XLSX file must contain the following columns (in this order) for the script to work correctly:

- _matricule_,
- _nom_
- _prenom_
- _status_
- _datedenaissance_

6. Configure environment variables
7. Open your terminal and run node index.js
8. Provide the path to the XLSX file: <XLSX_FILE_PATH>.
