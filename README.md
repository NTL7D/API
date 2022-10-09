# A simple Typescript REST API using:

## Backend:

> -   NodeJS 
> -   Express
> -   Prisma (MySQL) 

## Front-end (WIP):

> -   ReactJS

# How to use:

## Server:

1. Re-install packages by running: `yarn --check-out`
2. Type npx prisma init to get .env file from prisma
3. Go to .env, change the database url to your root account and database schema

### Example:

    mysql://[rootname]:[rootpassword]@localhost:3306/[yourdb]

4. Run `npx prisma migrate dev --name init` to migrate prisma schema to your database
5. Run `yarn dev` and test yourself

## Client:

1. Re-install packages by running: `yarn --check-out`
2. Run `yarn start` and test yourself
