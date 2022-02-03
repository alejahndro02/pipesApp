import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'powerFly'
})
export class PowerFly implements PipeTransform{
    transform(valor:boolean):string {
        return (valor)?'vuela':'no vuela'
    }
    
}