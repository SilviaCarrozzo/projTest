import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dettaglio',
  styleUrls: ['./dettaglio.component.scss'],
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent {
  drink: any = {};
  fact: any;
  indexFact: string = '';
  imageSource = environment.imageSource;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const queryString = window.location.pathname;
    this.indexFact = queryString.split('/')[2];
    this.fact = history.state;
  }
}

/**
 * this.route.data.subscribe(
      ({fact}) => {
        console.log("fact: ", fact);
        this.fact = fact;
      });
 */
