<?php

$recepient = "monopoly.crimea@gmail.com";
$sitename = "Монополия Крым";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Был оформлен заказ. \nИмя: $name \nТелефон: $phone";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
