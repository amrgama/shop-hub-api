const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require('json-server-auth');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);
server.listen(process.env.PORT || 3600, "0.0.0.0", () => {
  console.log('JSON Server is running');
});
