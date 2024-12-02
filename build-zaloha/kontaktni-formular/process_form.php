<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ujistěte se, že cesta je správná

// Nastavení připojení k databázi
$servername = "sql.endora.cz";
$username = "cestamarketingem";
$password = "JjVv12@&AlEs";
$dbname = "kontaktniformularsocialspecialist";
$port = 3313; // Specifikace portu

// Vytvoření připojení k databázi
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Kontrola připojení
if ($conn->connect_error) {
    die("Připojení k databázi selhalo: " . $conn->connect_error);
}

// Načtení dat z formuláře
$datum = $_POST['datum'];
$email = $_POST['email'];
$telefon = $_POST['telefon'] ?? ''; // Volitelné

// Zabezpečení dat před vložením do databáze
$datum = $conn->real_escape_string($datum);
$email = $conn->real_escape_string($email);
$telefon = $conn->real_escape_string($telefon);

// Kontrola, zda je datum již zarezervováno
$sql = "SELECT id FROM registrace WHERE datum='$datum'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Termín na tento den je již zarezervován.";
} else {
    // SQL dotaz pro vložení dat do databáze
    $sql = "INSERT INTO registrace (datum, email, telefon) VALUES ('$datum', '$email', '$telefon')";

    if ($conn->query($sql) === TRUE) {
        // E-mailová notifikace
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.seznam.cz';                       // SMTP server pro Seznam
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'matyashiess@seznam.cz';                // SMTP username
            $mail->Password   = 'Hajs@0601097420';                     // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           // Enable TLS encryption
            $mail->Port       = 587;                                    // TCP port to connect to (587 pro TLS)

            //Recipients
            $mail->setFrom('matyashiess@seznam.cz', 'Social Specialist'); // Odesílatel
            $mail->addAddress('matyashiess@seznam.cz', 'Admin');   // Příjemce

            // Content
            $mail->isHTML(true);                                        // Set email format to HTML
            $mail->Subject = 'Nový záznam v registraci termínů';
            $mail->Body    = "Byl přidán nový záznam:<br><br>" .
                             "Datum: $datum<br>" .
                             "Email: $email<br>" .
                             "Telefon: $telefon<br>" .
                             "Datum registrace: " . date('Y-m-d H:i:s');

            $mail->send();
            echo 'Termín byl úspěšně zaregistrován a e-mail byl odeslán!';
        } catch (Exception $e) {
            echo "Termín byl úspěšně zaregistrován, budeme Vás kontaktovat !";
        }
    } else {
        echo "Chyba: " . $sql . "<br>" . $conn->error;
    }
}

// Zavření připojení k databázi
$conn->close();
?>
