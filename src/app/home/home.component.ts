import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reviews;
  
  constructor() { }

  ngOnInit() {
    // Substituir por uma chamada a API no futuro
    this.reviews = [
      {
        name: "Catia Ramos",
        kind: "Cliente",
        image: "/assets/images/catia.png",
        text: "Etiam augue nisl, viverra quis tellus non, sollicitudin ornare arcu. Donec vitae sodales erat. Nunc eu pulvinar eros. Curabitur dictum dignissim ante eget laoreet. Donec a diam at est faucibus fermentum."
      },
      {
        name: "João Dorneles",
        kind: "Cliente",
        image: "/assets/images/joao.png",
        text: "Nam mi neque, dignissim nec tincidunt nec, cursus ac nisi. Nulla rutrum eu justo vitae dictum. Pellentesque ac nunc imperdiet urna rhoncus bibendum. Praesent id ipsum vitae augue suscipit mollis. Aenean malesuada mi vitae mi volutpat."
      },
      {
        name: "Flávia Pereira",
        kind: "Cliente",
        image: "/assets/images/flavia.png",
        text: "Curabitur condimentum nibh quis massa elementum sollicitudin. Donec placerat maximus condimentum. Donec ultrices turpis felis, at condimentum ligula rutrum, proin sit amet sapien eget eros viverra porta."
      },
      {
        name: "Catia Ramos",
        kind: "Cliente",
        image: "/assets/images/catia.png",
        text: "Etiam augue nisl, viverra quis tellus non, sollicitudin ornare arcu. Donec vitae sodales erat. Nunc eu pulvinar eros. Curabitur dictum dignissim ante eget laoreet. Donec a diam at est faucibus fermentum."
      },
      {
        name: "João Dorneles",
        kind: "Cliente",
        image: "/assets/images/joao.png",
        text: "Nam mi neque, dignissim nec tincidunt nec, cursus ac nisi. Nulla rutrum eu justo vitae dictum. Pellentesque ac nunc imperdiet urna rhoncus bibendum. Praesent id ipsum vitae augue suscipit mollis. Aenean malesuada mi vitae mi volutpat."
      },
      {
        name: "Flávia Pereira",
        kind: "Cliente",
        image: "/assets/images/flavia.png",
        text: "Curabitur condimentum nibh quis massa elementum sollicitudin. Donec placerat maximus condimentum. Donec ultrices turpis felis, at condimentum ligula rutrum, proin sit amet sapien eget eros viverra porta."
      }
    ];
  }

}
