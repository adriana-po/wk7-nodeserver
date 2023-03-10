// import your http
const http = require("http")

// create server with HTTP
const server = http.createServer((req, res) => {
  console.log("server is created")
})

//initiate a port
const port = 3000;

//listen to server
server.listen(port, () =>
  console.log(`server is running on port ${port}`))
