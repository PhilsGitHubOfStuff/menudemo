import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { trigger,style,transition,animate,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
  
	trigger('cards', [
		transition(":enter", [
		style({ opacity: 0 }),
		animate(500, style({ opacity: 1 }))
		]),
		transition(":leave", [
		animate(500, style({ opacity: 0 }))
		])
    ])
  
  ]
})
export class NavbarComponent implements OnInit {

	cards: Card[] = [
		{name: 'Coffee', image_url:'./assets/img/coffee.jpg'},
		{name: 'Iced Tea', image_url:'./assets/img/icedtea.jpg'},
		{name: 'Pancakes', image_url:'./assets/img/pancakes.jpg'},
		{name: 'Waffles', image_url:'./assets/img/waffles.jpg'},
		{name: 'BLT', image_url:'./assets/img/blt.jpg'},
		{name: 'Pizza', image_url:'./assets/img/pizza.jpg'}
	];

  constructor() { }

  ngOnInit() {
  }
  
  // Get breakfast
	getBreakfast() {
		this.cards = [];
		this.cards = [
		{name: 'Pancakes', image_url:'./assets/img/pancakes.jpg'},
		{name: 'Waffles', image_url:'./assets/img/waffles.jpg'},
		{name: 'Bacon and Eggs', image_url:'./assets/img/baconeggs.jpg'},
		{name: 'Breakfast Wrap', image_url:'./assets/img/breakfastwrap.jpg'}
		]
	}
	
	// Get lunch and dinner
	getLunchDinner() {
		//this.cards = [];
		this.cards = [
		{name: 'Hamburger', image_url:'./assets/img/hamburger.jpg'},
		{name: 'Pizza', image_url:'./assets/img/pizza.jpg'},
		{name: 'BLT', image_url:'./assets/img/blt.jpg'},
		{name: 'Salad', image_url:'./assets/img/salad.jpg'}
		]
	}
	
	// Get Drinks
	getDrinks() {
		//this.cards = [];
		this.cards = [
		{name: 'Coffee', image_url:'./assets/img/coffee.jpg'},
		{name: 'Iced Tea', image_url:'./assets/img/icedtea.jpg'}
		]
	}
	
	removeItem(i) {
		this.cards.splice(i, 1);
	}

}
