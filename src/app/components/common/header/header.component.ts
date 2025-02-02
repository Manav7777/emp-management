import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSearchBar = false;
  constructor(private router:Router) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.showSearchBar = router.url === '/'
      }
    })
  }

  ngOnInit(): void {
  }

}
