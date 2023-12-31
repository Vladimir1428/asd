const WebSocket = require('ws');
const http = require('http');

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Server is running');
});



// Устанавливаем соединение с "wss://ws.dextools.io/"
const dextoolsSocket = new WebSocket('wss://ws.dextools.io/');

// Обработчик события при успешном открытии соединения с "wss://ws.dextools.io/"
dextoolsSocket.on('open', () => {
  console.log('Соединение с "wss://ws.dextools.io/" установлено.');
});

// Запускаем HTTP сервер на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
