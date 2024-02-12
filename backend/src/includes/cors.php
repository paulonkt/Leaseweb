<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT');
header('Content-Type: application/json');

require_once __DIR__ . '/../../vendor/autoload.php';
?>