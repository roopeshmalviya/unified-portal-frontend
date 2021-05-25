import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthenticationService,
            private router:Router) { }

  ngOnInit(): void {
    console.log(this.auth.authtoken);
  }

  onLogout(){
    this.auth.logout()
    this.router.navigateByUrl('/login');
    console.log(this.auth.authtoken);
  }
}
