import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  version: string;

  constructor() {
    this.title = 'iP1 Admin';
    this.version = "dev-0"
  }

  ngOnInit(): void { }

}
