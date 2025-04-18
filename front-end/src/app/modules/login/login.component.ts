import { ChangeDetectorRef, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FormHelperService } from 'src/app/services/form-helper.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { FullRoute, NavigateService } from 'src/app/services/navigate.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalPage } from '../base/modal-page';
import { DialogService } from 'src/app/services/dialog.service';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BuildInfoService } from 'src/app/services/build.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, ModalPage, OnDestroy {

  public error: string = "";
  public login: FormGroup;
  public redirectTo?: FullRoute;
  public bc?: BroadcastChannel;
  buildInfo: any;
  ambiente: any;
  /* ModalPage interface */
  public modalRoute?: ActivatedRouteSnapshot;
  public modalInterface: boolean = true;
  public modalWidth: number = 400;
  public noSession: boolean = false;
  public titleSubscriber: Subject<string> = new Subject<string>();

  constructor(
    public globals: GlobalsService,
    public go: NavigateService,
    public router: Router,
    public cdRef: ChangeDetectorRef,
    public route: ActivatedRoute,
    public auth: AuthService,
    public util: UtilService,
    public fh: FormHelperService,
    public formBuilder: FormBuilder,
    public googleApi: GoogleApiService,
    public dialog: DialogService,
    private ngZone: NgZone,
    private buildInfoService: BuildInfoService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.document.body.classList.add('login');

    this.login = this.fh.FormBuilder({
      usuario: { default: "" },
      senha: { default: "" },
      token: { default: "" }
    }, this.cdRef, this.validate);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;

    if (['senha', 'token'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if (controlName == "usuario" && !this.util.validarCPF(control.value)) {
      result = "Inválido";
    }

    return result;
  }

  ngOnInit(): void {
    this.buildInfoService.getBuildInfo().subscribe(data => {
      this.buildInfo = data;
      this.buildInfo.build_date = this.formatDate(this.buildInfo.build_date);
    });
    this.titleSubscriber.next("Login Petrvs");
    this.route.queryParams.subscribe(params => {
      this.error = params['error'] ? params['error'] : "";
      if (params["redirectTo"]) {
        let routerTo = JSON.parse(params["redirectTo"]);
        this.redirectTo = routerTo.route[0] == "login" ? routerTo : undefined;
      }
      this.noSession = !!params["noSession"];
    });
    /* Registra listner para logins com popup que necessitam de retorno */
    this.auth.registerPopupLoginResultListener();
    /* Verifica se o usuário não já está logado (login-session), e caso não esteja verifica tambem se algum dos login (Google, Microsoft, etc), estão com sessão ativas e tenta logar com essa sessão */
    (async () => {
      // Inicializa Google Auth e cria o botão na tela
      if (this.globals.hasGoogleLogin) {
        let res = await this.googleApi.initialize(true);//.then((res: any) => {
        res.renderButton(document.getElementById('gbtn') as HTMLElement, {
          size: 'large',
          width: 320,
        });
        //})
      }
      let result = false;
      if (!this.noSession) result = await this.auth.authSession();
      /* verifica tambem se algum dos login (Google, Microsoft, etc), estão com sessão ativas */
      if (!result) {
        if (this.globals.hasGoogleLogin) {
          var socialUser;
          try {
            socialUser = await this.googleApi.getLoginStatus();
          } catch (error) { }
          if (socialUser?.idToken) this.auth.authGoogle(socialUser?.idToken);
        }
        if (this.globals.hasAzureLogin) {
          // TODO: Implementa login automático
        }
      } else if (this.auth.success) {
        this.auth.success(this.auth.usuario!, this.redirectTo);
      }
    })();
    if (window.location.href.includes('pgdpetrvs.gestao.gov.br')) {
      this.ambiente = "Ambiente antigo";
    }
  }

  public closeModalIfSuccess = (result: boolean) => {
    if (result && this.modalRoute) {
      this.go.clearRoutes();
    }
  };

  public openModal(item: any) {
    if(item.route) this.go.navigate({route: item.route, params: item.params}, {title: "Suporte Petrvs"});
  }

  

  public signInLoginUnico() {
    const entidade = this.globals.ENTIDADE;
    // Construir a URL de autenticação do SouGov com parâmetros
    const baseUrl = 'https://sso.staging.acesso.gov.br/authorize';
    const responseType = 'code';
    const clientId = 'pgd-pre.dth.api.gov.br';
    const scope = 'openid+email+profile';
    const redirectUri = 'https://pgd-pre.dth.api.gov.br/#/login-unico';
    const state = btoa('{"entidade":"'+entidade+'"}');
    const nonce = 'nonce';
    const codeChallenge = 'LwIDqJyJEGgdSQuwygHlkQDKsUXFz6jMIfkM_Jlv94w';
    const codeChallengeMethod = 'S256';

    const authUrl = `${baseUrl}?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&nonce=${nonce}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;

    window.location.href = authUrl;
  }

  public signInAzure() {
    this.auth.authAzure();
  }

  public signInLoginUnicoBackEnd() {
    this.auth.authLoginUnicoBackEnd();
  }

  ngOnDestroy(){
    this.document.body.classList.remove('login');
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
}
