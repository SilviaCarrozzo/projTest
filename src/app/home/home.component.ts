import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from '../_services/api.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catsFacts: any = [];
  imageSource = environment.imageSource;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.apiService.getFacts()
      .subscribe( (response: any) => {
            this.catsFacts = response.data;
            console.log("catsFacts: ", this.catsFacts);
    });
  }

}
