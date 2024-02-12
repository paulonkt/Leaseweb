import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

	@Input() form!: FormGroup;

	storageValues: { key: number, value: string }[] = [
		{ key: 1, value: '0' },
		{ key: 2, value: '250GB' },
		{ key: 3, value: '500GB' },
		{ key: 4, value: '1TB' },
		{ key: 5, value: '2TB' },
		{ key: 6, value: '3TB' },
		{ key: 7, value: '4TB' },
		{ key: 8, value: '8TB' },
		{ key: 9, value: '12TB' },
		{ key: 10, value: '24TB' },
		{ key: 11, value: '48TB' },
		{ key: 12, value: '72TB' }
	];

	selectedKey: number | null = 1;

	constructor() { }

	ngOnInit(): void {
		if (this.selectedKey === null) {
			this.selectedKey = 1;
		}
	}

	getValueForKey(key: number): string {
		if (key === 1) return '';
		const selectedValue = this.storageValues.find(item => item.key === key);
		return selectedValue ? selectedValue.value : '';
	}

	onSliderInput(event: any): void {
		this.selectedKey = +event.target.value;
		this.form.controls['storage'].setValue(this.getValueForKey(this.selectedKey));
	}

}
