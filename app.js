const WebSocket = require('ws');
const http = require('http');

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Server is running');
});



// Устанавливаем соединение с "wss://ws.dextools.io/"
const dextoolsSocket = new WebSocket('wss://ws.dextools.io/', {
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'Cache-Control': 'no-cache',
      'Connection': 'Upgrade',
      'Host': 'ws.dextools.io',
      'Origin': 'https://nodejsapp-ia4p.onrender.com',
      'Pragma': 'no-cache',
      'Sec-Websocket-Version': '13',
      'Upgrade': 'websocket',
    }
  });

// Обработчик события при успешном открытии соединения с "wss://ws.dextools.io/"
dextoolsSocket.on('open', () => {
  console.log('Соединение с "wss://ws.dextools.io/" установлено.');
});
dextoolsSocket.on('error', (error) => {
    console.error('Ошибка при установке соединения с Dextools:', error.message);
  });
