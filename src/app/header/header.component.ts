import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  icon01 = "../assets/images/icon-tab-1.svg"
  icon02 = "../assets/images/icon-tab-3.svg"
  icon03 = "../assets/images/icon-tab-2.svg"
  icon04 = "../assets/images/icon-tab-4.svg"

  logoClarifion = "../assets/images/clarifion-logo.svg"
  logoMcAfee = "../assets/images/mcafee-logo.svg"
  logoNorton = "../assets/images/norton-logo.svg"
}
