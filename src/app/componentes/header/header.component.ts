import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('formlogin') formularioLogin!: ElementRef;

  // @Output() btnClick = new EventEmitter()

  loginVisible: boolean = false;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
  }

  // mostrarLogin: boolean = false;

  // public abrirLogin() {
  //   this.mostrarLogin = true;
  // }

  onClick() {
    const formloginn = this.formularioLogin.nativeElement;
    if (this.loginVisible==true) {
      this.renderer2.setStyle(formloginn, "display", "none");
      this.loginVisible = false;
    } else {
      this.renderer2.setStyle(formloginn, "display", "inline");
      this.loginVisible = true;
    }
    console.log("funca");

  }
}