import { Trainer } from './../../models/Trainer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: Trainer;
  // Might want to add the link to their team.

  constructor() { }

  ngOnInit(): void {
  }

}
