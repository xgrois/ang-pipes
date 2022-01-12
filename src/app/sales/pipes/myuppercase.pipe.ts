import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myuppercase'
})
export class MyUpperPipe implements PipeTransform {

    transform(text: string, en: boolean = true): string {
        return en ? text.toUpperCase() : text.toLocaleLowerCase();
    }

}