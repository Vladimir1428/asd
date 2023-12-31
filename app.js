const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.dextools.io/' {
    origin: 'https://nodejsapp-ia4p.onrender.com' // Укажите свой домен вместо https://your-origin.com
  });

ws.on('open', () => {
  console.log('Соединение установлено.');

  // Теперь вы можете отправлять сообщения на сервер.
  ws.send('Привет, сервер!');
});

ws.on('message', (data) => {
  console.log(`Получено сообщение: ${data}`);
});

ws.on('close', () => {
  console.log('Соединение закрыто.');
});

ws.on('error', (error) => {
  console.error(`Ошибка: ${error.message}`);
});