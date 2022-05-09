# modaresa-test

## installation using docker
```docker system prune -a && docker compose build && docker compose up frontend postgres pgadmin -d```

Wait for postgres container to be up then

```docker compose up backend -d```

## usage
you can access backend's swagger at http://localhost:5000 and frontend app at http://localhost:3000

## todo
- backend
-- add tests to controllers and services
-- use validators to control inputs

- frontend
-- add interface using @devexpress/dx-react-scheduler

- docker
-- add a wait for postgres startup before backend's start