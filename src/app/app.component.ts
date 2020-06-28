import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'noted-ng-app';
  public url: any;

  public hideTryButton: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
    this.hideTryButton = this.router.url.includes('beta');
  }

  ngOnDestroy(): void {
    this.hideTryButton = this.router.url.includes('beta');
  }

  tryBetaStuff() {
    setTimeout(() => {
      console.log(this.router.url);

      this.hideTryButton = this.router.url.includes('beta');

      // this.router.navigate(['/beta'])

    }, 100);
  }

}
