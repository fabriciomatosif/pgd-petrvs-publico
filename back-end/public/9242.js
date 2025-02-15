"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[9242],{

/***/ 11180:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/usuario/usuario-form/usuario-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioFormComponent: () => (/* binding */ UsuarioFormComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-trabalho-dao.service */ 87744);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuario.model */ 26898);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../usuario-integrante/usuario-integrante.component */ 12479);
/* harmony import */ var src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/unidade-integrante-dao.service */ 88631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_input_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-radio/input-radio.component */ 48877);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/tabs/tabs.component */ 66384);
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/tabs/tab/tab.component */ 74978);
/* harmony import */ var _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/top-alert/top-alert.component */ 50933);
/* harmony import */ var _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/profile-picture/profile-picture.component */ 2729);
/* harmony import */ var _components_input_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-editor/input-editor.component */ 55795);





















const _c0 = ["lotacao"];
class UsuarioFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_6__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_5__.Usuario, src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (controlName == "cpf" && !this.util.validarCPF(control.value)) {
        result = "Inválido";
      }
      if (['data_nascimento'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      }
      return result;
    };
    this.formValidation = form => {
      if (!this.unidadesIntegrantes?.formPerfil.controls.perfil_id.value?.length) return "É obrigatório a definição de um " + this.lex.translate("perfil") + " para " + this.lex.translate("o servidor") + ". Utilize a aba 'Atribuições'.";
      if (!this.unidadesIntegrantes?.grid?.items.find((item, index, array) => item.atribuicoes.includes('LOTADO'))) {
        return "É obrigatória a definição " + this.lex.translate('da unidade') + " " + this.lex.translate('de lotação') + " " + this.lex.translate('do servidor') + "! Defina-a na aba 'Atribuições'.";
      }
      if (this.action != 'new' && this.unidadesIntegrantes?.grid?.items.find((item, index, array) => !(item.unidade_id.length && item.usuario_id.length))) return "Na aba 'Atribuições' há " + this.lex.translate('unidade') + " com edição não concluída. Conclua-a antes de salvar " + this.lex.translate('o servidor') + "!";
      return undefined;
    };
    this.titleEdit = entity => {
      return "Editando " + this.lex.translate("Usuário") + ': ' + (entity?.nome || "");
    };
    //this.perfilDao = injector.get<PerfilDaoService>(PerfilDaoService);
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__.UnidadeDaoService);
    this.integranteDao = injector.get(src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_8__.UnidadeIntegranteDaoService);
    this.planoTrabalhoDao = injector.get(src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanoTrabalhoDaoService);
    this.form = this.fh.FormBuilder({
      email: {
        default: ""
      },
      nome: {
        default: ""
      },
      cpf: {
        default: ""
      },
      matricula: {
        default: ""
      },
      apelido: {
        default: ""
      },
      telefone: {
        default: ""
      },
      uf: {
        default: ""
      },
      sexo: {
        default: null
      },
      url_foto: {
        default: ""
      },
      texto_complementar_plano: {
        default: ""
      },
      //perfil_id: { default: null },
      data_nascimento: {
        default: null
      }
    }, this.cdRef, this.validate);
    this.planoDataset = this.planoTrabalhoDao.dataset();
  }
  loadData(entity, form) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      form.patchValue(_this.util.fillForm(formValue, entity));
      yield _this.unidadesIntegrantes?.loadData(entity);
    })();
  }
  initializeData(form) {
    this.entity = new src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_5__.Usuario();
    this.loadData(this.entity, form);
  }
  saveData(form) {
    var _this2 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        _this2.unidadesIntegrantes.grid.confirm();
        let usuario = _this2.util.fill(new src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_5__.Usuario(), _this2.entity);
        usuario = _this2.util.fillForm(usuario, _this2.form.value);
        usuario.perfil_id = _this2.unidadesIntegrantes?.formPerfil.controls.perfil_id.value;
        let integrantesConsolidados = _this2.unidadesIntegrantes?.items || [];
        let indiceVinculoLotacao = integrantesConsolidados.findIndex(ic => ic.atribuicoes.includes("LOTADO"));
        integrantesConsolidados.forEach((item, index, array) => {
          if (index != indiceVinculoLotacao && item._status == 'DELETE') item.atribuicoes = [];
        });
        usuario.integrantes = integrantesConsolidados;
        resolve(usuario);
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  static #_ = this.ɵfac = function UsuarioFormComponent_Factory(t) {
    return new (t || UsuarioFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Injector));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: UsuarioFormComponent,
    selectors: [["app-usuario-form"]],
    viewQuery: function UsuarioFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_7__.UsuarioIntegranteComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.unidadesIntegrantes = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.lotacao = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 33,
    consts: [["initialFocus", "cpf", 3, "form", "disabled", "title", "submit", "cancel"], ["display", "", "right", ""], ["key", "PRINCIPAL", "label", "Principal"], [1, "row"], [1, "form-group", "col-md-3", "text-center"], [1, "mt-5", 3, "url", "size"], [1, "form-group", "col-md-9"], ["label", "CPF", "controlName", "cpf", "required", "", 3, "disabled", "size", "maskFormat"], ["label", "Matr\u00EDcula", "controlName", "matricula", "required", "", 3, "disabled", "size"], ["label", "E-mail", "controlName", "email", "textCase", "lower", "required", "", 3, "disabled", "size"], ["date", "", "label", "Nascimento", "noIcon", "", "controlName", "data_nascimento", 3, "size", "labelInfo"], ["label", "Nome", "controlName", "nome", "required", "", 3, "size"], ["label", "Apelido", "controlName", "apelido", "required", "", 3, "size"], ["label", "Sexo", "controlName", "sexo", 3, "size", "items"], ["label", "UF", "icon", "bi bi-flag", "controlName", "uf", 3, "size", "items"], ["label", "Telefone", "controlName", "telefone", 3, "size", "maskFormat"], ["key", "CONFIGURACOES", "label", "Configura\u00E7\u00F5es"], ["controlName", "texto_complementar_plano", 3, "label", "dataset"], ["key", "ATRIBUICOES", 3, "label"], ["type", "alert", 3, "message"], ["noPersist", "", 3, "entity"], ["unidadesIntegrantes", ""]],
    template: function UsuarioFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("submit", function UsuarioFormComponent_Template_editable_form_submit_0_listener() {
          return ctx.onSaveData();
        })("cancel", function UsuarioFormComponent_Template_editable_form_cancel_0_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tabs", 1)(2, "tab", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "profile-picture", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 6)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "input-text", 7)(9, "input-text", 8)(10, "input-text", 9)(11, "input-datetime", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "input-text", 11)(14, "input-text", 12)(15, "input-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "input-select", 14)(18, "input-text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "tab", 16)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "input-editor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "top-alert", 19)(24, "usuario-integrante", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("url", ctx.form.controls.url_foto.value)("size", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.auth.hasPermissionTo("MOD_CFG_USER_CPF") ? "true" : undefined)("size", 3)("maskFormat", "000.000.000-00");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.auth.hasPermissionTo("MOD_CFG_USER_MAT") ? "true" : undefined)("size", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.auth.hasPermissionTo("MOD_CFG_USER_MAIL") ? "true" : undefined)("size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 3)("labelInfo", "Data de nascimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 3)("items", ctx.lookup.SEXO);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 4)("items", ctx.lookup.UF);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("size", 4)("maskFormat", "(00) 0000-0000||(00) 0 0000-0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", "Texto complementar " + ctx.lex.translate("Plano de Trabalho"))("dataset", ctx.planoDataset);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", ctx.lex.translate("Atribui\u00E7\u00F5es"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("message", "\u00C9 imposs\u00EDvel excluir " + ctx.lex.translate("a lota\u00E7\u00E3o") + " " + ctx.lex.translate("do servidor") + ". Para alter\u00E1-la, lote-o em outra " + ctx.lex.translate("unidade") + "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("entity", ctx.entity);
      }
    },
    dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__.InputDatetimeComponent, _components_input_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_11__.InputRadioComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_12__.InputSelectComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__.TabsComponent, _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_14__.TabComponent, _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_15__.TopAlertComponent, _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_16__.ProfilePictureComponent, _components_input_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_17__.InputEditorComponent, _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_7__.UsuarioIntegranteComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12479:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/usuario/usuario-integrante/usuario-integrante.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioIntegranteComponent: () => (/* binding */ UsuarioIntegranteComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/unidade-integrante-dao.service */ 88631);
