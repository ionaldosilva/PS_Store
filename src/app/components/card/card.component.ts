import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gametype:string = ""
  @Input()
  price:string = ""


  constructor(){}
  ngOnInit(): void {
      
  }

}
