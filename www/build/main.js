webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Onay2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__egitim_b_lgileri_egitim_b_lgileri__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Onay2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Onay2Page = /** @class */ (function () {
    function Onay2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Onay2Page.prototype.goCik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Onay2Page.prototype.goEb = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__egitim_b_lgileri_egitim_b_lgileri__["a" /* EgitimBılgileriPage */]);
    };
    Onay2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Onay2Page');
    };
    Onay2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onay2',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay2\onay2.html"*/'<!--\n  Generated template for the Onay2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Onay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content padding="true" class="has-header" class="bg">\n    <div>\n      <img src="assets/imgs/k7mS431kRaKq2tdZiW3G_nlem.jpg" style="display: block; width:150px; height: 150px; margin-left: auto; margin-right: auto;">\n    </div>\n    <h3 id="Bul2-heading22" style="color:#000000;font-weight:600;font-style:italic;text-align:center;">Eğitim Bilgilerine yönlendirilmeden önce kişisel bilgiler kaydedilsin mi?</h3>\n    <a ui-sref="eItimBilgileri()" id="Bul2-button12"  ion-button full (click)="goEb()">KAYDET</a>\n    <a ui-sref="anaSayfa()" id="Bul2-button13"  ion-button color="danger" class="button button-light button-block" (click)="goCik()">ÇIK</a>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay2\onay2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Onay2Page);
    return Onay2Page;
}());

//# sourceMappingURL=onay2.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EgitimBılgileriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onay3_onay3__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EgitimBılgileriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EgitimBılgileriPage = /** @class */ (function () {
    function EgitimBılgileriPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EgitimBılgileriPage.prototype.goCik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EgitimBılgileriPage.prototype.goOnay3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__onay3_onay3__["a" /* Onay3Page */]);
    };
    EgitimBılgileriPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EgitimBılgileriPage');
    };
    EgitimBılgileriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-egitim-bılgileri',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\egitim-bılgileri\egitim-bılgileri.html"*/'<!--\n  Generated template for the EgitimBılgileriPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="diğer">\n      <ion-title>Eğitim Bilgileri</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content padding="true" class="has-header" class="bg">\n    <h1 id="eItimBilgileri-heading16" style="color:#000000;">Eğitim Bilgileri</h1>\n    <form id="eItimBilgileri-form13" class="list">\n      <h5 id="eItimBilgileri-heading17" style="color:#000000;">İlköğretim</h5>\n      <label class="item item-input" id="eItimBilgileri-input15">\n        <input type="text" placeholder="">\n      </label>\n    </form>\n    <h5 id="eItimBilgileri-heading18" style="color:#000000;">Ortaöğretim</h5>\n    <form id="eItimBilgileri-form14" class="list">\n      <label class="item item-input" id="eItimBilgileri-input16">\n        <input type="text" placeholder="">\n      </label>\n    </form>\n    <h5 id="eItimBilgileri-heading19" style="color:#000000;">Yükseköğrenim</h5>\n    <form id="eItimBilgileri-form17" class="list">\n      <label class="item item-input" id="eItimBilgileri-input18">\n        <input type="text" placeholder="">\n      </label>\n    </form>\n    <h5 id="eItimBilgileri-heading20" style="color:#000000;">Yabancı Dil</h5>\n    <form id="eItimBilgileri-form16" class="list">\n      <label class="item item-input" id="eItimBilgileri-input17">\n        <input type="text" placeholder="">\n      </label>\n    </form>\n    <h5 id="eItimBilgileri-heading21" style="color:#000000;">Diğer Bilgiler</h5>\n    <form id="eItimBilgileri-form18" class="list">\n      <label class="item item-input" id="eItimBilgileri-input19">\n        <input type="text" placeholder="eklenmek isteyen diğer bilgiler">\n      </label>\n    </form>\n    <a ui-sref="Bul()" id="eItimBilgileri-button9" ion-button full (click)=goOnay3()>İLERİ</a>\n    <a ui-sref="anaSayfa()" id="eItimBilgileri-button14"  ion-button color="danger" class="button button-light button-block" (click)="goCik()">ÇIK</a>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\egitim-bılgileri\egitim-bılgileri.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EgitimBılgileriPage);
    return EgitimBılgileriPage;
}());