/* harmony import */ var src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario.model */ 26898);
/* harmony import */ var src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/base/page-frame-base */ 76298);
/* harmony import */ var src_app_services_integrante_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/integrante.service */ 27918);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_dao_perfil_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/perfil-dao.service */ 65298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/input/input-multiselect/input-multiselect.component */ 17819);
/* harmony import */ var _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/top-alert/top-alert.component */ 50933);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ 95489);




















const _c0 = ["unidade"];
function UsuarioIntegranteComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"]("Servidor: " + (ctx_r0.entity == null ? null : ctx_r0.entity.nome));
  }
}
function UsuarioIntegranteComponent_top_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "top-alert", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("message", "\u00C9 imposs\u00EDvel excluir " + ctx_r2.lex.translate("a lota\u00E7\u00E3o") + " " + ctx_r2.lex.translate("do servidor") + ". Para alter\u00E1-la, lote-o em outra " + ctx_r2.lex.translate("unidade") + "!");
  }
}
function UsuarioIntegranteComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](row_r11.unidade_sigla || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", row_r11.informal ? "(Unidade Informal)" : "(C\u00F3digo: " + (row_r11.unidade_codigo || "") + ")", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", row_r11.unidade_nome || "", " ");
  }
}
function UsuarioIntegranteComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "input-search", 17, 18);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", (_r1 == null ? null : _r1.adding) ? undefined : "true")("size", 12)("dao", ctx_r6.unidadeDao);
  }
}
function UsuarioIntegranteComponent_ng_template_18_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "badge", 20)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("color", ctx_r15.lookup.getColor(ctx_r15.lookup.UNIDADE_INTEGRANTE_TIPO, a_r16 || ""))("icon", ctx_r15.lookup.getIcon(ctx_r15.lookup.UNIDADE_INTEGRANTE_TIPO, a_r16 || ""))("label", ctx_r15.lookup.getValue(ctx_r15.lookup.UNIDADE_INTEGRANTE_TIPO, a_r16 || ""));
  }
}
function UsuarioIntegranteComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, UsuarioIntegranteComponent_ng_template_18_div_0_Template, 3, 3, "div", 19);
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", row_r14.atribuicoes);
  }
}
function UsuarioIntegranteComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "input-multiselect", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "input-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 8)("addItemHandle", ctx_r10.addItemHandle.bind(ctx_r10))("deleteItemHandle", ctx_r10.deleteItemHandle.bind(ctx_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 12)("items", ctx_r10.lookup.ordenarLookupItem(ctx_r10.lookup.UNIDADE_INTEGRANTE_TIPO));
  }
}
class UsuarioIntegranteComponent extends src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_5__.PageFrameBase {
  set control(value) {
    super.control = value;
  }
  get control() {
    return super.control;
  }
  set entity(value) {
    super.entity = value;
  }
  get entity() {
    return super.entity;
  }
  set noPersist(value) {
    super.noPersist = value;
  }
  get noPersist() {
    return super.noPersist;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.items = [];
    this.perfilUsuario = "";
    this.validate = (control, controlName) => {
      let result = null;
      if (["unidade_id", "perfil_id", "atribuicoes"].includes(controlName) && !control.value?.length) {
        result = "Obrigatório";
      }
      if (controlName == "unidade_id" && this.grid?.adding && this.items.map(i => i.id).includes(control.value)) result = "O usuário já é integrante desta unidade. Edite-a, ao invés de incluí-la novamente!";
      return result;
    };
    this.formValidation = form => {
      let atribuicoes = form.controls.atribuicoes.value;
      if (this.util.array_diff(['GESTOR', 'GESTOR_SUBSTITUTO', 'GESTOR_DELEGADO'], atribuicoes.map(na => na.key) || []).length < 2) {
        return "A um mesmo servidor só pode ser atribuída uma função de gestor (titular, substituto ou delegado), para uma mesma Unidade!";
      }
      return undefined;
    };
    this.integranteService = injector.get(src_app_services_integrante_service__WEBPACK_IMPORTED_MODULE_6__.IntegranteService);
    this.integranteDao = injector.get(src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_3__.UnidadeIntegranteDaoService);
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__.UnidadeDaoService);
    this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_7__.UsuarioDaoService);
    this.perfilDao = injector.get(src_app_dao_perfil_dao_service__WEBPACK_IMPORTED_MODULE_8__.PerfilDaoService);
    this.form = this.fh.FormBuilder({
      unidade_id: {
        default: ""
      },
      atribuicoes: {
        default: undefined
      },
      atribuicao: {
        default: ""
      }
    }, this.cdRef, this.validate);
    this.formPerfil = this.fh.FormBuilder({
      perfil_id: {
        default: ""
      }
    }, this.cdRef, this.validate);
  }
  ngOnInit() {
    super.ngOnInit();
    this.entity = this.entity ?? this.metadata?.entity;
  }
  ngAfterViewInit() {
    var _this = this;
    (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadData(_this.entity || {}, _this.form);
    })();
  }
  loadData(entity, form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (entity.id) {
        let integrantes = [];
        try {
          yield _this2.integranteDao.carregarIntegrantes("", entity.id).then(resposta => integrantes = resposta.integrantes.filter(x => x.atribuicoes?.length > 0));
        } finally {
          _this2.perfilUsuario = entity.perfil_id;
          _this2.formPerfil.controls.perfil_id.setValue(_this2.perfilUsuario);
          _this2.items = [];
          integrantes.forEach(i => _this2.items?.push(_this2.integranteService.completarIntegrante(i, i.id, entity.id, i.atribuicoes)));
          _this2.items = _this2.integranteService.ordenarIntegrantes(_this2.items);
          _this2.cdRef.detectChanges();
          _this2.grid.loading = false;
        }
      }
    })();
  }
  salvarPerfil() {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.submitting = true;
      _this3.usuarioDao?.update(_this3.entity.id, {
        perfil_id: _this3.formPerfil.controls.perfil_id.value
      }, []).then(usuario => {
        _this3.perfilUsuario = usuario.perfil_id;
        _this3.submitting = false;
      });
    })();
  }
  addItemHandle() {
    let result = undefined;
    const value = this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
    const key = this.form.controls.atribuicao.value;
    if (value?.length && this.util.validateLookupItem(this.form.controls.atribuicao.value, key)) {
      const icon = this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
      const color = this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
      result = {
        key: key,
        value: value,
        icon: icon,
        color: color
      };
      this.form.controls.atribuicao.setValue("");
    }
    return result;
  }
  deleteItemHandle(row) {
    return row.key != "LOTADO";
  }
  /**
   * Método chamado na edição de uma atribuição do usuário
   * @param form
   * @param row
   */
  carregarIntegrante(form, row) {
    var _this4 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      form.controls.unidade_id.setValue(_this4.grid?.adding ? row.unidade_id : row.id);
      form.controls.atribuicoes.setValue(_this4.integranteService.converterAtribuicoes(row.atribuicoes));
      form.controls.atribuicao.setValue("");
    })();
  }
  /**
  * Método chamado para inserir uma atribuição no grid, seja este componente persistente ou não.
  * @returns
  */
  adicionarIntegrante() {
    var _this5 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.grid) _this5.grid.error = '';
      let novo = {
        id: _this5.integranteDao.generateUuid(),
        unidade_id: "",
        atribuicoes: []
      };
      return novo;
    })();
  }
  /**
   * Método chamado para a exclusão de uma atribuição do grid, seja este componente persistente ou não.
   * @param row
   * @returns
   */
  removerIntegrante(row) {
    var _this6 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (row.atribuicoes.includes("LOTADO")) {
        yield _this6.dialog.alert("IMPOSSÍVEL EXCLUIR !", "O vínculo que inclui " + _this6.lex.translate('a lotação') + " " + _this6.lex.translate('do servidor') + " não pode ser excluído. Se deseja excluir as demais atribuições, edite o vínculo. Se deseja alterar " + _this6.lex.translate('a lotação') + ", lote-o em outra " + _this6.lex.translate('Unidade') + ".");
      } else {
        let confirm = yield _this6.dialog.confirm("Exclui ?", "Deseja realmente excluir todas as atribuições de " + _this6.entity.nome.toUpperCase() + " " + _this6.lex.translate('na unidade') + " " + row.unidade_sigla?.toUpperCase() + " ?");
        if (confirm) {
          let msg;
          try {
            if (!_this6.isNoPersist) {
              // se persistente
              _this6.loading = true;
              yield _this6.integranteDao.salvarIntegrantes([_this6.integranteService.completarIntegrante(row, row.id, _this6.entity.id, [])]).then(resposta => {
                if (msg = resposta.find(v => v._metadata.msg?.length)?._metadata.msg) {
                  if (_this6.grid) _this6.grid.error = msg;
                }
                ;
              });
              yield _this6.loadData({
                id: _this6.entity.id
              }, _this6.form);
            } else {
              // se não persistente
              Object.assign(row, {
                '_status': "DELETE",
                'atribuicoes': []
              });
              return false;
            }
          } finally {
            _this6.loading = false;
          }
        }
      }
      return false;
    })();
  }
  /**
   * Método chamado no salvamento de uma unidade-integrante (new/edit), seja este componente persistente ou não.
   * @param form
   * @param row
   * @returns
   */
  salvarIntegrante(form, row) {
    var _this7 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let novasAtribuicoes = _this7.lookup.uniqueLookupItem(form.controls.atribuicoes.value);
      form.controls.atribuicoes.setValue(novasAtribuicoes);
      if (_this7.grid) _this7.grid.error = "";
      _this7.cdRef.detectChanges();
      let error = _this7.formValidation(form);
      if (!error) {
        let itensGrid = _this7.grid?.items || [];
        let confirm = true;
        let alteracaoGestor = _this7.integranteService.haAlteracaoGestor(novasAtribuicoes.map(x => x.key), Object.assign(row, {
          unidade_sigla: _this7.unidade?.selectedItem?.entity.sigla
        }), itensGrid, _this7.entity?.nome || _this7.parent?.form?.controls.nome.value || "");
        if (alteracaoGestor[0] != 'nenhuma') {
          confirm = yield _this7.dialog.confirm("CONFIRMA A ALTERAÇÃO DA CHEFIA ?", alteracaoGestor[2]);
          if (confirm) {
            switch (alteracaoGestor[0]) {
              case 'ganho':
                // Se for o caso, elimina a atribuição de LOTADO da antiga lotação
                if (alteracaoGestor[3]) {
                  let indiceAntigaLotacao = _this7.grid?.items.findIndex(x => x.atribuicoes.includes('LOTADO'));
                  if (indiceAntigaLotacao) _this7.grid.items[indiceAntigaLotacao].atribuicoes = _this7.grid.items[indiceAntigaLotacao].atribuicoes.filter(x => x != 'LOTADO');
                }
                break;
              case 'troca':
                // Garante que a unidade da antiga gerência perderá as atribuições de GESTOR e LOTADO
                _this7.grid.items[alteracaoGestor[1]].atribuicoes = _this7.grid.items[alteracaoGestor[1]].atribuicoes.filter(x => !['GESTOR', 'LOTADO'].includes(x));
                break;
            }
            // Insere a atribuição de LOTADO na nova gerência, apenas para fins de atualização da tela do usuário, pois o back-end já faria isso automaticamente.
            novasAtribuicoes = _this7.integranteService.inserirAtribuicao(novasAtribuicoes, 'LOTADO');
            form.controls.atribuicoes.setValue(novasAtribuicoes);
            _this7.loading = true;
          } else return undefined;
        } else {
          let alteracaoLotacao = _this7.integranteService.haAlteracaoLotacao(form, Object.assign(row, {
            unidade_sigla: _this7.unidade?.selectedItem?.entity.sigla
          }), itensGrid, _this7.entity?.nome || "");
          if (alteracaoLotacao[0]) {
            if (_this7.grid?.items[alteracaoLotacao[1]].atribuicoes.includes('GESTOR')) {
              yield _this7.dialog.alert("IMPOSSÍVEL ALTERAR A LOTAÇÃO !", alteracaoLotacao[3]);
              return undefined;
            } else {
              confirm = yield _this7.dialog.confirm("CONFIRMA A ALTERAÇÃO DA LOTAÇÃO ?", alteracaoLotacao[2]);
              if (confirm) _this7.grid.items[alteracaoLotacao[1]].atribuicoes = _this7.grid.items[alteracaoLotacao[1]].atribuicoes.filter(x => x != 'LOTADO');else return undefined;
            }
          }
        }
        try {
          if (!_this7.isNoPersist) {
            // se persistente
            yield _this7.integranteDao.salvarIntegrantes([_this7.integranteService.completarIntegrante(row, form.controls.unidade_id.value, _this7.entity.id, novasAtribuicoes.map(x => x.key))]).then(resposta => {
              let msg;
              if (msg = resposta?.find(v => v._metadata.msg?.length)?._metadata.msg) {
                if (_this7.grid) _this7.grid.error = msg;
              }
              ;
            });
            //TODO: se retornar uma mensagem de erro, ela será exibida?
            yield _this7.loadData({
              id: _this7.entity.id
            }, _this7.form);
            if (_this7.grid) _this7.grid.error = "";
          } else {
            // se não persistente
            row.id = _this7.unidade?.selectedEntity.id, _this7.grid.items = _this7.integranteService.substituirItem({
              id: row.id,
              itens: _this7.grid?.items || [],
              apelidoOuSigla: _this7.unidade?.selectedItem?.entity.sigla,
              nome: _this7.unidade?.selectedItem?.entity.nome,
              codigo: _this7.unidade?.selectedItem?.entity.codigo
            }, novasAtribuicoes.map(x => x.key), new src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__.Usuario(_this7.entity));
            _this7.cdRef.detectChanges();
          }
        } catch (error) {
          if (_this7.grid) _this7.grid.error = error;
          yield _this7.loadData({
            id: _this7.entity.id
          }, _this7.form);
        } finally {
          _this7.loading = false;
        }
      } else {
        yield _this7.dialog.alert("IMPOSSÍVEL INCLUIR/ALTERAR A UNIDADE !", error);
      }
      return undefined;
    })();
  }
  isNoButtons() {
    return this.isNoPersist ? 'true' : this.formPerfil.controls.perfil_id.value == this.perfilUsuario ? 'true' : undefined;
  }
  static #_ = this.ɵfac = function UsuarioIntegranteComponent_Factory(t) {
    return new (t || UsuarioIntegranteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injector));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: UsuarioIntegranteComponent,
    selectors: [["usuario-integrante"]],
    viewQuery: function UsuarioIntegranteComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
      }
    },
    inputs: {
      control: "control",
      entity: "entity",
      noPersist: "noPersist",
      parent: "parent"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 23,
    vars: 23,
    consts: [[4, "ngIf"], [1, "row"], [1, "col-4"], ["title", "", 3, "form", "noButtons", "disabled", "submit"], ["controlName", "perfil_id", "required", "", 3, "disabled", "label", "dao"], [1, "col"], ["type", "warning", 3, "message"], ["editable", "", 3, "items", "minHeight", "form", "hasDelete", "add", "load", "remove", "save"], ["grid", ""], ["type", "alert", 3, "message", 4, "ngIf"], [3, "title", "template", "editTemplate"], ["columnUnidade", ""], ["editUnidade", ""], ["columnAtribuicoes", ""], ["editAtribuicoes", ""], ["type", "options"], ["type", "alert", 3, "message"], ["label", "", "icon", "", "controlName", "unidade_id", 3, "disabled", "size", "dao"], ["unidade", ""], [4, "ngFor", "ngForOf"], [3, "color", "icon", "label"], ["controlName", "atribuicoes", 3, "size", "addItemHandle", "deleteItemHandle"], ["label", "", "icon", "fas fa-sign-out-alt", "controlName", "atribuicao", 3, "size", "items"]],
    template: function UsuarioIntegranteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, UsuarioIntegranteComponent_span_0_Template, 3, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "editable-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("submit", function UsuarioIntegranteComponent_Template_editable_form_submit_3_listener() {
          return ctx.salvarPerfil();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "input-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "top-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "grid", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, UsuarioIntegranteComponent_top_alert_10_Template, 1, 1, "top-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "columns")(12, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, UsuarioIntegranteComponent_ng_template_13_Template, 7, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, UsuarioIntegranteComponent_ng_template_15_Template, 2, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, UsuarioIntegranteComponent_ng_template_18_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, UsuarioIntegranteComponent_ng_template_20_Template, 2, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](16);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](19);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.isNoPersist);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("form", ctx.formPerfil)("noButtons", ctx.isNoButtons())("disabled", ctx.formDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx.auth.hasPermissionTo("MOD_CFG_USER_PERFIL") ? "true" : undefined)("label", ctx.lex.translate("Perfil"))("dao", ctx.perfilDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("message", "Ao conceder a " + ctx.lex.translate("um usu\u00E1rio") + " a atribui\u00E7\u00E3o de " + ctx.lookup.getValue(ctx.lookup.UNIDADE_INTEGRANTE_TIPO, "GESTOR") + ", " + ctx.lookup.getValue(ctx.lookup.UNIDADE_INTEGRANTE_TIPO, "GESTOR_SUBSTITUTO") + " ou de " + ctx.lookup.getValue(ctx.lookup.UNIDADE_INTEGRANTE_TIPO, "GESTOR_DELEGADO") + " em " + ctx.lex.translate("uma unidade") + ", deve lhe ser concedido tamb\u00E9m " + ctx.lex.translate("o n\u00EDvel de acesso") + " correspondente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx.items)("minHeight", 500)("form", ctx.form)("hasDelete", true)("add", ctx.adicionarIntegrante.bind(ctx))("load", ctx.carregarIntegrante.bind(ctx))("remove", ctx.removerIntegrante.bind(ctx))("save", ctx.salvarIntegrante.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.isNoPersist);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", ctx.lex.translate("Unidades"))("template", _r3)("editTemplate", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", ctx.lex.translate("Atribui\u00E7\u00F5es"))("template", _r7)("editTemplate", _r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_9__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_10__.ColumnComponent, _components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_11__.EditableFormComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__.InputSearchComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__.InputSelectComponent, _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_14__.InputMultiselectComponent, _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_15__.TopAlertComponent, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_16__.BadgeComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87664:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/usuario/usuario-list/usuario-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioListComponent: () => (/* binding */ UsuarioListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_perfil_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/perfil-dao.service */ 65298);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario.model */ 26898);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/profile-picture/profile-picture.component */ 2729);


















