import { Component } from '@angular/core';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { PageContainerComponent } from './components/pagecontainer/pagecontainer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
})
export class AppComponent {
  title = 'app';
  sideClassIndex = 0;
  sideClass = ['expand', 'coolpase'];
  menuClass = 'expand';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
  /**
   * sideMenuToogle
   */
  public sideMenuToogle() {
    this.sideClassIndex += 1;
    this.sideClassIndex %= 2;
    this.menuClass = this.sideClass[this.sideClassIndex];
  }
}
