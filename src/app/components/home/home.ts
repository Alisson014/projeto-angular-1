import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  @Input() firstName!: string;
  @Output() emitedName = new EventEmitter<string>();

  mustShowTitle:boolean = false;

  updateName(name: string){
    this.name = name;
  }

  submit(){
    // alert("injeção de método em button");
    this.emitedName.emit(this.name);
    this.sendFormService.sendToBackend(this.name);
    this.mustShowTitle = !this.mustShowTitle;
  }
}
