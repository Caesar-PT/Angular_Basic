import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {


  ngOnInit(): void {
  }

  petName = 'puppie';
    petImage = 'https://image-us.eva.vn/upload/2-2019/images/2019-04-25/16-1556196926-223-width800height1067.jpg';
    constructor() { }

    updateName(name) {
        this.petName = name;
    }

    updateImage(image) {
        this.petImage = image;
    }

}
