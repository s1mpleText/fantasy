import { Component, OnInit } from '@angular/core';
import {CatalogComponent} from "../catalog/catalog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(CatalogComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100%'
    });

    function show() { // подшаманить надо
      // @ts-ignore
      document.querySelector('.cdk-global-overlay-wrapper').setAttribute('style', 'opacity: 1')
    }
    window.setTimeout(show, 150)
  }
}
