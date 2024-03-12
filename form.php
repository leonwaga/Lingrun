<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $subject = $_POST["Subject"];
    $message = $_POST["Message"];

    $to = "wagajr@gmail.com";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message! We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
