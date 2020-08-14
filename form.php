
<?php
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $phonenumber = $_POST['phonenumber'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $email_subject = "KOVAL CARES VOLUNTEER REQUEST";
  $message = $firstname . " " . $lastname . "\n " . $phonenumber .  "\n\n" . $_POST['message'];


$to = "koval@kovalcares.com, alexiselisav@gmail.com";
$headers = "From: $email \r\n";
$headers .= "Reply-To: $email \r\n";

mail($to,$email_subject,$message,$headers);
header("Location: index.html");

echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";


?>