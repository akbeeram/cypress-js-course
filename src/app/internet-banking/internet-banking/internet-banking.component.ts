import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-banking',
  templateUrl: './internet-banking.component.html',
  styleUrls: ['./internet-banking.component.less']
})
export class InternetBankingComponent implements OnInit {

  public openAccordions: number[] = [];
  public currentBalanceTab: number = 0;

  ngOnInit(): void {

  }
  public openAccAccordion(i: number) {
    // var el = document.getElementById('acc_' + i);
    // var display = el.style.display;
    // el.style.display = display == "block" ? 'none' : 'block';
    if (this.openAccordions.includes(i)) {
      this.openAccordions.splice(this.openAccordions.indexOf(i), 1)
      // let el = document.getElementById('acc_' + i).parentElement;
      // el.style.backgroundImage = ''
    } else {
      this.openAccordions.push(i)
      // let el = document.getElementById('acc_' + i).parentElement;
      // el.style.backgroundImage = 'linear-gradient(lightblue, transparent)'
    }
  }
}
