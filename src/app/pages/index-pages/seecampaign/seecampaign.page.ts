import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { campaign } from 'src/app/model/campaign';

@Component({
  selector: 'app-seecampaign',
  templateUrl: './seecampaign.page.html',
  styleUrls: ['./seecampaign.page.scss'],
})
export class SeecampaignPage implements OnInit {
  @Input("campaign") campaign: campaign;
  text: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  public exit() {
    this.modalController.dismiss();
  }
}