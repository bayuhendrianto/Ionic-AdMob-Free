import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private admobFree: AdMobFree,
  ) {

  }

  ionViewWillEnter() {
    this.showBanner();
  }

  showBanner() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        // id: '',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      const result = this.admobFree.banner.prepare();
      console.log('Result :', result);

      setTimeout(() => {
        this.showInterstitialAd();
      }, 10000);

      // this.showInterstitialAd();
    } catch (error) {
      console.log('Error :', error);
    }
  }

  async showInterstitialAd() {
    try {
      const config : AdMobFreeInterstitialConfig = {
        // id : '',
        isTesting : true,
        autoShow : true
      }

      this.admobFree.interstitial.config(config)
      const result = this.admobFree.interstitial.prepare();
      console.log(result);
      
    } catch (error) {
      console.log('Error', error)
    }
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.showBanner()
      refresher.complete();
    }, 2000);
  }

}
