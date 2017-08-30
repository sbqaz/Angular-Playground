import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {WarframeSearchService} from "../services/warframe-search.service";
import {Warframe} from "../warframe";

@Component({
  selector: 'warframe-search',
  templateUrl: './styling/warframe-search.component.html',
  styleUrls:  ['./styling/warframe-search.component.css'],
  providers: [WarframeSearchService]
})

export class WarframeSearchComponent implements OnInit {

  warframes: Observable<Warframe[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private warframeSearchService: WarframeSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.warframes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.warframeSearchService.search(term)
        : Observable.of<Warframe[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Warframe[]>([]);
      });
  }

  gotoDetail(warframe: Warframe): void {
    let link = ['/detail', warframe.id];
    this.router.navigate(link);
  }
}
