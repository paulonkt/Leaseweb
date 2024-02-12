import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

	@Input() form!: FormGroup;

	locations: [] = [];

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.dataService.getLocations().subscribe(
			data => {
				this.locations = data;
			},
			error => {
				console.error('Error fetching locations:', error);
			}
		);
	}

}
