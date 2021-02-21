import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { character } from 'src/app/model/character';

@Component({
  selector: 'app-seecharacter',
  templateUrl: './seecharacter.page.html',
  styleUrls: ['./seecharacter.page.scss'],
})
export class SeecharacterPage implements OnInit {
  @Input("character") character: character;
  text: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  public exit() {
    this.modalController.dismiss();
  }
}
