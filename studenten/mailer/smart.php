<?php 


$phone = $_POST['phone'];
$type = $_POST['student'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rekrutacjawortex@gmail.com';                 // Наш логин
$mail->Password = 'rekk1212';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'Wortex: General');   // От кого письмо 
$mail->addAddress('rekrutacjawortex@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Нова заявка від роботодавця (Рекрутація)';
$mail->Body    = 'Клієнт залишив дані<br><br>Номер телефону: ' . $phone . '<br>
	Необхідний тип працівників: ' . $type . '<br>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>