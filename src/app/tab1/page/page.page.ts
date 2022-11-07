import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {
  public texto: string;
  public cars: any = [];

  constructor(private activatedRoute: ActivatedRoute, public restService: RestService) { }

  ngOnInit() {
    this.texto = this.activatedRoute.snapshot.paramMap.get("texto");
    this.restService.getCars().subscribe(
      (data) => this.cars = data,
      (error) => alert(error)
    )
  }

}
