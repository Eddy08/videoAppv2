import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../shared/backend-api.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(private dataService:BackendApiService){}
  responseData:any;
  ngOnInit(): void {
  }
  getData(){
    this.dataService.getData().subscribe(
      (data)=>this.responseData=data,
      (err:any)=> console.error("Error while fetch teh response => ",err),
      ()=> console.log("Completed ! Response -> ",this.responseData)
    );
  }
}
