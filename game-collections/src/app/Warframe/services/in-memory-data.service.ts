import {InMemoryDbService} from "angular-in-memory-web-api";
import {Warframe} from "../warframe";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const warframes: Warframe[] = [
      {id: 0, name: 'Rhino Prime', loadout: 'Solo'},
      {id: 1, name: 'Excalibur', loadout: 'Melee'},
      {id: 2, name: 'Nova Prime', loadout: 'CC'},
      {id: 3, name: 'Nyx Prime', loadout: 'CC'},
      {id: 4, name: 'Ash Prime', loadout: 'Stealth'},
      {id: 5, name: 'Oberon Prime', loadout: 'Support'},
      {id: 6, name: 'Trinity Prime', loadout: 'Support'},
      {id: 7, name: 'Equinox', loadout: 'Nuke'},
      {id: 8, name: 'Limbo', loadout: 'Nuke'},
    ];
    return {warframes};
  }
}
