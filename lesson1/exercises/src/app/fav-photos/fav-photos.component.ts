import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://pixabay.com/get/54e7d5434353a814f6d1867dda3536781538dbed5155744b_1920.jpg';
  image3 = 'https://pixabay.com/get/52e7d5474d55ad14f6d1867dda3536781538dbed5152764a_1920.jpg';

  constructor() { }

  ngOnInit() {
  }

}