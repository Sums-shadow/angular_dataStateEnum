import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/services/api.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
users$:Observable<AppDataState<User[]>>|null = null;
readonly DataStateEnum = DataStateEnum;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
 
  }
  getAllData(){
    this.users$=this.ApiService.getAllUser().pipe(
      map(data=>{
        console.log(data)
        return ({dataState:DataStateEnum.LOADED, data:data});
      }),
startWith({dataState:DataStateEnum.LOADING}),
catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.mesage}))
    );


  }
}
