---
title: "Настройка веб-сервера на Ubuntu"
picture: "/project.png"
date: 2022-11-18
company: "Nuxt.js"
links:
  - title: "prodaction"
    link: "https://your_domain.com"
  - title: "Figma"
    link: "https://figma.com"
---

# Настройка веб-сервера на Ubuntu

#Resources/Programming/server

==Это руководство поможет вам настроить базовый веб-сервер на Ubuntu с Nginx, SSL и Node.js.==

## 1. Подготовка сервера

Обновите пакеты и установите необходимые инструменты:

```bash
sudo apt update && sudo apt install git curl nginx -y
```

## 2. Создание директории для сайта

Создайте директорию для вашего домена:

```bash
sudo mkdir -p /var/www/your_domain/
```

## 3. Настройка Nginx

Создайте конфигурационный файл для вашего домена:
[[Nginx для Nuxt 3]]

```bash
sudo nano /etc/nginx/sites-available/your_domain
```

После настройки, создайте символическую ссылку:

```bash
sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/
```

## 4. Настройка SSL с Certbot

Установите Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Получите SSL-сертификат:

```bash
sudo certbot --nginx -d your_domain.com
```

## 5. Перезапуск Nginx

Проверьте конфигурацию и перезапустите Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 6. Установка Node.js

Установите Node.js версии 18:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

## 7. Установка PM2

PM2 - это менеджер процессов для Node.js приложений:

```bash
sudo npm install pm2@latest -g
```

## 8. Установка Yarn

Yarn - это альтернативный пакетный менеджер для Node.js:

```bash
npm install --global yarn
```

Теперь ваш сервер настроен с Nginx, SSL, Node.js, PM2 и Yarn. Вы можете использовать эту конфигурацию для размещения различных веб-приложений или сайтов.
