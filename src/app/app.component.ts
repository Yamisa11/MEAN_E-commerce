import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';

  products : any[] = []

  constructor( private  apiServive : ApiService){}

  ngOnInit(): void {
    this.apiServive.getProducts().subscribe(data => {
      this.products = data;
      console.log(data)
    })
  }
}
