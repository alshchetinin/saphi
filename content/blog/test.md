---
title: "Отправка формы в Telegram через Nuxt 3 API"
date: 2022-11-18
company: "Nuxt.js"
links:
  - title: "prodaction"
    link: "https://your_domain.com"
  - title: "Figma"
    link: "https://figma.com"
---

# Отправка формы в Telegram через Nuxt 3 API

#Resources/Programming/Nuxt

## Описание

Этот API endpoint позволяет отправлять данные формы в Telegram через бота. Он использует Nitro server, встроенный в Nuxt 3.

## Конфигурация

1. Создайте файл `server/api/send-telegram.post.js` (или `.ts` для TypeScript) в вашем Nuxt 3 проекте.

2. Вставьте следующий код:

```javascript
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  async function sendTelegram(data) {
    const token = config.TELEGRAM_BOT_TOKEN;
    const idChat = config.TELEGRAM_CHAT_ID;

    // Объект для перевода ключей
    const translations = {
      name: "Имя",
      phone: "Телефон",
      email: "Электронная почта",
      type: "Тип заявки",
      accept: "Согласие на обработку персональных данных",
    };

    const translateKey = (key) => translations[key] || key;

    let text = Object.entries(data)
      .map(([key, value]) => `${translateKey(key)}: ${value}`)
      .join("\n");

    text = encodeURIComponent(text);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${idChat}&text=${text}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }
      return true;
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      throw error;
    }
  }

  try {
    await sendTelegram(body);
    return { success: true, message: "Message sent to Telegram" };
  } catch (error) {
    return { success: false, message: error.message };
  }
});
```

3. Добавьте переменные окружения в файл `.env`:

```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

4. Добавьте переменные в `nuxt.config.ts`

```
  runtimeConfig: {
    public: {},
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
```

## Использование

Для отправки данных на этот endpoint, выполните POST-запрос на `/api/send-telegram` с данными формы в теле запроса.

### Параметры запроса

- Метод: POST
- URL: `/api/send-telegram`
- Тело: JSON объект с данными формы

### Пример запроса

```javascript
const response = await fetch("/api/send-telegram", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, World!",
  }),
});

const result = await response.json();
```

### Ответ

Успешный ответ:

```json
{
  "success": true,
  "message": "Message sent to Telegram"
}
```

Ответ с ошибкой:

```json
{
  "success": false,
  "message": "Error message"
}
```

## Примечания

- Этот endpoint автоматически форматирует данные формы в JSON перед отправкой в Telegram.
- Убедитесь, что ваш бот имеет доступ к указанному чату.
