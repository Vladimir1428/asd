const WebSocket = require('ws');
const express = require('express');

const app = express();
const server = app.listen(3000, () => {
  console.log('Сервер слушает порт 3000');
});

// WebSocket сервер привязывается к серверу Express
const socketServer = new WebSocket.Server({ noServer: true });
server.on('upgrade', (request, socket, head) => {
  socketServer.handleUpgrade(request, socket, head, (webSocket) => {
    socketServer.emit('connection', webSocket, request);
  });
});

// Событие открытия соединения
socketServer.on('connection', (webSocket) => {
  console.log('Соединение установлено.');

  // Отправляем данные после открытия соединения (если необходимо)
  // webSocket.send('Hello, WebSocket!');

  // Событие при получении данных
  webSocket.on('message', (data) => {
    console.log('Получены данные:', data);
  });

  // Событие закрытия соединения
  webSocket.on('close', (code, reason) => {
    console.log(`Соединение закрыто: код ${code}, причина ${reason}`);
  });

  // Событие ошибки
  webSocket.on('error', (error) => {
    console.error('Ошибка:', error.message);
  });
});
