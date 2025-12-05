import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {

  id! : number ;
constructor(private ac:ActivatedRoute){
  console.log("constructor");
}
ngOnInit(){
 console.log("ngOnInit");
 //this.id=this.ac.snapshot.params['id'];
 this.ac.paramMap.subscribe(params=>{this.id=Number(params.get('id')); console.log(params)});
 // this.ac.params.subscribe(params=>this.id=Number(params['id']));
}
}
