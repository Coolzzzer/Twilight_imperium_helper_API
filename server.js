// Подключение библиотеки Express
const express = require('express');
const app = express();

// Позволяет получать данные в формате JSON в теле запроса
app.use(express.json());

// Создаем массив из двух массивов с объектами
const data = [
  [
    { id: 1, name: "Альянс Нааз-Роха", srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/Альянс.PNG", srcToken: "", srcLogo: "" },
  ],
  [
    { id: 1, win: 0, game:0, history:[{date: "", player: "", result: true }]},
  ],
  [
    { date: "", quantity: 1, set:[{player:"", fraction: 1, result: false}]},
  ]
];

// 1) Метод получения данных из первого массива
app.get('/initial', (req, res) => {
  res.json(data[0]);
});

// 2) Метод получения данных из второго массива
app.get('/result', (req, res) => {
  res.json(data[1]);
});
app.get('/date', (req, res) => {
  res.json(data[2]);
});

// 3) Метод изменения данных из второго массива
// Здесь будем обновлять объект по его id в массиве
app.put('/result/:id', (req, res) => {
  const objId = parseInt(req.params.id, 10);
  // Ищем индекс объекта во втором массиве
  const index = data[1].findIndex(obj => obj.id === objId);

  if (index === -1) {
    return res.status(404).json({ message: 'Объект не найден' });
  }

  // Обновляем данные объекта. Для простоты предполагаем, что передаётся весь объект.
  // Можно использовать более избирательное обновление полей.
  data[1][index] = { ...data[1][index], ...req.body };

  res.json(data[1][index]);
});
app.put('/date/:id', (req, res) => {
  const objId = parseInt(req.params.id, 10);
  // Ищем индекс объекта во втором массиве
  const index = data[2].findIndex(obj => obj.id === objId);

  if (index === -1) {
    return res.status(404).json({ message: 'Объект не найден' });
  }

  // Обновляем данные объекта. Для простоты предполагаем, что передаётся весь объект.
  // Можно использовать более избирательное обновление полей.
  data[1][index] = { ...data[2][index], ...req.body };

  res.json(data[2][index]);
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
