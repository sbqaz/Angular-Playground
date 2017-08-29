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

  getWarframe(id: number): Promise<Warframe> {
    return this.getWarframes()
      .then(warframes => warframes.find(warframe => warframe.id === id));

  }
}
