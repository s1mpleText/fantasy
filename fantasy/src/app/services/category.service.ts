import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

const CATEGORY_API = 'http://localhost:8080/api/category/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(public http: HttpClient) { }


  findAll(): Observable<any> {
    return this.http.get(CATEGORY_API + 'findAll', httpOptions);
  }
  findFirst(): Observable<any> {
    return this.http.get(CATEGORY_API + 'findFirst', httpOptions);
  }
  findSecond(catalog_child_id: any): Observable<any> {
    return this.http.get(CATEGORY_API + 'findSecond' + `/${catalog_child_id}`, httpOptions);
  }
  findThird(catalog_child_id: any): Observable<any> {
    return this.http.get(CATEGORY_API + 'findThird' + `/${catalog_child_id}`, httpOptions);
  }
}
