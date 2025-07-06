# n8n with PostgreSQL

Starts n8n with PostgreSQL as database & Access the database using Drizzle Studio.

## Start N8N

To start n8n with PostgreSQL simply start docker-compose by executing the following
command in the current folder.

**IMPORTANT:** But before you do that change the default users and passwords in the [`.env`](.env) file!

```
docker-compose up -d
```

To stop it execute:

```
docker-compose stop
```

## Configuration

The default name of the database, user and password for PostgreSQL can be changed in the [`.env`](.env) file in the current directory.

## Install Drizzle Studio

To install the drizzle studio you need to install 2 packages drizzle-orm and drizzle-kit(Already added in package file so just run the following command).

```
npm install
```

or

```
pnpm install
```

## Start Drizzle Studio

To start the drizzle studio simply start it by executing the following command.

**IMPORTANT:** But before you do that change the default database url in the [`.env`](.env) file!

```
npm run studio
```

or

```
pnpm studio
```

## Configuration

The default url of the database for PostgreSQL can be changed in the [`.env`](.env) file in the current directory.