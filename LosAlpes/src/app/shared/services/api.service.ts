import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any) {
    if(options)
      return this.http.get(`${url}`, options);
    return this.http.get(`${url}`);
  }

  getFile(url: string, options: any = { responseType: 'blob'}) {
    return this.http.get(`${url}`, options);
  }

  getReport(url: string, options: any = { responseType: 'blob'}) {
      return this.http.get(`${url}`, options);
  }

  postReport(url: string, payload? : any, options: any = { responseType: 'blob'}) {
    return this.http.post(`${url}`, payload,  options);
  }

  post(url: string, payload?: any, options?: any) {
    if(options)
      return this.http.post(`/${url}`, payload, options);
    return this.http
      .post(`${url}`, payload);
  }

  put(url: string, payload?: any, options?: any) {
    if(options)
      return this.http.put(`${url}`, payload, options);
    return this.http
      .put(`${url}`, payload);
  }

  delete(url : string, payload?: any) {
    return this.http
      .delete(`${url}`, payload);
  }
}
