// Imports
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

// Setup Express server
const app = express();
const PORT = 4000;

// Setup graphQL integration with express
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Listen on the predefined port
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
