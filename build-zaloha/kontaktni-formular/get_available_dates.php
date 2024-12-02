<?php
header('Content-Type: application/json');

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

// SQL dotaz pro získání všech zarezervovaných termínů
$sql = "SELECT datum FROM registrace";
$result = $conn->query($sql);

$dates = [];
while ($row = $result->fetch_assoc()) {
    $dates[] = [
        'datum' => $row['datum'],
        'available' => false
    ];
}

// Generování všech možných termínů v zadaném rozsahu
$startDate = new DateTime('2024-08-01');
$endDate = new DateTime('2024-08-31');
$interval = new DateInterval('P1D'); // Interval jeden den

$period = new DatePeriod($startDate, $interval, $endDate->modify('+1 day'));

foreach ($period as $date) {
    $dateString = $date->format('Y-m-d');
    $isAvailable = !in_array($dateString, array_column($dates, 'datum'));

    // Přidání termínu do pole
    $dates[] = [
        'datum' => $dateString,
        'available' => $isAvailable
    ];
}

// Odeslání JSON odpovědi
echo json_encode($dates);

// Zavření připojení k databázi
$conn->close();
?>
