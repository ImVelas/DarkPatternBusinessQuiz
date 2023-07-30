<?php

echo "starting php process";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the data from the incoming request
    $csvContent = file_get_contents("php://input");

    // Generate a unique filename for the CSV file
    $filename = 'data_' . date('Ymd_His') . '.csv';

    // Define the path to save the CSV file on the server
    $savePath = './csv_files/' . $filename;

    // Write the data to the CSV file
    file_put_contents($savePath, $csvContent);

    // Send a response back to the JavaScript client
    echo "Data saved successfully as $filename";
}
