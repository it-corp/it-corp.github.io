webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__research_research_component__ = __webpack_require__("../../../../../src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teaching_teaching_component__ = __webpack_require__("../../../../../src/app/teaching/teaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_heteroscedastic_dropout_heteroscedastic_dropout_component__ = __webpack_require__("../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_4__people_people_component__["a" /* PeopleComponent */] },
    { path: 'research', component: __WEBPACK_IMPORTED_MODULE_6__research_research_component__["a" /* ResearchComponent */] },
    { path: 'publications', component: __WEBPACK_IMPORTED_MODULE_5__publications_publications_component__["a" /* PublicationsComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__["a" /* ResourcesComponent */] },
    { path: 'teaching', component: __WEBPACK_IMPORTED_MODULE_8__teaching_teaching_component__["a" /* TeachingComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'projects/heteroscedastic-dropout', component: __WEBPACK_IMPORTED_MODULE_11__projects_heteroscedastic_dropout_heteroscedastic_dropout_component__["a" /* HeteroscedasticDropoutComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n  \n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"navbar\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"menu-container\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"toggle-icon\"></span>\n        </button>\n        <div class=\"navbar-logo\">\n          <a class=\"navbar-logo-wrap\"\n             [routerLink]=\"['/home']\"\n             routerLinkActive=\"active\">\n            <img src=\"assets/img/SVLLogo.svg\" alt=\"SVL\" style=\"width:60px;\">\n          </a>\n        </div>\n      </div>\n\n      <div class=\"collapse navbar-collapse nav-collapse\">\n        <div class=\"menu-container\">\n          <ul class=\"navbar-nav navbar-nav-right\">\n            <li class=\"nav-item\" *ngFor=\"let section of sections\">\n              <a routerLink=\"/{{section.id}}\"\n                 routerLinkActive=\"active\"\n                 class=\"nav-item-child\">{{section.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div class=\"content-footer container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <h2>Contact us</h2>\n        <p class=\"margin-b-0\">Admin: Tin Tin Wisniewski\n          <br>Email: tintinyw at cs dot stanford dot edu\n          <br>Phone: (650) 723-3819\n          <br>Fax: (650) 725-1449\n        </p>\n      </div>\n      <div class=\"col-xs-6 text-right\">\n        <h2>-</h2>\n        <p class=\"margin-b-0\">\n          <br>Computer Science Department\n          <br>Stanford University\n          <br>353 Serra Mall, Stanford, CA 94305-9025.\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Section */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section = (function () {
    function Section() {
    }
    return Section;
}());

var SECTIONS = [
    { id: 'home', name: 'Home' },
    { id: 'people', name: 'People' },
    { id: 'research', name: 'Research' },
    { id: 'publications', name: 'Publications' },
    { id: 'resources', name: 'Resources' },
    { id: 'teaching', name: 'Teaching' },
];
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'SVL';
        this.sections = SECTIONS;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            // ignore if routing to an anchor tag
            if (event.url.indexOf('#') > -1) {
                return;
            }
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            var collapse = document.querySelector('.collapse');
            if (collapse) {
                collapse.classList.remove('in');
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publications_publications_filter_pipe__ = __webpack_require__("../../../../../src/app/publications/publications-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teaching_teaching_filter_pipe__ = __webpack_require__("../../../../../src/app/teaching/teaching-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__research_research_component__ = __webpack_require__("../../../../../src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__teaching_teaching_component__ = __webpack_require__("../../../../../src/app/teaching/teaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projects_heteroscedastic_dropout_heteroscedastic_dropout_component__ = __webpack_require__("../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__research_research_component__["a" /* ResearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__publications_publications_filter_pipe__["a" /* PublicationsFilterByAuthorPipe */],
            __WEBPACK_IMPORTED_MODULE_5__publications_publications_filter_pipe__["b" /* SectionsFilterByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_12__publications_publications_component__["a" /* PublicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__resources_resources_component__["a" /* ResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__teaching_teaching_filter_pipe__["a" /* CoursesFilterByProfessorPipe */],
            __WEBPACK_IMPORTED_MODULE_15__teaching_teaching_component__["a" /* TeachingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_16__not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__projects_heteroscedastic_dropout_heteroscedastic_dropout_component__["a" /* HeteroscedasticDropoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Google Map -->\n<div id=\"map\" class=\"map height-300\"></div>\n\n<!-- Contact List -->\n<div class=\"section-seperator\">\n  <div class=\"content-md container\">\n    <div class=\"row\">\n      <!-- Contact List -->\n      <div class=\"col-sm-6 sm-margin-b-50\">\n        <h4><a href=\"#\">Tin Tin Wisniewski</a> <span class=\"text-uppercase margin-l-20\">Admin</span></h4>\n        <ul class=\"list-unstyled contact-list\">\n          <li><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 723-3819 </li>\n          <li><i class=\"margin-r-10 color-base icon-envelope\"></i>tintinyw@stanford.edu</li>\n        </ul>\n        <p><strong>Address</strong><br>\n          Computer Science Department, <br>Stanford University <br>353 Serra Mall, Stanford, CA 94305-9025.</p>\n      </div>\n      <!-- End Contact List -->\n\n      <!-- Contact List -->\n      <div class=\"col-sm-6 sm-margin-b-50\">\n        <h4><a href=\"#\">Silvio Savarese</a> <span class=\"text-uppercase margin-l-20\">Associate Professor</span></h4>                     \n        <ul class=\"list-unstyled contact-list\">\n          <li><i class=\"margin-r-10 color-base icon-call-out\"></i>TBD</li>\n          <li><i class=\"margin-r-10 color-base icon-envelope\"></i>ssilvio@stanford.edu </li>\n        </ul>\n        <p><strong>Address</strong><br>353 Serra Mall, Gates Building, <br>Stanford, CA 94305-9020</p>\n      </div>\n      <!-- End Contact List -->\n    </div>\n    <!--// end row -->\n  </div>\n</div>\n<!-- End Contact List -->\n\n<!-- Comment -->\n<div class=\"section-seperator\">\n  <div class=\"content-md container\">\n    <div class=\"row margin-b-40\">\n      <div class=\"col-sm-7\">\n        <h2>Join our lab</h2>\n        <p>We are always looking for outstanding prospective PhD candidates. If you are interested in joining the Stanford Vision and Learning Lab as a PhD candidate, please apply for admission to the department, indicating in your application your interest in the CStanford Vision and Learning Lab, Computer Science Department. If you are interested in a Postdoctoral Researcher position, please contact Prof. Savarese.</p>\n      </div>\n    </div>\n    <!--// end row -->\n\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-7\">\n        <form>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n          </div>\n          <div class=\"margin-b-20\">\n            <textarea class=\"form-control\" rows=\"5\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn-theme btn-theme-sm btn-base-bg text-uppercase\">Submit</button>\n        </form>\n      </div>\n    </div>\n    <!--// end row -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overflow-h\">\n\n\n      <div class=\"bg-color-sky-light top-seprates\">\n          <div class=\"top-padding-only content-md container\">\n          <div class=\"row\">\n\n              <div class=\"col-md-6 col-xs-12\">\n                  <h2 class=\"top-seprates\"><strong>Welcome To The</strong></h2>\n                  <h1 class=\"thinner-header\">Stanford Vision and Learning Lab</h1>\n                  <p>The Stanford Vision and Learning Lab (SVL) at Stanford is directed by Professors Fei-Fei Li, Juan Carlos Niebles, and Silvio Savarese. We are tackling fundamental open problems in computer vision research and are intrigued by visual functionalities that give rise to semantically meaningful interpretations of the visual world.</p>\n\n                </div>\n\n              <div class=\"col-md-6 col-xs-12\">\n                <div class=\"work\">\n                  <div class=\"work-overlay\">\n                    <img class=\"full-width img-responsive\" src=\"assets/img/svl_group_2018.jpg\" alt=\"SVL Group Image\">\n                  </div>\n                  <div class=\"work-content\">\n                    <h3 class=\"color-white margin-b-5\">Our Group</h3>\n                    <p class=\"color-white margin-b-0\">Join us today and we would love to meet you</p>\n                  </div>\n                  <a class=\"content-wrapper-link\" href=\"people.html\"></a>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      </div>\n\n\n   <div class=\"content-md container\">\n    <div class=\"row\">\n      <swiper [config]=\"config\">\n        <div class=\"swiper-wrapper col-md-6 col-xs-12 top-seprates\">\n          <div class=\"swiper-slide\">\n                <div class=\"col-md-5 col-xs-12\">\n                    <a href=\"https://doi.org/10.1109/CVPR.2015.7298698\"><img class=\"img-responsive article-seprates\" src=\"assets/img/JackRabbot.jpg\"></a>\n                </div>\n                <div class=\"col-md-7 col-xs-12\">\n                    <p class=\"name-title article-seprates\">JackRabbot</p>\n                    <p>Our work at the SVL is making practical a new generation of autonomous agents that can operate safely alongside humans in dynamic crowded environments such as terminals, malls, or campuses. The Stanford “Jackrabbot”, which takes it name from the nimble yet shy Jackrabbit, is a self-navigating automated electric delivery cart capable of carrying small payloads.</p>\n                    <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/\">Link</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/cvgl_files/quartz_jr.mp4\">Video</a></p>\n                </div>\n          </div>\n\n          <div class=\"swiper-slide\">\n              <div class=\"col-md-5 col-xs-12\">\n                  <a href=\"https://doi.org/10.1109/CVPR.2015.7298698\"><img class=\"img-responsive article-seprates\" src=\"http://www.niebles.net/images/anet_cvpr15b.jpg\"></a>\n              </div>\n              <div class=\"col-md-7 col-xs-12\">\n                <p class=\"name-title article-seprates\">ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding</p>\n                <p>Our benchmark aims at covering a wide range of complex human activities that are of interest to people in their daily living. We illustrate three scenarios in which ActivityNet can be used to compare algorithms for human activity understanding: global video classification, trimmed activity classification and activity detection.</p>\n                <p>Check out our <a class=\"link-sytle\" href=\"http://activity-net.org/\">Link</a> and <a class=\"link-sytle\" href=\"http://www.niebles.net/images/anet_cvpr15b.jpg\">Video</a></p>\n              </div>\n          </div>\n\n          <div class=\"swiper-slide\">\n              <div class=\"col-md-5 col-xs-12\">\n                  <a href=\"https://doi.org/10.1109/CVPR.2015.7298698\"><img class=\"img-responsive article-seprates\" src=\"assets/img/AI-Assisted.jpg\"></a>\n              </div>\n              <div class=\"col-md-7 col-xs-12\">\n                  <p class=\"name-title article-seprates\">AI-Assisted Care</p>\n                  <p>The Partnership in AI-Assisted Care (PAC) is an interdisciplinary collaboration between the School of Medicine and the Computer Science department focusing on cutting edge computer vision and machine learning technologies to solve some of healthcare's most important problems.</p>\n                  <p>Check out our <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/\">Link</a> and <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/projects/hand_hygiene/video/dispenser.mp4\">Video</a></p>\n                </div>\n          </div>\n\n          <div class=\"swiper-slide\">\n              <div class=\"col-md-5 col-xs-12\">\n                  <a href=\"https://doi.org/10.1109/CVPR.2015.7298698\"><img class=\"img-responsive article-seprates\" src=\"http://visualgenome.org/static/images/front-page/interconnected_images.png\"></a>\n              </div>\n              <div class=\"col-md-7 col-xs-12\">\n                  <p class=\"name-title article-seprates\">Visual Genome</p>\n                  <p>Short Description: To achieve success at cognitive tasks, models need to understand the interactions and relationships between objects in an image. Visual Genome is a new dataset to connect dense, structured image concepts to language.</p>\n                  <p>Check out our <a class=\"link-sytle\" href=\"http://visualgenome.org/\">Link</a> and <a class=\"link-sytle\" href=\"http://visualgenome.org/static/images/front-page/interconnected_images.png\">Image</a></p>\n              </div>\n        </div>\n        </div>\n      </swiper>\n    </div>\n  </div>\n\n\n<div class=\"bg-color-sky-light\">\n  <div class=\"content-md container\">\n\n    <div class=\"row margin-b-40\">\n      <div class=\"col-sm-9\">\n        <h2>About SVL</h2>\n        <p>Our research addresses the theoretical foundations and practical applications of computational vision. We are focused on discovering and proposing the fundamental principles, algorithms and implementations for solving high-level visual perception and cognition problems involving computational geometry, automated image and video analysis, and visual reasoning. At the same time, our curiosity leads us to study the underlying neural mechanisms that enable the human visual system to perform high level visual tasks with amazing speed and efficiency.</p>\n      </div>\n    </div>\n    <!--// end row -->\n\n    <div class=\"masonry-grid\">\n      <div class=\"masonry-grid-sizer col-xs-6 col-sm-6 col-md-1\"></div>\n<!--       <div class=\"masonry-grid-item col-xs-12 col-sm-6 col-md-8\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/svl_group_2018_crop.jpg\" alt=\"SVL Group Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">Our Group</h3>\n            <p class=\"color-white margin-b-0\">Join us today and we would love to meet you</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"people.html\"></a>\n        </div>\n      </div> -->\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/04.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At CVPR</h3>\n            <p class=\"color-white margin-b-0\">SVL receives V100 award from NVIDIA CEO Jensen Huang at CVPR 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"https://blogs.nvidia.com/blog/2017/07/22/tesla-v100-cvpr-nvail/\"></a>\n        </div>\n      </div>\n\n<!--       <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/01.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At ICML 2017</h3>\n            <p class=\"color-white margin-b-0\">SVL receives V100 award from NVIDIA CEO Jensen Huang at ICML 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"https://blogs.nvidia.com/blog/2017/08/07/ai-researchers-tesla-v100-nvail-isml/\"></a>\n        </div>\n      </div> -->\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/02.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At ICCV 2017</h3>\n            <p class=\"color-white margin-b-0\">6 papers accepted at ICCV 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"http://iccv2017.thecvf.com/\"></a>\n        </div>\n      </div>\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/03.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At CVPR 2017</h3>\n            <p class=\"color-white margin-b-0\">13 papers accepted at CVPR 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"http://openaccess.thecvf.com/CVPR2017.py\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Clients -->\n<div class=\"content-md container\">\n  <div class=\"row margin-b-40\">\n    <div class=\"col-md-12 col-xs-12\">\n      <h2>Press Coverage</h2>\n      <div class=\"col-md-6 col-xs-12\">\n        <a href=\"https://techcrunch.com/2017/06/20/tesla-hires-deep-learning-expert-andrej-karpathy-to-lead-autopilot-vision/\"><img src=\"assets/img/clients/01.png\" alt=\"Clients Logo\"></a>\n        <p>SVL Alumnus hired as Vice President of AI at Tesla. “Tesla hires deep learning expert Andrej Karpathy to lead Autopilot vision”</p>\n      </div>\n      <div class=\"col-md-6 col-xs-12\">\n        <a href=\"https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/\"><img src=\"assets/img/clients/02.png\" alt=\"Clients Logo\"></a>\n        <p>Fei-Fei Li of SVL and her work on ImageNet is featured in Quartz. “The data that transformed AI research—and possibly the world”</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"bg-color-sky-light\">\n  <div class=\"content-md container\">\n     <!-- <div class=\"col-md-6 col-xs-12\"> -->\n       <h2>Join The Lab</h2>\n    <!-- Team -->\n    <div class=\"row\">\n      <div class=\"col-sm-4 sm-margin-b-50\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div>\n            <img class=\"img-responsive\" src=\"assets/img/770x860/02.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://vision.stanford.edu/feifeili/\">Fei-Fei Li</a><span class=\"margin-l-20\"><br>(publishes under L.Fei-Fei)</span></h4>\n        <p>Professor <br>Director, <br>Stanford AI Lab</p>\n        <a class=\"link\" href=\"http://vision.stanford.edu/feifeili/\">Read More</a>\n      </div>\n\n      <div class=\"col-sm-4 sm-margin-b-50\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div>\n            <img class=\"img-responsive\" src=\"assets/img/770x860/03.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://www.niebles.net/\">Juan Carlos Niebles</a></h4>\n        <p><br>Senior Research Scientist, <br>Associate Director, <br>Sail-Toyota Center For AI Research</p>\n        <a class=\"link\" href=\"http://www.niebles.net/\">Read More</a>\n      </div>\n\n      <div class=\"col-sm-4 sm-margin-b-50\" style=\"padding-bottom: 40px;\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div>\n            <img class=\"img-responsive\" src=\"assets/img/770x860/01.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://cvgl.stanford.edu/silvio/\">Silvio Savarese</a></h4>\n        <p><br>Associate Professor <br>Director, <br>Sail-Toyota Center For AI Research</p>\n        <a class=\"link\" href=\"http://cvgl.stanford.edu/silvio/\">Read More</a>\n      </div>\n      <!-- End Team -->\n      <div class=\"col-sm-12\">\n      <p>We are always looking for outstanding prospective PhD candidates. If you are interested in joining the Stanford Vision and Learning Lab as a PhD candidate, please apply for admission to the department, indicating in your application your interest in the Stanford Vision and Learning Lab, Computer Science Department. If you are interested in a Postdoctoral Researcher position, please contact Prof. Fei-Fei Li or Prof. Savarese.</p>\n      </div>\n    </div>\n    </div>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.config = {
            spaceBetween: 30,
            autoplay: 2500,
            slidesPerView: 1,
            speed: 600,
            loop: true
        };
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-separator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-3 sm-margin-b-30\">\n        <div class=\"sidebar\">\n          <ul class=\"list-unstyled sidenav-position\">\n            <li class=\"side-nav\"><a [routerLink]=\"['/people']\"\n                                    fragment=\"faculty\"\n                                    (click)=\"onAnchorClick()\">Faculty</a></li>\n            <li *ngFor=\"let group of people.groups\"\n                class=\"side-nav\">\n              <a [routerLink]=\"['/people']\"\n                 fragment=\"{{groupHref(group)}}\"\n                 (click)=\"onAnchorClick()\">{{group.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"content\" class=\"content-main content col-md-9 sm-margin-b-30\">\n        <div>\n          <h2 id=\"faculty\">Faculty</h2>\n          <ul class=\"row list-unstyled\">\n\n            <li class=\"col-md-4 col-xs-12\">\n              <img class=\"people-image\" src=\"assets/img/770x860/02.jpg\">\n              <p><a class=\"name-title\" href=\"http://vision.stanford.edu/feifeili/\">Fei-Fei Li</a></p>\n              <span>(publishes under L.Fei-Fei)</span>\n              <br>\n              <p>Professor \n                <br>Director, Stanford AI Lab\n              </p>\n              <p>Computer Science Department\n                <br>Office: Room 246 Gates Bldg</p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>feifeili [at] cs [dot] stanford [dot] edu</p>\n            </li>\n\n            <li class=\"col-md-4 col-xs-12\">\n              <img class=\"people-image\" src=\"assets/img/770x860/03.jpg\">\n              <p><a  class=\"name-title\" href=\"http://www.niebles.net/\">Juan Carlos Niebles</a></p>\n              <P>Senior Research Scientist\n                <br>Associate Director,\n                <br>Sail-Toyota Center For AI Research</P>\n              <p>Computer Science Department\n                <br>Office:Room 243 Gates Bldg\n              </p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>jniebles [at] cs [dot] stanford [dot] edu</p>\n            </li>\n\n            <li class=\"col-md-4 col-xs-12\">\n              <img class=\"people-image\" src=\"assets/img/770x860/01.jpg\">\n              <p><a  class=\"name-title\" href=\"http://cvgl.stanford.edu/silvio/\">Silvio Savarese</a></p>\n              <p>Associate Professor \n                <br>Director, \n                <br>Sail-Toyota Center For AI Research \n              </p>\n              <p>Computer Science Department\n                <br>Office: Room 154 Gates Bldg</p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>ssilvio [at] stanford [dot] edu</p>\n            </li>\n\n          </ul>\n        </div>\n\n        <div *ngFor=\"let group of people.groups\">\n          <h2 id=\"{{groupHref(group)}}\" class=\"jumptarget top-seprates\">{{group.name}}</h2>\n          <div class=\"row list-unstyled\">\n            <div *ngFor=\"let member of group.members\"\n                 class=\"col-md-4 col-sm-6 col-xs-12 people-profile-card{{member.img ? '-w-img' : ''}}\">\n              <img *ngIf=\"member.img\" class=\"people-profile-image\" src=\"{{member.img}}\">\n              <p class=\"name-title\">{{member.name}}</p>\n              <span *ngIf=\"member.desc\" class=\"small-padding-top\">{{member.desc}}</span>\n              <span *ngIf=\"member.job\" class=\"text-uppercase small-padding-top\">{{member.job}}</span>\n              <br *ngIf=\"member.email\"><span *ngIf=\"member.email\">{{member.email}}</span>\n              <p *ngIf=\"member.web\"><a class=\"link-sytle\" href=\"{{member.web}}\">Website</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_service__ = __webpack_require__("../../../../../src/app/people/people.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = (function () {
    function PeopleComponent(peopleService, route) {
        this.peopleService = peopleService;
        this.route = route;
    }
    PeopleComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleService.getPeople().then(function (people) { return _this.people = people; });
    };
    PeopleComponent.prototype.groupHref = function (group) {
        return group.name.replace(/([\W-])/g, '').toLowerCase();
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PeopleComponent);

var _a, _b;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PEOPLE; });
var PEOPLE = {
    groups: [
        { name: "Research Scientists, Postdocs, and Visiting Scholars",
            members: [
                { name: "Michael Abbott",
                    email: "abbottm [at] stanford [dot] edu",
                    desc: "Visiting Scholar",
                    img: "assets/img/square/michael_abbott.png",
                    web: "https://uncapitalized.com/"
                },
                { name: "Animesh Garg",
                    email: "garg [at] cs [dot] stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "assets/img/square/animesh_garg.png",
                    web: "http://animesh.garg.tech//"
                },
                { name: "Patrick Goebel",
                    email: "pgoebel [at] stanford [dot] edu",
                    desc: "Research Scientist",
                    img: "assets/img/square/patrick_goebel.png",
                    web: null
                },
                { name: "Noriaki Hirose",
                    email: "nhirose [at] cs [dot] stanford [dot] edu",
                    desc: "Visiting Scholar",
                    img: "assets/img/square/noriaki.jpg",
                    web: null
                },
                { name: "Kazuki Kozuka",
                    email: "kazukik [at] stanford [dot] edu",
                    desc: "Visiting Scholar",
                    img: "assets/img/square/kazuki_kozuka.png",
                    web: null
                },
                { name: "Kai-Hsiang Lin",
                    email: "kaihlin [at] cs [dot] stanford [dot] edu",
                    desc: "Visiting Scholar",
                    img: "assets/img/square/kai_hsiang.png",
                    web: null
                },
                { name: "Roberto Martin-Martin",
                    email: "roberto [dot] martinmartin [at] stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "assets/img/square/roberto_martin.png",
                    web: "http://www.robotics.tu-berlin.de/menue/team/roberto_martin_martin/"
                },
                { name: "Guido Pusiol",
                    email: "pusiol [at] cs.stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "assets/img/square/guido_pusiol.jpg",
                    web: "http://activityrecognition.com/"
                },
                {
                    name: "Seyed Hamid Rezatofighi",
                    email: "hamidrt [at] stanford [dot] edu",
                    desc: "Endeavour Research Fellow",
                    img: "assets/img/square/MyPic_S.jpg",
                    web: null
                },
                { name: "Yanan Sui",
                    email: "ysui [at] cs.stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "assets/img/square/yanan.JPG",
                    web: "http://web.stanford.edu/~ysui/"
                },
                { name: "Marynel Vazquez",
                    email: "marynelv [at] stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "assets/img/square/marynel_vazquez.jpg",
                    web: "http://www.marynel.net/"
                },
                { name: "Amir Zamir",
                    email: "zamir [at] cs.stanford [dot] edu",
                    desc: "Postdoctoral Researcher",
                    img: "https://www.cs.stanford.edu/~amirz/index_files/amir18_nsq.png",
                    web: "http://cs.stanford.edu/~amirz/"
                },
            ]
        },
        { name: "PhD Students",
            members: [
                { name: "Iro Armeni",
                    email: "iarmeni [at] cs [dot] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Martin Fischer",
                    img: "assets/img/square/iro_armeni.png",
                    web: "http://cs.stanford.edu/~iarmeni/"
                },
                { name: "Kevin Chen",
                    email: "kchen92 [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/kevin_chen.png",
                    web: null
                },
                { name: "Christopher B. Choy",
                    email: " chrischoy [at] ai [dot] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/chris_choy.png",
                    web: "http://chrischoy.org/"
                },
                { name: "John Emmons",
                    email: "jemmons [at] cs [dot] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Keith Winstein",
                    img: "assets/img/square/john_emmons.png",
                    web: "http://johnemmons.com/"
                },
                { name: "Jim Fan",
                    email: "jimfan [at] cs [dot] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/jim_fan.png",
                    web: "http://jimfan.me/"
                },
                { name: "Kuan Fang",
                    email: "kuanfang [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/kuan_fang.png",
                    web: "http://ai.stanford.edu/~kuanfang/"
                },
                { name: "JunYoung Gwak",
                    email: "jgwak [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/jun_young_gwak.png",
                    web: "http://jgwak.com/"
                },
                { name: "Albert Haque",
                    email: "ahaque [at] cs [dot] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/albert_haque.jpg",
                    web: "http://www.albert.cm/"
                },
                { name: "De-An Huang",
                    email: "dahuang [at] cs [dot] stanford [dot] edu",
                    desc: "Co-advisors: Fei-Fei Li, Juan Carlos Niebles",
                    img: "assets/img/square/de_an_huang.png",
                    web: "http://ai.stanford.edu/~dahuang/"
                },
                { name: "Jingwei Ji",
                    email: "jingweij [at] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Juan Carlos Niebles",
                    img: "assets/img/square/jingwei_ji.png",
                    web: null
                },
                { name: "Justin Johnson",
                    email: "jcjohns [at] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/justin_johnson.jpeg",
                    web: "http://cs.stanford.edu/people/jcjohns"
                },
                { name: "Ranjay Krishna",
                    email: "ranjaykrishna [at] gmail [dot] com",
                    desc: "Co-advisors: Fei-Fei Li, Michael Bernstein",
                    img: "assets/img/square/ranjay_krishna.png",
                    web: "http://ranjaykrishna.com/"
                },
                { name: "Rachel Luo",
                    email: "rsluo [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/rachel_luo.png",
                    web: null
                },
                { name: "Ajay Mandlekar",
                    email: "amandlek [at] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Fei-Fei Li",
                    img: "assets/img/square/ajay_mandlekar.png",
                    web: null
                },
                { name: "Damian Mrowca",
                    email: "mrowca [at] stanford [dot] edu",
                    desc: "Co-advisors: Fei-Fei Li, Daniel Yamins",
                    img: "assets/img/square/damian_mrowca.jpg",
                    web: null
                },
                { name: "Amir Sadeghian",
                    email: "amirabs [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/amir_sadeghian.jpg",
                    web: null
                },
                { name: "Trevor Scott Standley",
                    email: "tstand [at] cs [dot] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/trevor_standley.png",
                    web: "http://trevorstandley.com/"
                },
                { name: "Lyne P. Tchapmi",
                    email: "lynetcha [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/lyne_tchapmi.jpg",
                    web: null
                },
                { name: "Fei Xia",
                    email: "feixia [at] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Leo Guibas",
                    img: "assets/img/square/fei_xia.png",
                    web: "http://fxia.me/"
                },
                { name: "Danfei Xu",
                    email: "danfei [at] stanford [dot] edu",
                    desc: "Co-advisors: Silvio Savarese, Fei-Fei Li",
                    img: "assets/img/square/danfei_xu.png",
                    web: "http://cs.stanford.edu/~danfei/"
                },
                { name: "Serena Yeung ",
                    email: "serena [at] cs [dot] stanford [dot] edu",
                    desc: "Co-advisors: Fei-Fei Li, Arnold Milstein",
                    img: "assets/img/square/serena_yeung.jpg",
                    web: "http://ai.stanford.edu/~syyeung/"
                },
                { name: "Yuke Zhu ",
                    email: "yukez [at] cs [dot] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/yuke_zhu.jpeg",
                    web: "http://web.stanford.edu/~yukez/"
                },
                { name: "Barry Chai ",
                    email: null,
                    desc: "Research Assistant",
                    img: "http://vision.stanford.edu/img/barry.jpg",
                    web: null
                },
            ]
        },
        { name: "Master's Students",
            members: [
                { name: "Shervine Amidi",
                    email: "shervine [at] cs [dot] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/shervine_amidi.png",
                    web: "https://stanford.edu/~shervine"
                },
                { name: "Shyamal Buch",
                    email: "shyamal [at] cs [dot] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/shyamal_buch.jpg",
                    web: null
                },
                { name: "Lucio Dery",
                    email: "ldery [at] stanford [dot] edu",
                    desc: "Advisor: Juan Carlos Niebles",
                    img: "assets/img/square/lucio_dery.png",
                    web: null
                },
                { name: "Apoorva Dornadula",
                    email: "apoorvad [at] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/apoorva_dornadula.png",
                    web: "https://web.stanford.edu/~apoorvad/"
                },
                { name: "Julian Gao",
                    email: "julianyg [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/julian_gao.png",
                    web: null
                },
                { name: "Michelle Guo",
                    email: null,
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/michelle_guo.png",
                    web: null
                },
                { name: "Boris Ivanovic",
                    email: "borisi [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/boris_ivanovic.png",
                    web: "http://www.borisivanovic.com/"
                },
                { name: "Russell Kaplan",
                    email: "rjkaplan [at] cs [dot] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/russell_kaplan.png",
                    web: "https://twitter.com/russelljkaplan"
                },
                { name: "Andrey Kurenkov",
                    email: "andreyk [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/andrey_kurenkov.png",
                    web: null
                },
                { name: "John Lambert",
                    email: "johnlambert [at] cs [dot] stanford [dot] edu ",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/john_lambert.jpg",
                    web: "http://web.stanford.edu/~johnwl/"
                },
                { name: "Donsuk Lee",
                    email: "donlee90 [at] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/don_lee.png",
                    web: null
                },
                { name: "Zelun Luo",
                    email: "zelunluo [at] stanford [dot] edu",
                    desc: "Advisor: Fei-Fei Li",
                    img: "assets/img/square/zelun_luo.jpg",
                    web: "http://alan.vision/"
                },
                { name: "Viraj Mehta",
                    email: "virajm [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/viraj_mehta.png",
                    web: "http://www.virajm.com/"
                },
                { name: "Amani Peddada",
                    email: "amanivp [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/amani_peddada.jpg",
                    web: null
                },
                { name: "Sasha Sax",
                    email: "asax [at] stanford [dot] edu",
                    desc: "Advisor: Silvio Savarese",
                    img: "assets/img/square/sasha_sax.png",
                    web: "https://alexsax.github.io/"
                },
                { name: "Maxime Alexandre Voisin",
                    email: "maximev [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/maxime_voisin.png",
                    web: null
                },
                { name: "Catherine Wong",
                    email: "catwong [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/catherine_wong.png",
                    web: "http://stanford.edu/~catwong/"
                },
                { name: "Xiaoyan Wu",
                    email: "xw1 [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/xiaoyan_wu.png",
                    web: null
                },
                { name: "Zhaozhuo Xu",
                    email: "zhaozhuo [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/zhaozhuo_xu.png",
                    web: null
                },
                { name: "Yundong Zhang",
                    email: "yundong [at] stanford [dot] edu",
                    desc: "Co-advisors: Juan Carlos Niebles, Alvaro Soto",
                    img: "assets/img/square/yundong_zhang.png",
                    web: null
                },
            ]
        },
        { name: "Undergraduate Students",
            members: [
                { name: "Zhiyang He",
                    email: "hzyjerry [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/zhiyang_he.png",
                    web: null
                },
                { name: "Jihyeon Janel Lee",
                    email: "janel [at] cs [dot] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/jihyeon_lee.png",
                    web: null
                },
                { name: "Rishab Mehra",
                    email: "rishab [dot] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/rishab_mehra.png",
                    web: "http://www.rishab.me/"
                },
                { name: "William Shen",
                    email: "bshen88 [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/william_shen.png",
                    web: "https://b0ku1.github.io/"
                },
                { name: "Nancy Xu",
                    email: "xnancy [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/nancy_xu.JPG",
                    web: null
                },
                { name: "David Zhao",
                    email: "dzhao0 [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/david_zhao.png",
                    web: "http://www.dzhao.me/"
                },
                { name: "Jiren Zhu",
                    email: "jirenz [at] stanford [dot] edu",
                    desc: null,
                    img: "assets/img/square/jiren_zhu.png",
                    web: null
                },
            ]
        },
        { name: "Visiting / affiliated members",
            members: [
                { name: "Ehsan Adeli",
                    email: null,
                    desc: "Postdoc",
                    img: null,
                    web: "http://stanford.edu/~eadeli/"
                },
                { name: "Timur Bagautdinov",
                    email: null,
                    desc: "Postdoctoral Researcher",
                    img: null,
                    web: "https://people.epfl.ch/timur.bagautdinov"
                },
                { name: "Lamberto Ballan",
                    email: null,
                    desc: "Postdoctoral Researcher",
                    img: null,
                    web: "http://www.lambertoballan.net/"
                },
                { name: "Kaichun Mo",
                    email: null,
                    desc: "PhD Candidate",
                    img: null,
                    web: "http://cs.stanford.edu/~kaichun/"
                },
                { name: "Ariel Nuñez",
                    email: null,
                    desc: "Master’s Student, E.E. - Universidad del Norte",
                    img: null,
                    web: "http://piensa.co/"
                },
                { name: "Brigit Schroeder",
                    email: null,
                    desc: "Visiting Scholar",
                    img: null,
                    web: "http://www.cs.uml.edu/~bschroed/"
                },
                { name: "Shuran Song",
                    email: null,
                    desc: "Visiting Scholar",
                    img: null,
                    web: null
                },
                { name: "Riccardo Volpi",
                    email: null,
                    desc: "Visiting Scholar, Istituto Italiano di Tecnologia",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Alumni - Postdoc",
            members: [
                { name: "Ozan Sener",
                    email: null,
                    desc: "Postdoc, 2016-2018",
                    img: null,
                    web: "http://ozansener.net/"
                },
                { name: "Alex Alahi",
                    email: null,
                    desc: "Postdoc, 2013-2017",
                    img: null,
                    web: "http://web.stanford.edu/~alahi/"
                },
                { name: "Judy Hoffman",
                    email: null,
                    desc: "Postdoc, 2016-2017",
                    img: null,
                    web: null
                },
                { name: "Joseph Lim",
                    email: null,
                    desc: "Postdoc, 2015-2016",
                    img: null,
                    web: "http://people.csail.mit.edu/lim/"
                },
                { name: "Lamberto Ballan",
                    email: null,
                    desc: "Postdoc, 2014-2016",
                    img: null,
                    web: "http://www.lambertoballan.net/"
                },
                { name: "Yu Xiang",
                    email: null,
                    desc: "Postdoc, 2015 - 2016",
                    img: null,
                    web: "https://yuxng.github.io/"
                },
                { name: "Hyun Oh Song",
                    email: null,
                    desc: "Postdoc, 2014 - 2016",
                    img: null,
                    web: "http://ai.stanford.edu/~hsong/"
                },
                { name: "Michelle Greene ",
                    email: null,
                    desc: "Postdoc, 2013-2015",
                    img: null,
                    web: "http://stanford.edu/~mrgreene/index.html"
                },
                { name: "Tian Lan",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://cs.stanford.edu/~taranlan/"
                },
                { name: "Roozbeh Mottaghi",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://cs.stanford.edu/~roozbeh/"
                },
                { name: "Alireza Fathi",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://ai.stanford.edu/~ajoulin/"
                },
                { name: "Roni Mittelman",
                    email: null,
                    desc: "Postdoc, 2011 - 2013",
                    img: null,
                    web: null
                },
                { name: "Jingen Liu",
                    email: null,
                    desc: "Postdoc, 2010 - 2011",
                    img: null,
                    web: "http://www.cs.ucf.edu/~liujg/"
                },
            ]
        },
        { name: "Alumni - PhD",
            members: [
                { name: "Timnit Gebru",
                    email: null,
                    desc: "PhD, 2012-2017",
                    img: null,
                    web: "http://ai.stanford.edu/~tgebru/"
                },
                { name: "Jon Krause",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://ai.stanford.edu/~jkrause"
                },
                { name: "Andrej Karpathy",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://cs.stanford.edu/people/karpathy"
                },
                { name: "Vignesh Ramanathan",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://ai.stanford.edu/~vigneshr"
                },
                { name: "Marius Cătălin Iordan",
                    email: null,
                    desc: "PhD, 2009-2016",
                    img: null,
                    web: "http://cs.stanford.edu/~mci"
                },
                { name: "David Held",
                    email: null,
                    desc: "PhD, 2016",
                    img: null,
                    web: "http://davheld.github.io/"
                },
                { name: "Yu Xiang",
                    email: "yuxiang@cs.washington.edu",
                    desc: "PhD, 2010-2016",
                    img: null,
                    web: "https://yuxng.github.io"
                },
                { name: "Olga Russakovsky",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://ai.stanford.edu/~olga/"
                },
                { name: "Kevin Tang",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://ai.stanford.edu/~kdtang/"
                },
                { name: "Chris Baldassano",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://www.chrisbaldassano.com/"
                },
                { name: "Sid Ying-Ze Bao",
                    email: null,
                    desc: "University of Michigan, ECE, PhD 2014",
                    img: null,
                    web: null
                },
                { name: "Gaurav Pandey",
                    email: null,
                    desc: "University of Michigan, ECE, PhD, 2014",
                    img: null,
                    web: null
                },
                { name: "Jia Deng",
                    email: null,
                    desc: "PhD, 2008-2013",
                    img: null,
                    web: "http://ai.stanford.edu/~jiadeng/"
                },
                { name: "Bangpeng Yao",
                    email: null,
                    desc: "PhD, 2008-2013",
                    img: null,
                    web: "http://ai.stanford.edu/~bangpeng/"
                },
                { name: "Wongun Choi",
                    email: null,
                    desc: "PhD 2013, University of Michigan",
                    img: null,
                    web: "http://www-personal.umich.edu/~wgchoi/"
                },
                { name: "Min Sun",
                    email: null,
                    desc: "PhD, 2013, University of Michigan, ECE",
                    img: null,
                    web: null
                },
                { name: "Jason Clemons",
                    email: null,
                    desc: "PhD 2013, University of Michigan, CSE",
                    img: null,
                    web: null
                },
                { name: "Jia Li",
                    email: null,
                    desc: "PhD, 2006-2011",
                    img: null,
                    web: "http://vision.stanford.edu/lijiali/"
                },
                { name: "Juan Carlos Niebles",
                    email: null,
                    desc: "PhD, 2005-2010",
                    img: null,
                    web: "http://www.niebles.net/"
                },
                { name: "Mani Golparvar-Fard",
                    email: null,
                    desc: "University of Illinois, at Urbana-Champaign, CEE, PhD, 2010",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Alumni - Master Students",
            members: [
                { name: "Leo Keselman",
                    email: null,
                    desc: "MS",
                    img: null,
                    web: null
                },
                { name: "Yuanfang (Yolanda) Wang",
                    email: null,
                    desc: "MS, 2016-2018, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Te-Lin Wu ",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Ian Tam",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Alexandre Robicquet",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: "http://web.stanford.edu/~arobicqu/"
                },
                { name: "Chris Cruise",
                    email: null,
                    desc: "MS, 2015-2017, ME, Stanford",
                    img: null,
                    web: null
                },
                { name: "Saumitro Dasgupta",
                    email: null,
                    desc: "MS, 2014-2015, CS, Stanford",
                    img: null,
                    web: "http://ai.stanford.edu/~saumitro"
                },
                { name: "Yuke Zhu",
                    email: null,
                    desc: "MS, 2014-2015, CS, Stanford",
                    img: null,
                    web: "http://web.stanford.edu/~yukez/"
                },
                { name: "Tsung-Chuan Chen",
                    email: null,
                    desc: "MS, 2014, EE, Stanford",
                    img: null,
                    web: null
                },
                { name: "Victor Escorcia",
                    email: null,
                    desc: "2014, Master’s Student, E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Fabian Caba",
                    email: null,
                    desc: "2014, Master’s Student E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Maria Alejandra Davila",
                    email: null,
                    desc: "2014, Master’s Student E.E.",
                    img: null,
                    web: null
                },
                { name: "Yu-Wei Chao",
                    email: null,
                    desc: "MS, 2011-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Changkyu Song",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Shili Xu",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Wan Huang",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Ryan Tokola",
                    email: null,
                    desc: "MS, 2010-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Murali Telaporu",
                    email: null,
                    desc: "MS, 2011-2012, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Ryan Tokola",
                    email: null,
                    desc: "MS, 2010-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Mohit Bagra",
                    email: null,
                    desc: "MS, 2010-2012, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Shyam Kumar",
                    email: null,
                    desc: "MS, 2010-2011, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Khuram Shahid",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Liang Mei",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Paritosh Gupta",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Andrey del Pozo",
                    email: null,
                    desc: "MS, 2006–2008, CS, UIUC",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Alumni - Undergraduate",
            members: [
                { name: "Amani Peddada",
                    email: null,
                    desc: "2014—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Bryan Anenberg",
                    email: null,
                    desc: "2014—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Helen Jiang",
                    email: null,
                    desc: "2015—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Jyno Kim",
                    email: null,
                    desc: "2011-2012, University of Michigan",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Past Visiting / Affiliated Members",
            members: [
                { name: "Oliver Groth",
                    email: null,
                    desc: "2015-2016, Dresden University of Technology, Oxford University",
                    img: null,
                    web: "http://ori.ox.ac.uk/mrg_people/oliver-groth/"
                },
                { name: "Jorge Martínez",
                    email: null,
                    desc: "2016, Master’s E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "David Altamar",
                    email: null,
                    desc: "2016, Master’s E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Kuo-Hao Zeng",
                    email: null,
                    desc: "2017, MS",
                    img: null,
                    web: "https://kuohaozeng.github.io/"
                },
                { name: "Ashesh Jain",
                    email: null,
                    desc: "PhD, Cornell University",
                    img: null,
                    web: null
                },
                { name: "Chenxia Wu",
                    email: null,
                    desc: "PhD, Cornell University",
                    img: null,
                    web: null
                },
                { name: "Francesco Castaldo",
                    email: null,
                    desc: "PhD, SUN, Italy",
                    img: null,
                    web: null
                },
                { name: "Sam Corbett-Davies",
                    email: null,
                    desc: "PhD candidate, Stanford University",
                    img: null,
                    web: null
                },
                { name: "Laura Leal-Taixe",
                    email: null,
                    desc: "PhD, Institute for Information Processing (TNT), Leibniz University Hannover, Germany",
                    img: null,
                    web: null
                },
                { name: "Giorgio Gemignani",
                    email: null,
                    desc: "PhD, Department of Applied Science, University of Naples Parthenope, Italy",
                    img: null,
                    web: null
                },
                { name: "Axel Furlan",
                    email: null,
                    desc: "PhD, University of Milan - Bicocca, Italy",
                    img: null,
                    web: null
                },
                { name: "Valeria Garro",
                    email: null,
                    desc: "PhD, University of Verona, Italy",
                    img: null,
                    web: null
                },
                { name: "Roberto Javier Lopez-Sastre",
                    email: null,
                    desc: "PhD, Dept. Signal Theory and Communications, U of Alcala",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Faculty & Industry Collaborators",
            members: [
                { name: "Hrishikesh Aradhye",
                    email: null,
                    desc: null,
                    img: null,
                    web: "https://research.google.com/pubs/author37818.html"
                },
                { name: "Chih-Wei (Louis) Chen",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://ai.stanford.edu/~cwchen/"
                },
                { name: "Larry Davis",
                    email: null,
                    desc: "Professor, CS, UMD",
                    img: null,
                    web: null
                },
                { name: "Andrey Del Pozo",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Ron Fedkiw",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Andras Ferencz",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Martin Fischer",
                    email: null,
                    desc: "Professor, CEE, Stanford",
                    img: null,
                    web: null
                },
                { name: "Bernard Ghanem",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://www.bernardghanem.com/"
                },
                { name: "Mani Golparvar-Fard",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://raamac.cee.illinois.edu/"
                },
                { name: "Deborah Gordon",
                    email: null,
                    desc: "Professor, Department of Biology, Stanford",
                    img: null,
                    web: null
                },
                { name: "Leo Guibas",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Bohyung Han",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://cvlab.postech.ac.kr/~bhhan/"
                },
                { name: "Alfred Hero",
                    email: null,
                    desc: "Professor, EECS, U-Michigan",
                    img: null,
                    web: null
                },
                { name: "Oussama Khatib",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Jia Li",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://vision.stanford.edu/lijiali/"
                },
                { name: "Caroline Pantofaru",
                    email: null,
                    desc: "Research Scientist, Google",
                    img: null,
                    web: null
                },
                { name: "Feniosky Pena-Mora",
                    email: null,
                    desc: "Dean of The Fu Foundation School of Engineering and Applied Science at Columbia University.",
                    img: null,
                    web: null
                },
                { name: "Luciano Sbaiz",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Alvaro Soto",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://asoto.ing.puc.cl/"
                },
                { name: "Lin Sun",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Min Sun",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://aliensunmin.github.io/"
                },
                { name: "Sebastian Thrun",
                    email: null,
                    desc: "Professor, Computer Science",
                    img: null,
                    web: null
                },
                { name: "Hongcheng Wang",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://hongchengwang.com/"
                },
                { name: "Bangpeng Yao",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://ai.stanford.edu/~bangpeng/"
                },
            ]
        },
    ]
};
//# sourceMappingURL=people.data.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_data__ = __webpack_require__("../../../../../src/app/people/people.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getPeople = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__people_data__["a" /* PEOPLE */]);
    };
    return PeopleService;
}());
PeopleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PeopleService);

//# sourceMappingURL=people.service.js.map

/***/ }),

/***/ "../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content container\" align='center'>\n<br>\n<br>\n<br>\n<h2>Deep Learning Under Privileged Information Using Heteroscedastic Dropout <a href=\"https://github.com/johnwlambert/dlupi-heteroscedastic-dropout\">[Code]</a>\n</h2>\n<a href=\"http://web.stanford.edu/~johnwl/\">John Lambert*,</a>\n<br>\n<a href=\"http://ozansener.net/\">Ozan Sener*,</a>\n<br>\n<a href=\"http://cvgl.stanford.edu/silvio/\">Silvio Savarese.</a>\n<br>\n<p>\nPresented at <a href=\"http://cvpr2018.thecvf.com/\">CVPR 2018</a>\n</p>\n<div align='center'>\n  <img src='assets/img/research_projects/heteroscedastic-dropout-pull_figure.png' height=\"250px\">\n</div>\n<br>\n<p align='left'>\n\tUnlike machines, humans learn through rapid, abstract model-building. The role of a teacher is not simply to hammer home right or wrong answers, but rather to provide intuitive comments, comparisons, and explanations to a pupil. This is what the Learning Under Privileged Information (LUPI) paradigm endeavors to model by utilizing extra knowledge only available during training. We propose a new LUPI algorithm specifically designed for Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs). We propose to use a heteroscedastic dropout (\\ie dropout with a varying variance) and make the variance of the dropout a function of privileged information. Intuitively, this corresponds to using the privileged information to control the uncertainty of the model output. We perform experiments using CNNs and RNNs for the tasks of image classification and machine translation. Our method significantly increases the sample efficiency during learning, resulting in higher  accuracy with a large margin when the number of training examples is limited. We also theoretically justify the gains in  sample efficiency by providing a generalization error bound decreasing with O(1/n), where n is the number of training examples, in an oracle case.\n</p>\n<br>\n <div align='center'>\n  <img src='assets/img/research_projects/heteroscedastic-dropout-fig-lstm.png' height=\"250px\">\n</div>\n<br>\n<!-- - The DLUPI models [used in the paper](#models-from-the-paper)\n- Code for [training new feedforward CNN models](#running-on-new-images)\n- Code for [training new feedforward RNN models](#running-on-new-images) -->\n<p align='left'>\nIf you find this code useful for your research, please cite:\n</p>\n<div align='left' style=\"white-space: pre-wrap;\">\n{{\n\t\"@InProceedings{Lambert_2018_CVPR,\n\tauthor = {Lambert, John and Sener, Ozan and Savarese, Silvio},\n\ttitle = {Deep Learning Under Privileged Information Using Heteroscedastic Dropout},\n\tbooktitle = {The IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},\n\tmonth = {June},\n\tyear = {2018}\t\n}\"\n}}\n</div>\n<br>\n<!-- \nIn this repository we provide:\n\n- Top-k Single-crop testing framework\n- Reproducible (repeatable) random image transformations\n- Curriculum learning examples in PyTorch\n- Base and derived class examples with virtual functions in Python\n-\n-->\n<div align='left'>\nWe also provide implementations of various baselines that use privileged information, including:\n <ul >\n<li> J. Hoffman, S. Gupta, and T. Darrell. <a href=\"https://people.eecs.berkeley.edu/~sgupta/pdfs/hoffman2016learning.pdf\">Learning with Side Information through Modality Hallucination</a>. In CVPR, 2016. </li>\n<li> Y. Chen, X. Jin, J. Feng, and S. Yan. <a href=\"https://arxiv.org/abs/1701.06772\">Training Group Orthogonal Neural Networks with Privileged Information</a>. In IJCAI, 2017. Pages 1532-1538. https://doi.org/10.24963/ijcai.2017/212. </li>\n<li> H. Yang, J. Zhou, J. Cai, and Y.S. Ong. <a href=\"https://arxiv.org/abs/1702.08681\">MIML-FCN+: Multi-Instance Multi-Label Learning via Fully Convolutional Networks With Privileged Information</a>. In CVPR, 2017. </li>\n<li> N. Srivastava, G. Hinton, A. Krizhevsky, I. Sutskever, and R. Salakhutdinov. <a href=\"https://www.cs.toronto.edu/~hinton/absps/JMLRdropout.pdf\">Dropout: A Simple Way to Prevent Neural Networks from Overfitting</a>. In JMLR, 2014. Pages 1929−1958. </li>\n<li> A. Achille, S. Soatto. <a href=\"https://arxiv.org/abs/1611.01353\">Information Dropout: learning optimal representations through noisy computation</a>. Transactions on Pattern Analysis and Machine Intelligence (PAMI), 2018. </li>\n<li> K. Simonyan, A. Zisserman. <a href=\"https://arxiv.org/abs/1409.1556\">Very Deep Convolutional Networks for Large-Scale Image Recognition</a>. In ICLR, 2015. </li>\n</ul>\n</div>\n\n <div align='center'>\n  <img src='assets/img/research_projects/heteroscedastic-dropout-fig-cnn.png' height=\"250px\">\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeteroscedasticDropoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeteroscedasticDropoutComponent = (function () {
    function HeteroscedasticDropoutComponent() {
    }
    HeteroscedasticDropoutComponent.prototype.ngOnInit = function () {
    };
    return HeteroscedasticDropoutComponent;
}());
HeteroscedasticDropoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-heteroscedastic-dropout',
        template: __webpack_require__("../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/heteroscedastic-dropout/heteroscedastic-dropout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeteroscedasticDropoutComponent);

//# sourceMappingURL=heteroscedastic-dropout.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content container\">\n<p>\n  [Project pages from recent publictions will be added below:]\n</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsFilterByAuthorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionsFilterByNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Filters a list of Publications by author.
 * Takes a string for the author name that defaults to 'All'.
 * Usage:
 *   value | publicationsFilterByAuthor:authorName
 * Example:
 *   {{ publications | publicationsFilterByAuthor:'Fei-Fei Li' }}
 *   returns all publications only for Fei-Fei Li.
 */
var PublicationsFilterByAuthorPipe = (function () {
    function PublicationsFilterByAuthorPipe() {
    }
    PublicationsFilterByAuthorPipe.prototype.transform = function (value, authorName) {
        if (authorName == 'All')
            return value;
        return value.filter(function (publication) {
            return publication.authors.indexOf(authorName) > -1;
        });
    };
    return PublicationsFilterByAuthorPipe;
}());
PublicationsFilterByAuthorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'publicationsFilterByAuthor' })
], PublicationsFilterByAuthorPipe);

