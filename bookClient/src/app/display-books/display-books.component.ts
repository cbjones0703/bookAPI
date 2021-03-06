import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-display-books', 
    // template: 
    // `<h1>This works!</h1>`
    templateUrl: './display-books.component.html',
    styleUrls: ['./display-books.component.css']
})

export class DisplayBooks implements OnInit{
    public _book = {}
    public ratings = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
    ngOnInit() {
        this._book['rating'] = this.ratings[ this._book['rating'] - 1]
    }

    @Input()
    set libro(script: any) {
        this._book = (script)
    }
    get libro() : any {
        return this._book
    }
}