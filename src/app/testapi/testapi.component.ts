import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {
  data :any
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiservice.getapidata().subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }

}
