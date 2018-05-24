import { IBook } from './../interface/IBook.class';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(books: IBook[], ...args: any[]): any {
        const keyword = args[0];
        return books.filter(b => b.name.toLowerCase().includes(keyword));
    }
}
