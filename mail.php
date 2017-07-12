<?php

$from = 'monopoly.crimea@gmail.com';
$to = "monopoly.crimea@gmail.com";
$title = "Новая заявка с сайта \"Монополия Крым\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Был оформлен заказ. \nИмя: $name \nТелефон: $phone";

// mail($to, $title, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


$message = $this->grav['Email']->message($title, $message, 'text/html')
    ->setFrom($from)
    ->setTo($to);

$sent = $this->grav['Email']->send($message);
