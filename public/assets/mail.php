<?php
// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form fields and remove MORALspace.
    $firstName = strip_tags(trim($_POST["firstName"]));
    $firstName = str_replace(array("\r", "\n"), array(" ", " "), $firstName);
    $lastName = strip_tags(trim($_POST["lastName"]));
    $lastName = str_replace(array("\r", "\n"), array(" ", " "), $lastName);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $number = trim($_POST["number"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if (empty($firstName) or empty($lastName) or empty($number) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {

        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    $recipient = "example.example.com";

    // Set the email subject.
    $sender = "New contact from $firstName $lastName";

    //Email Header
    $head = " /// XSTHEME \\\ ";
    // Build the email content.
    $email_content = "$head\n\n\n";

    $email_content .= "Name: $firstName $lastName\n";

    $email_content .= "Email: $email\n\n";

    $email_content .= "Number: $number\n\n";

    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $firstName $lastName <$email>";
    // Send the email.
    if (mail($recipient, $sender, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>