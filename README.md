OBS! Info till Linus --> Jag satsar på VG

Every information about this BookFinder API will be located on my Github account.

Start by downloading the repository from my Github account.

Open it as a new project in Visual Studio Code.

In Visual Studio Codes terminal run npm init-y
This will create a ”package.json”-file. Check if ”type”: ”module” is added in this file.
If not - add it.

Install Express and Mongoose in Visual Studio Code by running npm i express mongoose in terminal.

Open the ”server.js” file and enter your own connection string values (username and password) to the MongoDB database.
For example, my connection-string looks like this:
mongoose.connect("mongodb+srv://csnoddan:******@cluster0.nw3iadb.mongodb.net/test")
where ****** is my password.

When you are ready to start, please run node server.js in terminal.

To seed the database with dummydata please run node seedDB.js in terminal.
Also here you need to enter your own connection string.

Link to my Postman workspace – https://www.postman.com/noddan84/workspace/pvt23kimnordin