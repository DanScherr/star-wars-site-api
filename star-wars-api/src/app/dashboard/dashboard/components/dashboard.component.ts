import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DashboardService } from '../service';

declare var google:any;

interface starWars {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  private data: any;

 /**
  list_of_starWars: starWars[] = [
    { value: 'people-0',viewValue: 'People' },
    { value: 'films-1',viewValue: 'Films' },
    { value: 'starships-2',viewValue: 'Starships' },
    { value: 'vehicles-3',viewValue: 'Vehicles' },
    { value: 'species-4',viewValue: 'Species' },
    { value: 'planets-5',viewValue: 'Planets' }
  ]
  */

  constructor(
    private fb: FormBuilder,
    private dataService: DashboardService,
    ) {}

    ngOnInit() {
      this.counting_starWars();
      this.gerarForm();
    }

    gerarForm() {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]], // primeiro campo de texto
        senha: ['', [Validators.required, Validators.minLength(6)]] // segundo campo de texto
      });
    }

    counting_starWars() {
      this.dataService.get_api('/' +  +'/?count')
      .subscribe(
        data => {
          console.log(JSON.stringify(data["count"]))
        }
      )
    }

}