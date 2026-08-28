import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name:string = "Alisson";

  mustShowTitle:boolean = false;

  updateName(name: string){
    this.name = name;
  }

  submit(){
    // alert("injeção de método em button");
    this.mustShowTitle = !this.mustShowTitle;
  }
}
