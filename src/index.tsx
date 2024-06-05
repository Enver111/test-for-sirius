import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';

// Получаем элемент с идентификатором 'root'
const rootElement = document.getElementById('root');

// Проверяем, что элемент существует
if (rootElement) {
  // Создаем корневой узел с помощью элемента, если он не null
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Если элемент не найден, выводим сообщение об ошибке
  console.error('Не удалось найти элемент с идентификатором "root"');
}