/**
 * Filters a list of Publications by name.
 * Takes a string for the section name that defaults to 'All'.
 * Usage:
 *   value | sectionsFilterByName:sectionName
 * Example:
 *   {{ sections | sectionsFilterByName:'Publications 2017' }}
 *   returns all sections with 'Publications 2017' name.
 */
var SectionsFilterByNamePipe = (function () {
    function SectionsFilterByNamePipe() {
    }
    SectionsFilterByNamePipe.prototype.transform = function (value, sectionName) {
        if (sectionName == 'All')
            return value;
        return value.filter(function (section) {
            return section.name == sectionName;
        });
    };
    return SectionsFilterByNamePipe;
}());
SectionsFilterByNamePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'sectionsFilterByName' })
], SectionsFilterByNamePipe);

//# sourceMappingURL=publications-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-3 col-xs-10 sm-margin-b-30\">\n        <form>\n          <ul class=\"sidebar list-unstyled sidenav-position\">\n            <li class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"section\"\n                     type=\"radio\"\n                     name=\"section\"\n                     value=\"All\"><div>All Publications</div>\n              </label>\n            </li>\n            <li *ngFor=\"let s of sections\" class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"section\"\n                       type=\"radio\"\n                       name=\"section\"\n                       value=\"{{s.name}}\"><div>{{s.name}}</div>\n              </label>\n            </li>\n          </ul>\n        </form>\n      </div>\n\n      <div id=\"content\" class=\"content col-md-9 col-xs-12 sm-margin-b-30\">\n        <form class=\"filterstyle\">\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"All\">All Authors</div>\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Fei-Fei Li\">L.Fei-Fei</div>\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Juan Carlos Niebles\">Juan Carlos Niebles</div>\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Silvio Savarese\">Silvio Savarese</div>\n        </form>\n\n        <ul class=\"row list-unstyled\">\n          <li *ngFor=\"let s of sections | sectionsFilterByName:section\">\n            <h2 id=\"{{sectionHref(s)}}\">{{s.name}}</h2>\n            <ul class=\"list-unstyled\">\n              <li *ngFor=\"let publication of s.publications | publicationsFilterByAuthor:author\"\n                  class=\"publication-list\">\n                <div class=\"row top-seprates\">\n                  <div class=\"col-md-3 col-xs-3\">\n                    <img *ngIf=\"publication.image != ''\"\n                         class=\"img-responsive article-seprates\"\n                         src=\"/assets/img/pub/{{publication.image}}\">\n                  </div>\n                  <div class=\"col-md-9 col-xs-9\">\n                    <p><b>{{publication.title}}</b></p>\n                    <p *ngIf=\"publication.info != ''\"><em>{{publication.info}}</em></p>\n                    <p>{{publication.authorsText}}</p>\n                    <div [innerHtml]=\"publicationHtml(publication)\"></div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications__ = __webpack_require__("../../../../../src/app/publications/publications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_service__ = __webpack_require__("../../../../../src/app/publications/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationsComponent = (function () {
    function PublicationsComponent(publicationsService, route) {
        this.publicationsService = publicationsService;
        this.route = route;
        this.author = __WEBPACK_IMPORTED_MODULE_2__publications__["a" /* ALL */];
        this.section = __WEBPACK_IMPORTED_MODULE_2__publications__["a" /* ALL */];
    }
    PublicationsComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    PublicationsComponent.prototype.onBackToTop = function () {
        window.scrollTo(0, 0);
    };
    PublicationsComponent.prototype.getSections = function () {
        var _this = this;
        this.publicationsService.getSections().then(function (sections) { return _this.sections = sections; });
    };
    PublicationsComponent.prototype.sectionHref = function (section) {
        return section.name.replace(/([\W-])/g, '').toLowerCase();
    };
    PublicationsComponent.prototype.publicationHtml = function (pub) {
        var joined_refs = '';
        for (var _i = 0, _a = pub.refs; _i < _a.length; _i++) {
            var ref = _a[_i];
            joined_refs += '[<a class="link-sytle" href="' + ref.href + '">' + ref.text + '</a>] ';
        }
        return joined_refs;
    };
    PublicationsComponent.prototype.ngOnInit = function () {
        this.getSections();
    };
    return PublicationsComponent;
}());
PublicationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/publications/publications.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PublicationsComponent);

