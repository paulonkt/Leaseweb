<?php

Class Filter {

	public static function extractFilters($postData, $keys) {
		$filters = [];

		foreach ($keys as $key) {
			$filters[$key] = isset($postData[$key]) ? $postData[$key] : null;
		}

		if (count(array_filter($filters)) === 0) {
			http_response_code(500);
			echo json_encode(['error' => 'One filter field is needed at least']);
			exit();
		}

		return $filters;
	}

}