import {Pipe, PipeTransform} from 'angular2/core';

var wordlist = {
  'Leikvöllur':'Playground',
  'Skrif':'Writing',
  'vikna':'weeks',
  'árs':'years',
  'daga':'days',
  'mánaða':'months',
  'Um Frisbski':'About',
  'Reglur':'Rules',
  'Viðburðir':'Events',
  'Algrím':'Algorithms'
}

@Pipe({name: 'translate'})
export class LanguagePipe implements PipeTransform {
  transform(input:string, args:string[]) : any {
    if(args[0] === 'english'){
      return wordlist[input]?wordlist[input]:input;
    }
    return input;
  }
}
