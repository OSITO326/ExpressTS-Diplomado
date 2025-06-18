# Template Express with Typescript

This template use Express backend with Typescript, trying use screaming architecture.

###### Screaming architecture

![Screaming Architecture](./assets/Screaming_Architecture.png)

---

## Install dependencies 📦

```bash
npm install # use npm
pnpm install # use pnpm
yarn install # use yarn
```

## Run docker DataBase 🐳

```bash
docker compose up # or to detach
docker compose up -d
```

## Run migrate with Prisma

See the .env-template to configure `DATABASE_URL` to connect the database.

```bash
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

Once you configure the `DATABASE_URL`, run this command:

##### Init prisma

```bash
npx prisma init
```

##### Run migration with prisma

```bash
npm prisma migrate
```

## Run server 🚀

```bash
npm run dev
```

Server run on `http://localhost:3000`

---

### Users Routes

Body `json` user:

```json
{
  "username": "user",
  "password": "password"
}
```

The field `status` default value as `active`.

Routes for users actions:

- Create user `POST`: `http://localhost/api/v1/users`
- Get all users `GET`: `http://localhost/api/v1/users`

Once you create the user with your credential, you need login to try the rest of petitions.

### Login

To login go to:

- `POST`: `http://localhost:3000/api/v1/login` in the body with your credentials:

```json
{
  "username": "user",
  "password": "password"
}
```

To response you recieved the token like that:

```json
{
  "token": "eyJhbGciOiJIOzI1NiIsInR4cCI6IkpXVCJ0.eyJ1c2VySWQiOiJiMjMxZWUxOC1iZWExLTQwM2YtOTQwZC0wNDIwODM1NTA5MjYiLCJzdGF0dXMiOiJhY3RpdmUiLCJpYXQiOjE3NDk5MzczOTIsImV4cCI6MTc0OTk0MDk5Mn0.Xz0-X5giT6LrpBu8ivRwIZjvv4NjvsWbIAWcWsHPF1Q"
}
```

##### For the rest petitions you need the token

You need to put the token before you make the petitions.

- Delete user `DELETE`: `http://localhost/api/v1/users/:id`
- Update user `PUT`: `http://localhost/api/v1/users/:id`
- Get a specific user `GET`: `http://localhost/api/v1/users:id`
- Change status user: `PATCH`: `http://localhost:3000/api/v1/users/:id` - body `json` options only `active` or `inactive`:
  ```json
  {
    "status": "active"
  }
  ```

With this actions, we can use with Postman or similar.

---

### Task Routes

> [!NOTE]
> To try this routes you need the Bearer Token.
> If you do not log in, you will not be able to access the rest of the routes.

- Get all user task: `GET`: `http://localhost:3000/api/v1/task`
- New user task: `POST`: `http://localhost:3000/api/v1/task` - body `json`:

```json
{
  "name": "Learn Rust"
}
```

- Get user task by id `GET`: `http://localhost:3000/api/v1/task/:id`
- Update user a specific task `PUT`: `http://localhost:3000/api/v1/task/:id` - body `json`

```json
{
  "name": "Learn Go"
}
```

- Delete user task `DELETE`: `http://localhost:3000/api/v1/task/:id`
- Toggle user task to Toggle done `true | false` `PATCH`: `http://localhost:3000/api/v1/task/:id`
