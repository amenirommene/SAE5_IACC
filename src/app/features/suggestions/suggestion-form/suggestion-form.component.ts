import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

  constructor(private serviceSugg:SuggestionService, private _router:Router) { }
  myForm! : FormGroup;
categories: string[] = [
'Infrastructure et bâtiments',
'Technologie et services numériques',
'Restauration et cafétéria',
'Hygiène et environnement',
'Transport et mobilité',
'Activités et événements',
'Sécurité',
'Communication interne',
'Accessibilité',
'Autre'
];

  ngOnInit(){
    this.myForm=new FormGroup({
      title:new FormControl("", [Validators.required,Validators.minLength(5),Validators.pattern('^[A-Z][a-zA-Z]*$')]),
      description: new FormControl("",[Validators.required, Validators.minLength(30)]),
      status:new FormControl("pending"),
      date:new FormControl(new Date()),
      category:new FormControl("",Validators.required)
    })
  }
  onSubmit(){
  this.serviceSugg.addSuggestion(this.myForm.value).subscribe(
    ()=>this._router.navigate(['/suggestions']));
  }

}
