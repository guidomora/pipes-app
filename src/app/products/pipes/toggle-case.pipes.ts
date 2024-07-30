import { Pipe, PipeTransform } from '@angular/core';


// The use is the same as a common pipe

// Decorator to declare a pipe
@Pipe({
    name: 'toggleCase'
})

// PipeTransform method to do the visual transformation of the data
export class ToggleCase implements PipeTransform {
    transform(value: string) : string {
        return value.toUpperCase()
    }
}