<?php
//Емайл адрес на который будет отправляться
$to = '2357055@inbox.ru';
$from = 'noreply@absolute-invest74.ru';
$req = $_POST;

$errCount =0;


if (empty($req['phone'])){
	$replyArr['errorText'][$errCount]='Напишите Ваш телефон.';
	$replyArr['errName'][$errCount]='phone';
	$errCount++;
}
if (empty($req['name'])){
	$replyArr['errorText'][$errCount]='Напишите Ваше имя.';
	$replyArr['errName'][$errCount]='name';
	$errCount++;
}

if($errCount==0){
	$subject   = 'Заявка с сайта: '.$_SERVER['HTTP_HOST'];
	// текст письма
	
	$message_mail = '
	<html>
	<head>
	<title>'. $subject .'</title>
	</head>
	<body>
	<p>
		Телефон: '.$req['phone'].'<br>
		Имя: '.$req['name'].'<br>
	</p>
	</body>
	</html>
	';

	$message_mail = iconv("UTF-8", "KOI8-U", $message_mail);

	$subject = iconv("UTF-8", "KOI8-U", $subject);
	$subject = '=?koi8-r?B?'.base64_encode($subject).'?=';	

	$Uname = iconv("UTF-8", "KOI8-U", $req['name']);
	$Uname = '=?koi8-r?B?'.base64_encode($Uname).'?=';

	$headers  = "Content-type: text/html; charset=koi8-r \r\n"; 
	$headers .= "From: {$Uname} <{$from}>\r\n"; 
	//$headers .= "Reply-To: {$from}\r\n"; 

	
	if(mail($to, $subject, $message_mail, $headers)){
		$replyArr['status']='ok';
	}else{
		$replyArr['status']='fail';
	}

}else{
	$replyArr['status']='fail';
}
header('Content-Type: application/json');
echo json_encode($replyArr);

?>