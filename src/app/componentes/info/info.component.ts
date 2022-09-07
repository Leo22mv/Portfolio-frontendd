import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  miportfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => this.miportfolio=data)
  }
  public editarNombre() {
    let nombree:any = document.getElementById("nombre");
    let inputt:any = document.getElementsByClassName("inpnombre")
    let tildee:any = document.getElementById("tilnombre");
    nombree.style.display = "none";
    inputt.style.display = "flex";
    tildee.style.display = "flex";
  }
}
