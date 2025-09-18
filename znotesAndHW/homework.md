-S2E3
create repo
initialize the repo
node modules, package.json, package-lock.json
install express 
create server
listen to port no.
write request handlers for /test, /hello
install nodemon and update scripts inside package.json
what are dependencies
use of "-g" while npm install
difference btween ^ and ~

-s2e4
initialize git
.gitignore 
create a remote repo on github
play with routes and route extension ex: /hello, /hello/2, /xyz
order of the routes matter a lot
install postman and make workspace/collection > test API call
write logic to handle GET, POST, PATCH, DELETE API calls and test on postman
Explore routing and use ?, *, (), * in the routes
Use of regex in routes /a/, /.*fly$/
Reading query params in the routes
Reading dynamic routes 

- s2e5
multiple route handlers - play with the code
next()
next function and errors along with res.send()
app.use("/route", rH1,[rH2,rH3],rH4,rH5);
what is middleware? Why we need it?
how express js basically handles requests behind the scenes
app.use vs app.all
write a dummy auth middleware for admin
write a dummy auth middleware for all user routes, except /user/login
Error handling using app.use("/", (err, req,res,next) => {}); keep it towards the end

s2e6
create a free cluster in mongodb atlas
install mongoose library
connect your application to database "connection-url/ devTinder
call the connectDB function and connect to database before starting application on 7777
create a userSchema and user Model
create POST /signup API to add data to database
push some documents using api calls from postman
error handling using try, catch

s2ep7
JS object vs JSON
add the express.json middleware to your app
make your signup API dynamic to receive data from 
end user 
User.findOne with duplicate email ids which object returned
API - GET user by email
API - Feed API - GET/feed - get all the users from database
API - get userbyID
create delete user API
PATCH vs PUT
API - update a user
explore mongoose documentation for model methods
what are options in a Model.findOneAndUpdate method,
explore more about it 
Create API - updates user with emailId

s2e8
explore schematype options frm the documentation
add required, unique, lowercase, min max length, trim
add default
create a custom validate function for gender
improve the DB schema - PUT all appropiate validations
on each field in schema
add timestamps to user schema
add API level validations on Patch request and Signup post api
Data sanitization - add API validation for each field
Install validator
explore the library, functions for password, email, photo url

s2e9
npm i bcrypt
26:34
