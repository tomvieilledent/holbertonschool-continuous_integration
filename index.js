const http = require('http');

const PORT = 5001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bonjour\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