//# sourceMappingURL=egitim-bılgileri.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onay_onay__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goGit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__onay_onay__["a" /* OnayPage */]);
    };
    LoginPage.prototype.loginfb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.user.img = 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
            }
            else {
                alert('Login failed');
            }
            console.log('Logged into Facebook!', res);
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n <ion-navbar>\n      \n      <ion-title>Login</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content  padding class="bg"   >\n  <img [src]="user.img" alt="">\n  <div >\n        <img src="assets/imgs/nttG53LxR7SdBBU3yRtc_kullanc.jpg" style="display: block; width: 150px; height: 150px; margin-left: auto; margin-right: auto;">\n\n      </div >\n  \n    <form class="list">\n    <label class="item item-input" id="oturumBilgisi-input23">\n      <span class="input-label">Kullanıcı Adı</span>\n      <input type="text" placeholder="*******">\n    </label>\n  \n    \n   <ion-list>\n    <label class="item item-input" id="oturumBilgisi-input24">\n      <span class="input-label">Parola</span>\n      <input type="password" placeholder="******">\n    </label>\n  </ion-list>\n  </form>\n\n   <ion-list>\n\n  <button ion-button round="Light"(click)="goGit()">Oturum Aç</button>\n  <button ion- button round  ion-button color="default" (click)="loginfb()" > <ion-icon name= "logo-facebook"></ion-icon>Login with facebook</button>\n \n</ion-list>\n  <ion-item>\n \n  <button ion-button block outline color="light"><a>Giriş bilgilerinizi mi unuttunuz? <b>Yardım alın.</b></a> </button>\n</ion-item>\n</ion-content>\n \n\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lanlar_lanlar__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OnayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnayPage = /** @class */ (function () {
    function OnayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnayPage');
    };
    OnayPage.prototype.goEvet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__["a" /* KısıselBılgılerPage */]);
    };
    OnayPage.prototype.goCik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    OnayPage.prototype.goIlanlar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lanlar_lanlar__["a" /* IlanlarPage */]);
    };
    OnayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onay',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay\onay.html"*/'<!--\n  Generated template for the OnayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Onay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="true" class="has-header" class="bg">\n  <div>\n    <img src=" assets/imgs/nttG53LxR7SdBBU3yRtc_kullanc.jpg" style="display: block; width: 150px; height: 150px; margin-left: auto; margin-right: auto;">\n  </div>\n  <h1 id="page1-heading2" style="color:#101011;font-weight:400;font-style:italic;text-align:center;">CV oluşturmak ister misiniz?</h1>\n  <a ui-sref="kiIselBilgiler()" id="page1-button5" ion-button full (click)="goEvet()">EVET</a>\n  <a ui-sref="page()" id="page1-button17" ion-button full (click)="goIlanlar()">CV oluşturdum</a>\n  <a ui-sref="anaSayfa()" id="page1-button6"  ion-button color="danger" class="button button-light button-block" (click)="goCik()">ÇIK</a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay\onay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OnayPage);
    return OnayPage;
}());

