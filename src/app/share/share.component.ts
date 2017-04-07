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
      url: encodeURIComponent('https://goo.gl/4gy7Wc'),
      title: encodeURIComponent('L\'assurance 100% numérique'),
      summary: encodeURIComponent('J’ai pensé qu’Hello Victor http://hellovictor.fr pourrait vous intéresser. C’est une assurance 100% numérique qui couvre vos objets (ex: enceintes, guitares, vélo, smartphone ...), bref vos biens, votre logement. Hello Victor calcul une police d’assurance au juste prix et rembourse rapidement en cas de sinistre. Si vous êtes soigneux, attentionné ou comme je le pense simplement né sous une bonne étoile alors vous payerez votre assurance moins cher. Hello Victor est la 1ère assurance à proposer un bonus / malus pour vos objets et votre habitation. Ne payez plus le plein tarif toute votre vie sans avoir jamais eu de sinistre. #Insurtech #assurance #HelloVictor')
    },
    facebook: {
      url: encodeURIComponent('https://goo.gl/SPLfiU')
    },
    twitter: {
      url: encodeURIComponent('https://goo.gl/jOlqSX'),
      msg: encodeURIComponent('Hello Victor est une assurance 100% numérique qui couvre tous vos objets #insurtech')
    },
    gplus: {
      url: encodeURIComponent('https://goo.gl/ZixcFo')
    },
    mail: {
      subject: encodeURIComponent('Hello Victor, l\'assurance 100% numérique'),
      body: encodeURIComponent(`Hello,
    
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
