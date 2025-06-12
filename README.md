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

##### Use this template

```bash
git clone URL NAME_PROJECT
```

> [!NOTE]
> If you use this template, delete folder assets
