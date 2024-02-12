import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IList } from 'src/app/interfaces/ilist';
import { IFilter } from 'src/app/interfaces/ifilter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	loading = true;
	data: IList[] = [];
	isValid = false;

	displayedColumns: string[] = ['Model', 'RAM', 'Storage', 'Location', 'Price'];

	constructor(
		private dataService: DataService
	) { }

  ngOnInit(): void {
		this.dataService.getFilters().subscribe((newValue) => {
			this.isValid = Object.values(newValue).some(value => !!value.trim());

			if (this.isValid) {
				this.listServers(newValue);
			}
		});
	}

	listServers(filters: IFilter) {
		this.dataService.getServers(filters).subscribe(
			(response) => {
				this.data = response;
				console.log('ok: ', response);
			},
			(error) => {
				console.error('error: ', error);
			}
		);
	}
}