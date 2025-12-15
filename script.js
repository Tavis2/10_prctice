
// Получаем элементы со страницы
const button = document.getElementById('testButton');
const body = document.body;

// Счётчик нажатий
let clickCount = 0;

// Функция показа уведомления
function showMessage(message) {
  alert(message);
}

// Функция изменения темы сайта
function toggleTheme() {
  body.classList.toggle('dark-theme');
}

// Функция получения текущей даты
function getCurrentDate() {
  const date = new Date();
  return date.toLocaleDateString('ru-RU');
}

const messages = [
  'JavaScript работает корректно!',
  'Скрипт успешно подключён!',
  'Практика №10 выполнена правильно!',
  'Деплой — это просто'
];



button.addEventListener('click', () => {
  clickCount++;

  // Случайное сообщение из массива
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  // Показываем сообщение
  showMessage(
    `${randomMessage}\n\n` +
    `Дата: ${getCurrentDate()}\n` +
    `Количество нажатий: ${clickCount}`
  );

  // Каждое 3-е нажатие — меняем тему
  if (clickCount % 3 === 0) {
    toggleTheme();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница загружена');
  console.log('Практика №10: JavaScript подключён успешно');
});

// Таймер (пример асинхронности)
setTimeout(() => {
  console.log('Прошло 3 секунды после загрузки страницы');
}, 3000);
