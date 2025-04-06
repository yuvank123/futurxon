<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Correct database configuration
$db_host = '193.203.184.245';
$db_name = 'u925942308_infinoid_db';
$db_user = 'u925942308_infinoid';
$db_pass = 'Infinoid@123';

try {
    // Log connection attempt
    error_log("Attempting to connect to database: $db_name at $db_host as user: $db_user");

    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    error_log("Database connection successful");
} catch (PDOException $e) {
    error_log("Connection failed: " . $e->getMessage());
    die("Connection failed: " . $e->getMessage());
}
?>
