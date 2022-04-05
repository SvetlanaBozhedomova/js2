document.getElementById('regform').addEventListener('submit', (event) => {
  let isRight = true;      //результат проверки

  //проверка имени
  const nameElem = document.getElementById('name');
  //console.log(nameElem.value);
  let regExp = /^[a-zа-яё]+$/i;
  if (regExp.test(nameElem.value)) {   //всё верно
    nameElem.classList.remove('invalid');
  } else {                             //неверно 
    nameElem.classList.add('invalid');
    alert('Имя должно содержать только буквы');
    isRight = false;
  }

  //проверка телефона
  const phoneElem = document.getElementById('phone');
  //console.log(phoneElem.value);
  regExp = /^\+7\(\d{3}\)\d{3}\-\d{4}$/;
  if (regExp.test(phoneElem.value)) {   //всё верно
    phoneElem.classList.remove('invalid');
  } else {                             //неверно 
    phoneElem.classList.add('invalid');
    alert('Шаблон телефона: +7(000)000-0000');
    isRight = false;
  }

  //проверка email
  const emailElem = document.getElementById('email');
  //console.log(emailElem.value);
  regExp = /^[a-z\d\.\-]+@[a-z\d]+\.[a-z]{2,4}$/i;
  if (regExp.test(emailElem.value)) {   //всё верно
    emailElem.classList.remove('invalid');
  } else {                             //неверно 
    emailElem.classList.add('invalid');
    alert('E-mail имеет вид: mymail@mail.ru или my.mail@mail.ru или my-mail@mail.ru');
    isRight = false;
  }

  //результат
  if (!isRight) {
    //  console.log('не отправлять');
    event.preventDefault();
  } else {
    alert('Ваши данные отправлены');
  }
});
