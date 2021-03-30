import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/abc85213-9152-11eb-9cac-bfa5b427cdaf')
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=349fb782696d01fcfc347b69ea114600');
  }
}
