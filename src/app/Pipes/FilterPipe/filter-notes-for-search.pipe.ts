import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNotesForSearch'
})
export class FilterNotesForSearchPipe implements PipeTransform {

  transform(value: any[], args: any) {
    console.log(value,args);
    if (!args) {
      return value;
    }
    return value.filter((data:any) =>{
      return data.title.toLowerCase().includes(args) || data.description.toLowerCase().includes(args)
    })
  }
}
