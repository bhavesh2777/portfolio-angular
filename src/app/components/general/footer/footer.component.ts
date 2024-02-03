import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  query,
  stagger,
  animate,
  style,
  transition,
} from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('animateFooter', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(100%)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class FooterComponent implements OnInit {
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
