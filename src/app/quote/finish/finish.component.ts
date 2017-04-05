import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hv-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mail(): string {
    return `Hello,
    
J’ai pensé qu’Hello Victor http://hellovictor.fr pourrait t’intéresser. C’est une assurance en ligne qui couvre tes objets (ex: enceintes, guitares, vélo, smartphone ...), bref tes biens, ton appart. 
Hello Victor calcul une police d’assurance au juste prix et rembourse rapidement en cas de sinistre.
Si tu es soigneux et attentionné ou que simplement tu es né sous une bonne étoile alors tu payes moins cher. Hello Victor est la première assurance à proposer un bonus / malus pour tes objets et ton habitation. Ne payes plus plein tarif toute ta vie sans avoir jamais eu de sinistre. Tu es responsable de la protection de tes objets : t'es récompensé !

a+`;
  }

}
