import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FranqerService } from '../shared/franqer.service';

@Component({
  selector: 'app-franqer-home',
  templateUrl: './franqer-home.component.html',
  styleUrls: ['./franqer-home.component.scss']
})
export class FranqerHomeComponent implements OnInit {

  franqer;
  reviews;

  constructor(
    private franqerService: FranqerService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
  ) { }

  getFirstName(fullName) {
    return fullName && fullName.split(' ')[0];
  }

  ngOnInit() {
    const nickname = this.route.snapshot.paramMap.get('nickname');

    this.franqerService.getFranqer(nickname)
      .subscribe(franqer => {
        if (!franqer) {
          return;
        }

        localStorage.setItem('frankerName', this.getFirstName(franqer.name));

        this.franqer = franqer;

        this.meta.addTag({name: 'og:title', property: 'og:title', content: `Franqer ${franqer.name}`});
        this.meta.addTag({name: 'og:description', property: 'og:description', content: franqer.biography});
        this.meta.addTag({name: 'og:image', property: 'og:description', content: franqer.image.thumbnail});
      });

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
