import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  constructor(private http: HttpClient) { }

  postData(loc: string){
    // return this.http.post('http://localhost:9000/book', {id: data, qr_code: qrcode});
    return this.http.post('http://localhost:3000/getWeather', {location: loc});

  }
}
