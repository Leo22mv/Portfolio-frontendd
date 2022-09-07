import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public abrirLogin() {
    const login = document.getElementsByClassName("formlogin");
    // login.style.display = "flex";
  }
}
