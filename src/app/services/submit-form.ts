import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitFormService {

  sendToBackend(info: string){
    console.log(info);
  }
}
