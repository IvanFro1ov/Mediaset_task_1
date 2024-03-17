# Инструкция по сборке проекта

---

Сначала необходимо установить node.js - [ссылка на видеоинструкцию](https://youtu.be/II_kZ8Pp0g0?si=vs4tHve0TNdsWe3K)

### Инициализируем проект gulp

```
npm init -y
```

### Установка пакетов

```
npm i -D gulp gulp-sass
```

### Устанавливаем глобально gulp

```
npm install -g gulp
```

### Разрешаем выполнение сценариев в PowerShell(запуск от имени администратора)

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Устанавливаем пакет sass

```
npm install sass
```

### В терминале прописываем команду gulp (собираем проект)

```
gulp
```

