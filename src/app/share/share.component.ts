import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hv-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  @Input() icon: boolean;

  params = {
    linkedin: {
      url: encodeURI('https://goo.gl/4gy7Wc'),
      title: encodeURI('L\'assurance 100% numérique'),
      summary: encodeURI('Une assurance 100% numérique qui couvre tous vos objets #insurtech')
    },
    facebook: {
      url: encodeURI('https://goo.gl/SPLfiU')
    },
    twitter: {
      url: encodeURI('https://goo.gl/jOlqSX'),
      msg: encodeURI('Hello Victor est une assurance 100% numérique qui couvre tous vos objets #insurtech')
    },
    gplus: {
      url: encodeURI('https://goo.gl/ZixcFo')
    },
    mail: {
      subject: encodeURI('Hello Victor, l\'assurance 100% numérique'),
      body: encodeURI(`Hello,
    
J’ai pensé qu’Hello Victor http://hellovictor.fr pourrait t’intéresser. C’est une assurance 100% numérique qui couvre tes objets (ex: enceintes, guitares, vélo, smartphone ...), bref tes biens, ton appart. 
Hello Victor calcul une police d’assurance au juste prix et rembourse rapidement en cas de sinistre.
Si tu es soigneux et attentionné ou que simplement tu es né sous une bonne étoile alors tu payes moins cher. Hello Victor est la première assurance à proposer un bonus / malus pour tes objets et ton habitation. Ne payes plus plein tarif toute ta vie sans avoir jamais eu de sinistre. Tu es responsable de la protection de tes objets : t'es récompensé !

A bientôt`)
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
