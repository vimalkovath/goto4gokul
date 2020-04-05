function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/createaccount/createaccount.component */
    "./src/app/components/createaccount/createaccount.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/forms/forms.component */
    "./src/app/components/forms/forms.component.ts");
    /* harmony import */


    var _components_tickpage_tickpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/tickpage/tickpage.component */
    "./src/app/components/tickpage/tickpage.component.ts");
    /* harmony import */


    var _service_userguard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/userguard.guard */
    "./src/app/service/userguard.guard.ts");

    var routes = [{
      path: 'create',
      component: _components_createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_2__["CreateaccountComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'forms',
      component: _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"],
      canActivate: [_service_userguard_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
    }, {
      path: 'tickpage',
      component: _components_tickpage_tickpage_component__WEBPACK_IMPORTED_MODULE_5__["TickpageComponent"],
      canActivate: [_service_userguard_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Gotothechange';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/createaccount/createaccount.component */
    "./src/app/components/createaccount/createaccount.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/forms/forms.component */
    "./src/app/components/forms/forms.component.ts");
    /* harmony import */


    var _service_userguard_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./service/userguard.guard */
    "./src/app/service/userguard.guard.ts");
    /* harmony import */


    var _components_tickpage_tickpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/tickpage/tickpage.component */
    "./src/app/components/tickpage/tickpage.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_userguard_guard__WEBPACK_IMPORTED_MODULE_14__["UserGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_11__["CreateaccountComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__["FormsComponent"], _components_tickpage_tickpage_component__WEBPACK_IMPORTED_MODULE_15__["TickpageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_11__["CreateaccountComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__["FormsComponent"], _components_tickpage_tickpage_component__WEBPACK_IMPORTED_MODULE_15__["TickpageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
          providers: [_service_userguard_guard__WEBPACK_IMPORTED_MODULE_14__["UserGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/createaccount/createaccount.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/createaccount/createaccount.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CreateaccountComponent */

  /***/
  function srcAppComponentsCreateaccountCreateaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateaccountComponent", function () {
      return CreateaccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/userapi.service */
    "./src/app/service/userapi.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CreateaccountComponent = /*#__PURE__*/function () {
      function CreateaccountComponent(services, toastr, formbuilder, deviceService, router) {
        _classCallCheck(this, CreateaccountComponent);

        this.services = services;
        this.toastr = toastr;
        this.formbuilder = formbuilder;
        this.deviceService = deviceService;
        this.router = router;
        this.ismobile();
      }

      _createClass(CreateaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userforms = this.formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobilenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "ismobile",
        value: function ismobile() {
          this.isMobile = this.deviceService.isMobile();
        }
      }, {
        key: "createaccount",
        value: function createaccount() {
          var _this = this;

          this.services.cerateaccount(this.userforms.value).subscribe(function (result) {
            if (_this.isMobile) {
              _this.toastr.infoToastr('Howdy' + ' ' + _this.userforms.value.name + ' ' + 'you successfully registered', 'Howdy', {
                position: 'bottom-left'
              });
            } // this.userforms.reset();


            _this.router.navigateByUrl('');
          }, function (err) {
            _this.error = err.error;

            _this.toastr.errorToastr(_this.error.message, 'Warning', {
              position: 'bottom-left'
            });
          });
        }
      }]);

      return CreateaccountComponent;
    }();

    CreateaccountComponent.ɵfac = function CreateaccountComponent_Factory(t) {
      return new (t || CreateaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    CreateaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateaccountComponent,
      selectors: [["app-createaccount"]],
      decls: 14,
      vars: 1,
      consts: [[1, "main"], [1, "content"], [1, "animated", "animatedFadeInUp", "fadeInUp"], [1, "cont"], [1, "form"], ["novalidate", "", 3, "formGroup"], [1, "pb-2"], ["type", "email", "formControlName", "email", "placeholder", "useremail", 1, "user"], ["type", "text", "formControlName", "name", "placeholder", "username", 1, "user"], ["type", "number", "formControlName", "mobilenumber", "placeholder", "mobilenumber", 1, "user"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "pass"], [1, "login", 3, "click"]],
      template: function CreateaccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateaccountComponent_Template_button_click_12_listener() {
            return ctx.createaccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "create account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userforms);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 500px;\n  background-color: transparent;\n  display: table;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 80px, 0);\n  }\n  to {\n    transform: translate3d(0, 0px, 0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 80px, 0);\n  }\n  to {\n    transform: translate3d(0, 0px, 0);\n    opacity: 1;\n  }\n}\n\n.animated[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n}\n\n.animatedFadeInUp[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.fadeInUp[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation-name: fadeInUp;\n  -webkit-animation-name: fadeInUp;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #3598dc;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 25%;\n  height: 400px;\n  padding: 10px 25px;\n  margin: 10vh auto;\n  background: #fff;\n  border-radius: 8px;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #606060;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%], .login[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: lighter;\n  margin-bottom: 30px;\n}\n\n.user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n}\n\n.login[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  margin-top: 20px;\n  background: #3598dc;\n}\n\n.login[_ngcontent-%COMP%]:hover {\n  background: #3570dc;\n}\n\n@media only screen and (min-width: 280px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbGtvdmF0aC9Eb3dubG9hZHMvZ28ydGhlY2hhZ2UtbWFzdGVyL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGVhY2NvdW50L2NyZWF0ZWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlYWNjb3VudC9jcmVhdGVhY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0EsY0FBQTs7QUFFQTtFQUNJO0lBQ0ksa0NBQUE7RUNETjtFRElFO0lBQ0ksaUNBQUE7SUFDQSxVQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksa0NBQUE7RUNITjtFRE1FO0lBQ0ksaUNBQUE7SUFDQSxVQUFBO0VDSk47QUFDRjs7QURPQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDTEo7O0FEUUE7RUFDSSxVQUFBO0FDTEo7O0FEUUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTs7OztFQUlJLGtCQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBOzs7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7O0VBRUksbUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURRQTtFQUNJO0lBQ0ksVUFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLFVBQUE7RUNOTjtBQUNGOztBRFNBO0VBQ0k7SUFDSSxVQUFBO0VDUE47QUFDRjs7QURVQTtFQUNJO0lBQ0ksVUFBQTtFQ1JOO0FBQ0Y7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlYWNjb3VudC9jcmVhdGVhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQW5pbWF0aW9uICovXG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDgwcHgsIDApXG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgODBweCwgMClcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbn1cblxuLmFuaW1hdGVkIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aFxufVxuXG4uYW5pbWF0ZWRGYWRlSW5VcCB7XG4gICAgb3BhY2l0eTogMFxufVxuXG4uZmFkZUluVXAge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogIzM1OThkYztcbn1cblxuLmNvbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIG1hcmdpbjogMTB2aCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuLnVzZXIsXG4ucGFzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSB7XG4gICAgY29sb3I6ICM2MDYwNjA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udXNlcixcbi5wYXNzLFxuLmxvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnVzZXIsXG4ucGFzcyB7XG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcbn1cblxuLmxvZ2luIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzU5OGRjO1xufVxuXG4ubG9naW46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzNTcwZGM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDI4MHB4KSB7XG4gICAgLmNvbnQge1xuICAgICAgICB3aWR0aDogOTAlXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODBweCkge1xuICAgIC5jb250IHtcbiAgICAgICAgd2lkdGg6IDYwJVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIHtcbiAgICAuY29udCB7XG4gICAgICAgIHdpZHRoOiA0MCVcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KSB7XG4gICAgLmNvbnQge1xuICAgICAgICB3aWR0aDogMzAlXG4gICAgfVxufVxuXG5oMiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn0iLCIubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgODBweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDgwcHgsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbmltYXRlZEZhZGVJblVwIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZhZGVJblVwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzM1OThkYztcbn1cblxuLmNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luOiAxMHZoIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuLnVzZXIsXG4ucGFzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgY29sb3I6ICM2MDYwNjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi51c2VyLFxuLnBhc3MsXG4ubG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnVzZXIsXG4ucGFzcyB7XG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XG59XG5cbi5sb2dpbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMzNTk4ZGM7XG59XG5cbi5sb2dpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzNTcwZGM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cbmgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-createaccount',
          templateUrl: './createaccount.component.html',
          styleUrls: ['./createaccount.component.scss']
        }]
      }], function () {
        return [{
          type: _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/forms/forms.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/forms/forms.component.ts ***!
    \*****************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppComponentsFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/userapi.service */
    "./src/app/service/userapi.service.ts");
    /* harmony import */


    var _service_cycleform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/cycleform.service */
    "./src/app/service/cycleform.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var packages_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", packages_r1.packagename);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", packages_r1.packagename, " ");
      }
    }

    var FormsComponent = /*#__PURE__*/function () {
      function FormsComponent(userapi, formbuilder, services, router, deviceService) {
        _classCallCheck(this, FormsComponent);

        this.userapi = userapi;
        this.formbuilder = formbuilder;
        this.services = services;
        this.router = router;
        this.deviceService = deviceService;
        this.arraydata = [];
        this.isMobilevar = false;
        this.status = true;
        this.packagedetails = [{
          id: 1,
          packagename: 'Weeklsubscription',
          price: 800
        }, {
          id: 2,
          packagename: 'Dailysubscription',
          price: 100
        }, {
          id: 3,
          packagename: 'Hourlysubscription',
          price: 50
        }];
        this.arraydetails = [];
        this.isMobile();
      }

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.userdetails = localStorage.getItem('currentUser');
          this.arraydata.push(JSON.parse(this.userdetails));
          this.arraydata.forEach(function (element) {
            console.log(element.email);
            _this2.email = element.email;
          });
          this.userforms = this.formbuilder.group({
            pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            charger: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "package": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.email]
          });
          console.log(this.email);
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          this.isMobilevar = this.deviceService.isMobile();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userapi.logout();
          this.router.navigateByUrl('/');
        }
      }, {
        key: "booknow",
        value: function booknow() {
          var _this3 = this;

          this.services.addmoredetails(this.userforms.value).subscribe(function (result) {
            _this3.userforms.reset();

            _this3.router.navigateByUrl('/tickpage');
          }, function (err) {
            _this3.error = err.error;
            console.log(_this3.error);
          });
        }
      }, {
        key: "onselecpackage",
        value: function onselecpackage(event) {
          var _this4 = this;

          if (event.target.value) {
            this.packagedetails.forEach(function (element) {
              if (event.target.value === element.packagename) {
                _this4.selectedpackage = 'hello you chosen' + ' ' + element.packagename + 'Plan cost is RS.' + ' ' + element.price;
              }
            });
          }
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ɵfac = function FormsComponent_Factory(t) {
      return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cycleform_service__WEBPACK_IMPORTED_MODULE_3__["CycleformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]));
    };

    FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsComponent,
      selectors: [["app-forms"]],
      decls: 38,
      vars: 4,
      consts: [[1, "main"], [1, "content"], [1, "container"], [1, "form"], ["novalidate", "", 3, "formGroup"], [1, "md-form", "d-none"], ["mdbInput", "", "type", "text", "id", "email", "formControlName", "email", "hidden", "", 1, "form-control"], ["for", "email", 1, ""], [1, "md-form"], ["mdbInput", "", "type", "text", "id", "pan", "formControlName", "pan", 1, "form-control"], ["for", "pan", 1, ""], [1, "packagecontainer"], ["type", "radio", "value", "yes", "checked", "checked", "formControlName", "charger"], [1, "checkmark"], ["type", "radio", "value", "No", "checked", "checked", "formControlName", "charger"], ["formControlName", "package", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container", "bg-light"], [1, "text-dark", "font-weight-bold"], ["mdbBtn", "", "type", "button", "color", "dark-green", "mdbWavesEffect", "", 3, "disabled", "click"], [1, "bg-dark", "w-100", "fixed-bottom"], [1, "text-center", "text-white", "font-weight-bold", "mt-2", 3, "click"], [3, "value"]],
      template: function FormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pancard Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Do you need Charger?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "choose a plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormsComponent_Template_select_change_28_listener($event) {
            return ctx.onselecpackage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FormsComponent_option_29_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_33_listener() {
            return ctx.booknow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Book Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_Template_p_click_36_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userforms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.packagedetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedpackage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userforms.pristine || ctx.userforms.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 500px;\n  background-color: transparent;\n  display: table;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.packagecontainer[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.packagecontainer[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white;\n}\n\n.fixed-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbGtvdmF0aC9Eb3dubG9hZHMvZ28ydGhlY2hhZ2UtbWFzdGVyL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUUsNENBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUUsaUNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUUsK0NBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ0NKOztBREVFLDREQUFBOztBQUNBO0VBQ0UseUJBQUE7QUNDSjs7QURFRSxvRUFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRSxpREFBQTs7QUFDQTtFQUNFLGNBQUE7QUNDSjs7QURFRSxxQ0FBQTs7QUFDQTtFQUNLLFFBQUE7RUFDRCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ047O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBhY2thZ2Vjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuICAucGFja2FnZWNvbnRhaW5lciBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4gIC5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuICAucGFja2FnZWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbiAgLnBhY2thZ2Vjb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIH1cbiAgXG4gIC8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAucGFja2FnZWNvbnRhaW5lcjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbiAgLnBhY2thZ2Vjb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuICAucGFja2FnZWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICB0b3A6IDlweDtcbiAgICAgIGxlZnQ6IDlweDtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5maXhlZC1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfSIsIi5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wYWNrYWdlY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXG4ucGFja2FnZWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4ucGFja2FnZWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4ucGFja2FnZWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbi8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnBhY2thZ2Vjb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4ucGFja2FnZWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLnBhY2thZ2Vjb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiA5cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms',
          templateUrl: './forms.component.html',
          styleUrls: ['./forms.component.scss']
        }]
      }], function () {
        return [{
          type: _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _service_cycleform_service__WEBPACK_IMPORTED_MODULE_3__["CycleformService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(deviceService) {
        _classCallCheck(this, HomeComponent);

        this.deviceService = deviceService;
        this.ismobile();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ismobile",
        value: function ismobile() {
          this.isMobile = this.deviceService.isMobile();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 18,
      vars: 3,
      consts: [["SideClass", "navbar navbar-expand-lg navbar-dark cyan top-fixed", 3, "containerInside"], ["href", "#", 1, "navbar-brand"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "create", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["fas", "", "icon", "cog"], ["routerLink", "login", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "forms", "mdbWavesEffect", "", 1, "nav-link", "waves-light"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gotothechange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mdb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " createaccount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mdb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mdb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Getcycle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/userapi.service */
    "./src/app/service/userapi.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(services, toastr, formbuilder, deviceService, router) {
        _classCallCheck(this, LoginComponent);

        this.services = services;
        this.toastr = toastr;
        this.formbuilder = formbuilder;
        this.deviceService = deviceService;
        this.router = router;
        this.ismobile();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userforms = this.formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "ismobile",
        value: function ismobile() {
          this.isMobile = this.deviceService.isMobile();
        }
      }, {
        key: "gotocreatepage",
        value: function gotocreatepage() {
          this.router.navigate(['create']);
        }
      }, {
        key: "login",
        value: function login() {
          var _this5 = this;

          this.services.login(this.userforms.value).subscribe(function (result) {
            if (_this5.isMobile) {
              location.href = '/forms';
            }

            _this5.userforms.reset();
          }, function (err) {
            _this5.error = err.error;
            console.log(_this5.error);

            _this5.toastr.errorToastr(_this5.error.message, 'Warning', {
              position: 'bottom-left'
            });
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 4,
      consts: [[1, "main"], [1, "content"], [1, "animated", "animatedFadeInUp", "fadeInUp"], [1, "cont"], [1, "form"], ["novalidate", "", 3, "formGroup"], ["type", "email", "formControlName", "email", "placeholder", "useremail", 1, "user"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "pass"], [1, "login", 3, "disabled", "click"], [1, "text-dark"], [1, "login", "bg-danger", "w-50", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
            return ctx.gotocreatepage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "create account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userforms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userforms.pristine || ctx.userforms.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("w-75", ctx.isMobile);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 500px;\n  background-color: transparent;\n  display: table;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0px, 0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0px, 0);\n    opacity: 1;\n  }\n}\n\n.animated[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n}\n\n.animatedFadeInUp[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.fadeInUp[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation-name: fadeInUp;\n  -webkit-animation-name: fadeInUp;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #3598dc;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 25%;\n  height: 400px;\n  padding: 10px 25px;\n  margin: 10vh auto;\n  background: #fff;\n  border-radius: 8px;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #606060;\n  font-weight: bold;\n  font-size: 40px;\n  margin: 30px auto;\n}\n\n.user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%], .login[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: lighter;\n  margin-bottom: 30px;\n}\n\n.user[_ngcontent-%COMP%], .pass[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n}\n\n.login[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  margin-top: 20px;\n  background: #3598dc;\n}\n\n.login[_ngcontent-%COMP%]:hover {\n  background: #3570dc;\n}\n\n@media only screen and (min-width: 280px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .cont[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbGtvdmF0aC9Eb3dubG9hZHMvZ28ydGhlY2hhZ2UtbWFzdGVyL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBLGNBQUE7O0FBRUE7RUFDSTtJQUNJLGtDQUFBO0VDRE47RURJRTtJQUNJLGlDQUFBO0lBQ0EsVUFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSTtJQUNJLGtDQUFBO0VDSE47RURNRTtJQUNJLGlDQUFBO0lBQ0EsVUFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUNMSjs7QURRQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTEo7O0FEUUE7Ozs7RUFJSSxrQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBOzs7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7O0VBRUksbUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURRQTtFQUNJO0lBQ0ksVUFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLFVBQUE7RUNOTjtBQUNGOztBRFNBO0VBQ0k7SUFDSSxVQUFBO0VDUE47QUFDRjs7QURVQTtFQUNJO0lBQ0ksVUFBQTtFQ1JOO0FBQ0Y7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBBbmltYXRpb24gKi9cblxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMClcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKVxuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfVxufVxuXG4uYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXG59XG5cbi5hbmltYXRlZEZhZGVJblVwIHtcbiAgICBvcGFjaXR5OiAwXG59XG5cbi5mYWRlSW5VcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzU5OGRjO1xufVxuXG4uY29udCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAxMHZoIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxLFxuaDIsXG4udXNlcixcbi5wYXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogIzYwNjA2MDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi51c2VyLFxuLnBhc3MsXG4ubG9naW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udXNlcixcbi5wYXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xufVxuXG4ubG9naW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzNTk4ZGM7XG59XG5cbi5sb2dpbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzM1NzBkYztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMjgwcHgpIHtcbiAgICAuY29udCB7XG4gICAgICAgIHdpZHRoOiA5MCVcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDQ4MHB4KSB7XG4gICAgLmNvbnQge1xuICAgICAgICB3aWR0aDogNjAlXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAgIC5jb250IHtcbiAgICAgICAgd2lkdGg6IDQwJVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogOTkycHgpIHtcbiAgICAuY29udCB7XG4gICAgICAgIHdpZHRoOiAzMCVcbiAgICB9XG59XG5cbmgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufSIsIi5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZWQge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFuaW1hdGVkRmFkZUluVXAge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmFkZUluVXAge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMzU5OGRjO1xufVxuXG4uY29udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBtYXJnaW46IDEwdmggYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxLFxuaDIsXG4udXNlcixcbi5wYXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEge1xuICBjb2xvcjogIzYwNjA2MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi51c2VyLFxuLnBhc3MsXG4ubG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnVzZXIsXG4ucGFzcyB7XG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XG59XG5cbi5sb2dpbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMzNTk4ZGM7XG59XG5cbi5sb2dpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzNTcwZGM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnQge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cbmgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _service_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tickpage/tickpage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/tickpage/tickpage.component.ts ***!
    \***********************************************************/

  /*! exports provided: TickpageComponent */

  /***/
  function srcAppComponentsTickpageTickpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TickpageComponent", function () {
      return TickpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_userapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/userapi.service */
    "./src/app/service/userapi.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TickpageComponent = /*#__PURE__*/function () {
      function TickpageComponent(userapi, router) {
        _classCallCheck(this, TickpageComponent);

        this.userapi = userapi;
        this.router = router;
      }

      _createClass(TickpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.userapi.logout();
          this.router.navigateByUrl('/');
        }
      }]);

      return TickpageComponent;
    }();

    TickpageComponent.ɵfac = function TickpageComponent_Factory(t) {
      return new (t || TickpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_userapi_service__WEBPACK_IMPORTED_MODULE_1__["UserapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TickpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TickpageComponent,
      selectors: [["app-tickpage"]],
      decls: 7,
      vars: 0,
      consts: [[1, "main"], [1, "content"], [1, "text-dark", "animated", "bounce"], [1, "bg-dark", "w-100", "fixed-bottom"], [1, "text-center", "text-white", "font-weight-bold", "mt-2", 3, "click"]],
      template: function TickpageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thanks for your submission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TickpageComponent_Template_p_click_5_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 500px;\n  background-color: transparent;\n  display: table;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.fixed-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbGtvdmF0aC9Eb3dubG9hZHMvZ28ydGhlY2hhZ2UtbWFzdGVyL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy90aWNrcGFnZS90aWNrcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aWNrcGFnZS90aWNrcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aWNrcGFnZS90aWNrcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn0iLCIubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tickpage',
          templateUrl: './tickpage.component.html',
          styleUrls: ['./tickpage.component.scss']
        }]
      }], function () {
        return [{
          type: _service_userapi_service__WEBPACK_IMPORTED_MODULE_1__["UserapiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/cycleform.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/cycleform.service.ts ***!
    \**********************************************/

  /*! exports provided: CycleformService */

  /***/
  function srcAppServiceCycleformServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CycleformService", function () {
      return CycleformService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CycleformService = /*#__PURE__*/function () {
      function CycleformService(http) {
        _classCallCheck(this, CycleformService);

        this.http = http;
        this.BaseUrl1 = "/log";
      }

      _createClass(CycleformService, [{
        key: "getuserdetails",
        value: function getuserdetails() {
          return this.http.get(this.BaseUrl1 + '/getbookingdetails');
        }
      }, {
        key: "addmoredetails",
        value: function addmoredetails(moredetails) {
          return this.http.post(this.BaseUrl1 + '/bookingdetails', moredetails);
        }
      }, {
        key: "getuserinfo",
        value: function getuserinfo() {
          return this.http.get(this.BaseUrl1 + '/getbookingdetails');
        }
      }, {
        key: "edituserinfo",
        value: function edituserinfo(id) {
          return this.http.get(this.BaseUrl1 + '/edit/' + id);
        }
      }, {
        key: "deleteBusiness",
        value: function deleteBusiness(id) {
          return this.http.get(this.BaseUrl1 + '/delete', id);
        }
      }, {
        key: "updateuser",
        value: function updateuser(users, id) {
          this.http.post(this.BaseUrl1 + '/update/' + id, users).subscribe(function (res) {
            return console.log('Done', users);
          });
        }
      }]);

      return CycleformService;
    }();

    CycleformService.ɵfac = function CycleformService_Factory(t) {
      return new (t || CycleformService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CycleformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CycleformService,
      factory: CycleformService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CycleformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/userapi.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/userapi.service.ts ***!
    \********************************************/

  /*! exports provided: UserapiService */

  /***/
  function srcAppServiceUserapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserapiService", function () {
      return UserapiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserapiService = /*#__PURE__*/function () {
      function UserapiService(http) {
        _classCallCheck(this, UserapiService);

        this.http = http;
        this.BaseUrl = "/log";
      }

      _createClass(UserapiService, [{
        key: "cerateaccount",
        value: function cerateaccount(userdetails) {
          return this.http.post(this.BaseUrl + '/signup', userdetails);
        }
      }, {
        key: "login",
        value: function login(userdetails) {
          return this.http.post(this.BaseUrl + '/login', userdetails).map(function (user) {
            if (user) {
              localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
        }
      }]);

      return UserapiService;
    }();

    UserapiService.ɵfac = function UserapiService_Factory(t) {
      return new (t || UserapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserapiService,
      factory: UserapiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/userguard.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/service/userguard.guard.ts ***!
    \********************************************/

  /*! exports provided: UserGuard */

  /***/
  function srcAppServiceUserguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
      return UserGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserGuard = /*#__PURE__*/function () {
      function UserGuard(router) {
        _classCallCheck(this, UserGuard);

        this.router = router;
      }

      _createClass(UserGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return UserGuard;
    }();

    UserGuard.ɵfac = function UserGuard_Factory(t) {
      return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserGuard,
      factory: UserGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vimalkovath/Downloads/go2thechage-master/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map