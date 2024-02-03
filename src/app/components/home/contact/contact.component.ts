import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    public analyticsService: AnalyticsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Copied to Clipboard!');
  }
}
