import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, capitalizarPalabra: boolean):any {
        return (capitalizarPalabra)?value.toUpperCase():value.toLowerCase();
    }
}