<?php
require_once 'includes/cors.php';
require_once 'classes/File.php';
require_once 'classes/Filter.php';

/* Load the XLSX file from specified path and keep the file under variable to work with it */
$xlsFile = 'data/LeaseWeb_servers_filters_assignment.xlsx';
$file = new File($xlsFile);
$spreadsheet = $file->load();

$sheet = $spreadsheet->getActiveSheet();

/* Get all POST information from filters request */
$filterKeys = ['storage', 'memory', 'hdType', 'location'];
$filter = new Filter();
$filters = $filter->extractFilters($_GET, $filterKeys);

$ramFilter = $filters['memory'];
$ramFilterArray = $ramFilter ? explode(', ', $ramFilter) : null;
$storageFilter = $filters['storage'];
$hdFilter = $filters['hdType'];
$locationFilter = $filters['location'];

$servers = [];
foreach ($sheet->getRowIterator(2) as $row) { // I am assuming data starts from the second row due the title row
	$rowData = $sheet->rangeToArray('A' . $row->getRowIndex() . ':' . 'E' . $row->getRowIndex(), null, true, false)[0];

	$ramFormated = $file->getMemoryField($rowData[1]);
	$storageFormated = $file->getStorageField($rowData[2]);
	$hdFormated = $file->getStorageType($rowData[2]);
	$locationFormated = $rowData[3];

	if (
		(!$ramFilter || in_array($ramFormated, $ramFilterArray)) &&
		(!$storageFilter || $storageFormated === $storageFilter) &&
		(!$hdFilter || $hdFormated === $hdFilter) &&
		(!$locationFilter || $locationFormated === $locationFilter)
	) {
		$servers[] = [
			'Model' => $rowData[0],
			'RAM' => $rowData[1],
			'Storage' => $rowData[2],
			'Location' => $rowData[3],
			'Price' => $rowData[4],
		];
	}
}

echo json_encode($servers);