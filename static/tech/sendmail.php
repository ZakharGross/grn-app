<?php
  // Entering vars.
  $to = "4253580@mail.ru";
  //$to = "4261910@mail.ru";
  //$to = "vic.shine@yandex.ru";
  $headers = "From: GdeRemonta.Net Mailer <no-reply@gdemoroza.net>";
  $subject = "Внимание! Сообщение с сайта GdeRemonta.Net";
  // Fields.
  // Message body.
  $body = "Оставлена заявка. Срочно перезвоните!" . PHP_EOL;
  $body .= "-----" . PHP_EOL;
  $body .= "Имя отправителя: " . $_REQUEST['client_name'] . PHP_EOL;
  $body .= "Телефон для связи: " . $_REQUEST['client_phone'] . PHP_EOL;
  $body .= "-----" . PHP_EOL;
  $body .= "С уважением, Йети." . PHP_EOL;
  $body .= "https://gderemonta.net/";
  // Send.
  $send = mail($to, $subject, $body, $headers);
