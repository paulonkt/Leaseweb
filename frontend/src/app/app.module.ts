import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LocationComponent } from './components/filters/location/location.component';
import { StorageComponent } from './components/filters/storage/storage.component';
import { MemoryComponent } from './components/filters/memory/memory.component';
import { HdComponent } from './components/filters/hd/hd.component';
import { SearchButtonComponent } from './components/filters/search-button/search-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		FiltersComponent,
		LocationComponent,
		StorageComponent,
		MemoryComponent,
		HdComponent,
		SearchButtonComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
