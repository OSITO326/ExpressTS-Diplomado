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

Routes for users actions:

- Create user `POST`: `http://localhost/api/v1/users`
- Delete user `DELETE`: `http://localhost/api/v1/users/:id`
- Update user `PUT`: `http://localhost/api/v1/users/:id`
- Get all users `GET`: `http://localhost/api/v1/users`
- Get a specific user `GET`: `http://localhost/api/v1/users:id`

With this actions, we can use with Postman or similar
