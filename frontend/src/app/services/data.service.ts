import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IFilter } from '../interfaces/ifilter';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private apiUrl = environment.apiUrl;

	private filtersSubject = new BehaviorSubject<IFilter>({
		storage: '',
		memory: '',
		hdType: '',
		location: ''
	});
	filters$ = this.filtersSubject.asObservable();
	
	constructor(private http: HttpClient) {}

	getServers(filters: IFilter): Observable<any> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
		});

		const params = new HttpParams()
			.set('storage', filters.storage)
			.set('hdType', filters.hdType)
			.set('memory', filters.memory)
			.set('location', filters.location);

		return this.http.get<any>(this.apiUrl+'/servers.php', { headers, params });
	}

	getLocations(): Observable<any> {
		return this.http.get<any>(this.apiUrl+'/locations.php');
	}

	getFilters(): Observable<IFilter> {
		return this.filters$;
	}

	updateFilters(newFilters: IFilter): void {
		this.filtersSubject.next(newFilters);
	}

}