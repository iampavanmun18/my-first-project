import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdINR'
})
export class UsdINRPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
