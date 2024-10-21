<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $commentaires = htmlspecialchars($_POST['commentaires']);

    // Set the recipient email
    $to = "milan.theron0@gmail.com";
    $subject = "Nouveau message de votre portfolio";

    // Build the message body
    $message = "
    Nom: $nom\n
    Prénom: $prenom\n
    Email: $email\n
    Commentaires: \n
    $commentaires
    ";

    // Headers for email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de votre message. Veuillez réessayer.";
    }
}
?>
