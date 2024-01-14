const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Read the HTML file
  const htmlFilePath = path.join(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the HTML content to the client
  res.end(htmlContent)
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
