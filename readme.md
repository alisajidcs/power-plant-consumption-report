### Heading

## Setup

Run these commands in sequence 

`npm install`

`npx sequelize-cli db:migrate`

`npx sequelize-cli db:seed:all`


Now the data is ready in database and you start the server

`npm run dev`

now here is a list of apis

- localhost:8000//api/v1/record

here are some optional query params

*limit:* limits the number of records, default limit is 10 

*state:* Retrieve data from a specific state

- localhost:8000//api/v1/record?limit=15&state=AL