//# sourceMappingURL=onay.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ÜyeolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ÜyeolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ÜyeolPage = /** @class */ (function () {
    function ÜyeolPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.user = {};
    }
    ÜyeolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ÜyeolPage');
    };
    ÜyeolPage.prototype.goKb = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__["a" /* KısıselBılgılerPage */]);
    };
    ÜyeolPage.prototype.goCik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ÜyeolPage.prototype.loginfb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.user.img = 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
            }
            else {
                alert('Login failed');
            }
            console.log('Logged into Facebook!', res);
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    ÜyeolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-üyeol',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\üyeol\üyeol.html"*/'<!--\n  Generated template for the ÜyeolPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Üye Ol</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding="true" class="has-header" class="bg" >\n    <div img-center>\n        <img src="assets/imgs/üyeol.png" style="display:block;width:150px;height:150px;margin-left: auto; margin-right: auto;">\n      </div>\n         \n  <h5 id="kiIselBilgiler-heading4" style="color:#000000;font-weight:600;text-align:justify;">Ad-Soyad</h5>\n  <form id="kiIselBilgiler-form5" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input7">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading6" style="color:#000000;font-weight:600;">Cinsiyet</h5>\n    <label class="item item-input" id="kiIselBilgiler-input5">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading7" style="color:#000000;font-weight:600;">Doğum Tarihi</h5>\n    <label class="item item-input" id="kiIselBilgiler-input6">\n      <input type="date" placeholder="">\n    </label>\n   \n  </form>\n    \n   \n   \n    \n  <h5 id="kiIselBilgiler-heading5" style="color:#000000;"></h5>\n  <h5 id="kiIselBilgiler-heading13" style="color:#000000;font-weight:600;">Telefon</h5>\n  <form id="kiIselBilgiler-form11" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input12">\n      <input type="text" placeholder="">\n    </label>\n  </form>\n  <h5 id="kiIselBilgiler-heading14" style="color:#000000;font-weight:600;">E-mail</h5>\n  <form id="kiIselBilgiler-form12" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input13">\n      <input type="email" placeholder="@.....com">\n    </label>\n  </form>\n  <h5 id="kiIselBilgiler-heading14" style="color:#000000;font-weight:600;">Şifre</h5>\n  <form id="kiIselBilgiler-form12" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input13">\n      <input type="password" placeholder="**********">\n    </label>\n  </form>\n  <h5 id="kiIselBilgiler-heading14" style="color:#000000;font-weight:600;">Şifre Tekrar</h5>\n  <form id="kiIselBilgiler-form12" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input13">\n      <input type="password" placeholder="**********">\n    </label>\n  </form>\n  <a ui-sref="Bul2()" id="kiIselBilgiler-button7"  ion-button full (click)="goKb() ">ONAYLA</a>\n  <a ui-sref="anaSayfa()" id="kiIselBilgiler-button8"  ion-button color="danger" class="button button-light button-block" (click)="goCik()"> ÇIK</a>\n  <button ion- button round  ion-button color="default" (click)="loginfb()" > <ion-icon name= "logo-facebook"></ion-icon>Login with facebook</button>\n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\üyeol\üyeol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
    ], ÜyeolPage);
    return ÜyeolPage;
}());

//# sourceMappingURL=üyeol.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Onay3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lanlar_lanlar__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Onay3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Onay3Page = /** @class */ (function () {
    function Onay3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Onay3Page.prototype.goCik3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Onay3Page.prototype.goIlanlar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lanlar_lanlar__["a" /* IlanlarPage */]);
    };
    Onay3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Onay3Page');
    };
    Onay3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onay3',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay3\onay3.html"*/'<!--\n  Generated template for the Onay3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Onay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="true" class="has-header" class="bg">\n  <div>\n    <img src="assets/imgs/nZxfkcpkQyypgLBRjGn6_kiiileonay.jpg" style="display: block; width: 150px; height: 150px; margin-left: auto; margin-right: auto;">\n  </div>\n  <h1 id="Bul-heading15" style="color:#000000;font-weight:600;font-style:italic;text-align:center;">Bilgileri onaylıyor musunuz?</h1>\n  <a ui-sref="page()" id="Bul-button10"  ion-button full (click)="goIlanlar()">EVET</a>\n  <a ui-sref="anaSayfa()" id="Bul-button11" ion-button color="danger" class="button button-light button-block" (click)=goCik3()>ÇIK</a>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\onay3\onay3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Onay3Page);
    return Onay3Page;
}());

