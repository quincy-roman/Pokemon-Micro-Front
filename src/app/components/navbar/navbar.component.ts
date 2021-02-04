import { LoginService } from './../../services/login.service';
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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  // Get the current trainer.
  assignUser(): void {
    this.loginService.getTrainer().subscribe(user => {
      this.user = user;
    });
  }

}
