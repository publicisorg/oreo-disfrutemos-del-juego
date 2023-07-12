<?php

$servername = "localhost";
$username = "oreo_juegoreo";
$password = "W*P4rTh9gT";
$dbname = "oreo_juegoreo";

try {
    date_default_timezone_set('America/Mexico_City');

    $fecha_actual = getdate();

    $conn = new PDO(
        "mysql:host=$servername;dbname=$dbname",
        $username,
        $password,
        array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
    );

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $mail = substr($_POST['mail'], 0, 100);
    $novedades = substr($_POST['novedades'], 0, 30);

    if ($novedades == "on") {
        $novedades_resuelto = "recibe";
    } else {
        $novedades_resuelto = "no recibe";
    }

    $fecha = $fecha_actual['mday'] . "-" . $fecha_actual['mon'] . "-" . $fecha_actual['year'] . " " . $fecha_actual['hours'] . ":" . $fecha_actual['minutes'] . ":" . $fecha_actual['seconds'];

    $stmt = $conn->prepare("INSERT INTO data (mail, novedades, fecha)
        VALUES (:mail, :novedades, :fecha)");
    $stmt->bindParam(':mail', $mail);
    $stmt->bindParam(':novedades', $novedades_resuelto);
    $stmt->bindParam(':fecha', $fecha);
    $stmt->execute();

    http_response_code(200);
    echo "Datos enviados!";
} catch (PDOException $e) {
    http_response_code(409);
    echo "Revise los datos ingresados <br/>" . $e . '<br/>';
}
?>