<?php
require_once 'db_connect.php';

// Enable error reporting (for debugging)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS handling - allow specific origins
$allowed_origins = ['https://infinoid.com', 'https://www.infinoid.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://www.infinoid.com"); // fallback
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Origin, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Include database connection
    require_once 'db_connect.php';

    // Get the JSON input
    $json = file_get_contents("php://input");
    error_log("Received data: " . $json); // Log received data

    // Decode JSON
    $data = json_decode($json, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get form data
        $position = $data['position'] ?? '';
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $message = $data['message'] ?? '';

        // Validate required fields
        if (empty($position) || empty($name) || empty($email)) {
            throw new Exception('Required fields are missing');
        }

        // Store in database
        $sql = "INSERT INTO job_applications (position, name, email, message, created_at) 
                VALUES (:position, :name, :email, :message, NOW())";
        
        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([
            ':position' => $position,
            ':name' => $name,
            ':email' => $email,
            ':message' => $message
        ]);

        if (!$result) {
            throw new Exception('Failed to save application');
        }

        // Send email notification
        $to = "info@infinoid.com";
        $subject = "New Job Application for " . $position;
        $emailMessage = "
            Position: {$position}\n
            Name: {$name}\n
            Email: {$email}\n
            Message: {$message}
        ";

        $headers = "From: {$email}\r\n";
        $headers .= "Reply-To: {$email}\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Try to send email but don't fail if it doesn't work
        @mail($to, $subject, $emailMessage, $headers);

        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully'
        ]);

    } else {
        throw new Exception('Method not allowed');
    }

} catch (Exception $e) {
    error_log("Error in process_application.php: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?> 