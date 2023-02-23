import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

interface Fact {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fact: Fact = {
    fact: '',
    length: 0
  };

  constructor(private http:HttpClient) {
  }

  refresh(): void {
    const url = 'https://catfact.ninja/fact';
    const req = this.http.get<Fact>(url);
    req.subscribe((data: Fact) => { 
      this.fact = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
}
