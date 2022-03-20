import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class BackendApiService {
  constructor(private http:HttpClient){}
 baseUrl="https://www.googleapis.com/youtube/v3/";
 key="key=AIzaSyB1FD2jXYz3lHDW0FFYvuHgcKecXqShzzM";
  part="snippet";
 maxResults=3;
 q="LiveOverflow"
 url =this.baseUrl+ "search?"+this.key+"&part="+this.part+"&maxResults="+this.maxResults+"&q="+this.q;
  getData():Observable<any>{

    return this.http.get<any>(this.url);
  }
 
}
