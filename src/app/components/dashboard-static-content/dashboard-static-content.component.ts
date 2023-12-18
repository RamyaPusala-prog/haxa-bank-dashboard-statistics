import { Component } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';

@Component({
  selector: 'app-dashboard-static-content',
  templateUrl: './dashboard-static-content.component.html',
  styleUrls: ['./dashboard-static-content.component.scss']
})
export class DashboardStaticContentComponent {
  listItems = Constants.staticList
}
