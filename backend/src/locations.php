<?php
require_once 'includes/cors.php';
require_once 'classes/File.php';
require_once 'classes/Filter.php';

/* Load the XLSX file from specified path and keep the file under variable to work with it */
$xlsFile = 'data/LeaseWeb_servers_filters_assignment.xlsx';
$file = new File($xlsFile);
$spreadsheet = $file->load();

$sheet = $spreadsheet->getActiveSheet();

$columnIndex = 4;

$distinctValues = [];

foreach ($sheet->getRowIterator(2) as $row) { // I am assuming the first row is headers
    $value = $sheet->getCellByColumnAndRow($columnIndex, $row->getRowIndex())->getValue();

    if (!in_array($value, $distinctValues)) {
        $distinctValues[] = $value;
    }
}

echo json_encode($distinctValues);