//# sourceMappingURL=onay3.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/egitim-bılgileri/egitim-bılgileri.module": [
		278,
		7
	],
	"../pages/kısısel-bılgıler/kısısel-bılgıler.module": [
		280,
		6
	],
	"../pages/login/login.module": [
		281,
		5
	],
	"../pages/onay/onay.module": [
		282,
		2
	],
	"../pages/onay2/onay2.module": [
		283,
		4
	],
	"../pages/onay3/onay3.module": [
		284,
		3
	],
	"../pages/üyeol/üyeol.module": [
		285,
		1
	],
	"../pages/ılanlar/ılanlar.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yeol_yeol__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lanlar_lanlar__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, params) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    // if the value is an empty string don't filter the items
    HomePage.prototype.goUye = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goUye2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__yeol_yeol__["a" /* ÜyeolPage */]);
    };
    HomePage.prototype.goIlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lanlar_lanlar__["a" /* IlanlarPage */]);
    };
    HomePage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
        profileModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\home\home.html"*/' \n  \n\n <ion-content padding class="bg"> \n  \n  <div imgs-center >\n     \n    <img src="assets/imgs/adsız4.jpg" style="display:block;width:150px;height:150px;margin-left: auto; margin-right: auto;">\n  </div>\n     \n <ion-list>\n    \n    \n </ion-list>\n \n <button ion-button round="Light"(click)="goUye()">Üye misiniz?</button>\n <button ion-button round="Light"(click)="goUye2()">Üye ol</button>\n <ion-item>\n    <ion-label >Kategoriler</ion-label>\n    <ion-select [(ngModel)]="Kategoriler">\n      <ion-option    value="bt">Bilişim/Telekom</ion-option>\n      <ion-option value="bs">Banka/Sigorta</ion-option>\n      <ion-option value="eö">Eğitim/Öğretim</ion-option>\n      <ion-option value="ha">Hukuk/Avukat</ion-option>\n      <ion-option value="mp">Mağaza/Perakende</ion-option>\n      <ion-option value="mf">Muhasebe/Finans</ion-option>\n      <ion-option value="sğl">Sağlık</ion-option>\n      <ion-option value="skya">Sekreter/Yönetici Asitan</ion-option>\n      <ion-option value="ymi">Yapı/Mimar/İnşaat</ion-option>\n     \n      \n    </ion-select>\n   \n  </ion-item>\n \n  <ion-item>\n      <ion-range [(ngModel)]="brightness">\n        <ion-icon range-left small name="range" > Maaş Aralığı</ion-icon>\n        <ion-icon range-right name="range"></ion-icon>\n      </ion-range>\n    </ion-item>\n    \n    <ion-list>\n        <ion-item>\n          <ion-label>Çalışma Şekli</ion-label>\n          <ion-select [(ngModel)]="calismasekli">\n            <ion-option value="nes">Tam Zamanlı</ion-option>\n            <ion-option value="n64">Yarı Zamanlı</ion-option>\n            <ion-option value="ps">Dönemsel</ion-option>\n            <ion-option value="genesis">Stajyer</ion-option>\n            \n            \n          </ion-select>\n        </ion-item>\n      </ion-list>\n      \n   \n        <button ion-button round ion-button color="default" (click)="goIlan()">Bul</button>\n     \n  \n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

