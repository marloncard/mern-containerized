# DOCUMENTATION

## Start

Run project with:

```
docker-compose up --build
```

⚡️ [server]: is running at http://localhost:8080
👀 [frontend]: is running at http://localhost:3000

## Dependencies

### Typescript

Install `typescript` package to compile TypeScript to valid JavaScript. `ts-node` utility library to used to run development server written using typescript directly from terminal. Both are installed as dev dependencies with the `-D` flag.

```
npm install express
npm install -D typescript ts-node
```

Install type definitions for express and node:

```
npm install -D @types/express @types/node
```

### Nodemon

```
npm install -D nodemon
```

## Mongo DB

### Mongo Shell

Connect via mongo shell ( install `mongodb-org-shell`):

```
docker exec -it <container_name> bash
mongo admin -u <username> -p <password>
```


Access mongo db server logs via docker's container logs:

```
docker logs some-mongo
```

*Tips:*

Show databases:

```
show dbs
```

Use database:

```
use <database_name>
```

Show collections:

```
show collections
```

Show contents/documents of a collection:

```
db.your_collection_name.find()
```

Save data to a collection:

```
db.your_collection_name.save({"key":"Value"})
```

Show database version:

```
db.version()
```

### MongoDB Compass

Connection string for docker container:

```
mongodb:<ip-address>:27017
```

### Mongoose

Install mongoose package:

```
npm i mongoose
npm install -D @types/mongoose
```

## Proxy Settings

To handle the usual CORS error , in `package.json` of our react app add:

```
"proxy": "http://localhost:8080"
```

Install the cors npm package:

```
npm install cors
npm install @types/cor
```

Usage:

```
import cors from 'cors';

const corsRef = cors();

app.use(corsRef);
```

## REFERENCES

https://blog.logrocket.com/typescript-with-node-js-and-express/

## EMOJIS

https://emojis.wiki/