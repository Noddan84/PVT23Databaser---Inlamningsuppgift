## OBS! Info till Linus --> Jag satsar på VG


# .: INFORMATION :.


## Every information about this BookFinder API will be located on my Github account.


## Start by downloading the repository from my Github account.


## Open it as a new project in Visual Studio Code.


## In Visual Studio Codes terminal
- run
```
npm init-y
```
This will create a ”package.json”-file. Check if ”type”: ”module” is added in this file.
If not - add it.

### This is how my package.json-file looks like:
```
{
  "name": "databaser",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.3.2"
  },
  "devDependencies": {
    "@faker-js/faker": "^8.4.1"
  }
}
```

## Install Express and Mongoose in Visual Studio Code
- run
```
npm i express mongoose
```
in terminal.

## Open the ”server.js” file and enter your own connection string values (username and password) to the MongoDB database.
### For example, my connection-string looks like this:
```
mongoose.connect("mongodb+srv://csnoddan:******@cluster0.nw3iadb.mongodb.net/test")
```
### where ****** is my password.


## Start server connection
When you are ready to start, please run
```
node server.js
```
in terminal.


## Seed database
### Install Faker
To use Faker.js in your project, install by run
```
npm install @faker-js/faker
```
in terminal.

### To seed the database with dummydata
Please run
```
node seedDB.js
```
in terminal.
#### Also here you need to enter your own connection string.


### Link to my Postman workspace
– [Postman](https://www.postman.com/noddan84/workspace/pvt23kimnordin)

#### .: Developed and created by Noddan84 | Kim Nordin PVT23 | April, 2024 :.
