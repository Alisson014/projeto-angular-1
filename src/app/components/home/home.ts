import { Component, inject } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private sendFormService = inject(SubmitFormService);

  name:string = "Alisson";

  mustShowTitle:boolean = false;

  updateName(name: string){
    this.name = name;
  }

  submit(){
    // alert("injeção de método em button");
    this.sendFormService.sendToBackend(this.name);
    this.mustShowTitle = !this.mustShowTitle;
  }
}
