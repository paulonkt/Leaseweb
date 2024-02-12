import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

	formFilter: FormGroup = new FormGroup({});

	error: string = '';

	constructor(
		private fb: FormBuilder,
		private dataService: DataService
	) {
		this.formFilter = this.fb.group({
			storage: [''],
			hdType: [''],
			memory: [''],
			location: ['']
		});
	}

	ngOnInit(): void {
	}

	onSubmit() {
		const formValues = this.formFilter.value;
		console.log('filters on search: ', formValues);
		
		const isValid = Object.values(formValues).some(value => value);

		if (isValid) {
			this.dataService.updateFilters(formValues);
			this.error = '';
		} else {
			this.error = 'At least one option must be selected.';
		}
		
	}
}
