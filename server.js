const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const data = [
  [
    { id: 1, name: "Альянс Нааз-Роха", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Альянс.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Альянс.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Альянс.png" },
    { id: 2, name: "Арбореки", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Арбореки.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Арбореки.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Арбореки.png" },
    { id: 3, name: "Баранат летнев", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Баранат.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Баранат.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Баранат.png" },
    { id: 4, name: "Братство инь", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Братство.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Братство.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Братство.png" },
    { id: 5, name: "Винну", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Винну.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Винну.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Винну.png" },
    { id: 6, name: "Возвышенные", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Возвышенные.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Возвышенные.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Возвышенные.png" },
    { id: 7, name: "Генные чародеи мэхакт", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Генные.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Генные.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Генные.png" },
    { id: 8, name: "Жол-нарские университеты", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Жол-нарские.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Жол-нарские.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Жол-нарские.png" },
    { id: 9, name: "Кабал вуил'рэйт", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Кабал.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Кабал.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Кабал.png" },
    { id: 10, name: "Келерес совета", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Келерес.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Келерес.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Келерес.png" },
    { id: 11, name: "Клан сааров", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Клан.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Клан.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Клан.png" },
    { id: 12, name: "Клубок наалу", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Клубок.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Клубок.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Клубок.png" },
    { id: 13, name: "Коалиция ментака", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Коалиция.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Коалиция.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Коалиция.png" },
    { id: 14, name: "Королевство ззча", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Королевство.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Королевство.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Королевство.png" },
    { id: 15, name: "Кочевник", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Кочевник.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Кочевник.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Кочевник.png" },
    { id: 16, name: "Некровирус", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Некровирус.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Некровирус.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Некровирус.png" },
    { id: 17, name: "Племена исарилов", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Племена.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Племена.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Племена.png" },
    { id: 18, name: "Призраки креусса", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Призраки.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Призраки.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Призраки.png" },
    { id: 19, name: "Психосеть л1з1кс", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Психосеть.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Психосеть.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Психосеть.png" },
    { id: 20, name: "Сардак н'орр", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Сардак.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Сардак.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Сардак.png" },
    { id: 21, name: "Серебряная стая", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Серебряная.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Серебряная.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Серебряная.png" },
    { id: 22, name: "Титаны ула", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Титаны.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Титаны.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Титаны.png" },
    { id: 23, name: "Тлеющие с муаата", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Тлеющие.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Тлеющие.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Тлеющие.png" },
    { id: 24, name: "Федерация сол", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Федерация.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Федерация.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Федерация.png" },
    { id: 25, name: "Хаканские эмираты", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Хаканские.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Хаканские.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Хаканские.png" },
  ],
  [
    { id: 1, win: 0, game:0, history:[{date: "", player: "", result: true }]},
  ],
  [
    { date: "", quantity: 1, set:[{player:"", fraction: 1, result: false}]},
  ]
];

// Прочие эндпоинты
app.get('/initial', (req, res) => {
  res.json(data[0]);
});
app.get('/result', (req, res) => {
  res.json(data[1]);
});
app.get('/date', (req, res) => {
  res.json(data[2]);
});
app.put('/result/:id', (req, res) => {
  const objId = parseInt(req.params.id, 10);
  const index = data[1].findIndex(obj => obj.id === objId);

  if (index === -1) {
    return res.status(404).json({ message: 'Объект не найден' });
  }

  data[1][index] = { ...data[1][index], ...req.body };

  res.json(data[1][index]);
});
app.put('/date/:id', (req, res) => {
  const objId = parseInt(req.params.id, 10);
  const index = data[2].findIndex(obj => obj.id === objId);

  if (index === -1) {
    return res.status(404).json({ message: 'Объект не найден' });
  }

  data[2][index] = { ...data[2][index], ...req.body };

  res.json(data[2][index]);
});

app.get('/initial/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const faction = data[0].find(item => item.id === id);

  if (!faction) {
    return res.status(404).json({ message: 'Фракция не найдена' });
  }
  res.json({ 
    id: faction.id, 
    name: faction.name,
    srcInfo: faction.srcInfo, 
    srcToken: faction.srcToken, 
    srcLogo: faction.srcLogo 
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});