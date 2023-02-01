import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private flashlight: Flashlight) {}

  status: string = 'Turn on';

  switcher: boolean = false;

  toggleFlash() {
    if (this.switcher == false) {
      this.flashlight.switchOn();
      this.status = 'TURN OFF';
      this.switcher = true;
    } else {
      this.flashlight.switchOff();
      this.status = 'TURN ON';
      this.switcher = false;
    }
  }
}
