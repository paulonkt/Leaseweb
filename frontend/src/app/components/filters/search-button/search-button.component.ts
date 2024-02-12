import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

	@Output() searchClicked = new EventEmitter<void>();
	
  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchClicked.emit();
  }
}
