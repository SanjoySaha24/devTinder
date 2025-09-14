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