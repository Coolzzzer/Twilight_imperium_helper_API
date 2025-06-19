const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./firebase');
const { v4: uuidv4 } = require('uuid'); 
app.use(cors());
app.use(express.json());

const data ={matches: 
  [
    { id: 0, name: "Альянс Нааз-Роха", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Альянс.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Альянс.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Альянс.png" },
    { id: 1, name: "Арбореки", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Арбореки.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Арбореки.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Арбореки.png" },
    { id: 2, name: "Баранат летнев", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Баранат.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Баранат.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Баранат.png" },
    { id: 3, name: "Братство инь", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Братство.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Братство.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Братство.png" },
    { id: 4, name: "Винну", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Винну.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Винну.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Винну.png" },
    { id: 5, name: "Возвышенные", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Возвышенные.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Возвышенные.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Возвышенные.png" },
    { id: 6, name: "Генные чародеи мэхакт", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Генные.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Генные.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Генные.png" },
    { id: 7, name: "Жол-нарские университеты", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Жол-нарские.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Жол-нарские.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Жол-нарские.png" },
    { id: 8, name: "Кабал вуил'рэйт", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Кабал.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Кабал.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Кабал.png" },
    { id: 9, name: "Келерес совета", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Келерес.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Келерес.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Келерес.png" },
    { id: 10, name: "Клан сааров", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Клан.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Клан.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Клан.png" },
    { id: 11, name: "Клубок наалу", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Клубок.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Клубок.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Клубок.png" },
    { id: 12, name: "Коалиция ментака", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Коалиция.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Коалиция.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Коалиция.png" },
    { id: 13, name: "Королевство ззча", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Королевство.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Королевство.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Королевство.png" },
    { id: 14, name: "Кочевник", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Кочевник.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Кочевник.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Кочевник.png" },
    { id: 15, name: "Некровирус", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Некровирус.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Некровирус.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Некровирус.png" },
    { id: 16, name: "Племена исарилов", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Племена.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Племена.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Племена.png" },
    { id: 17, name: "Призраки креусса", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Призраки.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Призраки.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Призраки.png" },
    { id: 18, name: "Психосеть л1з1кс", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Психосеть.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Психосеть.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Психосеть.png" },
    { id: 19, name: "Сардак н'орр", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Сардак.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Сардак.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Сардак.png" },
    { id: 20, name: "Серебряная стая", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Серебряная.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Серебряная.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Серебряная.png" },
    { id: 21, name: "Титаны ула", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Титаны.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Титаны.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Титаны.png" },
    { id: 22, name: "Тлеющие с муаата", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Тлеющие.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Тлеющие.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Тлеющие.png" },
    { id: 23, name: "Федерация сол", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Федерация.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Федерация.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Федерация.png" },
    { id: 24, name: "Хаканские эмираты", 
    srcInfo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/info/Хаканские.PNG", 
    srcToken: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/token/Хаканские.PNG", 
    srcLogo: "https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/logo/Хаканские.png" },
    { id: 25, 
    data:[
      {id:"i10",name:"10",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/item/10.png"},
      {id:"i14",name:"14",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/item/14.png"},
      {id:"iM",name:"M",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/item/Мегатол.png"},
      {id:"c1",name:"1",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/1.PNG"},
      {id:"c2",name:"2",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/2.PNG"},
      {id:"cA",name:"A",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/Артефакт.PNG"},
      {id:"cD",name:"D",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/Действия.PNG"},
      {id:"cZ",name:"Z",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/Закон.PNG"},
      {id:"cO",name:"O",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/Обещание.PNG"},
      {id:"cS",name:"S",src:"https://raw.githubusercontent.com/Coolzzzer/Twilight_imperium_helper_API/refs/heads/main/src/back/Секретная.PNG"}
    ]}

  ]
} 

app.post('/data', async (req, res) => {
  const { date, quantity, set } = req.body;

  if (!date || !quantity || !Array.isArray(set)) {
    return res.status(400).json({ error: "Некорректные данные" });
  }

  data.matches.push({ date, quantity, set });

  await db.collection("users").doc("andrey").set(data);

  res.status(201).json({ message: "Матч добавлен!", match: { date, quantity, set } });
});

app.get('/initial/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); 

  if (!Array.isArray(data.matches)) {
    return res.status(500).json({ message: "Ошибка: данные о фракциях отсутствуют или имеют неверный формат" });
  }

  const faction = data.matches.find(item => item.id === id);

  if (!faction) {
    return res.status(404).json({ message: "Фракция не найдена" });
  }

  res.json(faction);
});

app.post('/date', async (req, res) => {
  const { date, quantity, set } = req.body;

  if (!date || !quantity || !Array.isArray(set)) {
    return res.status(400).json({ error: "Некорректные данные" });
  }

  try {
    const userRef = db.collection("users").doc("andrey");
    const doc = await userRef.get();
    let matches = doc.exists ? doc.data().matches || [] : [];

    const newMatch = { id: uuidv4(), date, quantity, set };

    matches.push(newMatch);
    await userRef.set({ matches }, { merge: true });

    res.status(201).json({ message: "Матч добавлен!", match: newMatch });
  } catch (error) {
    console.error("Ошибка Firestore:", error.message);
    res.status(500).json({ error: "Ошибка записи в Firestore", details: error.message });
  }
});
app.delete('/date/:id', async (req, res) => {
  const objId = req.params.id;

  try {
    const userRef = db.collection("users").doc("andrey");
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Данные не найдены" });
    }

    let matches = doc.data().matches || [];
    const newMatches = matches.filter(match => match.id !== objId); 

    if (matches.length === newMatches.length) {
      return res.status(404).json({ message: "Матч с таким ID не найден" });
    }

    await userRef.set({ matches: newMatches }, { merge: true });

    res.status(200).json({ message: "Матч удален!" });
  } catch (error) {
    console.error("Ошибка удаления:", error.message);
    res.status(500).json({ error: "Ошибка удаления из Firestore", details: error.message });
  }
});

app.get('/date', async (req, res) => {
  try {
    const doc = await db.collection("users").doc("andrey").get();

    if (doc.exists && doc.data().matches) {
      res.json(doc.data().matches);
    } else {
      res.json({ message: "Данные отсутствуют" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ошибка чтения из Firestore", details: error.message });
  }
});

app.put('/date/:id', async (req, res) => {
  const objId = parseInt(req.params.id, 10);

  try {
    const userRef = db.collection("users").doc("andrey");
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Данные не найдены" });
    }

    const userData = doc.data();
    const index = userData.matches.findIndex(match => match.id === objId);

    if (index === -1) {
      return res.status(404).json({ message: "Матч не найден" });
    }

    userData.matches[index] = { ...userData.matches[index], ...req.body };
    await userRef.set(userData);

    res.json(userData.matches[index]);
  } catch (error) {
    res.status(500).json({ error: "Ошибка обновления данных", details: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});