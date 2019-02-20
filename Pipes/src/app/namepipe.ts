import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'nametype' })
export class Name implements PipeTransform {
  transform(stuname: string, gender: string):any {
    var array = stuname.split(' ');
    var newarray = [];

    for(var index = 0; index < array.length; index++){
      newarray.push(array[index].charAt(0).toUpperCase()+array[index].slice(1));
    }
    stuname= newarray.join(' ');

     if(gender=='Male'){
       return "Mr "+stuname;
    }
    else if(gender=='Female') {
      return "Miss "+stuname;

    }
   }
}
