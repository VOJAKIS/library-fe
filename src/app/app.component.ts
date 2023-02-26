import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface CatFact {
  fact: string,
  length: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pageTitle = 'wete3_2023-02-27_zadanie3-bonus';
  catFact: CatFact = {
      fact: '',
      length: 0
  };

  constructor(private http:HttpClient) {}


  loadCatFact() : void {
    const req = this.http.get<CatFact>('https://catfact.ninja/fact');
    req.subscribe((data: CatFact) => {
      this.catFact = data;
      console.log(data);
    });
  }

  ngOnInit() : void {
    this.loadCatFact();
  }
}
