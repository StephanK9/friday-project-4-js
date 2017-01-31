import {Pipe, PipeTransform} from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: "status",
  pure: false
})

export class StatusPipe implements PipeTransform {

  transform(input: Member[], desiredStatus) {
    var output: Member[] = [];
    if(desiredStatus === "onlineStatus") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].status === "Online") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStatus === "offlineStatus") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].status === "Offline") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
