<?php
function sendEmail($to, $subject, $message, $headers) {
    try {
        // Use Hostinger's mail server
        $mailSent = mail($to, $subject, $message, $headers);
        
        if (!$mailSent) {
            error_log("Failed to send email to: " . $to);
            return false;
        }
        
        return true;
    } catch (Exception $e) {
        error_log("Email sending error: " . $e->getMessage());
        return false;
    }
}
?>
<?php
function sendEmail($to, $subject, $message, $headers) {
    try {
        // Use Hostinger's mail server
        $mailSent = mail($to, $subject, $message, $headers);
        
        if (!$mailSent) {
            error_log("Failed to send email to: " . $to);
            return false;
        }
        
        return true;
    } catch (Exception $e) {
        error_log("Email sending error: " . $e->getMessage());
        return false;
    }
}
?> 
