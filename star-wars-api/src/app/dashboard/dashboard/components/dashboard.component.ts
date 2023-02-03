import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service';

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

  /** Variables, constants, etc declaration */
  selectedStar: string;
  id: string;
  list_of_starWars: starWars[] = [
    { value: 'people', viewValue: 'People' },
    { value: 'films', viewValue: 'Films' },
    { value: 'starships', viewValue: 'Starships' },
    { value: 'vehicles', viewValue: 'Vehicles' },
    { value: 'species', viewValue: 'Species' },
    { value: 'planets', viewValue: 'Planets' }
  ]
  counted_stars: string;
  countedName_searched: string;
  first_name: string;
  first_film: string;
  


  /** Contructor */
  constructor(
    private dataService: DashboardService
    ) {}

  ngOnInit(): void {
    
  }

  /** Display all data in screen
   * 
   * @returns void
   */
  button_Action(): void {
    this.counting_starWars();
    this.search_name();
    this.getFirst_name();
    this.getFirst_film();
  }

  /**
   * Counting selected stars
   * from form-field
   * 
   * @return void
   */
  counting_starWars(): void {
    var query = '/' + this.selectedStar +'/?count'
    this.dataService.get_api(query)
    .subscribe(
      data => {
        this.counted_stars = JSON.stringify(data["count"])
      }
    )
  }

  /**
   *  Count names from API
   * 
   * @return void
   */
  search_name(): void {
    var query = '/' + this.selectedStar +'/?search=' + this.id 
    console.log(query)
    this.dataService.get_api(query)
    .subscribe(
      data => {
        this.countedName_searched = JSON.stringify(data['count']);
      }
    )
  }

  /**
   *  Get name from API
   * 
   * @return void
   */
  getFirst_name(): void {
    var query = '/' + this.selectedStar +'/?search=' + this.id 
    console.log(query)
    this.dataService.get_api(query)
    .subscribe(
      data => {
        this.first_name = JSON.stringify(data['results'][1]["name"]);
      }
    )
  }

  /**
   *  Get film from API
   * 
   * @return void
   */
  getFirst_film(): void {
    var query = '/' + this.selectedStar +'/?search=' + this.id 
    this.dataService.get_api(query)
    .subscribe(
      data => {
        this.get_film(JSON.stringify(data['results'][1]["films"]).slice(23, 32));
      }
    )
    }

  /**
   *  Get ttle of filme from API
   * 
   * @return void
   */
  get_film(film_query: string): void {
    console.log(film_query)
    this.dataService.get_api(film_query)
    .subscribe(
      data => {
        this.first_film =  JSON.stringify(data['title']);
      }
    )
    }
}