import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHUtT_9jt5iFJct-Wrgz91DpNN9ceZOsdglA&usqp=CAU';
  constructor() { }

  ngOnInit(): void {
  }

}