var Profile = /** @class */ (function () {
    function Profile(params) {
        console.log('UserId', params.get('userId'));
    }
    return Profile;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_onay2_onay2__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_onay_onay__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_egitim_b_lgileri_egitim_b_lgileri__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_yeol_yeol__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_onay3_onay3__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lanlar_lanlar__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__["a" /* KısıselBılgılerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_onay2_onay2__["a" /* Onay2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_onay_onay__["a" /* OnayPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_egitim_b_lgileri_egitim_b_lgileri__["a" /* EgitimBılgileriPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_yeol_yeol__["a" /* ÜyeolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_onay3_onay3__["a" /* Onay3Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lanlar_lanlar__["a" /* IlanlarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/egitim-bılgileri/egitim-bılgileri.module#EgitimBılgileriPageModule', name: 'EgitimBılgileriPage', segment: 'egitim-bılgileri', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ılanlar/ılanlar.module#IlanlarPageModule', name: 'IlanlarPage', segment: 'ılanlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kısısel-bılgıler/kısısel-bılgıler.module#KısıselBılgılerPageModule', name: 'KısıselBılgılerPage', segment: 'kısısel-bılgıler', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onay/onay.module#OnayPageModule', name: 'OnayPage', segment: 'onay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onay2/onay2.module#Onay2PageModule', name: 'Onay2Page', segment: 'onay2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onay3/onay3.module#Onay3PageModule', name: 'Onay3Page', segment: 'onay3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/üyeol/üyeol.module#ÜyeolPageModule', name: 'ÜyeolPage', segment: 'üyeol', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_k_s_sel_b_lg_ler_k_s_sel_b_lg_ler__["a" /* KısıselBılgılerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_onay2_onay2__["a" /* Onay2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_onay_onay__["a" /* OnayPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_egitim_b_lgileri_egitim_b_lgileri__["a" /* EgitimBılgileriPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_yeol_yeol__["a" /* ÜyeolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_onay3_onay3__["a" /* Onay3Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lanlar_lanlar__["a" /* IlanlarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IlanlarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IlanlarPage = /** @class */ (function () {
    function IlanlarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IlanlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IlanlarPage');
    };
    IlanlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ılanlar',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\ılanlar\ılanlar.html"*/'<!--\n  Generated template for the IlanlarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>İlanlar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n\n  <h5 id="kiIselBilgiler-heading3" style="color:rgb(0, 0, 0);">------Bilişim/Telekom------</h5>\n     <h6> İLAN1  </h6>\n      <h6>Bilgi Teknolojileri / IT Uzmanı</h6>\n       <h6>VIAVIS Bilişim Tic. Ltd. Şti.</h6>\n    <h6> İş Tanımı: Mevcut ve potansiyel projelerde ihtiyaç duyulan yazılımların gelistirilmesinde yardımcı olacak ekip arkadaşları aramaktayız.</h6>\n     <h6>Firma Sektörü: Bilişim/Telekom</h6> \n     <h6>Çalışma Şekli : Sürekli / Tam zamanlı   </h6>                    \n     <h6> Ülke/Şehir: İstanbul(Avr.)(Beyoğlu) <button ion-button round  ion-button color="default"> BAŞVUR</button> </h6>\n     <h5 id="kiIselBilgiler-heading3" style="color:rgb(0, 0, 0);">------Banka/Sigorta------</h5>\n     <h6> İLAN1  </h6>\n      <h6>İş Analisti (Sigorta ve/veya Bankacılık Sektörü)</h6>\n       <h6>BA-WORKS        </h6>\n    <h6> İş Tanımı: Agile ve waterfall metodolojilerle gerçekleştirilen projelerde yeni yazılım geliştirme ihtiyaçlarının ve ürün kapsamının belirlenmesi. Otomasyon araçları kullanılarak gereksinimlerin dokümantasyonu. İş birimleri ile kullanıcı kabul testlerinin koordinasyonu \n        .</h6>\n     <h6>Firma Sektörü: Banka/Sigorta\n      </h6> \n     <h6>Çalışma Şekli : Sürekli / Tam zamanlı   </h6>                    \n     <h6> Ülke/Şehir: Ankara, İstanbul(Avr.), İstanbul(Asya)\n        <button ion-button round  ion-button color="default"> BAŞVUR</button> </h6>\n        <h5 id="kiIselBilgiler-heading3" style="color:rgb(0, 0, 0);">------Eğitim/Öğretim------</h5>\n     <h6> İLAN1  </h6>\n      <h6>Kimya Öğretmeni\n        </h6>\n       <h6>KAVRAM EĞİTİM KURUMLARI\n        </h6>\n    <h6> İş Tanımı: BALIKESİR GÖNEN\'deki KAVRAM ÖZEL ÖĞRETİM KURSU\'nda çalıştırılmak üzere  KİMYA ÖĞRETMENİ aranmaktadır.\n\n        .</h6>\n     <h6>Firma Sektörü:Eğitim/Öğretim\n\n      </h6> \n     <h6>Çalışma Şekli : Sürekli / Tam zamanlı   </h6>                    \n     <h6> Ülke/Şehir: BALIKESİR/Gönen\n\n\n        <button ion-button round  ion-button color="default"> BAŞVUR</button> </h6>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\ılanlar\ılanlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IlanlarPage);
    return IlanlarPage;
}());

//# sourceMappingURL=ılanlar.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KısıselBılgılerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__onay2_onay2__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the KısıselBılgılerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KısıselBılgılerPage = /** @class */ (function () {
    function KısıselBılgılerPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    KısıselBılgılerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KısıselBılgılerPage');
    };
    KısıselBılgılerPage.prototype.goCik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    KısıselBılgılerPage.prototype.goOnay2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__onay2_onay2__["a" /* Onay2Page */]);
    };
    KısıselBılgılerPage.prototype.pictureFromCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.takePhoto(options);
    };
    KısıselBılgılerPage.prototype.pictureFromGallery = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.takePhoto(options);
    };
    KısıselBılgılerPage.prototype.takePhoto = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.image = 'data:image/jpeg;base64, + {ImageData}';
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KısıselBılgılerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kısısel-bılgıler',template:/*ion-inline-start:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\kısısel-bılgıler\kısısel-bılgıler.html"*/'<!--\n  Generated template for the KısıselBılgılerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n  \n    <ion-title>Kişisel Bilgiler</ion-title>\n    \n        \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="true" class="has-header" class="bg">\n    <img *ngIf="image" [src]="image" alt="">\n <ion-footer>\n   <ion-grid>\n     \n      \n\n      \n       \n      \n   </ion-grid>\n </ion-footer>\n  <h1 id="kiIselBilgiler-heading3" style="color:rgb(0, 0, 0);">Kişisel Bilgiler</h1>\n  <h5 id="kiIselBilgiler-heading4" style="color:#000000;font-weight:600;text-align:justify;">Ad-Soyad</h5>\n  <form id="kiIselBilgiler-form5" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input7">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading6" style="color:#000000;font-weight:600;">Cinsiyet</h5>\n    <label class="item item-input" id="kiIselBilgiler-input5">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading7" style="color:#000000;font-weight:600;">Doğum Tarihi</h5>\n    <label class="item item-input" id="kiIselBilgiler-input6">\n      <input type="date" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading9" style="color:#000000;font-weight:600;">Medeni Durum</h5>\n    <label class="item item-input" id="kiIselBilgiler-input4">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading10" style="color:#000000;font-weight:600;">Askerlik Durumu</h5>\n    <label class="item item-input" id="kiIselBilgiler-input8">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading11" style="color:#000000;font-weight:600;">Sürücü Belgesi</h5>\n    <label class="item item-input" id="kiIselBilgiler-input10">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading12" style="color:#000000;font-weight:600;">Uyruk</h5>\n    <label class="item item-input" id="kiIselBilgiler-input9">\n      <input type="text" placeholder="">\n    </label>\n    <h5 id="kiIselBilgiler-heading8" style="color:#000000;font-weight:600;">Adres </h5>\n  </form>\n  <form id="kiIselBilgiler-form20" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input11">\n      <input type="tel" placeholder="">\n    </label>\n  </form>\n  <h5 id="kiIselBilgiler-heading5" style="color:#000000;"></h5>\n  <h5 id="kiIselBilgiler-heading13" style="color:#000000;font-weight:600;">Telefon</h5>\n  <form id="kiIselBilgiler-form11" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input12">\n      <input type="text" placeholder="">\n    </label>\n  </form>\n  <h5 id="kiIselBilgiler-heading14" style="color:#000000;font-weight:600;">E-mail</h5>\n  <form id="kiIselBilgiler-form12" class="list">\n    <label class="item item-input" id="kiIselBilgiler-input13">\n      <input type="email" placeholder="@.....com">\n    </label>\n  </form>\n  <a ui-sref="Bul2()" id="kiIselBilgiler-button7"  ion-button full (click)="goOnay2() ">ONAYLA</a>\n  <a ui-sref="anaSayfa()" id="kiIselBilgiler-button8"  ion-button color="danger" class="button button-light button-block" (click)="goCik()"> ÇIK</a>\n\n  <button ion-button icon-only (click)="pictureFromCamera()" >\n      <ion-icon name="camera"></ion-icon>\n      </button>\n            \n      <button ion-button icon-only (click)="pictureFromGallery()" >\n          <ion-icon name="image"></ion-icon>\n        </button>\n       \n        \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ALEYNA\Desktop\IsBul\src\pages\kısısel-bılgıler\kısısel-bılgıler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], KısıselBılgılerPage);
    return KısıselBılgılerPage;
}());

//# sourceMappingURL=kısısel-bılgıler.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map