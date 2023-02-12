import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'cvicenie1';
	number = 0;
	maximumNumber = 2 ** 8 - 1;
	minimumNumber = 0;

	buttonActive = false;

	
	changeProjectTitle(title: string): void {
		this.title = title;
	}

	updateDecimal(e: HTMLElement): void {
		let bitPosition = Number(e.getAttribute("data-position"));
		this.number += ((e as HTMLInputElement).checked) ? 2 ** bitPosition : (-2) ** bitPosition;
	}

	updateCheckboxes(number: string): void {
		let decimalNumber = Number(number);
		let checkboxes = document.querySelectorAll("[data-position]");
		checkboxes.forEach(e => {
			let binaryNumberPosition = Number(e.getAttribute("data-position"));
			let nthBit = 2**(binaryNumberPosition);
			let result = decimalNumber & (nthBit);
			(e as HTMLInputElement).checked = (result > 0) ? true : false;
		});
		this.number = decimalNumber;
	}

	loadCheckboxes(numberOfBits: number): void {
		let div = document.querySelector('.checkboxes');
		for (let i = numberOfBits - 1; i>=0; i--) {
			let inputElement = document.createElement('input');
			inputElement.type = 'checkbox';
			inputElement.classList.add('bit');
			inputElement.dataset['position'] = i.toString();
			inputElement.addEventListener('input', () => {
				this.updateDecimal(inputElement);
			});
			div?.appendChild(inputElement);
		}
	}

	toggleCssClass(): void {
		this.buttonActive = !this.buttonActive;
	}

	ngOnInit(): void {
		this.loadCheckboxes(8);
	}
}
