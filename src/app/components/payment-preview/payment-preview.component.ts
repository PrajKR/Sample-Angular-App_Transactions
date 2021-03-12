import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentModel } from '../../models/payment.model';

@Component({
  selector: 'app-payment-preview',
  templateUrl: './payment-preview.component.html',
  styleUrls: ['./payment-preview.component.scss']
})
export class PaymentPreviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PaymentModel) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
