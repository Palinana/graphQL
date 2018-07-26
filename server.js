var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL Schema

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Hello World!'
}

//create an Express server and a GraphQL server
const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

//start the server
app.listen(4000, () => {
    console.log('Express GraphQL Server is now running on localhost://4000/graphql');
});

