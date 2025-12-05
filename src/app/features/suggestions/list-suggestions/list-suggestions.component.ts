import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrl: './list-suggegestions.component.css'
})
export class ListSuggestionsComponent {

titre:string = "Liste des suggestions";
placeHolderText : string = "Rechercher une suggestion";
searchT : string = "";
 list : Suggestion[]=[];
addToFavoris(sugg:Suggestion){
  this.list.push(sugg);
  console.log(this.list);
}
Like(sugg:Suggestion){
  if (sugg.nbLikes != null){
  sugg.nbLikes= sugg.nbLikes + 1;
  }
}

suggestions: Suggestion[] = [
{
id: 1,
title: 'Organiser une journée team building',
description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
category: 'Événements',
date: new Date('2025-01-20'),
status: 'acceptee',
nbLikes : 0,
},
{
id: 2,
title: 'Améliorer le système de réservation',
description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
category: 'Technologie',
date: new Date('2025-01-15'),
status: 'refusee'
},
{
id: 3,
title: 'Créer un système de récompenses',
description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
category: 'Ressources Humaines',
date: new Date('2025-01-25'),
status: 'refusee'
},
{
id: 4,
title: 'Moderniser l\'interface utilisateur',
description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
category: 'Technologie',
date: new Date('2025-01-30'),
status: 'en_attente'
},
{
id: 5,
title: 'Formation à la sécurité informatique',
description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
category: 'Formation',
date: new Date('2025-02-05'),
status:'acceptee'
}
]
}
