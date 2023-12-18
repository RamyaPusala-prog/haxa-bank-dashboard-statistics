import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() handleClose = new EventEmitter<any>;

  handleHeaderClose() {
    this.handleClose.emit()
  }
}
