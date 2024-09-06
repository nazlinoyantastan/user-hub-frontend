import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value.replace(/(^\w{1}|\.\s*\w{1})/g, (match) => match.toUpperCase());
  }
}
