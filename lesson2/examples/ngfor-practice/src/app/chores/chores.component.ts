import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

   chores = [
      {
         title: "Yesterday's Chores", 
         tasks: ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy Groceries']
      },
         
      {
         title: "Today's Chores", 
         tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy Groceries That You Forgot']
      },

      {
         title: "Tomorrow's Chores", 
         tasks: ['Empty dishwasher again', 'Play with LaunchCode practice code', 'Groceries again']
      }
   ];


   constructor() { }

   ngOnInit() {
   }

}
