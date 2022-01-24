import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  public isCollapsedHelp1 : boolean = true;
  public isCollapsedHelp2 : boolean = true;
  public isCollapsedHelp3 : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



}
