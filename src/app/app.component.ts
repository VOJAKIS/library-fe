import { Component, ɵconvertToBitFlags } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Atribúty
  pageTitle = 'wete3_zadanie_2023-02-13';
  decimalNumber = 0;
  minimalInput : number = 0;    // ošetrenie čísla menšieho ako 0
  maximalInput : number = 255;  // 2^8 - 1


  // Vytvorenie checkboxov -> Binary Number
  createCheckboxes(bitsAmount: number) : void {
    let output = document.querySelector('.bits-selector');
    for (let i = bitsAmount - 1; i >= 0; i--) {
      let bit = document.createElement('input');
      bit.type = 'checkbox';
      bit.classList.add('bit-selector');
      bit.dataset['bit'] = i.toString();
      bit.addEventListener('input', () => {
        this.updateDecimal();
      });
      output!.appendChild(bit);
    }
  }


  // Premena desiatkového čísla na binárne a aktivácia checkboxov
  updateBits(value: string) : void {
    value = this.minimalInput > Number(value) || this.maximalInput < Number(value) ? '0' : value;
    let binaryNumber = parseInt(value).toString(2).padStart(8,'0').split('');
    console.log(binaryNumber);
    let bits = document.querySelectorAll('[data-bit]');
    console.log(bits.length);
    for(let i = 0; i < bits.length; i++) {
      console.log(i);
      (bits[i] as HTMLInputElement).checked = (binaryNumber[i] == '1') ? true : false;
    }
    this.decimalNumber = Number(value);
  }


  // Zmena v checkboxoch (zmena desiatkového čísla)
  updateDecimal() : void {
    // Teoreticky by stačilo volať len po index meneného checkboxu pre rýchlejší kód, ale tu je len maximálne 8 bitový vstup (8 checkboxov)
    let bits = document.querySelectorAll('[data-bit]');
    let temp = Array(bits.length).fill(0);
    bits.forEach((bit, i) => {
      temp[i] = ((bit as HTMLInputElement).checked ? 1 : 0);
    });
    temp = temp.reverse().map((num, index) => num * (2 ** index));
    this.decimalNumber = temp.reduce((prev, curr) => prev + curr);
  }


  // Vytvorenie tlačidiel po načítaní stránky
  ngOnInit() : void {
    this.createCheckboxes(8);
  }

}