function UsuarioListComponent_h3_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function UsuarioListComponent_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "toolbar");
  }
}
function UsuarioListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "profile-picture", 18);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("url", row_r6.url_foto)("size", 40)("hint", row_r6.nome);
  }
}
function UsuarioListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"]((row_r7.perfil == null ? null : row_r7.perfil.nome) || "");
  }
}
class UsuarioListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_4__.Usuario, src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      if (filter?.controls.usuario?.value?.length) {
        result.push(["nome", "like", "%" + filter?.controls.usuario?.value.trim().replace(" ", "%") + "%"]);
      }
      if (filter?.controls.unidade_id?.value?.length) {
        result.push(["lotacao", "==", filter?.controls.unidade_id.value]);
      }
      if (filter?.controls.perfil_id?.value?.length) {
        result.push(["perfil_id", "==", filter?.controls.perfil_id?.value]);
      }
      return result;
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__.UnidadeDaoService);
    this.perfilDao = injector.get(src_app_dao_perfil_dao_service__WEBPACK_IMPORTED_MODULE_1__.PerfilDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Usuários");
    this.code = "MOD_CFG_USER";
    this.join = ["perfil:id,nome"];
    this.filter = this.fh.FormBuilder({
      usuario: {
        default: ""
      },
      unidade_id: {
        default: ""
      },
      perfil_id: {
        default: null
      }
    });
    this.addOption(this.OPTION_INFORMACOES, "MOD_USER");
    //this.addOption(this.OPTION_EXCLUIR, "MOD_USER_EXCL");       // Tratar de forma diferenciada a exclusão de usuário
  }
  dynamicOptions(row) {
    let result = [];
    // Testa se o usuário logado possui permissão para gerenciar as atribuições do usuário do grid
    if (this.auth.hasPermissionTo("MOD_USER_ATRIB")) result.push({
      label: "Atribuições",
      icon: "bi bi-list-task",
      onClick: usuario => {
        this.go.navigate({
          route: ['configuracoes', 'usuario', usuario.id, 'integrante']
        }, {
          metadata: {
            entity: row
          }
        });
      }
    });
    return result;
  }
  static #_ = this.ɵfac = function UsuarioListComponent_Factory(t) {
    return new (t || UsuarioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injector));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: UsuarioListComponent,
    selectors: [["app-usuario-list"]],
    viewQuery: function UsuarioListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
    decls: 20,
    vars: 35,
    consts: [["class", "my-2", 4, "ngIf"], [3, "dao", "add", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "collapseChange", "collapsed"], [1, "row"], ["controlName", "usuario", "placeholder", "Nome", 3, "size", "label", "control"], ["controlName", "unidade_id", 3, "size", "label", "control", "dao"], ["controlName", "perfil_id", "nullable", "", 3, "size", "label", "control", "dao"], ["icon", "bi-person", 3, "align", "template"], ["columnFoto", ""], ["title", "CPF", "field", "cpf"], ["title", "Matr\u00EDcula", "field", "matricula"], ["title", "Nome", "field", "nome", "orderBy", "nome"], [3, "title", "template"], ["columnPerfil", ""], ["type", "options", 3, "onEdit", "dynamicOptions", "options"], [3, "rows"], [1, "my-2"], [3, "url", "size", "hint"]],
    template: function UsuarioListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, UsuarioListComponent_h3_0_Template, 2, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("select", function UsuarioListComponent_Template_grid_select_1_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, UsuarioListComponent_toolbar_2_Template, 1, 0, "toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "filter", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input-text", 5)(6, "input-search", 6)(7, "input-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "columns")(9, "column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, UsuarioListComponent_ng_template_10_Template, 1, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "column", 10)(13, "column", 11)(14, "column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, UsuarioListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_USER_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_USER_EDT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Usu\u00E1rio"))("control", ctx.filter.controls.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Lota\u00E7\u00E3o"))("control", ctx.filter.controls.unidade_id)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Perfil"))("control", ctx.filter.controls.perfil_id)("dao", ctx.perfilDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("align", "center")("template", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx.lex.translate("Perfil"))("template", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("onEdit", ctx.edit)("dynamicOptions", ctx.dynamicOptions.bind(ctx))("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rows", ctx.rowsLimit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_6__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_7__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__.PaginationComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__.InputSelectComponent, _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_14__.ProfilePictureComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86047:
/*!*************************************************************************!*\
  !*** ./src/app/modules/configuracoes/usuario/usuario-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioRoutingModule: () => (/* binding */ UsuarioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 1391);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-form/usuario-form.component */ 11180);
/* harmony import */ var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-list/usuario-list.component */ 87664);
/* harmony import */ var _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario-integrante/usuario-integrante.component */ 12479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);








