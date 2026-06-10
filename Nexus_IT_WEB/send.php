<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    header("Location: contact");
    exit();

}


$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$service = trim($_POST["service"]);
$message = trim($_POST["message"]);


if (

    empty($name) ||
    empty($email) ||
    empty($message)

) {

    die("Vyplňte všechna povinná pole.");

}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    die("Neplatný e-mail.");

}


/* ZDE ZADEJ SVŮJ E-MAIL */

$to = "TVUJEMAIL@GMAIL.COM";


$subject = "Nová zpráva z webu NEXUS IT";


$body =

"Jméno: $name\n\n" .

"E-mail: $email\n\n" .

"Telefon: $phone\n\n" .

"Služba: $service\n\n" .

"Zpráva:\n$message";


$headers =

"From: $email\r\n" .

"Reply-To: $email\r\n";


if (

    mail(

        $to,
        $subject,
        $body,
        $headers

    )

) {

    header(

        "Location: contact?success=1"

    );

}

else {

    header(

        "Location: contact?error=1"

    );

}


exit();

?>