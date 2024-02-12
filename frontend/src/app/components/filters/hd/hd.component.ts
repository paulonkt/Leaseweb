import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hd',
  templateUrl: './hd.component.html',
  styleUrls: ['./hd.component.scss']
})
export class HdComponent implements OnInit {

	@Input() form!: FormGroup;

	hdTypeValues: string[] = [
		'SAS',
		'SATA',
		'SSD'
	];

  constructor() { }

  ngOnInit(): void {
  }

}
