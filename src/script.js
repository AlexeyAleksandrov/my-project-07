const form = document.getElementById('ContactForm');    // получаем элекмент формы
const emailInput = document.getElementById('email');    // получаем поле ввода email

emailInput.addEventListener('input', validateEmail);    // на событие ввода email будет вызываться функция validateEmail()

function validateEmail() {      // функция проверки корректности email
    const emailRegex = /[A-Za-z0-9_-\.]{2,10}@[a-z0-9\.-_]{1,10}\.[a-z]{2,3}/;
    if(emailRegex.test(emailInput.value))   // если введённый пользователем email не подходит
    {
        removeError(emailInput);    // убираем ошибку
        return true;
    }
    else
    {
        showError(emailInput, "Email не соответствует формату. Пример: ivanov@mail.ru");
        return false;
    }
}

function showError(input, message) {    // функция показа ошибки
    const formControl = input.parentElement;    // получаем родительскую форму
    // ищем существующий блок ошибки, если нет - создаём
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.class = 'error';   // CSS-стиль для блока ошибки
    errorElement.textContent = message;     // задаём сообщение об ошибке из параметра функции

    formControl.appendChild(errorElement);  // добавляем компонент ошибки на форму
    input.style.borderColor = 'red';    // делаем красную обводку поля с ошибкой 
}

function removeError(input) {       // функция скрытия ошибки
    const formControl = input.parentElement;    // получаем родительскую форму
    const errorElement = formControl.querySelector('.error');   // ищем существующий блок ошибки

    if(errorElement)    // если ошибка найдена
    {
        formControl.removeChild(errorElement);  // удаляем блок с ошибкой
    }

    input.style.borderColor = 'green';  // задаём зелёный цвет обводки
}
