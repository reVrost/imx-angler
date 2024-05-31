const fastify = require("fastify")({ logger: true });

// Register a route that handles GET requests to the root URL "/"
fastify.get("/", async (request, reply) => {
  // Send a JSON response containing a message
  reply.send({ message: "Hello World" });
});

// Listen on port 5003 and handle potential errors
fastify.listen({ port: 5003, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
