import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from '../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  catsFacts: any = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.apiService.getFacts()
      .subscribe( (response: any) => {
            this.catsFacts = response.data;
            console.log("catsFacts: ", this.catsFacts);
    });
  }

}

// this.route.data.subscribe(
    //   ({drink}) => {
    //     this.drink = drink.drinks[0];
    //   });
