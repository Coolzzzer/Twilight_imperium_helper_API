// Подключение библиотеки Express
const express = require('express');
const app = express();

// Позволяет получать данные в формате JSON в теле запроса
app.use(express.json());

// Создаем массив из двух массивов с объектами
const data = [
  [
    { id: 1, name: "ОБъект А1", description: "Описание объекта А1" },
    { id: 2, name: "ОБъект А2", description: "Описание объекта А2" }
  ],
  [
    { id: 1, name: "Объект Б1", description: "Описание объекта Б1" },
    { id: 2, name: "Объект Б2", description: "Описание объекта Б2" }
  ]
];

// 1) Метод получения данных из первого массива
app.get('/first', (req, res) => {
  res.json(data[0]);
});

// 2) Метод получения данных из второго массива
app.get('/second', (req, res) => {
  res.json(data[1]);
});

// 3) Метод изменения данных из второго массива
// Здесь будем обновлять объект по его id в массиве
app.put('/second/:id', (req, res) => {
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

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
