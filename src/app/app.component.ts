import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  title = 'user-hub';
  isLoading$ = this.loadingService.loading$; // Yüklenme durumunu dinle

  constructor(
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngAfterContentChecked() {
    // Değişiklik algılama burada güvenli bir şekilde yapılır
    this.cdr.detectChanges();
  }
}
