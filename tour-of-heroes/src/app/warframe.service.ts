import {Injectable} from "@angular/core";
import {Warframe} from "./warframe";
import {WARFRAMES} from "./mock-warframes";

@Injectable()
export class WarframeService{

  getWarframes(): Promise<Warframe[]> {
    return Promise.resolve(WARFRAMES);
  }

  getWarframesSlowly(): Promise<Warframe[]> {
    return new Promise(resolve => {
      setTimeout(() =>resolve(this.getWarframes()), 2000);
    });
  }
}
