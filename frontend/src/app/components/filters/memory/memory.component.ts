import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

	@Input() form!: FormGroup;

	memoryValues: any[] = [
		{ key: 1, value: '2GB', checked: false },
		{ key: 2, value: '4GB', checked: false },
		{ key: 3, value: '8GB', checked: false },
		{ key: 4, value: '12GB', checked: false },
		{ key: 5, value: '16GB', checked: false },
		{ key: 6, value: '24GB', checked: false },
		{ key: 7, value: '32GB', checked: false },
		{ key: 8, value: '48GB', checked: false },
		{ key: 9, value: '64GB', checked: false },
		{ key: 10, value: '96GB', checked: false },
	];

	constructor() { }

	ngOnInit(): void {
	}

	toggleCheckbox(index: number): void {
		this.memoryValues[index].checked = !this.memoryValues[index].checked;

		const checkedValues = this.memoryValues
			.filter(option => option.checked)
			.map(option => option.value);
		this.form.controls['memory'].setValue(checkedValues.join(', '));
	}
}
