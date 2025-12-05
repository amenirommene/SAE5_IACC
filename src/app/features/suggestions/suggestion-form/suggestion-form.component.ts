import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

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
      description: new FormControl("",Validators.required),
      status:new FormControl(),
      date:new FormControl(),
      category:new FormControl("",Validators.required)
    })
  }

}
