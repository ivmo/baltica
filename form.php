<?php
if(!empty($_POST['fio'])&&!empty($_POST['telephone'])){ //Проверка отправилось ли наше поля name и не пустые ли они
$to = 'av-masters@mail.ru,igorgalaeff@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка'; //Загаловок сообщения
$message = '
<html>
<head>
<title>'.$subject.'</title>
</head>
<body>
<p>Имя: '.$_POST['fio'].'</p>
<p>Телефон: '.$_POST['telephone'].'</p>
<p>Стаж работы: '.$_POST['stag'].'</p>
<p>Где проходил обучение: '.$_POST['obuchenie'].'</p>
<p>Город: '.$_POST['city'].'</p>
</body>
</html>'; //Текст нащего сообщения можно использовать HTML теги
$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: av-tool.ru \r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>