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

// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Read and decode JSON input
$json = file_get_contents("php://input");
$data = json_decode($json, true);
error_log("Received request: " . $json);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit();
}

try {
    // Sanitize input
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');
    $message = trim($data['message'] ?? '');
    $service = trim($data['service'] ?? '');

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception('Required fields (name, email, message) are missing');
    }

    // Insert into DB
    $sql = "INSERT INTO contact_form (name, email, phone, service, message, created_at) 
            VALUES (:name, :email, :phone, :service, :message, NOW())";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':service' => $service,
        ':message' => $message
    ]);

    // Send email notification
    $to = "info@infinoid.com";
    $subject = "New Contact Form Submission from $name";
    $emailBody = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();
    @mail($to, $subject, $emailBody, $headers); // Suppress error

    echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
} catch (Exception $e) {
    error_log("Error in process_form.php: " . $e->getMessage());
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
