import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrl: './list-suggegestions.component.css',
  //providers: [SuggestionService]
})
export class ListSuggestionsComponent {


constructor(private SugService:SuggestionService) { }
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
suggestions: Suggestion[] = [];
ngOnInit(){

//this.suggestions=this.SugService.getSuggestionsList();
this.SugService.getAllSuggestions().subscribe({
  next: res=>this.suggestions=res,
  error: err=>console.log("Erreur: " + err.message),
  complete: ()=>console.log("done")
})
}
}
