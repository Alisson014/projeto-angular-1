import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitFormService {

  sendToBackend(info: string){
    alert(info);
  }
}
