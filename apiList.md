# Devtinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password  // forgot password API

## connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
instead we use dynamic API - POST /request/send/:status/:userId

- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId
instead we use dynamic API - POST /request/review/:status/:requestId

## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed - gets you profile of other users on platform

Status: ignore, interested, accepted, rejected