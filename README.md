##Setup and Run

```
cd clients-portal && npm install
cd ../server
npm install
cd ..
npm install

```

### Start the application

```
npm start
```

# Client Portal Server side API

This api is a part of the client poratl app created with the MERN environment.

## How to use

- run `git clone ...`
- run `npm start`

Note: Make sure you have nodemon installed in your system otherwise, you can unstall as a dev dependencies in the project.

## API Resources

### User API Resources

All the user API router follows `/v1/user/`

| #   | Routers                           | Verbs | Progess | Is Private | Description                                      |
| --- | --------------------------------- | ----- | ------- | ---------- | ------------------------------------------------ |
| 1   | `/v1/user/login`                  | POST  | TODO    | No         | Verify user Authentication and return JWT        |
| 2   | `/v1/user/request-reset-password` | POST  | TODO    | No         | Verify email and email pin to reset the password |
| 3   | `/v1/user/reset-password`         | PUT   | TODO    | No         | Replace with new password                        |
| 4   | `/v1/user/{id}`                   | GET   | TODO    | Yes        | Get users Info                                   |

### Client API Resources

All the user API router follows `/v1/client/`

| #   | Routers                        | Verbs  | Progess | Is Private | Description                                                   |
| --- | ------------------------------ | ------ | ------- | ---------- | ------------------------------------------------------------- |
| 1   | `/v1/client`                   | GET    | TODO    | Yes        | Get all clients for the logged in user                        |
| 2   | `/v1/client/{id}`              | GET    | TODO    | Yes        | Get a client's details                                        |
| 3   | `/v1/client`                   | POST   | TODO    | Yes        | Create a new client                                           |
| 4   | `/v1/client/{id}`              | PUT    | TODO    | Yes        | Update client details i.e. film title, agreement and so on... |
| 5   | `/v1/client/close-client/{id}` | PATCH  | TODO    | Yes        | Update client status to close                                 |
| 6   | `/v1/client/close-client/{id}` | DELETE | TODO    | Yes        | Delete a client                                               |

