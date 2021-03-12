import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction = {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1600493600000
      },
      "transaction": {
        "amountCurrency": {
          "amount": 5000,
          "currencyCode": "EUR"
        },
        "type": "Salaries",
        "creditDebitIndicator": "CRDT"
      },
      "merchant": {
        "name": "Backbase",
        "accountNumber": "SI64397745065188826"
      }
    };
  constructor() { }

  ngOnInit(): void {
  }

  getIcon(merchangeName: string) {
    return './assets/icons/'+merchangeName.toLowerCase().replace(/ /g, '-')+'.png';
  }
}
