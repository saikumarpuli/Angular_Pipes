
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'phonetype' })
export class Phone implements PipeTransform {
  transform(phoneno: any):any {
    let phone1=phoneno.toString().slice(0,3);
    let phone2=phoneno.toString().slice(3);
    return phone1+"-"+phone2;
  }
}