var _a, _b;
//# sourceMappingURL=publications.component.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publications__ = __webpack_require__("../../../../../src/app/publications/publications.ts");

var SECTIONS = [
    { name: "Publications 2018",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */], __WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kuan Fang, , Yuke Zhu, Animesh Garg, Andrey Kurenkov, Viraj Mehta, Li Fei-Fei, Silvio Savarese",
                image: "kuanrss2018",
                title: "Learning Task-Oriented Grasping for Tool Manipulation from Simulated Self-Supervision",
                info: "RSS 2018",
                refs: [
                    { href: "https://sites.google.com/view/task-oriented-grasp/",
                        text: "Project Website",
                    },
                    { href: "https://sites.google.com/view/task-oriented-grasp/",
                        text: "PDF",
                    },
                    { href: "bit.ly/task-oriented-grasp",
                        text: "Supplementary Material",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Amir R. Zamir, Alexander Sax*, William B. Shen* Leonidas Guibas, Jitendra Malik, Silvio Savarese",
                image: "taskonomy_thumbnail_loop.gif",
                title: "Taskonomy: Disentangling Task Transfer Learning",
                info: "CVPR 2018 (Oral, Winner of the Best Paper Award)",
                refs: [
                    { href: "https://taskonomy.vision/",
                        text: "Project",
                    },
                    { href: "https://github.com/StanfordVL/taskonomy/tree/master/taskbank",
                        text: "Code",
                    },
                    { href: "http://taskonomy.stanford.edu/taskonomy_CVPR2018.pdf",
                        text: "PDF",
                    },
                    { href: "https://taskonomy.vision/tasks",
                        text: "Online Demo",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Fei Xia*, Amir R. Zamir*, Zhiyang He*, Alexander Sax, Jitendra Malik, Silvio Savarese",
                image: "gibson-env.gif",
                title: "Gibson Env: Real-World Perception for Embodied Agents",
                info: "CVPR 2018 (Spotlight, Winner of NVIDIA Pioneering Research Award)",
                refs: [
                    { href: "http://gibsonenv.stanford.edu",
                        text: "PROJECT",
                    },
                    { href: "http://gibson.vision/Gibson_CVPR2018.pdf",
                        text: "PDF",
                    },
                    { href: "https://github.com/StanfordVL/GibsonEnv",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "John Lambert, Ozan Sener, Silvio Savarese",
                image: "john_ozan2018.png",
                title: "Deep Learning under Privileged Information Using Heteroscedastic Dropout",
                info: "CVPR 2018 (Spotlight)",
                refs: [
                    { href: "https://arxiv.org/abs/1805.11614",
                        text: "PDF",
                    }
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */], __WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Agrim Gupta, Justin Johnson, Li Fei-Fei, Silvio Savarese, Alexandre Alahi",
                image: "agrim_cvpr2018.png",
                title: "Social GAN: Socially Acceptable Trajectories with Generative Adversarial Networks",
                info: "CVPR 2018",
                refs: [
                    { href: "https://arxiv.org/pdf/1803.10892",
                        text: "PDF",
                    },
                    { href: "https://github.com/agrimgupta92/sgan",
                        text: "CODE"
                    }
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Agrim Gupta, Li Fei-Fei",
                image: "justincvpr2018.png",
                title: "Image Generation from Scene Graphs",
                info: "CVPR 2018",
                refs: [
                    { href: "https://arxiv.org/abs/1804.01622",
                        text: "PDF",
                    },
                    { href: "https://github.com/google/sg2im",
                        text: "CODE"
                    }
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna, Ines Chami, Michael Bernstein, Li Fei-Fei",
                image: "referring_relationships_cvpr2018.png",
                title: "Referring Relationships",
                info: "CVPR 2018",
                refs: [
                    { href: "https://cs.stanford.edu/people/ranjaykrishna/referringrelationships/index.html",
                        text: "PDF",
                    },
                    { href: "https://cs.stanford.edu/people/ranjaykrishna/referringrelationships/index.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Riccardo Volpi, Pietro Morerio, Silvio Savarese, Vittorio Murino",
                image: "riccardo.png",
                title: "Adversarial Feature Augmentation for Unsupervised Domain Adaptation",
                info: "CVPR 2018",
                refs: [
                    { href: "https://arxiv.org/abs/1711.08561",
                        text: "PDF",
                    },
                    { href: "https://github.com/ricvolpi/adversarial-feature-augmentation",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Kuan Fang*, Te-Lin Wu*, Daniel Yang, Silvio Savarese, Joseph J. Lim",
                image: "demo2vec-cvpr2018.png",
                title: "Demo2Vec: Learning Object Affordances from Videos in the Wild",
                info: "CVPR 2018",
                refs: [
                    { href: "assets/papers/demo2vec-cvpr2018.pdf",
                        text: "PDF",
                    },
                    { href: "https://sites.google.com/view/demo2vec/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Danfei Xu*, Suraj Nair*, Yuke Zhu, Julian Gao, Animesh Garg, Li Fei-Fei, Silvio Savarese",
                image: "danfeinair_icra2018.png",
                title: "Neural Task Programming: Learning to Generalize Across Hierarchical Tasks ",
                info: "ICRA 2018",
                refs: [
                    { href: "https://arxiv.org/abs/1710.01813",
                        text: "PDF",
                    },
                    { href: "https://stanfordvl.github.io/ntp/",
                        text: "WEBSITE"
                    },
                    { href: "https://github.com/StanfordVL/ntp",
                        text: "CODE"
                    }
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Kuan Fang, Yunfei Bai, Stefan Hinterstoisser, Silvio Savarese, Mrinal Kalakrishnan",
                image: "fang2018icra.png",
                title: "Multi-Task Domain Adaptation for Deep Learning of Instance Grasping from Simulation",
                info: "ICRA 2018",
                refs: [
                    { href: "assets/papers/fang2018icra.pdf",
                        text: "PDF",
                    },
                    { href: "https://sites.google.com/view/multi-task-domain-adaptation/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Kuan Fang, Yu Xiang, Xiaocheng Li, Silvio Savarese",
                image: "fang2018wacv.png",
                title: "Recurrent Autoregressive Networks for Online Multi-Object Tracking",
                info: "WACV 2018",
                refs: [
                    { href: "assets/papers/fang2018wacv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Xiaoxue Zang, Marynel Vázquez, Juan Carlos Niebles, Alvaro Soto, Silvio Savarese",
                image: "behavioral-indoor-navigation-thumb.png",
                title: "Behavioral Indoor Navigation With Natural Language Directions",
                info: "HRI 2018 (Late Breaking Reports)",
                refs: [
                    { href: "assets/papers/behavior-indoor-navigation.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang*, Shyamal Buch*, Lucio Dery, Animesh Garg, Li Fei-Fei, and Juan Carlos Niebles",
                image: "cvpr18_ramil.png",
                title: 'Finding "It": Weakly-Supervised Reference-Aware Visual Grounding in Instructional Video',
                info: "CVPR 2018 (oral)",
                refs: [
                    { href: "http://ai.stanford.edu/~dahuang/papers/cvpr18-ramil.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang, Vignesh Ramanathan, Dhruv Mahajan, Lorenzo Torresani, Manohar Paluri, Li Fei-Fei, and Juan Carlos Niebles",
                image: "cvpr18_fb.gif",
                title: "What Makes a Video a Video: Analyzing Temporal Information in Video Understanding Models and Datasets",
                info: "CVPR 2018",
                refs: [
                    { href: "http://ai.stanford.edu/~dahuang/papers/cvpr18-fb.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Andrey Kurenkov*, Jingwei Ji*, Animesh Garg, Viraj Mehta, JunYoung Gwak, Christopher Choy, Silvio Savarese",
                image: "deformnet-18.png",
                title: "DeformNet: Free-Form Deformation Network for 3D Shape Reconstruction from a Single Image",
                info: "WACV 2018",
                refs: [
                    { href: "assets/papers/deformnet.pdf",
                        text: "PDF",
                    },
                    { href: "https://www.youtube.com/watch?v=cKzXVL6W--8",
                        text: "VIDEO",
                    },
                    { href: "https://deformnet-site.github.io/DeformNet-website/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Gabriel Sepulveda, Juan Carlos Niebles, and Alvaro Soto",
                image: "sepulveda-wacv18.png",
                title: "A Deep Learning Based Behavioral Approach to Indoor Autonomous Navigation",
                info: "ICRA 2018",
                refs: [
                    { href: "https://arxiv.org/pdf/1803.04119v1.pdf",
                        text: "PDF",
                    },
                ],
            },
        ]
    },
    { name: "Publications 2017",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Trevor Standley, Ozan Sener, Dawn Chen, Silvio Savarese",
                image: "image2mass.png",
                title: "image2mass: Estimating the Mass of an Object from Its Image",
                info: "CORL 2017 (Long Talk)",
                refs: [
                    { href: "assets/papers/standley17a.pdf",
                        text: "PDF",
                    },
                    { href: "http://trevorstandley.com/image2mass.html",
                        text: "PROJECT",
                    },
                    { href: "https://github.com/tstandley/image2mass",
                        text: "CODE",
                    },
                    { href: "https://youtu.be/xfyK03MEZ9Q?t=1h27m25s",
                        text: "TALK",
                    },
                    { href: "http://trevorstandley.com/bibtex/standley_corl_2017.bib",
                        text: "BIBTEX",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Rajan Vaish, Snehalkumar Gaikwad, Geza Kovacs, Andreas Veit, Ranjay Krishna, Imanol Arrieta Ibarra, Camelia Simoiu, Michael Wilber, Serge Belongie, Sharad C. Goel, James Davis, Michael Bernstein.",
                image: "CrowdResearchOpenandScalableUniversityLaboratories.png",
                title: "Crowd Research: Open and Scalable University Laboratories",
                info: "UIST 2017 (Best Paper Honorable Mention)",
                refs: [
                    { href: "http://hci.stanford.edu/publications/2017/crowdresearch/crowd-research-uist2017.pdf",
                        text: "PDF",
                    },
                    { href: "http://crowdresearchinitiative.stanford.edu/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Zelun Luo, Yuliang Zou, Judy Hoffman, Li Fei-Fei",
                image: "luo2017nips.png",
                title: "Label Efficient Learning of Transferable Representations across Domains and Tasks",
                info: "NIPS 2017",
                refs: [
                    { href: "assets/papers/luo2017nips.pdf",
                        text: "PDF",
                    },
                    { href: "http://alan.vision/nips17_website/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, William B. Shen, De-An Huang, Min Sun, Juan Carlos Niebles.",
                image: "imitation.png",
                title: "Visual Forecasting by Imitating Dynamics in Natural Sequences.",
                info: "IEEE International Conference on Computer Vision (ICCV), Venice, Italy, October 2017.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Edahuang/papers/iccv17-vfid.pdf",
                        text: "PDF",
                    },
                    { href: "https://www.youtube.com/watch?v=8WVKeiZikjg",
                        text: "Talk",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */], __WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Bernard Ghanem, Li Fei-Fei, Juan Carlos Niebles.",
                image: "sstad.png",
                title: "End-to-End, Single-Stream Temporal Action Detection in Untrimmed Videos.",
                info: "British Machine Vision Conference (BMVC), London, UK, September 2017 (oral).",
                refs: [
                    { href: "assets/papers/buch2017bmvc.pdf",
                        text: "PDF",
                    },
                    { href: "https://github.com/shyamal-b/ss-tad",
                        text: "Code",
                    },
                    { href: "https://www.youtube.com/watch?v=uwlwJ_Br9tU",
                        text: "Talk",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "SST.jpg",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "https://drive.google.com/file/d/0B_-dKvCH2VL7WG01Wjh4TEdZSjQ/view?usp=sharing",
                        text: "POSTER",
                    },
                    { href: "https://github.com/shyamal-b/sst",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Shih-Han Chou, Fu-Hsiang Chan, Juan Carlos Niebles, Min Sun.",
                image: "agent_risk.jpg",
                title: "Agent-centric Risk Assessment: Accident Anticipation and Risky Region Localization.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [
                    { href: "assets/papers/ZengCVPR17anticipation.pdf",
                        text: "PDF",
                    },
                    { href: "http://aliensunmin.github.io/project/video-Forecasting/",
                        text: "Project",
                    },
                    { href: "https://www.youtube.com/watch?v=CGLZhd-c0hw",
                        text: "Video",
                    },
                    { href: "http://ai.stanford.edu/~dahuang/posters/cvpr17_hao.pdf",
                        text: "Poster",
                    },
                    { href: "https://arxiv.org/abs/1705.06560",
                        text: "arXiv",
                    },
                    { href: "https://goo.gl/forms/WtMgvkX7AErt454V2",
                        text: "Data",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "sparse.jpg",
                title: "Sparse composition of body poses and atomic actions for human activity recognition in RGB-D videos.",
                info: "Image and Vision Computing, March 2017.",
                refs: [
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "Data",
                    },
                    { href: "http://dx.doi.org/10.1016/j.imavis.2016.11.004",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Ching-Yao Chuang, Yuan-Hong Liao, Juan Carlos Niebles and Min Sun.",
                image: "AAAI17VideoQA.jpg",
                title: "Leveraging Video Descriptions to Learn Video Question Answering.",
                info: "AAAI Conference on Artificial Intelligence (AAAI), San Francisco, USA, February 2017.",
                refs: [
                    { href: "http://aliensunmin.github.io/project/video-language/index.html#VideoQA",
                        text: "Project",
                    },
                    { href: "http://ug-video.com/",
                        text: "Data",
                    },
                    { href: "https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14906",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1611.04021",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Judy Hoffman, Li Fei-Fei.",
                image: "gebru2017iccv.jpg",
                title: "Fine-grained Recognition in the Wild: A Multi-Task Domain Adaptation Approach",
                info: "ICCV 2017.",
                refs: [
                    { href: "assets/papers/gebru2017iccv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu*, Daniel Gordon*, Eric Kolve, Dieter Fox, Li Fei-Fei, Abhinav Gupta, Roozbeh Mottaghi, Ali Farhadi.",
                image: "zhu2017iccv.png",
                title: "Visual Semantic Planning using Deep Successor Representations",
                info: "ICCV 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017iccv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ranjay Krishna, Kenji Hata, Frederic Ren, Li Fei-Fei, Juan Carlos Niebles.",
                image: "krishna2017iccv.png",
                title: "Dense-Captioning Events in Videos",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1705.00754",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/",
                        text: "PROJECT",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/video.mp4",
                        text: "Video",
                    },
                    { href: "https://github.com/ranjaykrishna/densevid_eval",
                        text: "Code",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/captions.zip",
                        text: "Data",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Judy Hoffman, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "johnson2017iccv.png",
                title: "Inferring and Executing Programs for Visual Reasoning",
                info: "ICCV 2017 (oral).",
                refs: [
                    { href: "https://arxiv.org/abs/1705.03633",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/jcjohns/iep",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Agrim Gupta, Justin Johnson, Alexandre Alahi, Li Fei-Fei.",
                image: "gupta2017iccv.png",
                title: "Characterizing and Improving Stability in Neural Style Transfer.",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1705.02092",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kazuki Kozuka, Juan Carlos Niebles.",
                image: "fig_Kazuki_Kozuka.jpg",
                title: "Risky Region Localization with Point Supervision.",
                info: "IEEE International Conference on Computer Vision (ICCV) CVRSUAD Workshop, Venice, Italy, October 2017. (poster)",
                refs: [
                    { href: "assets/papers/kozuka_iccv2017_CVRSUAD.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/iccv2017_kazuki_kozuka_poster.pdf",
                        text: "Poster",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Ajay Mandlekar*, Yuke Zhu*, Animesh Garg*, Li Fei-Fei, Silvio Savarese.",
                image: "mandlekar2017iros.png",
                title: "Adversarially Robust Policy Learning through Active Construction of Physically-Plausible Perturbations.",
                info: "IROS 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/mandlekar2017iros.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Alahi, J. Wilson, L. Fei-Fei S. Savarese.",
                image: "alahi2017icra.png",
                title: "Unsupervised Camera Localization in Crowded Spaces",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2017.",
                refs: [
                    { href: "assets/papers/alahi_icra17.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Lyne P. Tchapmi, Christopher B. Choy, Iro Armeni, JunYoung Gwak, Silvio Savarese.",
                image: "segcloud.png",
                title: "SEGCloud: Semantic Segmentation of 3D Point Clouds",
                info: "International Conference of 3D Vision (3DV) 2017 (Spotlight)",
                refs: [
                    { href: "assets/papers/segcloud_2017.pdf",
                        text: " PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Bagautdinov, A. Alahi, F. Fleuret, P. Fua, S. Savarese,",
                image: "bagautdinov_1611.09078.png",
                title: "Social Scene Understanding: End-to-End Multi-Person Action Localization and Collective Activity Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017 oral presentation.",
                refs: [
                    { href: "https://arxiv.org/abs/1611.09078",
                        text: " PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Ji, J. Kwon, M. McFarland, S. Savarese,",
                image: "ji_1703.02168.png",
                title: "Deep View Morphing",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1703.02168",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. R. Zamir*, T. Wu* , L. Sun, W. B. Shen, B. E. Shi, J. Malik, S. Savarese,",
                image: "zamir_1612.09508.png",
                title: "Feedback Networks",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [
                    { href: "https://arxiv.org/pdf/1612.09508",
                        text: "PDF",
                    },
                    { href: "http://feedbacknet.stanford.edu/",
                        text: "Project",
                    },
                    { href: "assets/bibtex/zamir2016feedback.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Sadeghian, A. Alahi, S. Savarese,",
                image: "sadeghian_1701.01909.png",
                title: "Tracking The Untrackable: Learning To Track Multiple Cues with Long-Term Dependencies",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1701.01909",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I. Armeni*, A. Sax*, A. R. Zamir, S. Savarese,",
                image: "armeni_1702.01105.png",
                title: "Joint 2D-3D-Semantic Data for Indoor Scene Understanding",
                info: "in arXiv, 2017.",
                refs: [
                    { href: "https://arxiv.org/pdf/1702.01105.pdf",
                        text: "PDF",
                    },
                    { href: "http://3dsemantics.stanford.edu/",
                        text: "Project",
                    },
                    { href: "http://buildingparser.stanford.edu/images/2D-3D-S.txt",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, O. Sener, B. Selman, S. Savarese, and A. Saxena,",
                image: "wu_1603.03541.png",
                title: "Watch-n-Patch: Unsupervised Learning of Actions and Relations",
                info: "IEEE Transactions on Pattern Analysis and Machine Intelligence(PAMI) 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1603.03541",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "xiang_xiang_wacv17.png",
                title: "Subcategory-aware Convolutional Neural Networks for Object Proposals and Detection",
                info: "In IEEE Winter Conference on Applications of Computer Vision (WACV), 2017.",
                refs: [
                    { href: "http://arxiv.org/abs/1604.04693",
                        text: "arXiv",
                    },
                    { href: "assets/papers/xiang_wacv17.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/xiang_wacv17_tr.pdf",
                        text: " Technical Report",
                    },
                    { href: "assets/bibtex/xiang2017subcategory.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.cvlibs.net/datasets/kitti/eval_object_detail.php?result=5e17cbbabbf775d8cc376793168be49bd6f01608",
                        text: "KITTI Results",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Michelle Guo, Alexandre Alahi, Serena Yeung, Zelun Luo, Alisha Rege, Amit Singh, Jeffrey Jopling, Lance Downing, William Beninati, Terry Platchek, Arnold Milstein, Li Fei-Fei.",
                image: "haque2017mlhc.png",
                title: "Towards Vision-Based Smart Hospitals: A System for Tracking and Monitoring Hand Hygiene Compliance.",
                info: "MLHC 2017.",
                refs: [
                    { href: "https://arxiv.org/pdf/1708.00163.pdf",
                        text: "PDF",
                    },
                    { href: "https://aicare.stanford.edu/projects/hand_hygiene/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang, Joseph J. Lim, Li Fei-Fei, and Juan Carlos Niebles.",
                image: "huang2017cvpr.png",
                title: "Unsupervised Visual-Linguistic Reference Resolution in Instructional Videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/huang2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://ai.stanford.edu/~dahuang/projects/vlrr/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Danfei Xu, Yuke Zhu, Christopher B. Choy, Li Fei-Fei.",
                image: "xu2017cvpr.png",
                title: "Scene Graph Generation by Iterative Message Passing.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/xu2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/~danfei/scene-graph/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Joseph J. Lim, Li Fei-Fei.",
                image: "zhu2017cvpr.png",
                title: "Knowledge Acquisition for Visual Question Answering via Iterative Querying.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Serena Yeung, Vignesh Ramanathan, Olga Russakovsky, Liyue Shen, Greg Mori, Li Fei-Fei.",
                image: "yeung2017cvpr.png",
                title: "Learning to learn from noisy web videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "assets/papers/Yeung_Learning_to_Learn_CVPR_2017_paper.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */], __WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "buch2017cvpr.png",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "johnson2017cvpr.png",
                title: "CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/johnson2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/jcjohns/clevr/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Justin Johnson, Ranjay Krishna, Li Fei-Fei.",
                image: "krause2017cvpr.png",
                title: "A Hierarchical Approach for Generating Descriptive Image Paragraphs.",
                info: "CVPR 2017 (spotlight).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/krause2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/im2p/index.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Zelun Luo, Boya Peng, De-An Huang, Alexandre Alahi, Li Fei-Fei.",
                image: "luo2017cvpr.png",
                title: "Unsupervised Learning of Long-Term Motion Dynamics for Videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/luo2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Katsuyuki Nakamura, Serena Yeung, Alexandre Alahi, Li Fei-Fei.",
                image: "nakamura2017cvpr.png",
                title: "Jointly Learning Energy Expenditures and Activities using Egocentric Multimodal Signals.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/nakamura2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Li Fei-Fei.",
                image: "alahi2017gcbcv2.png",
                title: "Tracking Millions of Humans in Crowded Space.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi2017gcbcv2.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Kratarth Goel, Alexandre Robicquet, Amir Abbas Sadeghian, Li Fei-Fei, Silvio Savarese.",
                image: "alahi2017gcbcv.png",
                title: "Learning to Predict Human Behaviour in Crowded Scenes.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [
                    { href: "assets/papers/alahi2017gcbcv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Jonathan Krause, Yilun Wang, Duyun Chen, Jia Deng, Li Fei-Fei.",
                image: "gebru2017aaai.jpg",
                title: "Fine-Grained Car Detection for Visual Census Estimation.",
                info: "AAAI 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/gebru2017aaai.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Jonathan Krause, Jia Deng, Li Fei-Fei.",
                image: "gebru2017chi.jpg",
                title: "Scalable Annotation of Fine-Grained Objects Without Experts.",
                info: "CHI 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/gebru2017chi.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Roozbeh Mottaghi, Eric Kolve, Joseph J. Lim, Abhinav Gupta, Li Fei-Fei, Ali Farhadi.",
                image: "icra2017.png",
                title: "Target-driven Visual Navigation in Indoor Scenes using Deep Reinforcement Learning.",
                info: "ICRA 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017icra.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna, Yuke Zhu, Oliver Groth, Justin Johnson, Kenji Hata, Joshua Kravitz, Stephanie Chen, Yannis Kalantidis, Li Jia-Li, David Ayman Shamma, Michael Bernstrein, Li Fei-Fei.",
                image: "visualgenome.png",
                title: "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations.",
                info: "IJCV 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/visualgenome.pdf",
                        text: "PDF",
                    },
                    { href: "http://visualgenome.org/",
                        text: "PROJECT",
                    },
                    { href: "http://visualgenome.org/api/v0/api_home.html",
                        text: "DATA",
                    },
                    { href: "https://github.com/ranjaykrishna/visual_genome_python_driver",
                        text: "API",
                    },
                    { href: "https://twitter.com/visualgenome",
                        text: "Twitter",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kenji Hata, Ranjay Krishna, Li Fei-Fei, Michael Bernstein.",
                image: "hata2017cscw.png",
                title: "A Glimpse Far into the Future: Understanding Long-term Crowd Worker Accuracy.",
                info: "CSCW 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/hata2017cscw.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/glimpse/",
                        text: "PROJECT",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2016",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Fabian Caba Heilbron, Juan Carlos Niebles, Bernard Ghanem.",
                image: "eccv16.jpg",
                title: "DAPs: Deep Action Proposals for Action Understanding.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                        text: "PDF",
                    },
                    { href: "https://ivul.kaust.edu.sa/Pages/pub-Daps.aspx",
                        text: "PROJECT",
                    },
                    { href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBRGlnZ0Q1dFk2SUk",
                        text: "VIDEO",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                        text: "DOI",
                    },
                    { href: "https://github.com/escorciav/daps",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Juan Carlos Niebles, Min Sun.",
                image: "VTG.jpg",
                title: "Title Generation for User Generated Videos.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                        text: "PDF",
                    },
                    { href: "http://ug-video.com/",
                        text: "PROJECT",
                    },
                    { href: "https://www.youtube.com/watch?v=KCTQ0vMsyDc",
                        text: "VIDEO",
                    },
                    { href: "http://ug-video.com/",
                        text: "DATA",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1608.07068",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba Heilbron, Juan Carlos Niebles and Bernard Ghanem.",
                image: "proposals.jpg",
                title: "Fast Temporal Activity Proposals for Efficient Detection of Human Actions in Untrimmed Videos.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2016.211",
                        text: "PDF",
                    },
                    { href: "http://www.cabaf.net/temporalproposals/index.html",
                        text: "PROJECT",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2016.211",
                        text: "DOI",
                    },
                    { href: "https://github.com/cabaf/sparseprop",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "actionlets3.jpg",
                title: "A Hierarchical Pose-Based Approach to Complex Action Understanding Using Dictionaries of Actionlets and Motion Poselets.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2016.218",
                        text: "PDF",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "DATA",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2016.218",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1606.04992",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Guido Pusiol, Andre Esteva, Scott S. Hall, Michael Frank, Arnold Milstein, Li Fei-Fei.",
                image: "pusiol2016miccai.png",
                title: "Vision-Based Classification of Developmental Disorders Using Eye-Movements.",
                info: "MICCAI 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/pusiol2016miccai.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Cewu Lu*, Ranjay Krishna*, Michael Bernstein, Li Fei-Fei.",
                image: "lu2016eccv.png",
                title: "Visual Relationship Detection with Language Priors.",
                info: "ECCV 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/lu2016eccv.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/vrd/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang, Li Fei-Fei, Juan Carlos Niebles.",
                image: "ectc-1.png",
                title: "Connectionist Temporal Modeling for Weakly Supervised Action Labeling.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46493-0_9",
                        text: "DOI",
                    },
                    { href: "https://www.youtube.com/watch?v=RW5it641vIs",
                        text: "Video",
                    },
                    { href: "https://github.com/daahuang/lasagne-ectc",
                        text: "Code",
                    },
                    { href: "https://arxiv.org/abs/1607.08584",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Boya Peng*, Zelun Luo*, Alexandre Alahi, Serena Yeung, Li Fei-Fei.",
                image: "haque2016eccv.jpg",
                title: "Towards Viewpoint Invariant 3D Human Pose Estimation.",
                info: "ECCV 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/haque2016eccv.pdf",
                        text: "PDF",
                    },
                    { href: "https://www.albert.cm/projects/viewpoint_3d_pose/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Alexandre Alahi, and Li Fei-Fei.",
                image: "johnson2016eccv.jpg",
                title: "Perceptual Losses for Real-time Style Transfer and Single Image Super-Resolution.",
                info: "ECCV 2016.",
                refs: [
                    { href: "assets/papers/JohnsonECCV16.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Amy Bearman, Olga Russakovsky, Vittorio Ferrari and Li Fei-Fei.",
                image: "bearman2016eccv.png",
                title: "What's the point: Semantic segmentation with point supervision.",
                info: "ECCV 2016.",
                refs: [
                    { href: "https://arxiv.org/abs/1506.02106",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Benjamin Sapp, Andrew Howard, Howard Zhou, Alexander Toshev, Tom Duerig, James Philbin, Li Fei-Fei.",
                image: "krause2016eccv.jpg",
                title: "The Unreasonable Effectiveness of Noisy Data for Fine-Grained Recognition.",
                info: "ECCV 2016.",
                refs: [
                    { href: "http://arxiv.org/abs/1511.06789",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy*, Justin Johnson*, Li Fei-Fei.",
                image: "KarpathyICLR2016.png",
                title: "Visualizing and Understanding Recurrent Networks.",
                info: "ICLR 2016 Workshop.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KarpathyICLR2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Alexandre Alahi, Li Fei-Fei.",
                image: "haque2016cvpr.png",
                title: "Recurrent Attention Models for Depth-Based Person Identification.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/haque2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.albert.cm/projects/ram_person_id/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Serena Yeung, Olga Russakovsky, Greg Mori, Li Fei-Fei.",
                image: "yeung2016cvpr.png",
                title: "End-to-end Learning of Action Detection from Frame Glimpses in Videos.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/yeung2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://ai.stanford.edu/~syyeung/frameglimpses.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Alexandre Alahi*, Kratarth Goel*, Vignesh Ramanathan, Alexandre Robicquet, Li Fei-Fei, Silvio Savarese.",
                image: "alahi2016cvpr.png",
                title: "Social LSTM: Human Trajectory Prediction in Crowded Spaces.",
                info: "CVPR 2016 (spotlight).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/CVPR16_N_LSTM.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/alahi_cvpr16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Jonathan Huang, Sami Abu-El-Haija, Alexander Gorban, Kevin Murphy, Li Fei-Fei.",
                image: "ramanathan2016cvpr.png",
                title: "Detecting Events and Key Actors in Multi-person Videos.",
                info: "CVPR 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ramanathan2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://basketballattention.appspot.com",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson*, Andrej Karpathy*, Li Fei-Fei.",
                image: "densecap.svg",
                title: "DenseCap: Fully Convolutional Localization Networks for Dense Captioning.",
                info: "CVPR 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/johnson2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/karpathy/densecap/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Oliver Groth, Michael Bernstein, Li Fei-Fei.",
                image: "visual7w.png",
                title: "Visual7W: Grounded Question Answering in Images.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "http://web.stanford.edu/~yukez/visual7w/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "chris16.png",
                title: "Human-object Interactions are More than the Sum of Their Parts.",
                info: "Cerebral Cortex 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/CC2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "catalin16.jpg",
                title: "Typicality Sharpens Category Representations in Object-Selective Cortex.",
                info: "Neuroimage 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iordan-etal-neuroimage-2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna, Kenji Hata, Stephanie Chen, Joshua Kravitz, David A. Shamma, Li Fei-Fei, Michael S. Bernstein.",
                image: "krishna2016chi.jpg",
                title: "Embracing Error to Enable Rapid Crowdsourcing.",
                info: "CHI: ACM Conference on Human Factors in Computing Systems, 2016.",
                refs: [
                    { href: "http://hci.stanford.edu/publications/2016/rsvp/rsvp.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Michelle R. Greene.",
                image: "CognitionIcon.png",
                title: "Estimations of Object Frequency are Frequently Overestimated.",
                info: "Cognition 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/GreeneCognition2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle R. Greene, Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "JEPGIcon.png",
                title: "Visual Scenes Are Categorized by Function.",
                info: "Journal of Experimental Psychology: General 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/GreeneJEPG2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marie E. Vachovsky, Grace Wu, Sorathan Chaturapruek, Olga Russakovsky, Rick Sommer, Li Fei-Fei.",
                image: "sailors.jpg",
                title: "Towards More Gender Diversity in CS through an Artificial Intelligence Summer Program for High School Girls.",
                info: "SIGCSE 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SAILORS-SIGCSE2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, J. Gwak, S. Savarese, M. Chandraker,",
                image: "choy_6487-universal-correspondence-network.png",
                title: "Universal Correspondence Network",
                info: "in Neural Information Processing Systems (NIPS), 2016. oral presentation",
                refs: [
                    { href: "https://papers.nips.cc/paper/6487-universal-correspondence-network",
                        text: " PDF",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ucn",
                        text: "Project",
                    },
                    { href: "assets/bibtex/choy2016universal.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "O. Sener, H. O. Song, A. Saxena, S. Savarese,",
                image: "sener_6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.png",
                title: "Learning Transferrable Representations for Unsupervised Domain Adaptation",
                info: "in Neural Information Processing Systems (NIPS), 2016.",
                refs: [
                    { href: "https://papers.nips.cc/paper/6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.PDF",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/sener2016learning.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, D. Xu*, J. Gwak*, K. Chen, S. Savarese,",
                image: "choy_3d-r2n2.png",
                title: "3D-R2N2: A Unified Approach for Single and Multi-view 3D Object Reconstruction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "assets/papers/choy_eccv_3dr2n2_16.pdf",
                        text: "PDF",
                    },
                    { href: "https://github.com/chrischoy/3D-R2N2",
                        text: "code",
                    },
                    { href: "http://3d-r2n2.stanford.edu/",
                        text: "Project",
                    },
                    { href: "assets/bibtex/choy20163d.bib",
                        text: "bibtex",
                    },
                    { href: "https://arxiv.org/abs/1604.00449",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Robicquet, A. Sadeghian, A. Alahi, S. Savarese,",
                image: "robicquet_ECCV16social.png",
                title: "Learning Social Etiquette: Human Trajectory Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "assets/papers/ECCV16social.pdf",
                        text: "PDF",
                    },
                    { href: "http://cvgl.stanford.edu/projects/uav_data/",
                        text: "Project",
                    },
                    { href: "assets/bibtex/robicquet2016learning.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Ballan, F. Castaldo, A. Alahi, F. Palmieri, S. Savarese,",
                image: "ballan_ballan_eccv16.png",
                title: "Knowledge Transfer for Scene-specific Motion Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "assets/papers/ballan_eccv16.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. R. Zamir, P. Agrawal, T. Wekel, J. Malik, S. Savarese,",
                image: "zamir_zamir_eccv16.png",
                title: "Generic 3D Representations via Pose Estimation and Matching",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "assets/papers/zamir_eccv16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/zamir_eccv16_supp.pdf",
                        text: "Supplementary Material",
                    },
                    { href: "http://3drepresentation.stanford.edu/",
                        text: "Project",
                    },
                    { href: "assets/bibtex/zamir_eccv16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Kim, W. Chen, J. Ji, C. Choy, H. Su, R. Mottaghi, L. Guibas, S. Savarese,",
                image: "xiang_xiang_eccv16.png",
                title: "ObjectNet3D: A Large Scale Database for 3D Object Recognition.",
                info: "in European Conference on Computer Vision (ECCV), 2016 (spotlight).",
                refs: [
                    { href: "assets/papers/xiang_eccv16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/xiang_eccv16_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "assets/bibtex/xiang_eccv16.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/objectnet3d",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "held_1604.01802.png",
                title: "Learning to Track at 100 FPS with Deep Regression Networks",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "http://arxiv.org/abs/1604.01802",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Redondo-Cabrera, R. López-Sastre, Y. Xiang, T. Tuytelaars, S. Savarese,",
                image: "redondocabrera_eccv2016-redondo.png",
                title: "Pose Estimation Errors, the Ultimate Diagnosis",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "assets/papers/eccv2016-redondo.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/cabrera_eccv16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, D. Guillory, B. Rebsamen, S. Thrun, S. Savarese,",
                image: "held_RSS_2016_Final_Version_28.png",
                title: "A Probabilistic Framework for Real-time 3D Segmentation using Spatial, Temporal, and Semantic Cues",
                info: "Proceedings of Robotics: Science and Systems (RSS), 2016.",
                refs: [
                    { href: "http://davheld.github.io/segmentation3D/segmentation3D.html",
                        text: "Project",
                    },
                    { href: "assets/bibtex/held_rss16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I. Armeni, O. Sener, A. R. Zamir, H. Jiang, I. Brilakis, M. Fischer, S. Savarese,",
                image: "armeni_3D_Semantic_Parsing.png",
                title: "3D Semantic Parsing of Large-Scale Indoor Spaces",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (oral presentation).",
                refs: [
                    { href: "assets/papers/3D_Semantic_Parsing.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/3dsemanticparsing_supp_mat.pdf",
                        text: "Technical Report",
                    },
                    { href: "assets/bibtex/armeni_cvpr16.bib",
                        text: "bibtex",
                    },
                    { href: "http://buildingparser.stanford.edu/",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Jain, A. R. Zamir, S. Savarese, A. Saxena.",
                image: "jain_jain_cvpr16.png",
                title: "Structural-RNN: Deep Learning on Spatio-Temporal Graphs",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (oral presentation, Best Student Paper Award).",
                refs: [
                    { href: "assets/papers/jain_cvpr16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/srnn_supplementary.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://asheshjain.org/srnn/index.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "H. O. Song, Y. Xiang, S. Jegelka, S. Savarese.",
                image: "song_song_cvpr16.png",
                title: "Deep Metric Learning via Lifted Structured Feature Embedding",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 (spotlight).",
                refs: [
                    { href: "assets/papers/song_cvpr16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/song_cvpr16_supp.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://ai.stanford.edu/%7Ehsong/bibs/Song-CVPR16.txt",
                        text: "bibtex",
                    },
                    { href: "https://github.com/rksltnl/Deep-Metric-Learning-CVPR16",
                        text: "Code",
                    },
                    { href: "http://cvgl.stanford.edu/projects/lifted_struct",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Dasgupta, K. Fang* , K. Chen*, S. Savarese,",
                image: "dasgupta_delay-robust-spatial.png",
                title: "DeLay: Robust Spatial Layout Estimation for Cluttered Indoor Scenes",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016.",
                refs: [
                    { href: "assets/papers/delay-robust-spatial.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "robust_single-view_instance_recognition.png",
                title: "Robust Single-View Instance Recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [
                    { href: "assets/papers/held_icra16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/held_icra16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, B. Selman, S. Savarese and A. Saxena,",
                image: "wu_wu_icra16.png",
                title: "Watch-Bot: Unsupervised Learning for Reminding Humans of Forgotten Actions",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [
                    { href: "assets/papers/wu_icra16.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/wu_icra16.bib",
                        text: "bibtex",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2015",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles.",
                image: "anet_cvpr15b.jpg",
                title: "ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "assets/papers/Heilbron_ActivityNet_A_Large-Scale_2015_CVPR_paper.pdf",
                        text: "PDF",
                    },
                    { href: "http://activity-net.org",
                        text: "Project",
                    },
                    { href: "http://activity-net.org/download.html",
                        text: "Data",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7298698",
                        text: "DOI",
                    },
                    { href: "https://github.com/activitynet/ActivityNet",
                        text: "Code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Juan Carlos Niebles, Bernard Ghanem.",
                image: "cvpr15a.jpg",
                title: "On the Relationship between Visual Attributes and Convolutional Networks.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "assets/papers/Escorcia_On_the_Relationship_2015_CVPR_paper.pdf",
                        text: "PDF",
                    },
                    { href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBb3dDakFpNXRrUkU",
                        text: "Video",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7298730",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Bernard Ghanem, Ali Thabet, Juan Carlos Niebles, Fabian Caba.",
                image: "manhattan.jpg",
                title: "Robust Manhattan Frame Estimation from a Single RGB-D Image.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "assets/papers/Ghanem_Robust_Manhattan_Frame_2015_CVPR_paper.pdf",
                        text: "PDF",
                    },
                    { href: "https://ivul.kaust.edu.sa/Pages/Pub-Manhattan-Frame-Estimation-CVPR-2015.aspx",
                        text: "Project",
                    },
                    { href: "https://ivul.kaust.edu.sa/Documents/Data/Robust%20Manhattan%20Frame%20Estimation%20from%20a%20Single%20RGB-D%20Image.zip",
                        text: "Data",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7299001",
                        text: "DOI",
                    },
                    { href: "https://ivul.kaust.edu.sa/Documents/more/code/MFE.zip",
                        text: "Code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. X. Chang, T. Funkhouser, L. Guibas, P. Hanrahan, Q. Huang, Z. Li, S. Savarese, M. Savva, S. Song, H. Su, J. Xiao, L. Yi, F. Yu.",
                image: "chang_1512.03012v1.png",
                title: "ShapeNet: An Information-Rich 3D Model Repository",
                info: "in arXiv 2015.",
                refs: [
                    { href: "http://arxiv.org/pdf/1512.03012v1.pdf",
                        text: "PDF",
                    },
                    { href: "http://dblp.uni-trier.de/rec/bibtex/journals/corr/ChangFGHHLSSSSX15",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru, S. Savarese.",
                image: "choi_ijcv15.png",
                title: "Indoor Scene Understanding with Geometric and Semantic Contexts",
                info: "in International Journal of Computer Vision (IJCV) April 2015, Volume 112, Issue 2, pp 204-220.",
                refs: [
                    { href: "http://link.springer.com/article/10.1007%2Fs11263-014-0779-4",
                        text: "DOI",
                    },
                    { href: "assets/bibtex/choi_ijcv15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "F. Castaldo, A. R. Zamir, R. Angst, F. Palmieri, and S. Savarese.",
                image: "castaldo_castaldo_iccv15.png",
                title: "Semantic Cross-View Matching",
                info: "in Vision from Satellite to Street - The Second International Workshop in Conjunction with ICCV 2015. Google runner-up best paper award on VFSTS Workshop 2015.",
                refs: [
                    { href: "assets/papers/castaldo_iccv15.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/castaldo_vss15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Lan, Y. Zhu, A. R. Zamir and S. Savarese.",
                image: "lan_iccv2015.png",
                title: "Action Recognition by Hierarchical Mid-level Action Elements",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [
                    { href: "assets/papers/tian2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "O. Sener, A. R. Zamir, S. Savarese, A. Saxena.",
                image: "sener_video_storyline.png",
                title: "Unsupervised Semantic Parsing of Video Collections",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [
                    { href: "assets/papers/video_storyline.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/sener_iccv15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, A. Alahi, and S. Savarese.",
                image: "xiang_xiang_iccv15.png",
                title: "Learning to Track: Online Multi-Object Tracking by Decision Making",
                info: "in International Conference on Computer Vision (ICCV), 2015 (oral).",
                refs: [
                    { href: "assets/papers/xiang_iccv15.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/xiang_iccv15.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/xiang_iccv15_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/MDP_tracking",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese, R. M. Eustice.",
                image: "pandey_pandey_jfr15.png",
                title: "Automatic Extrinsic Calibration of Vision and Lidar by Maximizing Mutual Information",
                info: "In the Journal of Field Robotics, 2015",
                refs: [
                    { href: "assets/papers/pandey_jfr15.pdf",
                        text: "PDF",
                    },
                    { href: "http://onlinelibrary.wiley.com/doi/10.1002/rob.2015.32.issue-5/issuetoc",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "David Held, Jesse Levinson, Sebastian Thrun, Silvio Savarese,",
                image: "held_ijrr_tracking.png",
                title: "Robust Real-Time Tracking Combining 3D Shape, Color, and Motion",
                info: "In International Journal of Robotics Research (IJRR) 2015.",
                refs: [
                    { href: "assets/papers/ijrr_tracking2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "xiang_xiang_cvpr15_3dvp.png",
                title: "Data-Driven 3D Voxel Patterns for Object Category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015 (oral).",
                refs: [
                    { href: "assets/papers/xiang_cvpr15_3dvp.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/xiang_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/xiang_cvpr15_3dvp_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/3DVP",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mottaghi, Y. Xiang and S. Savarese,",
                image: "mottaghi15cvpr.png",
                title: "A Coarse-to-Fine Model for 3D Pose Estimation and Sub-category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "assets/papers/Mottaghi15cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/mottaghi_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/Mottaghi15cvpr-sm.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/C2F",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, M. Stark, S. Corbett-Davies, S. Savarese,",
                image: "choy_cvpr15_hire.png",
                title: "Enriching Object Detection with 2D-3D Registration and Continuous Viewpoint Estimation",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "assets/papers/choy_cvpr15_hires.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/choy_cvpr15_supp.pdf",
                        text: "Supplementary Material",
                    },
                    { href: "assets/bibtex/choy_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "https://github.com/chrischoy/enriching_object_detection",
                        text: "Code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, S. Savarese, A. Saxena,",
                image: "wu_watchnpatch_cvpr2015.png",
                title: "Watch-n-Patch: Unsupervised Understanding of Actions and Relations",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "assets/papers/watchnpatch_cvpr15.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/wu_watchnpatch_cvpr2015.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle R. Greene, Abraham P. Botros, Diane M. Beck, Li Fei-Fei.",
                image: "APPIcon.png",
                title: "What You See is What You Expect: Rapid Scene Understanding Benefits from Prior Experience.",
                info: "Attention, Perception, & Psychophysics 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/improbableAPP2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Sebastian Schuster, Ranjay Krishna, Angel Chang, Li Fei-Fei, Christopher D. Manning.",
                image: "3571351_orig.png",
                title: "Generating Semantically Precise Scene Graphs from Textual Descriptions for Improved Image Retrieval.",
                info: "Empirical Methods in Natural Language Processing (EMNLP) - Vision and Language Workshop 2015 (oral).",
                refs: [
                    { href: "http://nlp.stanford.edu/pubs/schuster-krishna-chang-feifei-manning-vl15.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Armand Joulin, Diane M. Beck, Li Fei-Fei.",
                image: "mci_nips2015.jpg",
                title: "Locally-Optimized Inter-Subject Alignment of Functional Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2015.",
                refs: [
                    { href: "assets/papers/iordan-etal-mlini-preprint.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Albert Haque, Li Fei-Fei.",
                image: "rgbw15_1.png",
                title: "RGB-W: When Vision Meets Wireless.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/RGBW_ICCV15.pdf",
                        text: "PDF",
                    },
                    { href: "https://www.albert.cm/projects/rgbw/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Manohar Paluri, Li Fei-Fei, Rob Fergus, Lubomir Bourdev.",
                image: "yfcc100m.png",
                title: "Improving Image Classification with Location Context.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/tang2015iccv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Kevin Tang, Greg Mori and Li Fei-Fei.",
                image: "vig15.png",
                title: "Learning temporal embeddings for complex video analysis.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/RamanathanICCV2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson*, Lamberto Ballan*, Li Fei-Fei.",
                image: "GraphNeighborhoodSmall.jpg",
                title: "Love Thy Neighbors: Image Annotation by Exploiting Image Metadata.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/people/jcjohns/papers/iccv15/JohnsonICCV2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Ranjay Krishna, Michael Stark, Li-Jia Li, David Ayman Shamma, Michael Bernstein, Li Fei-Fei.",
                image: "justin15.png",
                title: "Image Retrieval using Scene Graphs.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/people/jcjohns/papers/cvpr2015/JohnsonCVPR2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, Li Fei-Fei.",
                image: "rnn7.png",
                title: "Deep Visual-Semantic Alignments for Generating Image Descriptions.",
                info: "CVPR 2015 (oral).",
                refs: [
                    { href: "http://cs.stanford.edu/people/karpathy/cvpr2015.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/karpathy/deepimagesent/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Hailin Jin, Jianchao Yang, Li Fei-Fei.",
                image: "jon_cvpr15.png",
                title: "Fine-Grained Recognition without Part Annotations.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/joncvpr15.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Olga Russakovsky, Li-Jia Li, Li Fei-Fei.",
                image: "olga15.jpg",
                title: "Best of both worlds: human-machine collaboration for dense object annotation.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/RussakovskyCVPR15.pdf",
                        text: "PDF",
                    },
                    { href: "http://ai.stanford.edu/~olga/best_of_both_worlds.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "brain.png",
                title: "Parcellating connectivity in spatial maps.",
                info: "PeerJ 2015.",
                refs: [
                    { href: "assets/papers/baldassano_peerj2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Olga Russakovsky*, Jia Deng*, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael Bernstein, Alexander C. Berg, Li Fei-Fei.",
                image: "ilsvrc.jpg",
                title: "ImageNet Large Scale Visual Recognition Challenge.",
                info: "IJCV 2015.",
                refs: [
                    { href: "http://arxiv.org/abs/1409.0575",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/ILSVRC15.bib",
                        text: "Bibtex",
                    },
                    { href: "http://image-net.org/challenges/LSVRC/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "cogneuro15.jpeg",
                title: "Basic Level Category Structure Emerges Gradually Across Human Ventral Visual Cortex.",
                info: "Journal of Cognitive Neuroscience 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/%7Emci/materials/iordan-etal-jocn-2015.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2014",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba Heilbron, Ali Thabet, Juan Carlos Niebles, Bernard Ghanem.",
                image: "actioncue.jpg",
                title: "Camera Motion and Surrounding Scene Appearance as Context for Action Recognition.",
                info: "Asian Conference on Computer Vision (ACCV), Singapore, November 2014.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-16817-3_38",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ardalan Khosrowpour, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "automation2014.png",
                title: "Vision-based workface assessment using depth images for activity analysis of interior construction operations.",
                info: "Automation in Construction, December 2014.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.autcon.2014.08.003",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Alvaro Soto, Juan Carlos Niebles.",
                image: "cvpr2014.png",
                title: "Discriminative Hierarchical Modeling of Spatio-Temporally Composable Human Activities.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Colombus, USA, June 2014.",
                refs: [
                    { href: "assets/papers/Lillo_Discriminative_Hierarchical_Modeling_2014_CVPR_paper.pdf",
                        text: "PDF",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "Project",
                    },
                    { href: "https://www.youtube.com/watch?v=_pdfLrie0_8",
                        text: "Video",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2014.109",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ardalan Khosrowpour, Igor Fedorov, Aleksander Holynski, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "indoor.png",
                title: "Automated Worker Activity Analysis in Indoor Environments for Direct-Work Rate Improvement from long sequences of RGB-D Images.",
                info: "Construction Research Congress, Atlanta, USA, May 2014.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784413517.075",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba Heilbron and Juan Carlos Niebles.",
                image: "crowd.jpg",
                title: "Collecting and Annotating Human Activities in Web Videos.",
                info: "ACM International Conference on Multimedia Retrieval (ICMR). Glasgow, UK. April 2014.",
                refs: [
                    { href: "https://github.com/cabaf/activity_annotation",
                        text: "Code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun*, B. Kim*, P. Kohli, S. Savarese,",
                image: "sunkim_pami14.png",
                title: "Relating Things and Stuff via Object Property  Interactions",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014. (* indicates equal contribution)",
                refs: [
                    { href: "assets/papers/pami14_acrf.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/pami14_acrf.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "collective_activities_of_people14.png",
                title: "Understanding Collective Activities of People from Videos",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014.",
                refs: [
                    { href: "assets/papers/choi_pami14.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/choi_pami14.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Lan, T. Chen, and S. Savarese,",
                image: "lan_lan_eccv14.png",
                title: "A Hierarchical Representation for Future Action Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "assets/papers/lan_eccv14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru and S. Savarese,",
                image: "discovering_groups_of_people_in_images14.png",
                title: "Discovering Groups of People in Images",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "assets/papers/choi_eccv14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang*, C. Song*, R. Mottaghi and S. Savarese,",
                image: "xiang_xiang_eccv14.png",
                title: "Monocular Multiview Object Tracking with 3D Aspect Parts",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "assets/papers/xiang_eccv14.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/xiang_eccv14.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/xiang_eccv14_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/multiview_tracking/",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman, B. Kuipers, S. Savarese, H. Lee,",
                image: "mittelman_srtrbm_icml14.png",
                title: "Structured Recurrent Temporal Restricted Boltzmann Machines",
                info: "in International Conference on Machine Learning (ICML), 2014.",
                refs: [
                    { href: "assets/papers/srtrbm_icml14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, J. Levinson, S. Thrun, S. Savarese,",
                image: "held_rss14_tracking.png",
                title: "Combining 3D Shape, Color, and Motion for Robust Anytime Tracking",
                info: "in Robotics: Science and Systems (RSS), 2014.",
                refs: [
                    { href: "assets/bibtex/held_rss2014.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Leal-Taixé, M. Fenzi, A. Kuznetsova, B. Rosenhahn, S. Savarese,",
                image: "image-based_motion_context_multiple_people_tracking14.png",
                title: "Learning an image-based motion context for multiple people tracking",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2014.",
                refs: [
                    { href: "assets/papers/LeaFenKuzRosSavCVPR14.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.tnt.uni-hannover.de/papers/show_bibtex.php?id=1022",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "mutual_information_based_place_recognition14.png",
                title: "Toward mutual information based place recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2014.",
                refs: [
                    { href: "assets/papers/gpandey-2014a.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, A. Furlan, L. Fei-Fei, S. Savarese.",
                image: "bao_bao_wacv2014.png",
                title: "Understanding the 3D Layout of a Cluttered Room From Multiple Images",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [
                    { href: "assets/papers/bao_wacv2014.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/bao_wacv2014.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, R. Mottaghi and S. Savarese,",
                image: "beyond_pascal.png",
                title: "Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [
                    { href: "assets/papers/xiang_wacv14.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/xiang_wacv14.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/projects/pascal3d.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, Armand Joulin, Li Fei-Fei.",
                image: "nips_small.jpg",
                title: "Deep Fragment Embeddings for Bidirectional Image-Sentence Mapping.",
                info: "NIPS 2014.",
                refs: [
                    { href: "http://cs.stanford.edu/people/karpathy/nips2014.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Armand Joulin, Percy Liang and Li Fei-Fei.",
                image: "vignesh14.jpeg",
                title: "Joint person naming in videos and coreference resolution in text.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/vignesh14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Alireza Fathi, and Li Fei-Fei.",
                image: "zhuECCV2014.png",
                title: "Reasoning About Object Affordances in a Knowledge Base Representation.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Armand Joulin*, Kevin Tang*, Li Fei-Fei.",
                image: "kevin14.jpeg",
                title: "Efficient Image and Video Co-localization with Frank-Wolfe Algorithm.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Ekdtang/papers/eccv14-vidcoloc.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Pusiol, G., Soriano, L., Fei-Fei, L., Frank, M. C..",
                image: "guido14.png",
                title: "Discovering the Signatures of Joint Attention in Child-Caregiver Interaction.",
                info: "CogSci 2014.",
                refs: [
                    { href: "assets/papers/guido14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, George Toderici, Sanketh Shetty, Thomas Leung, Rahul Sukthankar, Li Fei-Fei.",
                image: "karpathy14.png",
                title: "Large-Scale Video Classification with Convolutional Neural Networks.",
                info: "CVPR 2014 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/karpathy14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, and Li Fei-Fei.",
                image: "alahi14.png",
                title: "Socially-aware Large-scale Crowd Forecasting.",
                info: "CVPR 2014 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Armand Joulin, Li-Jia Li, Li Fei-Fei.",
                image: "coloc14.jpeg",
                title: "Co-localization in Real-World Images.",
                info: "CVPR 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/tang14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jia Deng, Olga Russakovsky, Jonathan Krause, Michael Bernstein, Alexander C. Berg and Li Fei-Fei..",
                image: "scalable14.jpeg",
                title: "Scalable Multi-Label Annotation.",
                info: "CHI 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/chi2014-MultiLabel.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle Greene, Li Fei-Fei.",
                image: "visual14.jpeg",
                title: "Visual Categorization is Automatic and Obligatory: Evidence from a Stroop-like Paradigm.",
                info: "Journal of Vision, 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/14.full.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Timnit Gebru, Jia Deng, Li-Jia Li, Li Fei-Fei.",
                image: "icpr.png",
                title: "Learning Features and Parts for Fine-Grained Recognition.",
                info: "ICPR, 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/icpr14.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2013",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang and S. Savarese,",
                image: "",
                title: "Object Detection by 3D Aspectlets and Occlusion Reasoning",
                info: "in the 4th International IEEE Workshop on 3D Representation and Recognition (3dRR), 2013.",
                refs: [
                    { href: "assets/papers/xiang_3drr13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/xiang_3drr13_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "assets/bibtex/xiang_3drr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/data/dataset_3dRR13.zip",
                        text: "Data",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, S. S. Kumar, G. Bradski, S. Savarese,",
                image: "",
                title: "Object detection, shape recovery, and 3D modelling by depth-encoded hough voting",
                info: "in Computer Vision and Image Understanding (CVIU), 2013.",
                refs: [
                    { href: "assets/papers/sun_cviu2013.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/sun_cviu2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "in Image and Vision Computing (IMAVIS), 2013 in press.",
                refs: [
                    { href: "assets/papers/imavis13_sparse.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/imavis13_sparse.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Tokola, W. Choi, and S. Savarese,",
                image: "tokola_RT_ICCV2013_CAMERA_READY.png",
                title: "Breaking the chain: liberation from the temporal Markov assumption for tracking human poses",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "assets/papers/RT_ICCV2013_CAMERA_READY.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/tokola_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, W. Huang, and S. Savarese,",
                image: "",
                title: "Find the Best Path: an Efficient and Accurate Classifier for Image Hierarchies",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "assets/papers/PID2965309.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/sun_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, P. Kohli, and S. Savarese,",
                image: "kim_iccv13_final_kks.png",
                title: "3D Scene Understanding by Voxel-CRF",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "assets/papers/iccv13_final_kks.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/kim_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y.-W. Chao, W. Choi, C. Pantofaru, and S. Savarese,",
                image: "",
                title: "Layout Estimation of Highly Cluttered Indoor Scenes using Geometric and Semantic Cues",
                info: "Proceedings of the International Conference on Image Analysis and Processing (ICIAP), 2013.",
                refs: [
                    { href: "assets/papers/chao_iciap2013.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/chao_iciap2013.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/IndoorHumanActivity/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman, H. Lee, B. Kuipers, and S. Savarese,",
                image: "mittelman_Mittelman_cvpr13.png",
                title: "Weakly Supervised Learning of Mid-Level Features with Beta-Bernoulli Process Restricted Boltzmann Machines",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [
                    { href: "assets/papers/Mittelman_cvpr13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Mittelman_cvpr13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, M. Chandraker, Y. Lin, and S. Savarese,",
                image: "",
                title: "Dense Object Reconstruction Using Semantic Priors",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013 (oral).",
                refs: [
                    { href: "assets/papers/Bao_semantic_reconstruction_cvpr13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Bao_cvpr13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, S. Xu, and S. Savarese,",
                image: "",
                title: "Accurate Localization of 3D Objects from RGB-D Data using Segmentation Hypotheses",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [
                    { href: "http://www.umich.edu/%7Ebsookim/papers/bkim_cvpr13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/BKim_cvpr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/al3d/al3dproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y.-W. Chao, C. Pantofaru, and S. Savarese.",
                image: "",
                title: "Understanding Indoor Scenes using 3D Geometric Phrases",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013 (oral).",
                refs: [
                    { href: "assets/papers/choi_cvpr13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/choi_cvpr13_supp.pdf",
                        text: "Supplementary Material",
                    },
                    { href: "assets/bibtex/choi_cvpr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/3DGP/",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, C. Pantofaru and S. Savarese",
                image: "",
                title: "A General Framework for Tracking Multiple People from a Moving Camera",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2012 in press.",
                refs: [
                    { href: "http://www.willowgarage.com/sites/default/files/pami_preprint.pdf",
                        text: "PDF",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/",
                        text: "Project",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/choi_pami12.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: " Victor Escorcia and Juan Carlos Niebles",
                image: "iccvw13.jpg",
                title: "Spatio-Temporal Human-Object Interactions for Action Recognition in Videos.",
                info: "IEEE International Conference on Computer Vision Workshops (ICCVW). Sydney, Australia. December 2013.",
                refs: [
                    { href: "http://www.niebles.net/iccvw13",
                        text: "Project",
                    },
                    { href: "https://doi.org/10.1109/ICCVW.2013.72",
                        text: "DOI",
                    },
                    { href: "https://www.youtube.com/watch?v=a71etgmhlpQ",
                        text: "Video",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Mani Golparvar-Fard, Arsalan Heydarian and Juan Carlos Niebles.",
                image: "earthmoving.jpg",
                title: "Vision-based action recognition of earthmoving equipment using spatio-temporal features and support vector machine classifiers.",
                info: "Advanced Engineering Informatics, Sydney, Australia, October 2013.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.aei.2013.09.001",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Milad Memarzadeh, Mani Golparvar-Fard and Juan Carlos Niebles.",
                image: "hogc.jpg",
                title: "Automated 2D detection of construction equipment and workers from site video streams using histograms of oriented gradients and colors.",
                info: "Automation in Construction, July 2013.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.autcon.2012.12.002",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman and M. Sun and B. Kuipers and S. Savarese.",
                image: "",
                title: "Learning Hierarchical Linguistic Descriptions of Visual Datasets",
                info: "NAACL-HLT Workshop on Vision and Language, 2013.",
                refs: [
                    { href: "assets/papers/Mittelman_wvl13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Mittelman_wvl13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "V. Garro and A. Fusiello and S. Savarese.",
                image: "",
                title: "Label Transfer Exploiting Three-dimensional Structure for Semantic Segmentation",
                info: "Proceedings of the 6th International Conference on Computer Vision/Computer Graphics Collaboration Techniques and Applications (MIRAGE).",
                refs: [
                    { href: "assets/papers/garro_MIRAGE13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/garro_MIRAGE13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Axel Furlan, Stephen Miller, Domenico Giorgio Sorrenti, Li Fei-Fei, Silvio Savarese.",
                image: "furlan13.png",
                title: "Free your Camera: 3D Indoor Scene Understanding from Arbitrary Camera Motion.",
                info: "BMVC 2013.",
                refs: [
                    { href: "assets/papers/furlan13.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/furlan_bmvc13.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.ira.disco.unimib.it/research/free-your-camera-3d-indoor-scene-understanding-from-arbitrary-camera-motion/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Michael Stark, Jia Deng, Li Fei-Fei.",
                image: "3d13.jpeg",
                title: "3D Object Representations for Fine-Grained Categorization.",
                info: "ICCV 2013, Workshop on 3D Representation and Recognition.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/3drr13.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Bangpeng Yao, Li Fei-Fei, Daphne Koller.",
                image: "combining13.jpeg",
                title: "Combining the Right Features for Complex Event Recognition.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iccv13-andor.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramananthan, Percy Liang, and Li Fei-Fei.",
                image: "video13.jpeg",
                title: "Video Event Understanding using Natural Language Descriptions.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/vigneshICCV13.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky, Jia Deng, Zhiheng Huang, Alexander C. Berg and Li Fei-Fei.",
                image: "detecting13.jpeg",
                title: "Detecting avocados to zucchinis: what have we done, and where are we going?.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iccv13-ILSVRCanalysis.pdf",
                        text: "PDF",
                    },
                    { href: "http://image-net.org/challenges/LSVRC/2012/analysis/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, J. Ma, and L. Fei-Fei.",
                image: "discovering13.jpeg",
                title: "Discovering Object Functionality.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/Yao_Discovering_Object_Functionality_2013_ICCV_paper.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and H. Su and Y. Lim and L. Fei-Fei.",
                image: "object13.jpeg",
                title: "Object Bank: An Object-Level Image Representation for High-Level Visual Recognition.",
                info: "IJCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/li_ijcv2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, J. Krause, and L. Fei-Fei.",
                image: "fine13.jpeg",
                title: "Fine-Grained Crowdsourcing for Fine-Grained Recognition.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengKrauseFei-Fei_CVPR2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "V. Ramanathan, B. Yao, and L. Fei-Fei.",
                image: "social13.jpeg",
                title: "Social Role Discovery in Human Events.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/334.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, R. Sukthankar, J. Yagnik, and L. Fei-Fei.",
                image: "discrim13.jpeg",
                title: "Discriminative Segment Annotation in Weakly Labeled Video.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/cvpr2013-crane-small.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "A. Torralbo, D.B. Walther, B. Chai, E. Caddigan, L. Fei-Fei, and D.M. Beck.",
                image: "good13.jpeg",
                title: "Good Exemplars of Natural Scene Categories Elicit Clearer Patterns than Bad Exemplars but not Greater BOLD Activity.",
                info: "PLoS ONE. 2013 (Article).",
                refs: [
                    { href: "assets/papers/journal.pone.0058594.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "C. Baldassano, D.M. Beck, and L. Fei-Fei.",
                image: "diff13.jpeg",
                title: "Differential Connectivity Within the Parahippocampal Place Area.",
                info: "NeuroImage 2013.",
                refs: [
                    { href: "assets/papers/NI2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "A. Karpathy, S. Miller, and L. Fei-Fei.",
                image: "objdisc13.jpeg",
                title: "Object Discovery in 3D Scenes via Shape Analysis.",
                info: "ICRA 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ICRA2013_ObjectDiscoveryViaShapeAnalysis.pdf",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/karpathy/discovery/",
                        text: "PROJECT",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2012",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Maria A. Dávila, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "crc2012.jpg",
                title: "Automated Vision-based Recognition of Construction Worker Actions for Building Interior Construction Operations Using RGBD Cameras.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412329.089",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_actions.jpg",
                title: "Automated visual recognition of construction equipment actions using spatio-temporal features and multiple binary support vector machines.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412329.090",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese.",
                image: "choi_choi_eccv_12.png",
                title: "A Unified Framework for Multi-Target Tracking and Collective Activity Recognition",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012 (oral presentation -- 5% acceptance rate).",
                refs: [
                    { href: "assets/bibtex/choi_eccv_12.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/choi_eccv_12.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/choi_eccv_12_supplementary.pdf",
                        text: "Supplementary Material",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/eccv12/wongun_eccv12.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, Y. Xiang and S. Savarese.",
                image: "bao_bao_eccv12_codetection.png",
                title: "Object Co-detection",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012,",
                refs: [
                    { href: "assets/papers/bao_eccv12_codetection.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/bao_eccv12_codetection.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/yingze_eccv12_co-detection.pdf",
                        text: "Poster",
                    },
                    { href: "http://cvgl.stanford.edu/projects/codetection/index.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim*, M. Sun*, P. Kohli, S. Savarese.",
                image: "kim_kim_hipotws_eccv12.png",
                title: "Relating Things and Stuff by High-Order Potential Modeling",
                info: "ECCV 2012 Workshop on Higher-Order Models and Global Constraints in Computer Vision (HiPot). (* indicates equal contribution),",
                refs: [
                    { href: "assets/papers/kim_hipotws_eccv12.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ACRF/bibtex_eccv.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. McBride, S. Savarese, R. Eustice.",
                image: "pandey_gpandey-2012b.png",
                title: "Toward Mutual Information based Automatic Registration of 3D Point Clouds",
                info: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2012.",
                refs: [
                    { href: "assets/papers/gpandey-2012b.pdf",
                        text: "PDF",
                    },
                    { href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012b#gpandey-2012bBib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese.",
                image: "sun_Sun_IJCV_2012.png",
                title: "Object Detection using Geometrical Context Feedback",
                info: "International Journal of Computer Vision 2012(2), *indicates equal contributions.",
                refs: [
                    { href: "assets/papers/Sun_IJCV_2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese.",
                image: "sun_sun_bb_cvpr2012.png",
                title: "An Efficient Branch-and-Bound Algorithm for Optimal Human Pose Estimation",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "assets/bibtex/sun_bb_cvpr2012.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/sun_bb_cvpr2012.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/BBproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, M. Bagra, Y.-W. Chao, S. Savarese.",
                image: "bao_bao_cvpr2012_ssfm.png",
                title: "Structure From Motion with Points, Objects, and Regions",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "assets/bibtex/bao_cvpr2012_ssfm.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/bao_cvpr2012_ssfm.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang and S. Savarese",
                image: "",
                title: "Estimating the Aspect Layout of Object Categories",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "assets/bibtex/xiang_cvpr12.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/xiang_cvpr12.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/xiang_cvpr12_tr.pdf",
                        text: "Technical Report",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ALM/Aspect_Layout_Model.zip",
                        text: "Code",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ALM/ALMproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Kumar, M. Sun, S. Savarese,",
                image: "",
                title: "Mobile Object Detection through Client-Server based Vote Transfer",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "assets/bibtex/Kumar_cvpr12.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/Kumar_cvpr12.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "",
                title: "Automatic targetless extrinsic calibration of a 3d lidar and camera by maximizing mutual information",
                info: "The AAAI National Conference on Artifical Intelligence, Toronto, Canada, July 2012.",
                refs: [
                    { href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012a",
                        text: "bibtex",
                    },
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2012a.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese,",
                image: "",
                title: "Efficient and Exact MAP Inference using Branch and Bound",
                info: "15th International Conference on Artificial Intelligence and Statistics (AISTATS), 2012.",
                refs: [
                    { href: "assets/bibtex/aistats_bb_final.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/aistats_bb_final.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/BBproj.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model-based progress monitoring using unordered daily construction photographs and IFC as-planned models",
                info: "ASCE Journal of Computing in Civil Engineering, 2012 (in press).",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "X. Chen, A. Hero, S. Savarese,",
                image: "",
                title: "Multimodality video indexing and retrieval using directed information",
                info: "IEEE Transactions on Multimedia, Volume 14, No.1, Feb, 2012.",
                refs: [
                    { href: "assets/papers/CHEN_ITSP2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, Y. Bao, V. Sharma, S. Savarese, T. Austin,",
                image: "",
                title: "MVSS: Michigan Visual Sonification System",
                info: "IEEE International Conference on Emerging Signal Processing Applications (ESPA), January 2012.",
                refs: [
                    { href: "http://web.eecs.umich.edu/%7Ejclemons/publications/MVSS.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, V. Ramanathan, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Shifting Weights: Adapting Object Detectors from Image to Video.",
                info: "NIPS 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/nips12-adapt.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, Li Fei-Fei.",
                image: "",
                title: "Discovering Voxel-Level Connectivity Between Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2012.",
                refs: [
                    { href: "http://cs.stanford.edu/%7Emci/materials/baldassano-iordan-etal-2012b.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky, Y. Lin, K. Yu, and L. Fei-Fei.",
                image: "",
                title: "Object-centric spatial pooling for image classification.",
                info: "ECCV 2012.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/eccv12-OCP.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/OlgaRussakovsky_OCPtalk_032513.pdf",
                        text: "slides",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Action Recognition with Exemplar Based 2.5D Graph Matching.",
                info: "ECCV 2012 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_ECCV12.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, and Li Fei-Fei.",
                image: "",
                title: "Voxel-Level Functional Connectivity using Spatial Regularization.",
                info: "NeuroImage 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NI2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "H. Su, J. Deng, and L. Fei-Fei.",
                image: "",
                title: "Crowdsourcing Annotations for Visual Object Detection.",
                info: "AAAI Human Computation Workshop 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/bbox_submission.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Kim, L. Fei-Fei, and E. Xingi.",
                image: "",
                title: "Web Image Prediction Using Multivariate Point Processes.",
                info: "KDD 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KimFei-FeiXing_KDD2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "H. Su*, A. Yu*, and L. Fei-Fei.",
                image: "",
                title: "Efficient Euclidean Projections onto the Intersection of Norm Balls.",
                info: "ICML 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SuYuFei-Fei_ICML2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Milad Memarzadeh, Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_tracking.jpg",
                title: "Real-time and automated recognition and 2D tracking of Construction workers and equipment from Site video streams.",
                info: "ASCE International Conference on Computing in Civil Engineering, Clearwater Beach, Florida, USA, June 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412343.0054",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, G. Bradski, and L. Fei-Fei.",
                image: "",
                title: "A Codebook-Free and Annotation-Free Approach for Fine-Grained Image Categorization.",
                info: "ICML 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoBradskiFei-Fei_CVPR2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Learning Latent Temporal Structure for Complex Event Detection.",
                info: "CVPR 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/cvpr12-temporal.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, J. Krause, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hedging Your Bets: Optimizing Accuracy-Specificity Trade-offs in Large Scale Visual Recognition.",
                info: "CVPR 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengKrauseBergFei-Fei_CVPR2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Recognizing Human Actions in Still Images by Modeling the Mutual Context of Objects and Human Poses.",
                info: "PAMI 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/yaopami12.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2011",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, S. Satheesh, A. C. Berg, and L. Fei-Fei.",
                image: "",
                title: "Fast and Balanced: Efficient Label Tree Learning for Large Scale Object Recognition.",
                info: "NIPS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NIPS2011_0391.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei and E. Xing.",
                image: "",
                title: "Large-Scale Category Structure Aware Image Categorization.",
                info: "NIPS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NIPS2011_0730.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, X. Jiang, A. Khosla, A.L. Lin, L.J. Guibas, and L. Fei-Fei.",
                image: "",
                title: "Human Action Recognition by Learning Bases of Action Attributes and Parts.",
                info: "ICCV 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoJiangKhoslaLinGuibasFei-Fei_ICCV2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Kim, E.P. Xing, L. Fei-Fei, and T. Kanade.",
                image: "",
                title: "Distributed cosegmentation vis submodular optimization on anisotropic diffusion.",
                info: "ICCV 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KimXingFei-FeiKanade_ICCV2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "M. Savva, N. Kong, A. Chhajta, L. Fei-Fei, M. Agrawala, and J. Heer.",
                image: "",
                title: "ReV ReVision: Automated Classification, Analysis and Redesign of Chart Imagesision: Automated Classification, Analysis and Redesign of Chart Images.",
                info: "UIST 2011.",
                refs: [
                    { href: "assets/papers/2011-ReVision-UIST.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, A. Khosla, and L. Fei-Fei.",
                image: "",
                title: "Classifying Actions and Measuring Action Similarity by Modeling the Mutual Context of Objects and Human Poses.",
                info: "ICML 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoKhoslaFei-Fei_ICML2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. B. Walther, B. Chai, E. Caddigan, D. M. Beck and L. Fei-Fei.",
                image: "",
                title: "Simple line drawings suffice for functional MRI decoding of natural scene categories.",
                info: "PNAS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherChaiCaddiganBeckFei-Fei_full_PNAS2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hierarchical Semantic Indexing for Large Scale Image Retrieval.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengBergFei-Fei_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao*, A. Khosla*, and L. Fei-Fei.",
                image: "",
                title: "Combining Randomization and Discrimination for Fine-Grained Image Categorization.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoKhoslaFeiFei_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei, and E.P. Xing.",
                image: "",
                title: "Online Detection of Unusual Events in Videos via Dynamic Sparse Coding.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhaoFeiFeiXing_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Articulated Part-based Model for Joint Object Detection and Pose Estimation",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [
                    { href: "assets/bibtex/SUN_ICCV2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/Sun_ICCV11_PID2005385.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/sun_iccv11_iccv_supp_camera.pdf",
                        text: "Supplementary Material",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Mei, J. Liu, A. Hero, S. Savarese,",
                image: "",
                title: "Robust Object Pose Estimation via Statistical Manifold Modeling",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [
                    { href: "assets/bibtex/LIANG_ICCV2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/mei_iccv2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao, M. Bagra, S. Savarese,",
                image: "",
                title: "Semantic Structure From Motion with Object and Point Interactions",
                info: "Winner of the best student paper award, IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "assets/bibtex/bao_CORP2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/bao_CORP2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao, M. Sun, S. Savarese,",
                image: "",
                title: "Toward coherent object detection and scene layout understanding",
                info: "Image and Vision Computing 2011 (9). (Editor choice)",
                refs: [
                    { href: "assets/bibtex/BAO_IVC_2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/BAO_IVC_2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, C. Pantofaru, S. Savarese,",
                image: "",
                title: "Detecting and Tracking People using an RGB-D Camera via Multiple Detector Fusion",
                info: "Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "assets/bibtex/choi_corp11.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/choi_corp11.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, H. Zhu, S. Savarese, T. Austin,",
                image: "",
                title: "MEVBench: A Mobile Computer Vision Benchmarking Suite",
                info: "IEEE International Symposium on Workload Characterization, November 2011.",
                refs: [
                    { href: "http://www.eecs.umich.edu/mevbench/publications/mevbench.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/mevbench/publications/IISWCFinalCopy.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese,",
                image: "",
                title: "Monitoring Changes of 3D Building Elements from Unordered Photo Collections",
                info: "IEEE workshop on Computer Vision for Remote Sensing of the Environment (in conjunction with ICCV-11).",
                refs: [
                    { href: "assets/papers/Golparvar-Fard-cvrse2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Lopez, T. Tuytelaars and S. Savarese,",
                image: "",
                title: "Deformable Part Models Revisited: A Performance Evaluation for Object Category Pose Estimation",
                info: "IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "assets/bibtex/lopeziccv2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/lopez2011-iccv.PDF",
                        text: "PDF",
                    },
                    { href: "http://agamenon.tsc.uah.es/Personales/rlopez/data/pose-estimation/",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "Proceedings of the British Machine Vision Conference (BMVC) 2011,",
                refs: [
                    { href: "assets/bibtex/KIM_BMVC2011.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/kim_bmvc2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [
                    { href: "assets/papers/bao_ssfm_cvpr2011.pdf",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                        text: "Project",
                    },
                    { href: "assets/bibtex/Bao_CVPR2011_SSFM.bib",
                        text: "bibtex",
                    },
                    { href: "assets/papers/yingze_cvpr2011_poster_nologo.pdf",
                        text: "Poster",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, K. Shahid, and S. Savarese,",
                image: "",
                title: "Learning Context for Collective Activity Recognition",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [
                    { href: "assets/papers/cvpr2011choishahid.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Choi_CVPR_2011.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Liu, M. Shah, B. Kuipers, S. Savarese,",
                image: "",
                title: "Cross-View Action Recognition via View Knowledge Transfer",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (oral),",
                refs: [
                    { href: "assets/papers/cvpr11_liu_b.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/liu-cvpr11a-crossview.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Liu, B. Kuipers, S. Savarese,",
                image: "",
                title: "Recognizing Human Actions by Attributes",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (oral),",
                refs: [
                    { href: "assets/papers/cvpr11_liu_a.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/liu-cvpr11b-attributes.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, S. Savarese, T. Austin,",
                image: "",
                title: "EFFEX: An Embedded Processor for Computer Vision Based Feature Extraction",
                info: "48th Design Automation Conference, 2011,",
                refs: [
                    { href: "assets/papers/Clemons_EFFEX_10.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, S. Kumar, Bradsky, S. Savarese,",
                image: "",
                title: "Toward Automatic 3D Generic Object Modeling from One Single Image",
                info: "3DIM-PVT 2011",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Gaurav Pandey, James R. McBride, Silvio Savarese and Ryan M. Eustice,",
                image: "",
                title: "Visually Bootstrapped generalized ICP",
                info: "Proceedings of the IEEE International Conference on Robotics and Automation, Shanghai, China, 2011.",
                refs: [
                    { href: "assets/papers/gpandey-2011b.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/gpandey-2011b.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Integrated Sequential As-Built and As-Planned Representation with D4AR Tools in Support of Decision-Making Tasks in the AEC/FM Industry,",
                info: "ASCE Journal of Construction Engineering and Management,",
                refs: [
                    { href: "http://dx.doi.org/10.1061/%28ASCE%29CO.1943-7862.0000371",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, J. Bohn, J.Teizer, S. Savarese, and F. Pena-Mora.",
                image: "",
                title: "Evaluation of image-based modeling and laser scanning accuracy for emerging automated performance monitoring techniques",
                info: "Elsevier Journal of Automation in Construction (in press), 2011.",
                refs: [],
            },
        ],
    },
    { name: "Publications 2010",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li*, H. Su*, E.P. Xing and L. Fei-Fei.",
                image: "",
                title: "Object Bank: A High-Level Image Representation for Scene Classification and Semantic Feature Sparsification.",
                info: "NIPS 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSuXingFeiFeiNIPS2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Zhu, L.-J. Li, L. Fei-Fei and E.P. Xing.",
                image: "",
                title: "Large Margin Learning of Upstream Scene Understanding Models.",
                info: "NIPS 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhuLiFeiFeiXingNIPS2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, A. Berg, K. Li and L. Fei-Fei.",
                image: "",
                title: "What does classifying more than 10,000 image categories tell us?.",
                info: "ECCV 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengBergLiFei-Fei_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Juan Carlos Niebles, Chih-Wei Chen and Li Fei-Fei.",
                image: "NieblesChenFei-Fei_ECCV2010_icon.jpg",
                title: "Modeling Temporal Structure of Decomposable Motion Segments for Activity Classification.",
                info: "European Conference on Computer Vision (ECCV), Hersonissos, Crete, Greece, September 2010.",
                refs: [
                    { href: "assets/papers/NieblesChenFei-Fei_ECCV2010.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/Datasets/OlympicSports/",
                        text: "Data",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-642-15552-9_29",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/documents/NieblesChenFei-Fei_ECCV2010.zip",
                        text: "Slides",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei and E. P. Xing.",
                image: "",
                title: "Image Segmentation with Topic Random Fields.",
                info: "ECCV 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhaoFei-FeiXing_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.J. Li*, H. Su*, Y. Lim and L. Fei-Fei.",
                image: "",
                title: "Objects as Attributes for Scene Classification.",
                info: "ECCV 2010 workshop on Parts and Attributes.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSuLimFeiFei_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky and L. Fei-Fei.",
                image: "",
                title: "Attribute learning in large-scale datasets.",
                info: "Parts and Attributes Workshop at ECCV 2010.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/eccv10workshop-Attributes.pdf",
                        text: "PDF",
                    },
                    { href: "assets/papers/eccv10attributes-largescale.pdf",
                        text: "slides",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning object categories from Internet image searches.",
                info: "Proc. Of IEEE, Special Issue on Internet Vision 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/FergusFei-FeiPeronaZisserman2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei and L.-J. Li.",
                image: "",
                title: "What, Where and Who? Telling the Story of an Image by Activity Classification, Scene Recognition and Object Categorization.",
                info: "Book chapter in \"Studies in Computational Intelligence- Computer Vision\". Volume 285/2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/Fei-Fei_Li_ICVSS09_bookchapter.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, and L. Fei-Fei.",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation.",
                info: "Book chapter in \"Studies in Computational Intelligence- Computer Vision\". Volume 285/2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SavareseFei-Fei2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. B. Walther, D. M. Beck, and L. Fei-Fei.",
                image: "",
                title: "To err is human: investigating neural function by correlating error patterns with human behavior.",
                info: "MIT Press, Cambridge, Massachusetts. 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherBeckFei-Fei_2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Grouplet: a Structured Image Representation for Recognizing Human and Object Interactions.",
                info: "CVPR 2010 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010a.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Modeling Mutual Context of Object and Human Pose in Human-Object Interaction Activities.",
                info: "CVPR 2010 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010b.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Li-Jia Li*, Chong Wang*, Yongwhan Lim, David Blei and Li Fei-Fei.",
                image: "",
                title: "Building and Using a Semantivisual Image Hierarchy.",
                info: "CVPR 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiWangLimBleiFei-Fei_CVPR2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Juan Carlos Niebles, Bohyung Han and Li Fei-Fei.",
                image: "efficient_moving_people.jpg",
                title: "Efficient Extraction of Human Motion Volumes by Tracking.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), San Francisco, USA, June 2010.",
                refs: [
                    { href: "assets/papers/NieblesHanFeiFei_CVPR2010.pdf",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2010.5540152",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Socher and L. Fei-Fei.",
                image: "",
                title: "Connecting Modalities: Semi-supervised Segmentation and Annotation of Images Using Unaligned Text Corpora.",
                info: "CVPR 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SocherFeiFei_CVPR2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese,",
                image: "",
                title: "Object Detection with Geometrical Context Feedback Loop",
                info: "Proc. of British Machine Vision Conference (BMVC), 59.1-59.11, 2010 (oral presentation). (*indicates equal contributions)",
                refs: [
                    { href: "assets/papers/Sun_bmvc_2010.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/MinBMVC10.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Multiple Target Tracking in World Coordinate with Single, Minimally Calibrated Camera",
                info: "Proc. of European Conference of Computer Vision, 553-567, 2010",
                refs: [
                    { href: "assets/papers/mtt_wg_eccv2010.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Choi_ECCV_2010.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/mttproject.html",
                        text: "Project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, G. Bradsky, B. Xu, and S. Savarese,",
                image: "",
                title: "Depth-Encoded Hough Voting for Joint Object Detection and Shape Recovery",
                info: "Proc. of European Conference of Computer Vision, 658-671, 2010",
                refs: [
                    { href: "assets/papers/Sun_Eccv_2010.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/MinECCV10.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S.Yingze Bao, M. Sun, and Silvio Savarese,",
                image: "",
                title: "Toward Coherent Object Detection And Scene Layout Understanding",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 65-72, 2010",
                refs: [
                    { href: "assets/papers/bao_cvpr2010.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Bao_CVPR2010_Layout.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Vineet R. Kamat, Julio C. Martinez, Martin Fischer, Mani Golparvar-Fard, Feniosky Pena-Mora, and Silvio Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Journal of Construction Engineering and Management doi:10.1061/(ASCE)CO.1943-7862.0000262",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Gaurav Pandey, James McBride, Silvio Savarese and Ryan Eustice,",
                image: "",
                title: "Extrinsic calibration of a 3d laser scanner and an omnidirectional camera",
                info: "In 7th IFAC Symposium on Intelligent Autonomous Vehicles, 2010",
                refs: [
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2010a.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/gpandey-2010a.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I.Brilakis, M. Lourakis, R. Sacks, S. Savarese, S.Christodoulou,J.Teizer and A. Makhmalbaf,",
                image: "",
                title: "Toward automated generation of parametric BIMs based on hybrid video and laser scanning data.",
                info: "In Journal of Advanced Engineering Informatics, 24(4) 456-465, 2010",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR 4 Dimensional augmented reality - tools for automated remote progress tracking and support of decision-enabling tasks in the AEC/FM industry",
                info: "Proc. of The 6th Int. Conf. on Innovations in AEC Special Session - Transformative machine vision for AEC.State College, PA, Jun 9-11. Winner of the best student paper award.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, J. Thomas, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Remote assessment of pre and post-disaster critical physical infrastructures using segway mobile workstation chariot and D4AR 4D augmented reality models.",
                info: "Proc. of ICCCBE 2010 EG-ICE10., page 63,Nottingham, UK, Jun 30-Jul 2.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Model-based detection of progress using D4AR - A 4 Dimensional augmented reality- models generated by daily site photologs and building information models",
                info: "Proc. of ICCCBE 2010 EG-ICE10. page 81, Nottingham, UK, Jun 30-Jul 2.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model component-based recognition of progress using daily construction photographs and 4D IFC-based models.",
                info: "Proc. of Construction Research Congress, 51-60, Banff, Canada, May 8-11",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR - 4 DIMENSIONAL AUGMENTED REALITY - MODELS FOR AUTOMATION AND INTERACTIVE VISUALIZATION OF CONSTRUCTION PROGRESS MONITORING",
                info: "Proc., 2010 International Conference on Construction Applications of Virtual Reality, 2010, Japan, 15-2",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "V. Kamat, J. Martinez, M. Fischer, M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Proc., Construction Engineering Conference, Blacksburg, VA, Sep 30- Oct 2.",
                refs: [],
            },
        ],
    },
    { name: "Publications 2009",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, D.B. Walther, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Hierarchical Mixture of Classification Experts Uncovers Interactions between Brain Regions.",
                info: "NIPS 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoWaltherBeckFei-Fei_NIPS2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Chai†, D.B. Walther†, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Exploring Functional Connectivity of the Human Brain using Multivariate Information Analysis.",
                info: "NIPS 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ChaiWaltherBeckFei-Fei_NIPS2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and L. Fei-Fei.",
                image: "",
                title: "OPTIMOL: automatic Online Picture collecTion via Incremental MOdel Learning.",
                info: "IJCV 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/JiaFei-FeiIJCV_2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Peelen, Marius V. and Fei-Fei, Li and Kastner, Sabine.",
                image: "",
                title: "Neural mechanisms of rapid natural scene categorization in human visual cortex.",
                info: "Nature 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/PeelenFei-FeiKastner_Nature2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D.B. Walther, E. Caddigan, L. Fei-Fei*, D.M. Beck*.",
                image: "",
                title: "Natural scene categories revealed in distributed patterns of activity in the human brain.",
                info: "Journal of Neuroscience, 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherCaddiganFei-FeiBeck_JoN2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li, R. Socher and L. Fei-Fei.",
                image: "",
                title: "Towards Total Scene Understanding:Classification, Annotation and Segmentation in an Automatic Framework.",
                info: "CVPR 2009 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSocherFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Chong Wang, David Blei and L. Fei-Fei.",
                image: "",
                title: "Simultaneous Image Classification and Annotation.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WangBleiFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li and L. Fei-Fei.",
                image: "",
                title: "ImageNet: A Large-Scale Hierarchical Image Database.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ImageNet_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *H. Su, S. Savarese and L. Fei-Fei.",
                image: "",
                title: "A Multi-View Probabilistic Model for 3D Object Classes.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SunSuSavareseFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/MinHaoCVPR09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*H. Su, *M. Sun, L. Fei-Fei and S. Savarese.",
                image: "",
                title: "Learning a dense multi-view representation for detection, viewpoint classification and synthesis of object categories",
                info: "Proc. of International Conference in Computer Vision (ICCV), 213-220, 2009 oral presentation. (*indicates equal contributions);",
                refs: [
                    { href: "assets/papers/SuSunLiSavarese_ICCV2009.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/HaoMinICCV09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "P. Gupta, S. Arrabolu, M. Brown, S. Savarese.",
                image: "",
                title: "Scene Categorization from Low Definition Video",
                info: "Proc. of International Conference in Computer Vision (ICCV), 1655-1662, 2009",
                refs: [
                    { href: "assets/papers/gupta_iccv09.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Gupta_ICCV2009_building.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Mei, M. Sun, K.M. Carter, A.O. Hero III, S. Savarese,",
                image: "",
                title: "Unsupervised Object Pose Classification from Short Video Sequences",
                info: "Proc. of British Machine Vision Conference (BMVC), 13-21, September 2009",
                refs: [
                    { href: "assets/papers/Liang_bmvc_09.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/LiangBMVC09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, K. Shahid, S. Savarese,",
                image: "",
                title: "What are they doing? : Collective Activity Classification Using Spatio-Temporal Relationship Among People",
                info: "Proc. of 9th International Workshop on Visual Surveillance (VSWS09) in conjuction with ICCV,1282-1289, 2009",
                refs: [
                    { href: "http://www.eecs.umich.edu/vision/paper/Wongun_CollectiveActivityRecognition09.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Choi_VSWS_2009.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M.,Pena-Mora F., And Savarese S",
                image: "",
                title: "D4AR- A 4-Dimensional Augmented Reality Model for Automating Construction Progress Data Collection, Processing and Communication",
                info: "ITCON Special Issue: Next Generation Construction IT: Technology Foresight, Future Studies, Road mapping, and Scenario Planning, Vol 14, 129-153, 2009",
                refs: [
                    { href: "assets/papers/D4AR_itcon_2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Savarese S. and Pena-Mora F.",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "Proc., Construction Research Congress, 41-50, Seattle, Washington, May 22-24, 2009 CRC First Place Poster Award",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S",
                image: "",
                title: "Monitoring of Construction Performance Using Daily Progress Photograph Logs and 4D As-Planned Models",
                info: "Proc. of 2009 ASCE International Workshop on Computing in Civil Engineering, 53-63, Austin, Texas, June 24-27, 2009",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S.",
                image: "",
                title: "Sparse Reconstruction and Geo-Registration of Daily Site Photographs for Representation of As-Built Construction Scene and Automatic Construction Progress Data Collection",
                info: "Proc. of 2009 International Symposium on Automation and Robotics in Construction, 535-543, Austin, TX, June 24-27,2009",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Bangpeng Yao, Juan Carlos Niebles and Li Fei-Fei.",
                image: "mining.jpg",
                title: "Mining Discriminative Adjectives and Prepositions for Natural Scene Recognition.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Miami, USA, June 2009.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPRW.2009.5204222",
                        text: "DOI",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2008",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, B. Han, A. Ferencz and L. Fei-Fei.",
                image: "eccv08.jpg",
                title: "Extracting Moving People from Internet Videos.",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesHanFerenczFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/projects/extractingPeople.html",
                        text: "Project",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/projects/extractingPeople/NieblesHanFerenczFei-Fei_ECCV2008_poster.pdf",
                        text: "Poster",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B.Collins, J. Deng, L. Kai and L. Fei-Fei.",
                image: "",
                title: "Towards scalable dataset construction: An active learning approach.",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/CollinsDengLiFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S.Savarese and L. Fei-Fei.",
                image: "",
                title: "View synthesis for recognizing unseen poses of object classes.",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/SavareseFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Savarese_ECCV2008_ViewSynth.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, H. Wang and L. Fei-Fei..",
                image: "",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "IJCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesWangFei-Fei_IJCV2008.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/niebles/humanactions.htm",
                        text: "Project",
                    },
                    { href: "https://doi.org/10.1007/s11263-007-0122-4",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "S. Savarese, A. Del Pozo, J.C. Niebles and L. Fei-Fei.",
                image: "",
                title: "Spatial-temporal Correlatons for Unsupervised Action Classification.",
                info: "IEEE Workshop on Motion and Video Computing, 2008.",
                refs: [
                    { href: "assets/papers/SavareseDelPozoEtAl_WMVC08.pdf",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/WMVC.2008.4544068",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, R. Spronk, D. G. Stork, and A. DelPozo,",
                image: "",
                title: "Reflections on praxis and facture in a devotional portrait diptych: A computer analysis of the mirror in Hans Memling’s Virgin and Child and Maarten van Nieuwenhove",
                info: "IS&T/SPIE 20th Annual Symposium Electronic Imaging, Jan Jose, CA, Januray 29-31st, 2008",
                refs: [
                    { href: "assets/papers/Savarese_spronk_stork_etal_08.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2007",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and L. Fei-Fei.",
                image: "",
                title: "What, where and who? Classifying event by scene and object recognition.",
                info: "ICCV 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiFei-Fei_ICCV07.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Cao and L. Fei-Fei..",
                image: "",
                title: "Spatially coherent latent topic model for concurrent object segmentation and classification.",
                info: "ICCV 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/CaoFei-Fei_ICCV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. Walther and L. Fei-Fei..",
                image: "",
                title: "Task-set switching with natural scenes: Measuring the cost of deploying top-down attention.",
                info: "Journal of Vision 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/WaltherFei-Fei_JOV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Li-Jia Li, Juan Carlos Niebles and Li Fei-Fei.",
                image: "optimol.png",
                title: "OPTIMOL: a framework for Online Picture collecTion via Incremental MOdel Learning.",
                info: "Association for the Advancement of Artificial Intelligence (AAAI) 2007 Robot Competition and Exhibition, Vancouver, Canada, July 2007.",
                refs: [
                    { href: "http://www.aaai.org/Papers/AAAI/2007/AAAI07-367.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/srvc/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li, G. Wang and L. Fei-Fei..",
                image: "",
                title: "OPTIMOL: automatic Object Picture collecTion via Incremental MOdel Learning.",
                info: "CVPR 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiWangFei-Fei_CVPR2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J. C. Niebles and L. Fei-Fei..",
                image: "NieblesFei-Fei_CVPR2007.jpg",
                title: "A hierarchical model of shape and appearance for human action classification.",
                info: "CVPR 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesFei-Fei_CVPR2007.pdf",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2007.383132",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona.",
                image: "",
                title: "Learning generative visual models for 101 object categories.",
                info: "Computer Vision and Image Understanding, 2007.",
                refs: [
                    { href: "assets/bibtex/feifei2007cviu.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Fei-Fei, L., Iyer, A., Koch, C., Perona, P.",
                image: "",
                title: "What do we perceive in a glance of a real-world scene?",
                info: "Journal of Vision, 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_GistJoV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and L. Fei-Fei.",
                image: "",
                title: "3D generic object categorization, localization and pose estimation",
                info: "Proc. of IEEE International Conf. in Computer Vision (ICCV), 1-8, Brazil, October, 2007 Accepted as Oral,",
                refs: [
                    { href: "assets/papers/3D%20generic%20object%20categorization_iccv07.pdf",
                        text: "PDF",
                    },
                    { href: "assets/bibtex/Savarese_ICCV2007_Multiview.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. DelPozo, and S. Savarese,",
                image: "",
                title: "Detecting Specular Surfaces on Natural Images",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 1-8, Minnesota, USA, June 2007",
                refs: [
                    { href: "assets/papers/delpozo_savarese_cvpr07.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2006",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, H. Wang, L. Fei-Fei..",
                image: "NieblesWangFei-Fei_BMVC2006.jpg",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "BMVC 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesHWangFei-Fei_BMVC2006.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/niebles/VPCVPR_06_May19.zip",
                        text: "Video",
                    },
                    { href: "http://www.bmva.org/bmvc/2006/papers/283.pdf",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/niebles/NieblesWangFeiFei_IMA-Workshop-06_poster.pdf",
                        text: "Poster",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei.",
                image: "",
                title: "Knowledge transfer in learning to recognize visual object classes..",
                info: "ICDL 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_ICDL2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Wang, Y. Zhang, and L. Fei-Fei.",
                image: "",
                title: "Using dependent regions for object categorization in a generative framework..",
                info: "CVPR 2006.",
                refs: [
                    { href: "assets/papers/WangZhangFei-Fei_CVPR2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona.",
                image: "",
                title: "One-Shot learning of object categories.",
                info: "PAMI 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, J. Winn and A. Criminisi,",
                image: "",
                title: "Discriminative Object Class Models of Appearance and Shape by Correlatons",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 2033-2040 ,New York, USA, June 2006 ,",
                refs: [
                    { href: "assets/papers/Discriminative%20_Object_Class_Models_savarese_winn_criminisi_06.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Andreetto, S. Savarese, and P. Perona,",
                image: "",
                title: "Carving from ray-tracing constraints: IRT-carving",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 49-56, June 2006",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/3DPVT06.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Andreetto, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "3D Reconstruction by Shadow Carving: Theory and Practical Evaluation,",
                info: "International Journal of Computer Vision (IJCV) , 71(3), 305-336, March 2006",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/shadow_carving_06.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2005",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. VanRullen, L. Reddy and L. Fei-Fei..",
                image: "",
                title: "Binding is local problem for natural objects and scenes.",
                info: "Vision Research, 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/VanRullenReddyFei-Fei_VR2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. VanRuellen, C. Koch and P. Perona..",
                image: "",
                title: "Why does natural scene categorization require little attention? Exploring attentional requirements for natural and synthetic stimuli.",
                info: "Vision Cognition, 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiVanRullenKochPerona_VC2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning Object Categories from Google's Image Search.",
                info: "ICCV 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/FergusFei-FeiPeronaZisserman_ICCV05.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei and P. Perona.",
                image: "",
                title: "A Bayesian Hierarchical Model for Learning Natural Scene Categories.",
                info: "CVPR 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiPerona2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Local Shape from Mirror Reflections,",
                info: "International Journal of Computer Vision (IJCV), 64(1), 31-67, 2005,",
                refs: [
                    { href: "assets/papers/local_shape_savarese05.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2004 & Before",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Humberto Campanella P., Mauricio Pardo G., Victor Manotas A., Javier Páez, Juan Carlos Niebles and David Angulo.",
                image: "tugboat.png",
                title: "Signal Processing Unit for River Tugboat Telemetry System.",
                info: "Conference on Design of Circuits and Integrated Systems (DCIS), Bordeaux, France, November 2004.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "What do reflections tell us about the shape of a mirror?",
                info: "in Applied Perception in Graphics and Visualization [sponsored by ACM SIGGRAPH], 115-118, Los Angeles, August 7-8, 2004",
                refs: [
                    { href: "assets/papers/SavareseFei-FeiPerona_SIGGRAPH2004.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Recovering local shape of a mirror surface from reflection of a regular gridI",
                info: "Proc. of European Conference of Computer Vision, 468-481, Prague, May 2004.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/sav_eccv04.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Second Order Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 356-361, Italy, June 2002.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces -- part II",
                info: "Proc. of European Conference of Computer Vision, 759-774, Denmark, May 2002.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/23510759.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Implementation of a Shadow Carving System for Shape Capture",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 12 - 23, Padua, Italy, June 2002.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/savarese_3DPVT.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, II-738-745, Kawa'i, USA, December 2001.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/P5_28.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Shadow Carving",
                info: "Proc. of the Int. Conf. on Computer Vision, 190-197 Vancouver, Canada, June 2001.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/04_17.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona..",
                image: "",
                title: "Learning generative visual models from few training examples: an incremental Bayesian approach tested on 101 object categories.",
                info: "CVPR 2004 Workshop on Generative-Model Based Vision.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona_GMBV04.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona.",
                image: "",
                title: "A Bayesian approach to unsupervised One-Shot learning of Object categories.",
                info: "ICCV 2003.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_ICCV03.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "F.F. Li, R. VanRullen, C. Koch and P. Perona.",
                image: "",
                title: "Rapid natural scene categorization in the near absence of attention.",
                info: "Proc. Natl. Acad. Sci. 99.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiVanRullenKochPerona_PNAS2002.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Carlos Cubas, Marcos Consuegra, Royman Lopez, Alexis Sierra, Jorge Leon, Fernando Mendez, Carlos Ochoa, Fabian Panesso, Edgar Sotter, Fabian Manotas, Victor Manotas, Juan Carlos Niebles, Mauricio Pardo y Eric Vallejo.",
                image: "robots.png",
                title: "Dispositivos automatas para navegacion, deteccion y recoleccion de pelotas de tenis en ambientes conocidos.",
                info: "Revista Ingenieria y Desarrollo. 2001.",
                refs: [
                    { href: "http://rcientificas.uninorte.edu.co/index.php/ingenieria/article/viewFile/2281/1490",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G.B. Stanley, F.F. Li, and Y. Dan.",
                image: "",
                title: "Reconstruction of natural scenes from ensemble responses in the LGN.",
                info: "Journal of Neuroscience, 1999.",
                refs: [
                    { href: "assets/papers/StanleyLiDan_JN1999.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Books and Book Chapters",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Alahi, V. Ramanathan, K. Goel, A. Robicquet, A. Sadeghian, L. Fei-Fei, S. Savarese,",
                image: "",
                title: "Learning to predict in crowds",
                info: "To appear in the book on “Group and Crowd Behavior for Computer Vision” by Elsevier.",
                refs: [
                    { href: "http://web.stanford.edu/%7Ealahi/downloads/Elsevier_Learning_to_predict_in_crowds.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A.R. Zamir, A. Hakeem, L. Van Gool, M. Shah, and R. Szeliski,",
                image: "",
                title: "Large-Scale Visual Geo-Localization,",
                info: "Springer (2016).",
                refs: [
                    { href: "http://www.springer.com/gb/book/9783319257792#aboutBook",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Model-based object recognition",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 488-492.",
                refs: [
                    { href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese,",
                image: "",
                title: "3D Shape from Specularities",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 726-729.",
                refs: [
                    { href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Recognizing Complex Human Activities via Crowd Context",
                info: "Augmented Vision and Reality, Springer, 2013.",
                refs: [
                    { href: "http://link.springer.com/chapter/10.1007%2F8612_2012_4",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Hoiem and S. Savarese,",
                image: "",
                title: "Representations and Techniques for 3D Object Recognition and Scene Interpretation",
                info: "Synthesis lecture on Artificial Intelligence and Machine Learning, Morgan Claypool Publishers, 2011.",
                refs: [
                    { href: "http://www.amazon.com/Representations-Techniques-Recognition-Interpretation-Inetlligence/dp/1608457281",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese.",
                image: "",
                title: "Visualization of Construction Progress Monitoring using Unordered Construction Photo Collections and 4D Building Information Models",
                info: "in \"Augmented Reality\", ISBN 978-953-307-631-7. 2011",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion: a Novel Framework for Joint Object Recognition and 3D Reconstruction",
                info: "in \"Outdoor and Large-Scale Real-World Scene Analysis\", Springer, in press.",
                refs: [
                    { href: "assets/papers/bao_ssfm2011_extended.pdf",
                        text: "pre-print",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, D. G. Stork, A. DelPozo and R. Spronk,",
                image: "",
                title: "A computer analysis of the mirror in Hans Memlingis Virgin and Child and Maarten van Nieuwenhove",
                info: "in \"Digital Imaging for Cultural Heritage Preservation\", CRC Press 2011.",
                refs: [
                    { href: "http://www.amazon.com/Digital-Imaging-Cultural-Heritage-Preservation/dp/1439821739",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, and L. Fei-Fei,",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation",
                info: "in \"Computer Vision: Detection, Recognition and Reconstruction (Studies in Computational Intelligence)\", Volume 285/2010, Springer, 2010.",
                refs: [
                    { href: "http://amzn.com/3642128475",
                        text: "Book",
                    },
                ],
            },
        ],
    },
    { name: "Dissertations",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause",
                image: "",
                title: "Fine-Grained Recognition: Data, Recognition, and Application.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [
                    { href: "assets/papers/krause2016dissertation.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy",
                image: "",
                title: "Connecting Images and Natural Language.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [
                    { href: "assets/papers/karpathy_dissertation2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan",
                image: "",
                title: "Human-Centric Video Understanding with Weak Supervision.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [
                    { href: "assets/papers/vignesh_ramanathan_dissertation_v3.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan",
                image: "",
                title: "Uncovering the Neural Representation of Multiple Dimensions of Object Categorization in Human Visual Cortex.",
                info: "Stanford University. PhD Thesis. 2016 PDF",
                refs: [
                    { href: "assets/papers/iordan-dissertation-2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna",
                image: "",
                title: "Visual Genome: Crowdsourced Visual Knowledge Representations.",
                info: "Stanford University. Masters Thesis. 2016 [Christofer Stephenson Memorial Award] PDF",
                refs: [
                    { href: "assets/papers/ranjay2016thesis.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Olga Russakovsky",
                image: "",
                title: "Scaling up object detection.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [
                    { href: "assets/papers/Russakovsky_PhD_thesis_2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Chris Baldassano",
                image: "",
                title: "Visual scene perception in the human brain: connections to memory, categorization, and social cognition.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [
                    { href: "assets/papers/Baldassano_PhD_thesis_2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang",
                image: "",
                title: "Visual learning with weakly labeled video.",
                info: "Stanford University. PhD Thesis. 2015 PDF",
                refs: [
                    { href: "assets/papers/Tang_PhD_thesis_2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Bangpeng Yao",
                image: "",
                title: "Understanding human actions in still images.",
                info: "Stanford University. PhD Thesis. 2013 PDF",
                refs: [
                    { href: "assets/papers/Yao_PhD_thesis_2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jia Deng",
                image: "",
                title: "Large scale visual recognition.",
                info: "Princeton University. PhD Thesis. 2012 PDF",
                refs: [
                    { href: "assets/papers/Deng_PhD_thesis_2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jia Li",
                image: "",
                title: "Semantic image understanding: from the web, in large scale, with real-world challenging data.",
                info: "Stanford University. PhD Thesis. 2011 PDF",
                refs: [
                    { href: "assets/papers/JiaLi_PhD_thesis_2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Juan Carlos Niebles",
                image: "",
                title: "Extracting moving people and categorizing their activities in video.",
                info: "Princeton University. PhD Thesis. 2011 PDF",
                refs: [
                    { href: "assets/papers/Niebles_PhD_thesis_2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei",
                image: "",
                title: "Visual recognition: computational models and human psychophysics.",
                info: "California Insitute of Technology. PhD Thesis. 2005",
                refs: [
                    { href: "assets/papers/FeiFeiLi_phD_thesis_2005.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Patents",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese (2011)",
                image: "",
                title: "D4AR modeling for automation and interactive visualization of construction progress monitoring",
                info: "Provisional Patent, U. S. Patent and Trademark Office (61/570,491).",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "F. Bernardini, B. Henning, H. Rushmeier, S. Savarese, G. Taubin,",
                image: "",
                title: "System, method, and program product for acquiring accurate object silhouettes for shape recovery",
                info: "IBM US Patent 6,455,835, (2001)",
                refs: [
                    { href: "https://www.google.com.pg/patents/US6455835",
                        text: "Abstract",
                    },
                ],
            },
        ],
    },
    { name: "Abstracts",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, Y. Bao, M. Bagra, T. Austin, S. Savarese,",
                image: "",
                title: "Scene Understanding for the Visually Impaired Using Visual Sonification by Visual Feature Analysis and Auditory Signature",
                info: "Proc. of Vision Science Society, May 2012.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, A. Del Pozo, D. Baker, D.J. Simons,",
                image: "",
                title: "When are reflections useful in perceiving the shape of shiny surfaces?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar Fard, S. Savarese, F. Pena-Mora,",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "CCBE-XI, Beijing, October 16-18, 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Del Pozo, S. Savarese, D. Baker, D. J. Simons,",
                image: "",
                title: "Why do we see some surfaces as reflective?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "Can We See the Shape of a Mirror?",
                info: "Proc. of Vision Science Society, Florida, May 2003.",
                refs: [
                    { href: "http://journalofvision.org/3/9/74/",
                        text: "Abstract",
                    },
                ],
            },
        ],
    },
];
//# sourceMappingURL=publications.data.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publications_data__ = __webpack_require__("../../../../../src/app/publications/publications.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PublicationsService = (function () {
    function PublicationsService() {
    }
    PublicationsService.prototype.getSections = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__publications_data__["a" /* SECTIONS */]);
    };
    return PublicationsService;
}());
PublicationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PublicationsService);

//# sourceMappingURL=publications.service.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEIFEILI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NIEBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SILVIO; });
/* unused harmony export Aref */
/* unused harmony export Publication */
/* unused harmony export Section */
var ALL = "All";
var FEIFEILI = "Fei-Fei Li";
var NIEBLES = "Juan Carlos Niebles";
var SILVIO = "Silvio Savarese";
var Aref = (function () {
    function Aref() {
    }
    return Aref;
}());

var Publication = (function () {
    function Publication() {
    }
    return Publication;
}());

var Section = (function () {
    function Section() {
    }
    return Section;
}());

//# sourceMappingURL=publications.js.map

/***/ }),

/***/ "../../../../../src/app/research/research.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-2 col-xs-10 sm-margin-b-30\">\n        <div class=\"sidebar\">\n\n        </div>\n      </div>\n      <div id=\"content\" class=\"col-md-8 col-xs-12 sm-margin-b-30\">\n        <h2 class=\"top-seprates\" id=\"Highlight\">Highlighted Projects</h2>\n        <ul class=\"row list-unstyled\">\n          <li *ngFor=\"let r of research\"\n              class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"{{r.image}}\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title article-seprates\">{{r.title}}</p>\n                <div [innerHTML]=\"r.content\"></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/research/research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__research_service__ = __webpack_require__("../../../../../src/app/research/research.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearchComponent = (function () {
    function ResearchComponent(researchService, route) {
        this.researchService = researchService;
        this.route = route;
    }
    ResearchComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    ResearchComponent.prototype.getResearch = function () {
        var _this = this;
        this.researchService.getResearch().then(function (research) { return _this.research = research; });
    };
    ResearchComponent.prototype.ngOnInit = function () {
        this.getResearch();
    };
    return ResearchComponent;
}());
ResearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/research/research.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__research_service__["a" /* ResearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__research_service__["a" /* ResearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__research_service__["a" /* ResearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ResearchComponent);

var _a, _b;
//# sourceMappingURL=research.component.js.map

/***/ }),

/***/ "../../../../../src/app/research/research.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESEARCH; });
var RESEARCH = [
    {
        title: "JackRabbot",
        image: "assets/img/research_projects/jr_bg.jpg",
        content: "<p>Our work at the SVL is making practical a new generation of autonomous agents that can operate safely alongside humans in dynamic crowded environments such as terminals, malls, or campuses. The Stanford \u201CJackrabbot\u201D, which takes it name from the nimble yet shy Jackrabbit, is a self-navigating automated electric delivery cart capable of carrying small payloads.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/\">Link</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/cvgl_files/quartz_jr.mp4\">Video</a>.</p>"
    },
    {
        title: "ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding",
        image: "assets/img/research_projects/anet_cvpr15b.jpg",
        content: "<p>Our benchmark aims at covering a wide range of complex human activities that are of interest to people in their daily living. We illustrate three scenarios in which ActivityNet can be used to compare algorithms for human activity understanding: global video classification, trimmed activity classification and activity detection.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://activity-net.org/\">Link</a>.</p>"
    },
    {
        title: "AI-Assisted Care",
        image: "assets/img/research_projects/AI-Assisted.jpg",
        content: "<p>The Partnership in AI-Assisted Care (PAC) is an interdisciplinary collaboration between the School of Medicine and the Computer Science department focusing on cutting edge computer vision and machine learning technologies to solve some of healthcare's most important problems.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/\">Link</a> and <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/projects/hand_hygiene/video/dispenser.mp4\">Video</a></p>"
    },
    {
        title: "Visual Genome",
        image: "assets/img/research_projects/interconnected_images.png",
        content: "<p>Short Description: To achieve success at cognitive tasks, models need to understand the interactions and relationships between objects in an image. Visual Genome is a new dataset to connect dense, structured image concepts to language.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://visualgenome.org/\">Link</a>.</p>"
    },
    {
        title: "ObjectNet3D",
        image: "assets/img/research_projects/ObjectNet3D.png",
        content: "<p>ObjectNet3D is a large scale database for 3D object recognition. With 90,127 images, 201,888 objects in these images and 44,147 3D shapes, ObjectNet3D offers a powerful tool for learning to recognize 3D pose and 3D shape of objects from 2D images.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/objectnet3d/\">Link</a>.</p>"
    },
    {
        title: "ImageNet Challenge",
        image: "assets/img/research_projects/ilsvrc_challenge.jpg",
        content: "<p>The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) evaluates algorithms for object detection and image classification at large scale. One high level motivation is to allow researchers to compare progress in computer vision across a wider variety of objects -- taking advantage of the quite expensive labeling efforts.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://www.image-net.org/challenges/LSVRC/\">Link</a>.</p>"
    },
    {
        title: "ImageNet",
        image: "assets/img/research_projects/ilsvrc_proj.jpg",
        content: "<p>ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images. As the largest labelled image data set at the time of its release in 2009, ImageNet has helped to pave the way for today\u2019s advances in visual recognition.</p>\n              <p>Check out our <a class=\"link-sytle\" href=\"http://www.image-net.org/\">Link</a>.</p>"
    }
];
//# sourceMappingURL=research.data.js.map

/***/ }),

/***/ "../../../../../src/app/research/research.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__research_data__ = __webpack_require__("../../../../../src/app/research/research.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResearchService = (function () {
    function ResearchService() {
    }
    ResearchService.prototype.getResearch = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__research_data__["a" /* RESEARCH */]);
    };
    return ResearchService;
}());
ResearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResearchService);

//# sourceMappingURL=research.service.js.map

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-separator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-3 sm-margin-b-30\">\n        <div class=\"sidebar\">\n          <ul class=\"list-unstyled sidenav-position\">\n<!--             <li class=\"side-nav\"><a [routerLink]=\"['/resources']\"\n                                    fragment=\"faculty\"\n                                    (click)=\"onAnchorClick()\">Faculty</a></li> -->\n            <li *ngFor=\"let group of resources.groups\"\n                class=\"side-nav\">\n              <a [routerLink]=\"['/resources']\"\n                 fragment=\"{{groupHref(group)}}\"\n                 (click)=\"onAnchorClick()\">{{group.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"content\" class=\"content-main content col-md-9 sm-margin-b-30\">\n\n<!--         <div *ngFor=\"let group of resources.groups\">\n          <h2 id=\"{{groupHref(group)}}\" class=\"jumptarget top-seprates\">{{group.name}}</h2>\n          <div class=\"row list-unstyled\">\n            <div *ngFor=\"let member of group.members\"\n                 class=\"col-md-4 col-sm-6 col-xs-12 people-profile-card{{member.img ? '-w-img' : ''}}\">\n              <img *ngIf=\"member.img\" class=\"people-profile-image\" src=\"{{member.img}}\">\n              <p class=\"name-title\">{{member.name}}</p>\n              <span *ngIf=\"member.authors\" class=\"small-padding-top\">{{member.authors}}</span>\n              <span *ngIf=\"member.location\" class=\"text-uppercase small-padding-top\">{{member.location}}</span>\n              <br *ngIf=\"member.date\"><span *ngIf=\"member.date\">{{member.date}}</span>\n              <p *ngIf=\"member.venue\"><a class=\"link-sytle\" href=\"{{member.venue}}\">Venue</a></p>\n              <div class=\"col-md-9 col-xs-9\">\n              <div [innerHtml]=\"resourcesHtml(member)\"></div>\n          </div>\n        </div> -->\n\n        <ul class=\"row list-unstyled\">\n                  <li *ngFor=\"let group of resources.groups\">\n                    <h2 id=\"{{groupHref(group)}}\">{{group.name}}</h2>\n                    <ul class=\"list-unstyled\">\n                      <li *ngFor=\"let member of group.members\"\n                          class=\"publication-list\">\n                        <div class=\"row top-seprates\">\n                          <div class=\"col-md-3 col-xs-3\">\n                            <img *ngIf=\"member.img != ''\"\n                                 class=\"img-responsive article-seprates\"\n                                 src=\"{{member.img}}\">\n                          </div>\n                          <div class=\"col-md-9 col-xs-9\">\n                            <p><b>{{member.name}}</b></p>\n                            <div [innerHtml]=\"titleHtml(member)\"></div>\n                            <p>{{member.venue}}</p>\n                            <p *ngIf=\"member.date != ''\"><em>{{member.date}}</em></p>\n                            <p>{{member.authorsText}}</p>\n                            <div [innerHtml]=\"resourcesHtml(member)\"></div>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_service__ = __webpack_require__("../../../../../src/app/resources/resources.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourcesComponent = (function () {
    function ResourcesComponent(resourcesService, route) {
        this.resourcesService = resourcesService;
        this.route = route;
    }
    ResourcesComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    ResourcesComponent.prototype.getResources = function () {
        var _this = this;
        this.resourcesService.getResources().then(function (resources) { return _this.resources = resources; });
    };
    ResourcesComponent.prototype.titleHtml = function (res) {
        var title_refs = '';
        title_refs += '<a class="link-sytle" href="' + res.link + '">' + res.title + '</a> ';
        return title_refs;
    };
    ResourcesComponent.prototype.resourcesHtml = function (res) {
        var joined_refs = '';
        for (var _i = 0, _a = res.refs; _i < _a.length; _i++) {
            var ref = _a[_i];
            joined_refs += '[<a class="link-sytle" href="' + ref.href + '">' + ref.text + '</a>] ';
        }
        return joined_refs;
    };
    ResourcesComponent.prototype.groupHref = function (group) {
        return group.name.replace(/([\W-])/g, '').toLowerCase();
    };
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/resources/resources.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__resources_service__["a" /* ResourcesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resources_service__["a" /* ResourcesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resources_service__["a" /* ResourcesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ResourcesComponent);

var _a, _b;
//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ "../../../../../src/app/resources/resources.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESOURCES; });
var RESOURCES = {
    groups: [
        { name: "Datasets",
            members: [
                { name: "Gibson Env: Real-World Perception for Embodied Agents",
                    img: "assets/img/pub/gibson-env.gif",
                    title: "",
                    authorsText: "Fei Xia*, Amir Zamir*, Zhiyang He*, Alexander Sax, Jitendra Malik, Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2018",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://gibson.vision/",
                            text: "Project",
                        },
                        { href: "https://github.com/StanfordVL/GibsonEnv",
                            text: "Code",
                        },
                    ],
                },
                { name: "Taskonomy: Disentangling Task Transfer Learning",
                    img: "assets/img/pub/taskonomy_thumbnail_loop.gif",
                    title: "",
                    authorsText: "Amir R. Zamir, Alexander Sax*, William B. Shen* Leonidas Guibas, Jitendra Malik, Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2018",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://taskonomy.vision/",
                            text: "Project",
                        },
                        { href: "https://github.com/StanfordVL/taskonomy/tree/master/taskbank",
                            text: "Code",
                        },
                        { href: "https://taskonomy.vision/tasks",
                            text: "Online Demo",
                        },
                    ],
                },
                { name: "Text2Shape: Generating Shapes from Natural Language by Learning Joint Embeddings",
                    img: "http://text2shape.stanford.edu/figures/voxelizations-1.png",
                    title: "",
                    authorsText: "Kevin Chen, Christopher B Choy, Manolis Savva, Angel X Chang, Thomas Funkhouser, Silvio Savarese",
                    venue: "(In Submission)",
                    date: "2018",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://text2shape.stanford.edu/",
                            text: "Project",
                        },
                    ],
                },
                { name: "ActivityNet Captions",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/published/209126309.png?1493688470",
                    title: "",
                    authorsText: "Ranjay Krishna, Kenji Hata, Frederic Ren, Li Fei-Fei, Juan Carlos Niebles",
                    venue: "International Conference on Computer Vision (ICCV)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/captions.zip",
                            text: "Project",
                        },
                    ],
                },
                { name: "Inferring and Executing Programs for Visual Reasoning",
                    img: "https://cs.stanford.edu/people/jcjohns/images/iep_thumb.png",
                    title: "",
                    authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Judy Hoffman, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick",
                    venue: "International Conference on Computer Vision (ICCV)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://cs.stanford.edu/people/jcjohns/iep/",
                            text: "Project",
                        },
                    ],
                },
                { name: "Visual Genome Paragraphs",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/screen-shot-2016-11-22-at-12-41-31-am.png?240",
                    title: "",
                    authorsText: "Jonathan Krause, Justin Johnson, Ranjay Krishna, Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://visualgenome.org/static/data/dataset/paragraphs_v1.json.zip",
                            text: "Project",
                        },
                    ],
                },
                { name: "CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning",
                    img: "https://cs.stanford.edu/people/jcjohns/papers/clevr/teaser_crop.jpg",
                    title: "",
                    authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://cs.stanford.edu/people/jcjohns/clevr/",
                            text: "Project",
                        },
                    ],
                },
                { name: "Image2mass Dataset",
                    img: "http://trevorstandley.com/images/image2mass.png",
                    title: "",
                    authorsText: "Trevor Standley, Ozan Sener, Dawn Chen, Silvio Savarese",
                    venue: "CORL",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/tstandley/image2mass",
                            text: "Project",
                        },
                    ],
                },
                { name: "Stanford 2D-3D-Semantics Dataset (2D-3D-S)",
                    img: "http://buildingparser.stanford.edu/images/equirect.png",
                    title: "Joint 2D-3D-Semantic Data for Indoor Scene Understanding",
                    authorsText: "Iro Armeni, Alexander Sax, Amir R. Zamir, Silvio Savarese",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2017",
                    location: "",
                    link: "http://buildingparser.stanford.edu/dataset.html",
                    refs: [
                        { href: "http://3dsemantics.stanford.edu",
                            text: "Project",
                        },
                        { href: "https://github.com/alexsax/2D-3D-Semantics",
                            text: "Data",
                        },
                    ],
                },
                { name: "Visual7W: Grounded Question Answering in Images",
                    img: "https://web.stanford.edu/~yukez/images/img/visual7w_examples.png",
                    title: "",
                    authorsText: "Yuke Zhu, Oliver Groth, Michael Bernstein and Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://web.stanford.edu/~yukez/visual7w/index.html",
                            text: "Project",
                        },
                        { href: "https://github.com/yukezhu/visual7w-qa-models",
                            text: "Code",
                        },
                    ],
                },
                { name: "Visual Relationship Detection with Language Priors",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/4497960_orig.png",
                    title: "",
                    authorsText: "Cewu Lu*, Ranjay Krishna*, Michael Bernstein, Li Fei-Fei",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://cs.stanford.edu/people/ranjaykrishna/vrd/dataset.zip",
                            text: "Project",
                        },
                    ],
                },
                { name: "Visual Genome",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/439313586.png?217",
                    title: "",
                    authorsText: "Ranjay Krishna, Yuke Zhu, Oliver Groth, Justin Johnson, Kenji Hata, Joshua Kravitz, Stephanie Chen, Yannis Kalantidis, Li Jia-Li, David Ayman Shamma, Michael Bernstein, Li Fei-Fei",
                    venue: "IJCV",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://visualgenome.org/",
                            text: "Project",
                        },
                    ],
                },
                { name: "Stanford Large-Scale Indoor Spaces 3D (S3DIS)",
                    img: "http://buildingparser.stanford.edu/images/3Dmodal.png",
                    title: "3D Semantic Parsing of Large-Scale Indoor Space",
                    authorsText: "Iro Armeni, Ozan Sener, Amir R. Zamir, Helen Jiang, Ioannis Brilakis, Martin Fischer and Silvio Savarese",
                    venue: "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2016",
                    location: "",
                    link: "https://goo.gl/forms/4SoGp4KtH1jfRqEj2",
                    refs: [
                        { href: "http://buildingparser.stanford.edu/dataset.html",
                            text: "Project",
                        },
                        { href: "http://buildingparser.stanford.edu/dataset.html#Download",
                            text: "Data",
                        },
                    ],
                },
                { name: "Human Trajectory",
                    img: "http://cvgl.stanford.edu/projects/uav_data/hyang.jpg",
                    title: "Stanford Drone Dataset, in Learning Social Etiquette: Human Trajectory Prediction In Crowded Scenes",
                    authorsText: "A. Robicquet, A. Sadeghian, A. Alahi, S. Savarese",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2016",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2014.109",
                    refs: [
                        { href: "http://cvgl.stanford.edu/projects/uav_data/",
                            text: "Project",
                        },
                        { href: "http://vatic2.stanford.edu/stanford_campus_dataset.zip",
                            text: "Data",
                        },
                        { href: "https://www.youtube.com/watch?v=c6xQ6iz6wH8",
                            text: "Video",
                        },
                    ],
                },
                { name: "ObjectNet3D",
                    img: "http://cvgl.stanford.edu/projects/objectnet3d/ObjectNet3D.png",
                    title: "ObjectNet3D: A Large Scale Database for 3D Object Recognition",
                    authorsText: "Yu Xiang, Wonhui Kim, Wei Chen, Jingwei Ji, Christopher Choy, Hao Su, Roozbeh Mottaghi, Leonidas Guibas, and Silvio Savarese",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2016",
                    location: "",
                    link: "http://cvgl.stanford.edu/projects/objectnet3d/ObjectNet3D.png",
                    refs: [
                        { href: "http://cvgl.stanford.edu/projects/objectnet3d/",
                            text: "Project",
                        },
                        { href: "https://github.com/yuxng/ObjectNet3D_toolbox",
                            text: "Code",
                        },
                        { href: "ftp://cs.stanford.edu/cs/cvgl/ObjectNet3D/ObjectNet3D_images.zip",
                            text: "Data",
                        },
                    ],
                },
                { name: "Image Retrieval using Scene Graphs",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/2108701.png?194",
                    title: "",
                    authorsText: "Justin Johnson, Ranjay Krishna, Michael Stark, Li-Jia Li, David Ayman Shamma, Michael Bernstein, Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2015",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://imagenet.stanford.edu/internal/jcjohns/scene_graphs/sg_dataset.zip",
                            text: "Project",
                        },
                    ],
                },
                { name: "Robustness to Outliers in Manhattan Frame Estimation",
                    img: "http://www.niebles.net/images/manhattan.jpg",
                    title: "Robust Manhattan Frame Estimation from a Single RGB-D Image",
                    authorsText: "Bernard Ghanem, Ali Thabet, Juan Carlos Niebles, Fabian Caba",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2015",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2015.7299001",
                    refs: [
                        { href: "https://ivul.kaust.edu.sa/Pages/Pub-Manhattan-Frame-Estimation-CVPR-2015.aspx",
                            text: "Project",
                        },
                        { href: "https://ivul.kaust.edu.sa/Documents/more/code/MFE.zip",
                            text: "Code",
                        },
                        { href: "https://ivul.kaust.edu.sa/Documents/Data/Robust%20Manhattan%20Frame%20Estimation%20from%20a%20Single%20RGB-D%20Image.zip",
                            text: "Data",
                        },
                    ],
                },
                { name: "ActivityNet",
                    img: "http://www.niebles.net/images/anet_cvpr15b.jpg",
                    title: "ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding",
                    authorsText: "Fabian Caba, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2015",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2015.7298698",
                    refs: [
                        { href: "http://activity-net.org/",
                            text: "Project",
                        },
                        { href: "https://github.com/activitynet/ActivityNet",
                            text: "Code",
                        },
                        { href: "http://activity-net.org/download.html",
                            text: "Data",
                        },
                    ],
                },
                { name: "Street View Image, Pose, and 3D Cities",
                    img: "https://raw.githubusercontent.com/amir32002/3D_Street_View/master/misc/3D_models_tile_black.jpg",
                    title: "Generic 3D Representation via Pose Estimation and Matching",
                    authorsText: "Amir R Zamir, Tilman Wekel, Pulkit Agrawal, Jitendra Malik, Silvio Savarese.",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2015",
                    location: "",
                    link: "http://cvgl.stanford.edu/papers/zamir_eccv16.pdf",
                    refs: [
                        { href: "http://3drepresentation.stanford.edu/",
                            text: "Project",
                        },
                        { href: "https://github.com/amir32002/3D_Street_View",
                            text: "Code",
                        },
                        { href: "https://goo.gl/ERPCsa",
                            text: "Data",
                        },
                    ],
                },
                { name: "PASCAL3D+",
                    img: "http://cvgl.stanford.edu/projects/pascal3d+/pascal3d.png",
                    title: "Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild",
                    authorsText: "Yu Xiang, Roozbeh Mottaghi and Silvio Savarese",
                    venue: "IEEE Winter Conference on Applications of Computer Vision (WACV)",
                    date: "2014",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2014.109",
                    refs: [
                        { href: "http://cvgl.stanford.edu/projects/pascal3d.html",
                            text: "Project",
                        },
                        { href: "ftp://cs.stanford.edu/cs/cvgl/PASCAL3D+_release1.1.zip",
                            text: "Data",
                        },
                        { href: "https://www.youtube.com/watch?v=5Yeus0x6fo0",
                            text: "Video",
                        },
                    ],
                },
                { name: "Multiview Tracking dataset",
                    img: "http://cvgl.stanford.edu/projects/multiview_tracking/multiview_tracking.png",
                    title: "               <p><a class=link-sytle >Monocular Multiview Object Tracking with 3D Aspect Parts",
                    authorsText: "Yu Xiang*, Changkyu Song*, Roozbeh Mottaghi and Silvio Savarese",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2014",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://cvgl.stanford.edu/projects/multiview_tracking",
                            text: "Project",
                        },
                        { href: "https://github.com/changkyu/eccv2014_changkyu",
                            text: "Code",
                        },
                        { href: "http://cvgl.stanford.edu/data/multiview_tracking_dataset.zip",
                            text: "Data",
                        },
                    ],
                },
                { name: "Composable Activities",
                    img: "http://www.niebles.net/images/cvpr2014.png",
                    title: "Discriminative Hierarchical Modeling of Spatio-Temporally Composable Human Activities",
                    authorsText: "Ivan Lillo, Alvaro Soto, Juan Carlos Niebles",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2014",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2014.109",
                    refs: [
                        { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                            text: "Project",
                        },
                        { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                            text: "Data",
                        },
                        { href: "https://www.youtube.com/watch?v=_pdfLrie0_8",
                            text: "Video",
                        },
                    ],
                },
                { name: "Semantic Structure From Motion",
                    img: "http://vhosts.eecs.umich.edu/vision//projects/ssfm/figures/main_figure_webpage.jpg",
                    title: "               <p><a class=link-sytle > Semantic Structure from Motion with Points, Regions, and Objects",
                    authorsText: "Sid Yingze Bao, Mohit Bagra, Yu-Wei Chao, and Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2012",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                            text: "Project",
                        },
                        { href: "https://www.youtube.com/watch?v=bG5SZOzVis8",
                            text: "Video",
                        },
                    ],
                },
                { name: "Olympic Sports",
                    img: "http://www.niebles.net/images/cvpr2014.png",
                    title: "Modeling Temporal Structure of Decomposable Motion Segments for Activity Classification",
                    authorsText: "Juan Carlos Niebles, Chih-Wei Chen and Li Fei-Fei",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2010",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2014.109",
                    refs: [
                        { href: "http://vision.stanford.edu/Datasets/OlympicSports/",
                            text: "Data",
                        },
                        { href: "http://vision.stanford.edu/documents/NieblesChenFei-Fei_ECCV2010.zip",
                            text: "Slides",
                        },
                    ],
                },
                { name: "Collective Activity",
                    img: "http://cvgl.stanford.edu/projects/collective/images/exwait.jpg",
                    title: "Collective Activity Classification Using Spatio-Temporal Relationship Among People",
                    authorsText: "Wongun Choi, Khuram Shahid, Silvio Savarese",
                    venue: "9th International Workshop on Visual Surveillance (VSWS09) in conjuction with ICCV",
                    date: "2009",
                    location: "",
                    link: "https://doi.org/10.1109/CVPR.2014.109",
                    refs: [
                        { href: "http://cvgl.stanford.edu/projects/collective/collectiveActivity.html",
                            text: "Project",
                        },
                        { href: "http://cvgl.stanford.edu/data/ActivityDataset.zip",
                            text: "Data",
                        },
                    ],
                },
                { name: "ImageNet",
                    img: "http://vision.stanford.edu/ilsvrc_proj.jpg",
                    title: "ImageNet: a Large-Scale Hierarchical Image Database",
                    authorsText: "Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li and Li Fei-Fei.",
                    venue: "IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2009",
                    location: "",
                    link: "http://www.image-net.org",
                    refs: [
                        { href: "http://www.image-net.org/",
                            text: "Project",
                        },
                    ],
                },
                { name: "Moving People",
                    img: "http://www.niebles.net/images/eccv08.jpg",
                    title: "Extracting Moving People from Internet Videos",
                    authorsText: "Juan Carlos Niebles, Bohyung Han, Andras Ferencz and Li Fei-Fei",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2008",
                    location: "",
                    link: "https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39",
                    refs: [
                        { href: "http://vision.stanford.edu/projects/extractingPeople.html",
                            text: "Project",
                        },
                        { href: "http://vision.stanford.edu/projects/extractingPeople.html",
                            text: "Data",
                        },
                        { href: "http://vision.stanford.edu/projects/extractingPeople/NieblesHanFerenczFei-Fei_ECCV2008_poster.pdf",
                            text: "Poster",
                        },
                    ],
                },
            ]
        },
        { name: "Code Repositories",
            members: [
                { name: "Deep Learning under Privileged Information Using Heteroscedastic Dropout",
                    img: "https://raw.githubusercontent.com/johnwlambert/dlupi-heteroscedastic-dropout/master/images/pull_figure.png",
                    title: "",
                    authorsText: "John Lambert*, Ozan Sener*, Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2018",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/johnwlambert/dlupi-heteroscedastic-dropout",
                            text: "Project",
                        },
                    ],
                },
                { name: "Referring Relationships",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/993559006.png",
                    title: "",
                    authorsText: "Ranjay Krishna, Ines Chami, Michael Bernstein, Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2018",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/stanfordvl/ReferringRelationships",
                            text: "Project",
                        },
                    ],
                },
                { name: "Dense-Captioning Events in Videos",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/published/209126309.png?1493688470",
                    title: "",
                    authorsText: "Ranjay Krishna, Kenji Hata, Frederic Ren, Li Fei-Fei, Juan Carlos Niebles",
                    venue: "International Conference on Computer Vision (ICCV)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/ranjaykrishna/densevid_eval",
                            text: "Project",
                        },
                    ],
                },
                { name: "Feedback Networks",
                    img: "http://cvgl.stanford.edu/research/FB_thumbnail.png",
                    title: "",
                    authorsText: "Amir R. Zamir*, Te-Lin Wu*, Lin Sun, William B. Shen, Bertram Shi, Jitendra Malik, Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "http://feedbacknet.stanford.edu/",
                            text: "Project",
                        },
                    ],
                },
                { name: "Scene Graph Generation by Iterative Message Passing",
                    img: "https://cs.stanford.edu/~danfei/scene-graph/preview.jpeg",
                    title: "",
                    authorsText: "Danfei Xu, Yuke Zhu, Christopher B. Choy, Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2017",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/danfeiX/scene-graph-TF-release",
                            text: "Project",
                        },
                    ],
                },
                { name: "Embracing Error to Enable Rapid Crowdsourcing",
                    img: "http://ranjaykrishna.com/uploads/3/4/4/6/34464733/8373370.jpg?209",
                    title: "",
                    authorsText: "Ranjay Krishna, Kenji Hata, Stephanie Chen, Joshua Kravitz, David Ayman Shamma, Li Fei-Fei, Michael Bernstein",
                    venue: "CHI",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/stanfordhci/rsvp",
                            text: "Project",
                        },
                    ],
                },
                { name: "Perceptual Losses for Real-Time Style Transfer and Super-Resolution",
                    img: "https://cs.stanford.edu/people/jcjohns/papers/eccv16/31_muse_mine.png",
                    title: "",
                    authorsText: "Justin Johnson, Alexandre Alahi, Li Fei-Fei",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/jcjohnson/fast-neural-style",
                            text: "Project",
                        },
                    ],
                },
                { name: "DenseCap: Fully Convolutional Localization Networks for Dense Captioning",
                    img: "https://cs.stanford.edu/people/jcjohns/papers/densecap/SimpleSystem.svg",
                    title: "",
                    authorsText: "Justin Johnson, Andrej Karpathy, Li Fei-Fei",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/jcjohnson/densecap",
                            text: "Project",
                        },
                    ],
                },
                { name: "3D-R2N2: 3D Recurrent Reconstruction Neural Network",
                    img: "https://github.com/chrischoy/3D-R2N2/blob/master/imgs/pred.png?raw=true",
                    title: "",
                    authorsText: "Christopher B Choy, Danfei Xu, JunYoung Gwak, Kevin Chen, Silvio Savarese",
                    venue: "European Conference on Computer Vision (ECCV)",
                    date: "2016",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/chrischoy/3D-R2N2",
                            text: "Project",
                        },
                    ],
                },
                { name: "Enriching Object Detection",
                    img: "https://raw.githubusercontent.com/chrischoy/enriching_object_detection/master/data/readme/front.jpg",
                    title: "",
                    authorsText: " Christopher B Choy, Michael Stark, Sam Corbett-Davies, Silvio Savarese",
                    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    date: "2015",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/chrischoy/enriching_object_detection",
                            text: "Project",
                        },
                    ],
                },
                { name: "Combining 3D Shape, Color, and Motion for Robust Anytime Tracking.",
                    img: "https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/19b033bdaf8f02cbb2a25abc4d76c9d6317668b5/1-Figure1-1.png",
                    title: "",
                    authorsText: "David Held, Jesse Levinson, Sebastian Thrun",
                    venue: "RSS",
                    date: "2014",
                    location: "",
                    link: "",
                    refs: [
                        { href: "https://github.com/davheld/precision-tracking",
                            text: "Project",
                        },
                    ],
                },
            ]
        },
    ]
};
//# sourceMappingURL=resources.data.js.map

/***/ }),

/***/ "../../../../../src/app/resources/resources.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_data__ = __webpack_require__("../../../../../src/app/resources/resources.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResourcesService = (function () {
    function ResourcesService() {
    }
    ResourcesService.prototype.getResources = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__resources_data__["a" /* RESOURCES */]);
    };
    return ResourcesService;
}());
ResourcesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResourcesService);

//# sourceMappingURL=resources.service.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesFilterByProfessorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Filters a list of courses by Professor.
 * Takes a string for the professor name that defaults to 'All'.
 * Usage:
 *   value | coursesFilterByProfessor:professorName
 * Example:
 *   {{ courses | coursesFilterByProfessor:'L. Fei-Fei' }}
 *   returns all courses by Fei-Fei Li.
 */
var CoursesFilterByProfessorPipe = (function () {
    function CoursesFilterByProfessorPipe() {
    }
    CoursesFilterByProfessorPipe.prototype.transform = function (value, professorName) {
        if (professorName == 'All')
            return value;
        return value.filter(function (course) {
            return course.professor == professorName;
        });
    };
    return CoursesFilterByProfessorPipe;
}());
CoursesFilterByProfessorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'coursesFilterByProfessor' })
], CoursesFilterByProfessorPipe);

//# sourceMappingURL=teaching-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-4 col-xs-10 sm-margin-b-30\">\n        <form>\n          <ul class=\"sidebar list-unstyled sidenav-position\">\n            <li class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"professor\"\n                       type=\"radio\"\n                       name=\"professor\"\n                       value=\"All\"><div>All Professors</div>\n              </label>\n            </li>\n            <li class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"professor\"\n                       type=\"radio\"\n                       name=\"professor\"\n                       value=\"L. Fei-Fei\"><div>L. Fei-Fei</div>\n              </label>\n            </li>\n            <li class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"professor\"\n                       type=\"radio\"\n                       name=\"professor\"\n                       value=\"Juan Carlos Niebles\"><div>Juan Carlos Niebles</div>\n              </label>\n            </li>\n            <li class=\"side-nav\">\n              <label>\n                <input [(ngModel)]=\"professor\"\n                       type=\"radio\"\n                       name=\"professor\"\n                       value=\"Silvio Savarese\"><div>Silvio Savarese</div>\n              </label>\n            </li>\n          </ul>\n        </form>\n      </div>\n\n      <div id=\"content\" class=\"content-main content col-md-8 col-xs-12 sm-margin-b-30\">\n        <div *ngIf=\"professor != 'All'; else allBlock\"\n             class=\"row list-unstyled\">\n          <h2>{{ professor }} Courses</h2>\n\n          <table class=\"bigger-padding\">\n            <tr *ngFor=\"let c of courses | coursesFilterByProfessor:professor\">\n              <td><div align=\"left\" style=\"min-width: 260px;\">{{ c.event }}</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"{{c.url}}\">{{ c.title }}</a></td>\n            </tr>\n          </table>\n        </div>\n        <ng-template #allBlock>\n          <div *ngFor=\"let p of ['L. Fei-Fei', 'Juan Carlos Niebles', 'Silvio Savarese']\"\n               style=\"padding-bottom: 20px\">\n            <h2>{{ p }} Courses</h2>\n            <div *ngFor=\"let c of courses | coursesFilterByProfessor:p\"\n                 class=\"row\" style=\"padding-bottom: 10px\">\n              <div class=\"col-md-4\">{{ c.event }}</div>\n              <div class=\"col-md-8\"><a class=\"link-sytle\" href=\"{{c.url}}\">{{c.title}}</a></div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teaching_service__ = __webpack_require__("../../../../../src/app/teaching/teaching.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeachingComponent = (function () {
    function TeachingComponent(teachingService, route) {
        this.teachingService = teachingService;
        this.route = route;
        this.professor = 'All';
    }
    TeachingComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    TeachingComponent.prototype.getCourses = function () {
        var _this = this;
        this.teachingService.getCourses().then(function (courses) { return _this.courses = courses; });
    };
    TeachingComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    return TeachingComponent;
}());
TeachingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/teaching/teaching.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__teaching_service__["a" /* TeachingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__teaching_service__["a" /* TeachingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__teaching_service__["a" /* TeachingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TeachingComponent);

var _a, _b;
//# sourceMappingURL=teaching.component.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COURSES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__teaching__ = __webpack_require__("../../../../../src/app/teaching/teaching.ts");

var COURSES = [
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
        url: 'http://vision.stanford.edu/teaching/cs231n/2018',
        event: 'Spring, 2017-18 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
        url: 'http://vision.stanford.edu/teaching/cs231n/2017',
        event: 'Spring, 2016-17 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1617/index.html',
        event: 'Fall, 2016-17 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
        url: 'http://cs231n.stanford.edu/2016',
        event: 'Winter, 2015-16 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1516/index.html',
        event: 'Fall, 2015-16 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231B: The Cutting Edge of Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs231b_spring1415/',
        event: 'Spring, 2014-15 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
        url: 'http://vision.stanford.edu/teaching/cs231n/2015',
        event: 'Winter, 2014-15 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1415/index.html',
        event: 'Fall, 2014-15 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS431: High-level Vision: Behaviors, Neurons and Computational Models',
        url: 'http://vision.stanford.edu/teaching/cs431_spring1314/',
        event: 'Spring, 2013-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS331: Advanced Reading in Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs331_winter14/',
        event: 'Winter, 2013-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1314/',
        event: 'Fall, 2014-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231B: The Cutting Edge of Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs231b_spring1213/',
        event: 'Spring, 2012-13 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231A: Introduction to Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs231a_autumn1213/',
        event: 'Autumn, 2012-13 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS331: Advanced Reading in Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs331_fall12/',
        event: 'Autumn, 2012-13 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS231A: Introduction to Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs231a_autumn1112/',
        event: 'Autumn, 2011-12 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS223C: The Cutting Edge of Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs223c_spring1011/',
        event: 'Spring, 2010-11 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS223B: Introduction to Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs223b/',
        event: 'Winter, 2010-11 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS423: High-level Vision: Behaviors, Neurons and Computational Models',
        url: 'http://vision.stanford.edu/teaching/cs423_spring0910/',
        event: 'Winter, 2009-10 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS223B: Introduction to Computer Vision',
        url: 'http://vision.stanford.edu/teaching/cs223b_winter0910/',
        event: 'Spring, 2009-10 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'Recognizing and Learning Object Categories: Year 2009',
        url: 'http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html',
        event: 'ICCV 2009 short course'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'CS323: Recognizing and Learning High-Level Visual Concepts',
        url: 'http://vision.stanford.edu/teaching/cs323_fall09/',
        event: 'Fall, 2009-10 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'Summer School in Vision, Learning and Pattern Recognition',
        url: 'http://vision.stanford.edu/VLPR2009/',
        event: 'VLPR 2009 (Beijing)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'COS 429: Computer Vision',
        url: 'http://www.cs.princeton.edu/courses/archive/fall08/cos429/',
        event: 'Fall, 2008-09 (Princeton)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'COS 598b/PSY 594: From Neuronal Mechanisms to Computational Models',
        url: 'http://www.cs.princeton.edu/courses/archive/spring08/cos598B/',
        event: 'Spring, 2007-09 (Princeton)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'COS 429: Computer Vision',
        url: 'http://www.cs.princeton.edu/courses/archive/fall07/cos429/index.html',
        event: 'Fall, 2007-08 (Princeton)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'Recognizing and Learning Object Categories: Year 2007',
        url: 'http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html',
        event: 'CVPR 2007 short course'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'Computer Vision summer school: Object Recognition',
        url: 'http://localhost:4200/documents/Fei-Fei_ICVSS07_ObjectRecognition_web.pdf',
        event: 'ICVSS 2007'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'COS 598D: High-Level Recognition in Computer Vision',
        url: 'http://vision.stanford.edu/cs598_spring07/',
        event: 'Spring, 2007 (Princeton)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'ECE 549: Computer Vision',
        url: 'http://courses.ece.uiuc.edu/ece549/',
        event: 'Fall, 2006-07 (UIUC)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'Recognizing and Learning Object Categories',
        url: 'http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html',
        event: 'ICCV 2005 short course'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["a" /* FEIFEILI */],
        title: 'ECE 598FL: Readings in Computer Vision and Learning',
        url: 'http://courses.ece.uiuc.edu/ece598/ffl/',
        event: 'Fall, 2005-06 (UIUC)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["b" /* NIEBLES */],
        title: 'CS 131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1718/',
        event: 'Autumn, 2017-18'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["b" /* NIEBLES */],
        title: 'CS 131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1617/',
        event: 'Autumn, 2016-17'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["b" /* NIEBLES */],
        title: 'CS 131: Computer Vision: Foundations and Applications',
        url: 'http://vision.stanford.edu/teaching/cs131_fall1516/',
        event: 'Autumn, 2015-16'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 331B: Representation Learning in Computer Vision',
        url: 'http://web.stanford.edu/class/cs331b/',
        event: 'Autumn, 2017-18 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 231A: Computer Vision: From 3D Reconstruction to Recognition',
        url: 'http://web.stanford.edu/class/cs231a/',
        event: 'Winter, 2017-18 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 331B: Representation Learning in Computer Vision',
        url: 'http://cs331b.stanford.edu/',
        event: 'Spring, 2016-17 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 231A: Mobile Computer Vision',
        url: 'http://cs231a.stanford.edu/',
        event: 'Spring, 2015-16 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 231A: Introduction to Computer Vision',
        url: 'http://cvgl.stanford.edu/teaching/cs231a_winter1415/',
        event: 'Winter, 2013-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 231M: Mobile Computer Vision',
        url: 'http://web.stanford.edu/class/cs231m',
        event: 'Spring, 2013-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 231A: Introduction to Computer Vision',
        url: 'http://cvgl.stanford.edu/teaching/cs231a_winter1314/',
        event: 'Winter, 2013-14 (Stanford)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'CS 331B: Advanced Reading in Computer Vision: 3D Representation and Recognition',
        url: 'http://www.stanford.edu/class/archive/cs/cs331b/cs331b.1142/cgi-bin/mediawiki/index.php/Main_Page',
        event: 'Autumn, 2013-14'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 598: Special Topics in Computer Vision',
        url: 'http://www.eecs.umich.edu/courses/eecs598.007',
        event: 'Winter, 2013-14 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 442: Computer Vision',
        url: 'http://www.eecs.umich.edu/vision/teaching/EECS442_2011/eecs442.html',
        event: 'Fall, 2011-12 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 598: Advanced Topics in Mobile Computer Vision',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/EECS598_2010/eecs598.html',
        event: 'Fall, 2010-11 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 442: Computer Vision',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/EECS442_2010/eecs442.html',
        event: 'Fall, 2010-11 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 556: Image Processing',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/EECS556_2009/eecs556.html',
        event: 'Winter, 2010 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 442: Computer Vision',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/EECS442_2009/eecs442.html',
        event: 'Fall, 2009-10 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 598: Special Topics in Computer Vision',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/EECS598/eecs598.html',
        event: 'Winter, 2009-10 (Michigan)'
    },
    { professor: __WEBPACK_IMPORTED_MODULE_0__teaching__["c" /* SILVIO */],
        title: 'EECS 442: Computer Vision',
        url: 'http://web.eecs.umich.edu/~silvio/teaching/eecs442.html',
        event: 'Fall, 2008-09 (Michigan)'
    }
];
//# sourceMappingURL=teaching.data.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teaching_data__ = __webpack_require__("../../../../../src/app/teaching/teaching.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TeachingService = (function () {
    function TeachingService() {
    }
    TeachingService.prototype.getCourses = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__teaching_data__["a" /* COURSES */]);
    };
    return TeachingService;
}());
TeachingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TeachingService);

//# sourceMappingURL=teaching.service.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SILVIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FEIFEILI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NIEBLES; });
/* unused harmony export Course */
var ALL = 'All';
var SILVIO = 'Silvio Savarese';
var FEIFEILI = 'L. Fei-Fei';
var NIEBLES = 'Juan Carlos Niebles';
var Course = (function () {
    function Course() {
    }
    return Course;
}());

//# sourceMappingURL=teaching.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


//import { platformBrowser } from '@angular/platform-browser';

//import { AppModuleNgFactory } from './app/app.module.ngFactory';

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map