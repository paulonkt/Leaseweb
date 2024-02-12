<?php

use PhpOffice\PhpSpreadsheet\IOFactory;

Class File {

	private $file;

	public function __construct($file) {
		$this->file = $file;
	}

	public function load() {
		try {
			$spreadsheet = IOFactory::load($this->file);
		} catch (\Exception $e) {
			http_response_code(500);
			echo json_encode(['error' => 'Error loading XLS file']);
			exit();
		}

		return $spreadsheet;
	}

	public function getMemoryField($memoryString) {
		return preg_replace('/DDR\d+/i', '', $memoryString);
	}

	public function getStorageField($storageString) {
		preg_match('/(\d+[GT]B)/i', $storageString, $matches);
		return isset($matches[1]) ? $matches[1] : '';
	}

	public function getStorageType($storageString) {
    preg_match('/(SATA|SSD|SAS)/i', $storageString, $matches);
		return isset($matches[1]) ? strtoupper($matches[1]) : '';
	}
}