const routes = [{
  path: '',
  component: _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__.UsuarioListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Usuários"
  }
}, {
  path: 'new',
  component: _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__.UsuarioFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão de Usuário",
    modal: true
  }
}, {
  path: ':id/edit',
  component: _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__.UsuarioFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição de Usuário",
    modal: true
  }
}, {
  path: ':id/consult',
  component: _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__.UsuarioFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consulta a Usuário",
    modal: true
  }
}, {
  path: ':id/integrante',
  component: _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_4__.UsuarioIntegranteComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Atribuições do Usuário",
    modal: true
  }
}];
class UsuarioRoutingModule {
  static #_ = this.ɵfac = function UsuarioRoutingModule_Factory(t) {
    return new (t || UsuarioRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: UsuarioRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UsuarioRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 29242:
/*!*****************************************************************!*\
  !*** ./src/app/modules/configuracoes/usuario/usuario.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioModule: () => (/* binding */ UsuarioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario-routing.module */ 86047);
/* harmony import */ var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario-list/usuario-list.component */ 87664);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-form/usuario-form.component */ 11180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario-integrante/usuario-integrante.component */ 12479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);








class UsuarioModule {
  static #_ = this.ɵfac = function UsuarioModule_Factory(t) {
    return new (t || UsuarioModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: UsuarioModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuarioRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UsuarioModule, {
    declarations: [_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_1__.UsuarioListComponent, _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__.UsuarioFormComponent, _usuario_integrante_usuario_integrante_component__WEBPACK_IMPORTED_MODULE_4__.UsuarioIntegranteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuarioRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=9242.js.map