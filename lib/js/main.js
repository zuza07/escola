if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'main'.");
}
var main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var throwCCE = Kotlin.throwCCE;
  var set_onKeyPressFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyPressFunction_pszlq2$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var li_0 = $module$kotlinx_html_js.kotlinx.html.js.li_525bpd$;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Exception = Kotlin.kotlin.Exception;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  StorageService$stTask.prototype = Object.create(LinkedHashMap.prototype);
  StorageService$stTask.prototype.constructor = StorageService$stTask;
  StorageService$stRegras.prototype = Object.create(LinkedHashMap.prototype);
  StorageService$stRegras.prototype.constructor = StorageService$stRegras;
  StorageService$stNotas.prototype = Object.create(LinkedHashMap.prototype);
  StorageService$stNotas.prototype.constructor = StorageService$stNotas;
  function TodoEventEmitter() {
    this.events_0 = LinkedHashMap_init();
  }
  TodoEventEmitter.prototype.on_a1vqyy$ = function (eventName, callback) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      (tmp$ = this.events_0.get_11rb$(eventName)) != null ? tmp$.add_11rb$(callback) : null;
    }
     else {
      var $receiver = this.events_0;
      var value = arrayListOf([callback]);
      $receiver.put_xwzc9p$(eventName, value);
    }
  };
  TodoEventEmitter.prototype.trigger_bm4g0d$ = function (eventName, task) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      if ((tmp$ = this.events_0.get_11rb$(eventName)) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          element(task);
        }
      }
    }
  };
  TodoEventEmitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoEventEmitter',
    interfaces: []
  };
  function TodoRegras() {
    this.events_0 = LinkedHashMap_init();
  }
  TodoRegras.prototype.on_6zgujw$ = function (eventName, callback) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      (tmp$ = this.events_0.get_11rb$(eventName)) != null ? tmp$.add_11rb$(callback) : null;
    }
     else {
      var $receiver = this.events_0;
      var value = arrayListOf([callback]);
      $receiver.put_xwzc9p$(eventName, value);
    }
  };
  TodoRegras.prototype.trigger_863w03$ = function (eventName, task) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      if ((tmp$ = this.events_0.get_11rb$(eventName)) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          element(task);
        }
      }
    }
  };
  TodoRegras.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoRegras',
    interfaces: []
  };
  function main(args) {
    (new Todo()).abrirCabec_61zpoe$('Cabec');
    (new Todo()).abrir_puj7f4$('Password', '');
  }
  function Funcionario(ID_FUNCINARIO, FUNC_NOME) {
    this.ID_FUNCINARIO = ID_FUNCINARIO;
    this.FUNC_NOME = FUNC_NOME;
  }
  Funcionario.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Funcionario',
    interfaces: []
  };
  Funcionario.prototype.component1 = function () {
    return this.ID_FUNCINARIO;
  };
  Funcionario.prototype.component2 = function () {
    return this.FUNC_NOME;
  };
  Funcionario.prototype.copy_puj7f4$ = function (ID_FUNCINARIO, FUNC_NOME) {
    return new Funcionario(ID_FUNCINARIO === void 0 ? this.ID_FUNCINARIO : ID_FUNCINARIO, FUNC_NOME === void 0 ? this.FUNC_NOME : FUNC_NOME);
  };
  Funcionario.prototype.toString = function () {
    return 'Funcionario(ID_FUNCINARIO=' + Kotlin.toString(this.ID_FUNCINARIO) + (', FUNC_NOME=' + Kotlin.toString(this.FUNC_NOME)) + ')';
  };
  Funcionario.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ID_FUNCINARIO) | 0;
    result = result * 31 + Kotlin.hashCode(this.FUNC_NOME) | 0;
    return result;
  };
  Funcionario.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ID_FUNCINARIO, other.ID_FUNCINARIO) && Kotlin.equals(this.FUNC_NOME, other.FUNC_NOME)))));
  };
  function Notas(NOT_EMPRESA, NOT_OF, NOT_CLIENTE, NOT_NRNOTA, NOT_FUNC, NOT_DTEMI, NOT_CPAG, NOT_FPAG, NOT_CFOCOD, NOT_RAZAO, NOT_ENDER, NOT_NUMERO, NOT_BAIRRO, NOT_CEP, NOT_CIDADE, NOT_UF, NOT_CNPJ, NOT_IE, NOT_TOTPROD, NOT_TOTNOTA, NOT_CHAVEACESSO, NOT_USUCAD) {
    this.NOT_EMPRESA = NOT_EMPRESA;
    this.NOT_OF = NOT_OF;
    this.NOT_CLIENTE = NOT_CLIENTE;
    this.NOT_NRNOTA = NOT_NRNOTA;
    this.NOT_FUNC = NOT_FUNC;
    this.NOT_DTEMI = NOT_DTEMI;
    this.NOT_CPAG = NOT_CPAG;
    this.NOT_FPAG = NOT_FPAG;
    this.NOT_CFOCOD = NOT_CFOCOD;
    this.NOT_RAZAO = NOT_RAZAO;
    this.NOT_ENDER = NOT_ENDER;
    this.NOT_NUMERO = NOT_NUMERO;
    this.NOT_BAIRRO = NOT_BAIRRO;
    this.NOT_CEP = NOT_CEP;
    this.NOT_CIDADE = NOT_CIDADE;
    this.NOT_UF = NOT_UF;
    this.NOT_CNPJ = NOT_CNPJ;
    this.NOT_IE = NOT_IE;
    this.NOT_TOTPROD = NOT_TOTPROD;
    this.NOT_TOTNOTA = NOT_TOTNOTA;
    this.NOT_CHAVEACESSO = NOT_CHAVEACESSO;
    this.NOT_USUCAD = NOT_USUCAD;
  }
  Notas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Notas',
    interfaces: []
  };
  Notas.prototype.component1 = function () {
    return this.NOT_EMPRESA;
  };
  Notas.prototype.component2 = function () {
    return this.NOT_OF;
  };
  Notas.prototype.component3 = function () {
    return this.NOT_CLIENTE;
  };
  Notas.prototype.component4 = function () {
    return this.NOT_NRNOTA;
  };
  Notas.prototype.component5 = function () {
    return this.NOT_FUNC;
  };
  Notas.prototype.component6 = function () {
    return this.NOT_DTEMI;
  };
  Notas.prototype.component7 = function () {
    return this.NOT_CPAG;
  };
  Notas.prototype.component8 = function () {
    return this.NOT_FPAG;
  };
  Notas.prototype.component9 = function () {
    return this.NOT_CFOCOD;
  };
  Notas.prototype.component10 = function () {
    return this.NOT_RAZAO;
  };
  Notas.prototype.component11 = function () {
    return this.NOT_ENDER;
  };
  Notas.prototype.component12 = function () {
    return this.NOT_NUMERO;
  };
  Notas.prototype.component13 = function () {
    return this.NOT_BAIRRO;
  };
  Notas.prototype.component14 = function () {
    return this.NOT_CEP;
  };
  Notas.prototype.component15 = function () {
    return this.NOT_CIDADE;
  };
  Notas.prototype.component16 = function () {
    return this.NOT_UF;
  };
  Notas.prototype.component17 = function () {
    return this.NOT_CNPJ;
  };
  Notas.prototype.component18 = function () {
    return this.NOT_IE;
  };
  Notas.prototype.component19 = function () {
    return this.NOT_TOTPROD;
  };
  Notas.prototype.component20 = function () {
    return this.NOT_TOTNOTA;
  };
  Notas.prototype.component21 = function () {
    return this.NOT_CHAVEACESSO;
  };
  Notas.prototype.component22 = function () {
    return this.NOT_USUCAD;
  };
  Notas.prototype.copy_6nmltg$ = function (NOT_EMPRESA, NOT_OF, NOT_CLIENTE, NOT_NRNOTA, NOT_FUNC, NOT_DTEMI, NOT_CPAG, NOT_FPAG, NOT_CFOCOD, NOT_RAZAO, NOT_ENDER, NOT_NUMERO, NOT_BAIRRO, NOT_CEP, NOT_CIDADE, NOT_UF, NOT_CNPJ, NOT_IE, NOT_TOTPROD, NOT_TOTNOTA, NOT_CHAVEACESSO, NOT_USUCAD) {
    return new Notas(NOT_EMPRESA === void 0 ? this.NOT_EMPRESA : NOT_EMPRESA, NOT_OF === void 0 ? this.NOT_OF : NOT_OF, NOT_CLIENTE === void 0 ? this.NOT_CLIENTE : NOT_CLIENTE, NOT_NRNOTA === void 0 ? this.NOT_NRNOTA : NOT_NRNOTA, NOT_FUNC === void 0 ? this.NOT_FUNC : NOT_FUNC, NOT_DTEMI === void 0 ? this.NOT_DTEMI : NOT_DTEMI, NOT_CPAG === void 0 ? this.NOT_CPAG : NOT_CPAG, NOT_FPAG === void 0 ? this.NOT_FPAG : NOT_FPAG, NOT_CFOCOD === void 0 ? this.NOT_CFOCOD : NOT_CFOCOD, NOT_RAZAO === void 0 ? this.NOT_RAZAO : NOT_RAZAO, NOT_ENDER === void 0 ? this.NOT_ENDER : NOT_ENDER, NOT_NUMERO === void 0 ? this.NOT_NUMERO : NOT_NUMERO, NOT_BAIRRO === void 0 ? this.NOT_BAIRRO : NOT_BAIRRO, NOT_CEP === void 0 ? this.NOT_CEP : NOT_CEP, NOT_CIDADE === void 0 ? this.NOT_CIDADE : NOT_CIDADE, NOT_UF === void 0 ? this.NOT_UF : NOT_UF, NOT_CNPJ === void 0 ? this.NOT_CNPJ : NOT_CNPJ, NOT_IE === void 0 ? this.NOT_IE : NOT_IE, NOT_TOTPROD === void 0 ? this.NOT_TOTPROD : NOT_TOTPROD, NOT_TOTNOTA === void 0 ? this.NOT_TOTNOTA : NOT_TOTNOTA, NOT_CHAVEACESSO === void 0 ? this.NOT_CHAVEACESSO : NOT_CHAVEACESSO, NOT_USUCAD === void 0 ? this.NOT_USUCAD : NOT_USUCAD);
  };
  Notas.prototype.toString = function () {
    return 'Notas(NOT_EMPRESA=' + Kotlin.toString(this.NOT_EMPRESA) + (', NOT_OF=' + Kotlin.toString(this.NOT_OF)) + (', NOT_CLIENTE=' + Kotlin.toString(this.NOT_CLIENTE)) + (', NOT_NRNOTA=' + Kotlin.toString(this.NOT_NRNOTA)) + (', NOT_FUNC=' + Kotlin.toString(this.NOT_FUNC)) + (', NOT_DTEMI=' + Kotlin.toString(this.NOT_DTEMI)) + (', NOT_CPAG=' + Kotlin.toString(this.NOT_CPAG)) + (', NOT_FPAG=' + Kotlin.toString(this.NOT_FPAG)) + (', NOT_CFOCOD=' + Kotlin.toString(this.NOT_CFOCOD)) + (', NOT_RAZAO=' + Kotlin.toString(this.NOT_RAZAO)) + (', NOT_ENDER=' + Kotlin.toString(this.NOT_ENDER)) + (', NOT_NUMERO=' + Kotlin.toString(this.NOT_NUMERO)) + (', NOT_BAIRRO=' + Kotlin.toString(this.NOT_BAIRRO)) + (', NOT_CEP=' + Kotlin.toString(this.NOT_CEP)) + (', NOT_CIDADE=' + Kotlin.toString(this.NOT_CIDADE)) + (', NOT_UF=' + Kotlin.toString(this.NOT_UF)) + (', NOT_CNPJ=' + Kotlin.toString(this.NOT_CNPJ)) + (', NOT_IE=' + Kotlin.toString(this.NOT_IE)) + (', NOT_TOTPROD=' + Kotlin.toString(this.NOT_TOTPROD)) + (', NOT_TOTNOTA=' + Kotlin.toString(this.NOT_TOTNOTA)) + (', NOT_CHAVEACESSO=' + Kotlin.toString(this.NOT_CHAVEACESSO)) + (', NOT_USUCAD=' + Kotlin.toString(this.NOT_USUCAD)) + ')';
  };
  Notas.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_EMPRESA) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_OF) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CLIENTE) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_NRNOTA) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_FUNC) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_DTEMI) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CPAG) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_FPAG) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CFOCOD) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_RAZAO) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_ENDER) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_NUMERO) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_BAIRRO) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CEP) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CIDADE) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_UF) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CNPJ) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_IE) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_TOTPROD) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_TOTNOTA) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_CHAVEACESSO) | 0;
    result = result * 31 + Kotlin.hashCode(this.NOT_USUCAD) | 0;
    return result;
  };
  Notas.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.NOT_EMPRESA, other.NOT_EMPRESA) && Kotlin.equals(this.NOT_OF, other.NOT_OF) && Kotlin.equals(this.NOT_CLIENTE, other.NOT_CLIENTE) && Kotlin.equals(this.NOT_NRNOTA, other.NOT_NRNOTA) && Kotlin.equals(this.NOT_FUNC, other.NOT_FUNC) && Kotlin.equals(this.NOT_DTEMI, other.NOT_DTEMI) && Kotlin.equals(this.NOT_CPAG, other.NOT_CPAG) && Kotlin.equals(this.NOT_FPAG, other.NOT_FPAG) && Kotlin.equals(this.NOT_CFOCOD, other.NOT_CFOCOD) && Kotlin.equals(this.NOT_RAZAO, other.NOT_RAZAO) && Kotlin.equals(this.NOT_ENDER, other.NOT_ENDER) && Kotlin.equals(this.NOT_NUMERO, other.NOT_NUMERO) && Kotlin.equals(this.NOT_BAIRRO, other.NOT_BAIRRO) && Kotlin.equals(this.NOT_CEP, other.NOT_CEP) && Kotlin.equals(this.NOT_CIDADE, other.NOT_CIDADE) && Kotlin.equals(this.NOT_UF, other.NOT_UF) && Kotlin.equals(this.NOT_CNPJ, other.NOT_CNPJ) && Kotlin.equals(this.NOT_IE, other.NOT_IE) && Kotlin.equals(this.NOT_TOTPROD, other.NOT_TOTPROD) && Kotlin.equals(this.NOT_TOTNOTA, other.NOT_TOTNOTA) && Kotlin.equals(this.NOT_CHAVEACESSO, other.NOT_CHAVEACESSO) && Kotlin.equals(this.NOT_USUCAD, other.NOT_USUCAD)))));
  };
  function Regras(ID_REGRAS, REG_DESCR, REG_GRUPO, REG_MENU, REG_ATIVO, REG_MODULO) {
    this.ID_REGRAS = ID_REGRAS;
    this.REG_DESCR = REG_DESCR;
    this.REG_GRUPO = REG_GRUPO;
    this.REG_MENU = REG_MENU;
    this.REG_ATIVO = REG_ATIVO;
    this.REG_MODULO = REG_MODULO;
    this.isArchived = false;
    this.isDone = false;
  }
  Regras.prototype.markAsDone = function () {
    this.isDone = true;
  };
  Regras.prototype.archive = function () {
    this.isArchived = true;
  };
  Regras.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Regras',
    interfaces: []
  };
  Regras.prototype.component1 = function () {
    return this.ID_REGRAS;
  };
  Regras.prototype.component2 = function () {
    return this.REG_DESCR;
  };
  Regras.prototype.component3 = function () {
    return this.REG_GRUPO;
  };
  Regras.prototype.component4 = function () {
    return this.REG_MENU;
  };
  Regras.prototype.component5 = function () {
    return this.REG_ATIVO;
  };
  Regras.prototype.component6 = function () {
    return this.REG_MODULO;
  };
  Regras.prototype.copy_r3y0ew$ = function (ID_REGRAS, REG_DESCR, REG_GRUPO, REG_MENU, REG_ATIVO, REG_MODULO) {
    return new Regras(ID_REGRAS === void 0 ? this.ID_REGRAS : ID_REGRAS, REG_DESCR === void 0 ? this.REG_DESCR : REG_DESCR, REG_GRUPO === void 0 ? this.REG_GRUPO : REG_GRUPO, REG_MENU === void 0 ? this.REG_MENU : REG_MENU, REG_ATIVO === void 0 ? this.REG_ATIVO : REG_ATIVO, REG_MODULO === void 0 ? this.REG_MODULO : REG_MODULO);
  };
  Regras.prototype.toString = function () {
    return 'Regras(ID_REGRAS=' + Kotlin.toString(this.ID_REGRAS) + (', REG_DESCR=' + Kotlin.toString(this.REG_DESCR)) + (', REG_GRUPO=' + Kotlin.toString(this.REG_GRUPO)) + (', REG_MENU=' + Kotlin.toString(this.REG_MENU)) + (', REG_ATIVO=' + Kotlin.toString(this.REG_ATIVO)) + (', REG_MODULO=' + Kotlin.toString(this.REG_MODULO)) + ')';
  };
  Regras.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ID_REGRAS) | 0;
    result = result * 31 + Kotlin.hashCode(this.REG_DESCR) | 0;
    result = result * 31 + Kotlin.hashCode(this.REG_GRUPO) | 0;
    result = result * 31 + Kotlin.hashCode(this.REG_MENU) | 0;
    result = result * 31 + Kotlin.hashCode(this.REG_ATIVO) | 0;
    result = result * 31 + Kotlin.hashCode(this.REG_MODULO) | 0;
    return result;
  };
  Regras.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ID_REGRAS, other.ID_REGRAS) && Kotlin.equals(this.REG_DESCR, other.REG_DESCR) && Kotlin.equals(this.REG_GRUPO, other.REG_GRUPO) && Kotlin.equals(this.REG_MENU, other.REG_MENU) && Kotlin.equals(this.REG_ATIVO, other.REG_ATIVO) && Kotlin.equals(this.REG_MODULO, other.REG_MODULO)))));
  };
  function Task(id, text) {
    this.id = id;
    this.text = text;
    this.isArchived = false;
    this.isDone = false;
  }
  Task.prototype.markAsDone = function () {
    this.isDone = true;
  };
  Task.prototype.archive = function () {
    this.isArchived = true;
  };
  Task.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  Task.prototype.component1 = function () {
    return this.id;
  };
  Task.prototype.component2 = function () {
    return this.text;
  };
  Task.prototype.copy_puj7f4$ = function (id, text) {
    return new Task(id === void 0 ? this.id : id, text === void 0 ? this.text : text);
  };
  Task.prototype.toString = function () {
    return 'Task(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Task.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Task.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text)))));
  };
  function Ajax() {
    this.xhttp = new XMLHttpRequest();
  }
  function Ajax$get$lambda(this$Ajax, closure$callback) {
    return function () {
      if (this$Ajax.xhttp.readyState == XMLHttpRequest.DONE && this$Ajax.xhttp.status == 200) {
        closure$callback(this$Ajax.xhttp);
      }
      return Unit;
    };
  }
  Ajax.prototype.get_phn05g$ = function (url, callback) {
    this.xhttp.open('GET', url, true);
    this.xhttp.onreadystatechange = Ajax$get$lambda(this, callback);
    this.xhttp.send();
  };
  function Ajax$post$lambda(this$Ajax, closure$callback) {
    return function () {
      if (this$Ajax.xhttp.readyState == XMLHttpRequest.DONE && this$Ajax.xhttp.status == 200) {
        closure$callback(this$Ajax.xhttp);
      }
      return Unit;
    };
  }
  Ajax.prototype.post_6dr5rq$ = function (url, task, callback) {
    this.xhttp.open('POST', url, true);
    this.xhttp.setRequestHeader('Content-type', 'application/json');
    this.xhttp.onreadystatechange = Ajax$post$lambda(this, callback);
    this.xhttp.send(JSON.stringify(task));
  };
  Ajax.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ajax',
    interfaces: []
  };
  function StorageService() {
  }
  function StorageService$stTask(eventEmitter) {
    LinkedHashMap_init(this);
    this.eventEmitter = eventEmitter;
    this.addEvent = 'addTask';
    this.doneEvent = 'doneEvent';
    this.undoneEvent = 'undoneEvent';
  }
  function StorageService$stTask$getAll$lambda(this$stTask, closure$callback) {
    return function (it) {
      var tasks = JSON.parse(it.responseText);
      var tmp$;
      for (tmp$ = 0; tmp$ !== tasks.length; ++tmp$) {
        var element = tasks[tmp$];
        var this$stTask_0 = this$stTask;
        var task = new Task(element.id, element.text);
        task.isArchived = element.isArchived;
        task.isDone = element.isDone;
        this$stTask_0.put_xwzc9p$(element.id, element);
      }
      closure$callback();
      return Unit;
    };
  }
  StorageService$stTask.prototype.getAll_o14v8n$ = function (callback) {
    return (new Ajax()).get_phn05g$('/tasks', StorageService$stTask$getAll$lambda(this, callback));
  };
  function StorageService$stTask$update$lambda(it) {
    console.log(it.response);
    return Unit;
  }
  StorageService$stTask.prototype.update_y1s6kq$ = function (task) {
    return (new Ajax()).post_6dr5rq$('/task/' + task.id, task, StorageService$stTask$update$lambda);
  };
  StorageService$stTask.prototype.put_xwzc9p$ = function (key, value) {
    this.eventEmitter.trigger_bm4g0d$(this.addEvent, value);
    return LinkedHashMap.prototype.put_xwzc9p$.call(this, key, value);
  };
  StorageService$stTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stTask',
    interfaces: [LinkedHashMap]
  };
  function StorageService$stRegras(eventEmitter) {
    LinkedHashMap_init(this);
    this.eventEmitter = eventEmitter;
  }
  function StorageService$stRegras$getRegras$lambda(this$stRegras, closure$callback) {
    return function (it) {
      var regras = JSON.parse(it.responseText);
      var tmp$;
      for (tmp$ = 0; tmp$ !== regras.length; ++tmp$) {
        var element = regras[tmp$];
        var this$stRegras_0 = this$stRegras;
        var regra = new Regras(element.ID_REGRAS, element.REG_DESCR, element.REG_GRUPO, element.REG_MENU, element.REG_ATIVO, element.REG_MODULO);
        this$stRegras_0.put_xwzc9p$(element.ID_REGRAS, element);
      }
      closure$callback();
      return Unit;
    };
  }
  StorageService$stRegras.prototype.getRegras_o14v8n$ = function (callback) {
    return (new Ajax()).get_phn05g$('http://dlogica.ddns.net:8181/AdmRet-1/res/regras/menu/A/20', StorageService$stRegras$getRegras$lambda(this, callback));
  };
  StorageService$stRegras.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stRegras',
    interfaces: [LinkedHashMap]
  };
  function StorageService$stNotas(eventEmitter) {
    LinkedHashMap_init(this);
    this.eventEmitter = eventEmitter;
  }
  function StorageService$stNotas$getNotas$lambda(this$stNotas, closure$callback) {
    return function (it) {
      console.log(it);
      this$stNotas.clear();
      var lista = JSON.parse(it.responseText);
      console.log(lista);
      var tmp$;
      for (tmp$ = 0; tmp$ !== lista.length; ++tmp$) {
        var element = lista[tmp$];
        var this$stNotas_0 = this$stNotas;
        console.log('inseriu ' + element.NOT_RAZAO);
        var notas = new Notas(element.NOT_EMPRESA, element.NOT_OF, element.NOT_CLIENTE, element.NOT_NRNOTA, element.NOT_FUNC, element.NOT_DTEMI, element.NOT_CPAG, element.NOT_FPAG, element.NOT_CFOCOD, element.NOT_RAZAO, element.NOT_ENDER, element.NOT_NUMERO, element.NOT_BAIRRO, element.NOT_CEP, element.NOT_CIDADE, element.NOT_UF, element.NOT_CNPJ, element.NOT_IE, element.NOT_TOTPROD, element.NOT_TOTNOTA, element.NOT_CHAVEACESSO, element.NOT_USUCAD);
        this$stNotas_0.put_xwzc9p$(element.NOT_OF, element);
      }
      closure$callback();
      return Unit;
    };
  }
  StorageService$stNotas.prototype.getNotas_a4mwiz$ = function (iOrdem, callback) {
    console.log('solicitando nota fiscal ' + iOrdem);
    var sTeste = 'http://dlogica.ddns.net:8181/AdmRet-1/res/notas/011/1/' + iOrdem;
    console.log(sTeste);
    return (new Ajax()).get_phn05g$('http://dlogica.ddns.net:8181/AdmRet-1/res/notas/011/1/' + iOrdem, StorageService$stNotas$getNotas$lambda(this, callback));
  };
  StorageService$stNotas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'stNotas',
    interfaces: [LinkedHashMap]
  };
  StorageService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageService',
    interfaces: []
  };
  function lvRegras$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('List of Tasks');
    return Unit;
  }
  function lvRegras$lambda$lambda($receiver) {
    h5($receiver, void 0, lvRegras$lambda$lambda$lambda);
    return Unit;
  }
  function lvRegras$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function lvRegras$lambda$lambda$lambda_0(closure$storage, closure$regras) {
    return function ($receiver) {
      todoItem($receiver, closure$storage, closure$regras, lvRegras$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function lvRegras$lambda(closure$storage, closure$block) {
    return function ($receiver) {
      set_classes($receiver, setOf('collection with-header'));
      li($receiver, 'collection-header cyan', lvRegras$lambda$lambda);
      var $receiver_0 = closure$storage;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$storage_0 = closure$storage;
        var regras = element.value;
        li($receiver, 'collection-item avatar dismissable', lvRegras$lambda$lambda$lambda_0(closure$storage_0, regras));
      }
      closure$block($receiver);
      return Unit;
    };
  }
  function lvRegras($receiver, storage, block) {
    ul($receiver, void 0, lvRegras$lambda(storage, block));
  }
  function todoItem$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('insert_chart');
    return Unit;
  }
  function todoItem$lambda$lambda_0(closure$regras) {
    return function ($receiver) {
      if (closure$regras.isDone) {
        set_style($receiver, ' text-decoration: line-through');
      }
      $receiver.unaryPlus_pdl1vz$(closure$regras.REG_DESCR);
      return Unit;
    };
  }
  function todoItem$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Personal');
    return Unit;
  }
  function todoItem$lambda$lambda$lambda(closure$inputId, closure$regras) {
    return function ($receiver) {
      set_id($receiver, closure$inputId);
      set_classes($receiver, setOf('filled-in'));
      $receiver.type = InputType.checkBox;
      $receiver.checked = closure$regras.isDone;
      return Unit;
    };
  }
  function todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$regras) {
    return function ($receiver) {
      $receiver.for_ = closure$inputId;
      $receiver.unaryPlus_pdl1vz$('Done');
      set_onClickFunction($receiver, markAsDone(closure$storage, closure$regras));
      return Unit;
    };
  }
  function todoItem$lambda$lambda_2(closure$inputId, closure$regras, closure$storage) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, todoItem$lambda$lambda$lambda(closure$inputId, closure$regras));
      label($receiver, void 0, todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$regras));
      return Unit;
    };
  }
  function todoItem$lambda(closure$regras, closure$inputId, closure$storage, closure$block) {
    return function ($receiver) {
      set_id($receiver, closure$regras.ID_REGRAS);
      i($receiver, 'material-icons circle green', todoItem$lambda$lambda);
      span($receiver, 'title left-align', todoItem$lambda$lambda_0(closure$regras));
      p($receiver, void 0, todoItem$lambda$lambda_1);
      div($receiver, 'secondary-content', todoItem$lambda$lambda_2(closure$inputId, closure$regras, closure$storage));
      closure$block($receiver);
      return Unit;
    };
  }
  function todoItem($receiver, storage, regras, block) {
    var inputId = randomId();
    div($receiver, void 0, todoItem$lambda(regras, inputId, storage, block));
  }
  function checkTaskIsDone$lambda(closure$regras) {
    return function (it) {
      console.log('rendered');
      console.log(closure$regras);
      return Unit;
    };
  }
  function checkTaskIsDone(regras) {
    return checkTaskIsDone$lambda(regras);
  }
  function markAsDone$lambda(closure$regras) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var todoItem = Kotlin.isType(tmp$ = document.getElementById(closure$regras.ID_REGRAS), HTMLDivElement) ? tmp$ : throwCCE();
      var checkbox = Kotlin.isType(tmp$_0 = todoItem.getElementsByTagName('input')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
      var title = Kotlin.isType(tmp$_1 = todoItem.getElementsByClassName('title')[0], HTMLSpanElement) ? tmp$_1 : throwCCE();
      if (!checkbox.checked) {
        closure$regras.isDone = true;
        title.style.textDecoration = 'line-through';
      }
       else {
        closure$regras.isDone = false;
        title.style.textDecoration = 'none';
      }
      return Unit;
    };
  }
  function markAsDone(storage, regras) {
    return markAsDone$lambda(regras);
  }
  function randomIdRegras() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++)
      text += String.fromCharCode(possible.charCodeAt(Math.floor(Math.random() * possible.length)));
    return text;
  }
  function inputViewRegras$lambda(closure$block) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'todo-input');
      set_classes($receiver, setOf('validate'));
      $receiver.type = InputType.text;
      $receiver.name = 'task_desc';
      $receiver.autoFocus = true;
      closure$block($receiver);
      set_onKeyPressFunction($receiver, typeof (tmp$ = onInputViewKeyPressRegras()) === 'function' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function inputViewRegras($receiver, block) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, inputViewRegras$lambda(block));
  }
  function onInputViewKeyPressRegras$lambda(it) {
    var tmp$;
    if (it.which === 13) {
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      input.value = '';
    }
    return Unit;
  }
  function onInputViewKeyPressRegras() {
    return onInputViewKeyPressRegras$lambda;
  }
  function listView$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('List of Tasks');
    return Unit;
  }
  function listView$lambda$lambda($receiver) {
    h5($receiver, void 0, listView$lambda$lambda$lambda);
    return Unit;
  }
  function listView$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function listView$lambda$lambda$lambda_0(closure$storage, closure$task) {
    return function ($receiver) {
      todoItem_0($receiver, closure$storage, closure$task, listView$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function listView$lambda(closure$storage, closure$block) {
    return function ($receiver) {
      set_classes($receiver, setOf('collection with-header'));
      li($receiver, 'collection-header cyan', listView$lambda$lambda);
      var $receiver_0 = closure$storage;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$storage_0 = closure$storage;
        var task = element.value;
        li($receiver, 'collection-item avatar dismissable', listView$lambda$lambda$lambda_0(closure$storage_0, task));
      }
      closure$block($receiver);
      return Unit;
    };
  }
  function listView($receiver, storage, block) {
    ul($receiver, void 0, listView$lambda(storage, block));
  }
  function todoItem$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('insert_chart');
    return Unit;
  }
  function todoItem$lambda$lambda_4(closure$task) {
    return function ($receiver) {
      if (closure$task.isDone) {
        set_style($receiver, ' text-decoration: line-through');
      }
      $receiver.unaryPlus_pdl1vz$(closure$task.text);
      return Unit;
    };
  }
  function todoItem$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Personal');
    return Unit;
  }
  function todoItem$lambda$lambda$lambda_1(closure$inputId, closure$task) {
    return function ($receiver) {
      set_id($receiver, closure$inputId);
      set_classes($receiver, setOf('filled-in'));
      $receiver.type = InputType.checkBox;
      $receiver.checked = closure$task.isDone;
      return Unit;
    };
  }
  function todoItem$lambda$lambda$lambda_2(closure$inputId, closure$storage, closure$task) {
    return function ($receiver) {
      $receiver.for_ = closure$inputId;
      $receiver.unaryPlus_pdl1vz$('Done');
      set_onClickFunction($receiver, markAsDone_0(closure$storage, closure$task));
      return Unit;
    };
  }
  function todoItem$lambda$lambda_6(closure$inputId, closure$task, closure$storage) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, todoItem$lambda$lambda$lambda_1(closure$inputId, closure$task));
      label($receiver, void 0, todoItem$lambda$lambda$lambda_2(closure$inputId, closure$storage, closure$task));
      return Unit;
    };
  }
  function todoItem$lambda_0(closure$task, closure$inputId, closure$storage, closure$block) {
    return function ($receiver) {
      set_id($receiver, closure$task.id);
      i($receiver, 'material-icons circle green', todoItem$lambda$lambda_3);
      span($receiver, 'title left-align', todoItem$lambda$lambda_4(closure$task));
      p($receiver, void 0, todoItem$lambda$lambda_5);
      div($receiver, 'secondary-content', todoItem$lambda$lambda_6(closure$inputId, closure$task, closure$storage));
      closure$block($receiver);
      return Unit;
    };
  }
  function todoItem_0($receiver, storage, task, block) {
    var inputId = randomId();
    div($receiver, void 0, todoItem$lambda_0(task, inputId, storage, block));
  }
  function checkTaskIsDone$lambda_0(closure$task) {
    return function (it) {
      console.log('rendered');
      console.log(closure$task);
      return Unit;
    };
  }
  function checkTaskIsDone_0(task) {
    return checkTaskIsDone$lambda_0(task);
  }
  function markAsDone$lambda_0(closure$task, closure$storage) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var todoItem = Kotlin.isType(tmp$ = document.getElementById(closure$task.id), HTMLDivElement) ? tmp$ : throwCCE();
      var checkbox = Kotlin.isType(tmp$_0 = todoItem.getElementsByTagName('input')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
      var title = Kotlin.isType(tmp$_1 = todoItem.getElementsByClassName('title')[0], HTMLSpanElement) ? tmp$_1 : throwCCE();
      if (!checkbox.checked) {
        closure$task.isDone = true;
        title.style.textDecoration = 'line-through';
        closure$storage.eventEmitter.trigger_bm4g0d$(closure$storage.doneEvent, closure$task);
      }
       else {
        closure$task.isDone = false;
        title.style.textDecoration = 'none';
        closure$storage.eventEmitter.trigger_bm4g0d$(closure$storage.undoneEvent, closure$task);
      }
      return Unit;
    };
  }
  function markAsDone_0(storage, task) {
    return markAsDone$lambda_0(task, storage);
  }
  function randomId() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++)
      text += String.fromCharCode(possible.charCodeAt(Math.floor(Math.random() * possible.length)));
    return text;
  }
  function inputView$lambda(closure$block) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'todo-input');
      set_classes($receiver, setOf('validate'));
      $receiver.type = InputType.text;
      $receiver.name = 'task_desc';
      $receiver.autoFocus = true;
      closure$block($receiver);
      set_onKeyPressFunction($receiver, typeof (tmp$ = onInputViewKeyPress()) === 'function' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function inputView($receiver, block) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, inputView$lambda(block));
  }
  function onInputViewKeyPress$lambda(it) {
    var tmp$;
    if (it.which === 13) {
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      input.value = '';
    }
    return Unit;
  }
  function onInputViewKeyPress() {
    return onInputViewKeyPress$lambda;
  }
  function vw001(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService$stTask(this.eventEmitter_0);
  }
  vw001.prototype.registerEvents_0 = function () {
  };
  function vw001$onInput$lambda(this$vw001) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      this$vw001.inputVal = input.value;
      return Unit;
    };
  }
  vw001.prototype.onInput = function () {
    return vw001$onInput$lambda(this);
  };
  function vw001$onSubmit$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function vw001$onSubmit$lambda$lambda(this$vw001, closure$task) {
    return function ($receiver) {
      todoItem_0($receiver, this$vw001.storage_0, closure$task, vw001$onSubmit$lambda$lambda$lambda);
      return Unit;
    };
  }
  function vw001$onSubmit$lambda(this$vw001) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      var id = randomId();
      var task = new Task(id, this$vw001.inputVal);
      this$vw001.storage_0.put_xwzc9p$(id, task);
      (tmp$ = document.getElementById('task-collection')) != null ? (tmp$.append(li_0(get_create(document), 'collection-item avatar dismissable', vw001$onSubmit$lambda$lambda(this$vw001, task))), Unit) : null;
      return Unit;
    };
  }
  vw001.prototype.onSubmit = function () {
    return vw001$onSubmit$lambda(this);
  };
  function vw001$show$lambda(this$vw001) {
    return function () {
      this$vw001.formContainer.appendChild(this$vw001.getForm());
      return Unit;
    };
  }
  vw001.prototype.show = function () {
    this.storage_0.getAll_o14v8n$(vw001$show$lambda(this));
  };
  function vw001$getForm$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('vw001 ' + Todo$Companion_getInstance().gsRota);
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('border_color');
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$vw001) {
    return function ($receiver) {
      set_onInputFunction($receiver, this$vw001.onInput());
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.for_ = 'icon_prefix';
    $receiver.unaryPlus_pdl1vz$('add a new task');
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$vw001) {
    return function ($receiver) {
      i($receiver, 'material-icons prefix', vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      inputView($receiver, vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$vw001));
      label($receiver, 'active', vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda(this$vw001) {
    return function ($receiver) {
      div($receiver, 'input-field', vw001$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$vw001));
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda$lambda_0(this$vw001) {
    return function ($receiver) {
      div($receiver, 'row', vw001$getForm$lambda$lambda$lambda$lambda$lambda(this$vw001));
      set_onSubmitFunction($receiver, this$vw001.onSubmit());
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda(this$vw001) {
    return function ($receiver) {
      span($receiver, 'card-title', vw001$getForm$lambda$lambda$lambda$lambda);
      form($receiver, '/', null, void 0, void 0, vw001$getForm$lambda$lambda$lambda$lambda_0(this$vw001));
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'task-collection');
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda_0(this$vw001) {
    return function ($receiver) {
      listView($receiver, this$vw001.storage_0, vw001$getForm$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function vw001$getForm$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Teste do zuza 123');
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda$lambda$lambda_0(event) {
    (new Todo()).abrir_puj7f4$('vw002', '');
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Click me');
    set_onClickFunction($receiver, vw001$getForm$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function vw001$getForm$lambda$lambda$lambda_1($receiver) {
    get_br($receiver);
    span($receiver, 'card-title', vw001$getForm$lambda$lambda$lambda$lambda_2);
    button($receiver, void 0, void 0, void 0, void 0, vw001$getForm$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function vw001$getForm$lambda$lambda(this$vw001) {
    return function ($receiver) {
      div($receiver, 'card-content', vw001$getForm$lambda$lambda$lambda(this$vw001));
      div($receiver, 'card-action', vw001$getForm$lambda$lambda$lambda_0(this$vw001));
      div($receiver, 'card_content', vw001$getForm$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function vw001$getForm$lambda(this$vw001) {
    return function ($receiver) {
      div($receiver, '', vw001$getForm$lambda$lambda(this$vw001));
      return Unit;
    };
  }
  vw001.prototype.getForm = function () {
    return div_0(get_create(document), void 0, vw001$getForm$lambda(this));
  };
  vw001.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'vw001',
    interfaces: []
  };
  function vw002(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storageRegras_0 = new StorageService$stRegras(this.eventEmitter_0);
  }
  vw002.prototype.registerEvents_0 = function () {
  };
  function vw002$show$lambda(this$vw002) {
    return function () {
      this$vw002.formContainer.appendChild(this$vw002.getForm());
      return Unit;
    };
  }
  vw002.prototype.show = function () {
    this.storageRegras_0.getRegras_o14v8n$(vw002$show$lambda(this));
  };
  function vw002$getForm$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('vw002 ' + Todo$Companion_getInstance().gsRota);
    return Unit;
  }
  function vw002$getForm$lambda$lambda$lambda($receiver) {
    span($receiver, 'card-title', vw002$getForm$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function vw002$getForm$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'task-collection');
    return Unit;
  }
  function vw002$getForm$lambda$lambda$lambda_0(this$vw002) {
    return function ($receiver) {
      lvRegras($receiver, this$vw002.storageRegras_0, vw002$getForm$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function vw002$getForm$lambda$lambda(this$vw002) {
    return function ($receiver) {
      div($receiver, 'card-content', vw002$getForm$lambda$lambda$lambda);
      div($receiver, 'card-action', vw002$getForm$lambda$lambda$lambda_0(this$vw002));
      return Unit;
    };
  }
  function vw002$getForm$lambda$lambda$lambda_1(event) {
    (new Todo()).abrir_puj7f4$('vw001', '');
    return Unit;
  }
  function vw002$getForm$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Abrir vw001');
    set_onClickFunction($receiver, vw002$getForm$lambda$lambda$lambda_1);
    return Unit;
  }
  function vw002$getForm$lambda(this$vw002) {
    return function ($receiver) {
      div($receiver, void 0, vw002$getForm$lambda$lambda(this$vw002));
      button($receiver, void 0, void 0, void 0, void 0, vw002$getForm$lambda$lambda_0);
      return Unit;
    };
  }
  vw002.prototype.getForm = function () {
    return div_0(get_create(document), void 0, vw002$getForm$lambda(this));
  };
  vw002.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'vw002',
    interfaces: []
  };
  function vw003(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService$stNotas(this.eventEmitter_0);
  }
  vw003.prototype.registerEvents_0 = function () {
  };
  vw003.prototype.show = function () {
    this.formContainer.appendChild(this.getForm());
  };
  function vw003$getForm$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('003 - Confer\xEAncia de nota fiscal');
    return Unit;
  }
  function vw003$getForm$lambda$lambda$lambda$lambda$lambda(this$vw003) {
    return function ($receiver) {
      var tmp$;
      $receiver.placeholder = 'Chave de acesso da nota fiscal';
      set_id($receiver, 'txChave');
      $receiver.value = '35171203535509000127550010000284321064111165';
      set_onKeyPressFunction($receiver, typeof (tmp$ = this$vw003.onInputViewKeyPress()) === 'function' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function vw003$getForm$lambda$lambda$lambda$lambda(this$vw003) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, vw003$getForm$lambda$lambda$lambda$lambda$lambda(this$vw003));
      return Unit;
    };
  }
  function vw003$getForm$lambda$lambda$lambda_0(this$vw003) {
    return function ($receiver) {
      div($receiver, 'input-field col s6', vw003$getForm$lambda$lambda$lambda$lambda(this$vw003));
      return Unit;
    };
  }
  function vw003$getForm$lambda$lambda$lambda$lambda_0(this$vw003) {
    return function (it) {
      this$vw003.abrirNf0();
      return Unit;
    };
  }
  function vw003$getForm$lambda$lambda$lambda_1(this$vw003) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'btn btn-dlg';
      $receiver_0.put_xwzc9p$('class', value);
      $receiver.attributes.put_xwzc9p$('type', 'button');
      $receiver.attributes.put_xwzc9p$('id', 'btNf');
      set_onClickFunction($receiver, vw003$getForm$lambda$lambda$lambda$lambda_0(this$vw003));
      $receiver.unaryPlus_pdl1vz$('Abrir nota fiscal');
      return Unit;
    };
  }
  function vw003$getForm$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'formNota';
    $receiver_0.put_xwzc9p$('id', value);
    return Unit;
  }
  function vw003$getForm$lambda$lambda(this$vw003) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'principal';
      $receiver_0.put_xwzc9p$('id', value);
      span($receiver, 'card-title', vw003$getForm$lambda$lambda$lambda);
      form($receiver, '/', null, void 0, void 0, vw003$getForm$lambda$lambda$lambda_0(this$vw003));
      button($receiver, void 0, void 0, void 0, void 0, vw003$getForm$lambda$lambda$lambda_1(this$vw003));
      div($receiver, void 0, vw003$getForm$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function vw003$getForm$lambda(this$vw003) {
    return function ($receiver) {
      div($receiver, void 0, vw003$getForm$lambda$lambda(this$vw003));
      return Unit;
    };
  }
  vw003.prototype.getForm = function () {
    return div_0(get_create(document), void 0, vw003$getForm$lambda(this));
  };
  function vw003$abrirNf0$lambda(closure$htmlDivDados, this$vw003) {
    return function () {
      closure$htmlDivDados.v = this$vw003.abrirNf1_e0t6x9$(closure$htmlDivDados.v);
      return Unit;
    };
  }
  vw003.prototype.abrirNf0 = function () {
    var tmp$, tmp$_0;
    var a = Kotlin.isType(tmp$ = document.getElementById('txChave'), HTMLInputElement) ? tmp$ : throwCCE();
    var b = a.value;
    var sOrdem = a.value;
    if (!equals(sOrdem, '')) {
      var htmlDivDados = {v: Kotlin.isType(tmp$_0 = document.getElementById('formNota'), HTMLDivElement) ? tmp$_0 : throwCCE()};
      this.storage_0.getNotas_a4mwiz$(ensureNotNull(sOrdem), vw003$abrirNf0$lambda(htmlDivDados, this));
    }
  };
  function vw003$abrirNf1$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Informa\xE7\xF5es da nota fiscal:');
    return Unit;
  }
  function vw003$abrirNf1$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function vw003$abrirNf1$lambda$lambda$lambda$lambda(this$vw003, closure$notas) {
    return function ($receiver) {
      this$vw003.todoItem1_yzvi8k$($receiver, this$vw003.storage_0, closure$notas, vw003$abrirNf1$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function vw003$abrirNf1$lambda$lambda(this$vw003) {
    return function ($receiver) {
      get_br($receiver);
      span($receiver, '', vw003$abrirNf1$lambda$lambda$lambda);
      var $receiver_0 = this$vw003.storage_0;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$vw003_0 = this$vw003;
        var notas = element.value;
        li($receiver, 'collection-item avatar dismissable', vw003$abrirNf1$lambda$lambda$lambda$lambda(this$vw003_0, notas));
      }
      return Unit;
    };
  }
  function vw003$abrirNf1$lambda(this$vw003) {
    return function ($receiver) {
      ul($receiver, void 0, vw003$abrirNf1$lambda$lambda(this$vw003));
      return Unit;
    };
  }
  vw003.prototype.abrirNf1_e0t6x9$ = function (htmlDivDados) {
    clear(htmlDivDados);
    var node = div_0(get_create(document), void 0, vw003$abrirNf1$lambda(this));
    htmlDivDados.appendChild(node);
    return htmlDivDados;
  };
  function vw003$todoItem1$lambda$lambda(closure$obj) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(ff$Companion_getInstance().ffZeroLeft_bm4lxs$(closure$obj.NOT_CLIENTE.toString(), 6) + ' ' + closure$obj.NOT_RAZAO);
      return Unit;
    };
  }
  function vw003$todoItem1$lambda$lambda_0(closure$obj) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Nota n\xFAmero - ' + ff$Companion_getInstance().ffVsRel_bm4lxs$(closure$obj.NOT_NRNOTA.toString(), 0));
      return Unit;
    };
  }
  function vw003$todoItem1$lambda$lambda_1(closure$obj) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Data da nota - ' + ff$Companion_getInstance().ffDsBr_pdl1vj$(closure$obj.NOT_DTEMI.toString()));
      return Unit;
    };
  }
  function vw003$todoItem1$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Chave de acesso:');
    return Unit;
  }
  function vw003$todoItem1$lambda$lambda_3(closure$obj) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(replace(ff$Companion_getInstance().ffSeparador_bm4lxs$(closure$obj.NOT_CHAVEACESSO.toString(), 4), '.', ' '));
      return Unit;
    };
  }
  function vw003$todoItem1$lambda$lambda$lambda(closure$obj) {
    return function (it) {
      (new Todo()).abrir_puj7f4$('vw004', JSON.stringify(closure$obj));
      return Unit;
    };
  }
  function vw003$todoItem1$lambda$lambda_4(closure$obj) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'btn btn-dlg';
      $receiver_0.put_xwzc9p$('class', value);
      $receiver.attributes.put_xwzc9p$('type', 'button');
      $receiver.attributes.put_xwzc9p$('id', 'btAbir');
      set_onClickFunction($receiver, vw003$todoItem1$lambda$lambda$lambda(closure$obj));
      $receiver.unaryPlus_pdl1vz$('Confer\xEAncia');
      return Unit;
    };
  }
  function vw003$todoItem1$lambda(closure$obj, closure$block) {
    return function ($receiver) {
      set_id($receiver, closure$obj.NOT_OF);
      span($receiver, 'title left-align', vw003$todoItem1$lambda$lambda(closure$obj));
      get_br($receiver);
      span($receiver, 'title left-align', vw003$todoItem1$lambda$lambda_0(closure$obj));
      get_br($receiver);
      span($receiver, 'title left-align', vw003$todoItem1$lambda$lambda_1(closure$obj));
      get_br($receiver);
      span($receiver, 'title left-align', vw003$todoItem1$lambda$lambda_2);
      get_br($receiver);
      span($receiver, 'title left-align', vw003$todoItem1$lambda$lambda_3(closure$obj));
      get_br($receiver);
      button($receiver, void 0, void 0, void 0, void 0, vw003$todoItem1$lambda$lambda_4(closure$obj));
      closure$block($receiver);
      return Unit;
    };
  }
  vw003.prototype.todoItem1_yzvi8k$ = function ($receiver, storage, obj, block) {
    var inputId = randomId();
    div($receiver, void 0, vw003$todoItem1$lambda(obj, block));
  };
  function vw003$onInputViewKeyPress$lambda(it) {
    var tmp$;
    if (it.which === 13) {
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      input.value = '';
    }
    return Unit;
  }
  vw003.prototype.onInputViewKeyPress = function () {
    return vw003$onInputViewKeyPress$lambda;
  };
  vw003.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'vw003',
    interfaces: []
  };
  function vw004(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService$stNotas(this.eventEmitter_0);
  }
  vw004.prototype.registerEvents_0 = function () {
  };
  vw004.prototype.show_61zpoe$ = function (Nota) {
    console.log(Nota);
    this.formContainer.appendChild(this.getForm());
  };
  function vw004$getForm$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('004 - Itens da nota fiscal');
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nota: ');
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda$lambda$lambda($receiver) {
    var tmp$;
    $receiver.placeholder = 'Chave de acesso da nota fiscal';
    set_id($receiver, 'txChave');
    $receiver.value = '35171203535509000127550010000284321064111165';
    set_onKeyPressFunction($receiver, typeof (tmp$ = onInputViewKeyPress()) === 'function' ? tmp$ : throwCCE());
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda$lambda($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, vw004$getForm$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda_1($receiver) {
    div($receiver, 'input-field col s6', vw004$getForm$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda$lambda_0(it) {
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    $receiver.attributes.put_xwzc9p$('id', 'btNf');
    set_onClickFunction($receiver, vw004$getForm$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('Abrir');
    return Unit;
  }
  function vw004$getForm$lambda$lambda$lambda_3($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'formNota';
    $receiver_0.put_xwzc9p$('id', value);
    return Unit;
  }
  function vw004$getForm$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'principal';
    $receiver_0.put_xwzc9p$('id', value);
    span($receiver, 'card-title', vw004$getForm$lambda$lambda$lambda);
    get_br($receiver);
    span($receiver, void 0, vw004$getForm$lambda$lambda$lambda_0);
    form($receiver, '/', null, void 0, void 0, vw004$getForm$lambda$lambda$lambda_1);
    button($receiver, void 0, void 0, void 0, void 0, vw004$getForm$lambda$lambda$lambda_2);
    div($receiver, void 0, vw004$getForm$lambda$lambda$lambda_3);
    return Unit;
  }
  function vw004$getForm$lambda($receiver) {
    div($receiver, void 0, vw004$getForm$lambda$lambda);
    return Unit;
  }
  vw004.prototype.getForm = function () {
    return div_0(get_create(document), void 0, vw004$getForm$lambda);
  };
  vw004.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'vw004',
    interfaces: []
  };
  function Cabec(formCabec) {
    this.formCabec = formCabec;
  }
  Cabec.prototype.show = function () {
    this.formCabec.appendChild(this.getForm());
  };
  function Cabec$getForm$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'logo-container';
    $receiver_0.put_xwzc9p$('id', value);
    $receiver.attributes.put_xwzc9p$('href', '#');
    var $receiver_1 = $receiver.attributes;
    var value_0 = 'brand-logo';
    $receiver_1.put_xwzc9p$('class', value_0);
    $receiver.unaryPlus_pdl1vz$('Estoque');
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda(event) {
    (new Todo()).abrir_puj7f4$('Principal', '');
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'material-icons';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.unaryPlus_pdl1vz$('arrow_back');
    set_onClickFunction($receiver, Cabec$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.attributes.put_xwzc9p$('href', '#');
    i($receiver, void 0, Cabec$getForm$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda($receiver) {
    a($receiver, void 0, void 0, void 0, Cabec$getForm$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda_0($receiver) {
    li($receiver, void 0, Cabec$getForm$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda$lambda_0(event) {
    (new Todo()).abrir_puj7f4$('Principal', '');
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('menu');
    set_onClickFunction($receiver, Cabec$getForm$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'data-activates';
    var value = 'nav-mobile';
    $receiver_0.put_xwzc9p$(key, value);
    var $receiver_1 = $receiver.attributes;
    var value_0 = 'button-collapse';
    $receiver_1.put_xwzc9p$('class', value_0);
    i($receiver, 'material-icons', Cabec$getForm$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Cabec$getForm$lambda$lambda($receiver) {
    a($receiver, void 0, void 0, void 0, Cabec$getForm$lambda$lambda$lambda);
    if (Todo$Companion_getInstance().bPassword) {
      ul($receiver, 'right', Cabec$getForm$lambda$lambda$lambda_0);
      a($receiver, void 0, void 0, void 0, Cabec$getForm$lambda$lambda$lambda_1);
    }
    return Unit;
  }
  function Cabec$getForm$lambda($receiver) {
    div($receiver, 'nav-wrapper', Cabec$getForm$lambda$lambda);
    return Unit;
  }
  Cabec.prototype.getForm = function () {
    return div_0(get_create(document), void 0, Cabec$getForm$lambda);
  };
  Cabec.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cabec',
    interfaces: []
  };
  function Password(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService$stTask(this.eventEmitter_0);
  }
  Password.prototype.registerEvents_0 = function () {
  };
  function Password$onInput$lambda(this$Password) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      this$Password.inputVal = input.value;
      return Unit;
    };
  }
  Password.prototype.onInput = function () {
    return Password$onInput$lambda(this);
  };
  function Password$show$lambda(this$Password) {
    return function () {
      this$Password.formContainer.appendChild(this$Password.getForm());
      return Unit;
    };
  }
  Password.prototype.show = function () {
    this.storage_0.getAll_o14v8n$(Password$show$lambda(this));
  };
  function Password$getForm$lambda$lambda$lambda$lambda$lambda(this$Password) {
    return function ($receiver) {
      $receiver.placeholder = 'Usu\xE1rio';
      set_id($receiver, 'txUsuario');
      $receiver.type = InputType.text;
      set_onInputFunction($receiver, this$Password.onInput());
      return Unit;
    };
  }
  function Password$getForm$lambda$lambda$lambda$lambda(this$Password) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, Password$getForm$lambda$lambda$lambda$lambda$lambda(this$Password));
      return Unit;
    };
  }
  function Password$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Password) {
    return function ($receiver) {
      $receiver.placeholder = 'Senha';
      set_id($receiver, 'txSenha');
      $receiver.type = InputType.password;
      set_onInputFunction($receiver, this$Password.onInput());
      return Unit;
    };
  }
  function Password$getForm$lambda$lambda$lambda$lambda_0(this$Password) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, Password$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Password));
      return Unit;
    };
  }
  function Password$getForm$lambda$lambda$lambda$lambda$lambda_1(it) {
    (new Todo()).abrir_puj7f4$('Principal', '');
    return Unit;
  }
  function Password$getForm$lambda$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    Todo$Companion_getInstance().bPassword = true;
    set_onClickFunction($receiver, Password$getForm$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('Entrar');
    return Unit;
  }
  function Password$getForm$lambda$lambda$lambda(this$Password) {
    return function ($receiver) {
      get_br($receiver);
      get_br($receiver);
      div($receiver, 'input-field col s6', Password$getForm$lambda$lambda$lambda$lambda(this$Password));
      div($receiver, 'input-field col s6', Password$getForm$lambda$lambda$lambda$lambda_0(this$Password));
      get_br($receiver);
      button($receiver, void 0, void 0, void 0, void 0, Password$getForm$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function Password$getForm$lambda$lambda(this$Password) {
    return function ($receiver) {
      ul($receiver, void 0, Password$getForm$lambda$lambda$lambda(this$Password));
      return Unit;
    };
  }
  function Password$getForm$lambda(this$Password) {
    return function ($receiver) {
      form($receiver, '/', null, void 0, void 0, Password$getForm$lambda$lambda(this$Password));
      return Unit;
    };
  }
  Password.prototype.getForm = function () {
    return div_0(get_create(document), void 0, Password$getForm$lambda(this));
  };
  Password.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Password',
    interfaces: []
  };
  function Principal(formContainer) {
    this.formContainer = formContainer;
  }
  Principal.prototype.registerEvents_0 = function () {
  };
  Principal.prototype.show = function () {
    this.formContainer.appendChild(this.getForm());
  };
  function Principal$getForm$lambda$lambda$lambda$lambda(event) {
    (new Todo()).abrir_puj7f4$('vw003', '');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    set_onClickFunction($receiver, Principal$getForm$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('CONSULTA DE PRODUTOS');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda$lambda_0(event) {
    (new Todo()).abrir_puj7f4$('vw001', '');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    set_onClickFunction($receiver, Principal$getForm$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('ENTRADA DE MERCADORIAS');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    $receiver.unaryPlus_pdl1vz$('INVENT\xC1RIO');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    $receiver.unaryPlus_pdl1vz$('LOTE');
    return Unit;
  }
  function Principal$getForm$lambda$lambda$lambda_3($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'btn btn-dlg';
    $receiver_0.put_xwzc9p$('class', value);
    $receiver.attributes.put_xwzc9p$('type', 'button');
    $receiver.unaryPlus_pdl1vz$('SAIR');
    return Unit;
  }
  function Principal$getForm$lambda$lambda($receiver) {
    get_br($receiver);
    button($receiver, void 0, void 0, void 0, void 0, Principal$getForm$lambda$lambda$lambda);
    get_br($receiver);
    get_br($receiver);
    button($receiver, void 0, void 0, void 0, void 0, Principal$getForm$lambda$lambda$lambda_0);
    get_br($receiver);
    get_br($receiver);
    button($receiver, void 0, void 0, void 0, void 0, Principal$getForm$lambda$lambda$lambda_1);
    get_br($receiver);
    get_br($receiver);
    button($receiver, void 0, void 0, void 0, void 0, Principal$getForm$lambda$lambda$lambda_2);
    get_br($receiver);
    get_br($receiver);
    button($receiver, void 0, void 0, void 0, void 0, Principal$getForm$lambda$lambda$lambda_3);
    return Unit;
  }
  function Principal$getForm$lambda($receiver) {
    form($receiver, '/', null, void 0, void 0, Principal$getForm$lambda$lambda);
    return Unit;
  }
  Principal.prototype.getForm = function () {
    return div_0(get_create(document), void 0, Principal$getForm$lambda);
  };
  Principal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Principal',
    interfaces: []
  };
  function Todo() {
    Todo$Companion_getInstance();
  }
  function Todo$Companion() {
    Todo$Companion_instance = this;
    var tmp$, tmp$_0, tmp$_1;
    this.htmlDivCabec = Kotlin.isType(tmp$ = document.getElementById('formCabec'), HTMLDivElement) ? tmp$ : throwCCE();
    this.htmlDivPrincipal = Kotlin.isType(tmp$_0 = document.getElementById('formContainer'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.htmlDivMenu = Kotlin.isType(tmp$_1 = document.getElementById('formMenu'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.gsRota = '';
    this.bPassword = false;
  }
  Todo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Todo$Companion_instance = null;
  function Todo$Companion_getInstance() {
    if (Todo$Companion_instance === null) {
      new Todo$Companion();
    }
    return Todo$Companion_instance;
  }
  Todo.prototype.abrirCabec_61zpoe$ = function (sForm) {
    if (equals(sForm, 'Cabec')) {
      clear(Todo$Companion_getInstance().htmlDivCabec);
      (new Cabec(Todo$Companion_getInstance().htmlDivCabec)).show();
    }
  };
  Todo.prototype.abrir_puj7f4$ = function (sForm, sParametro) {
    Todo$Companion_getInstance().gsRota = Todo$Companion_getInstance().gsRota + ('/' + sForm);
    equals(sForm, 'Todo');
    if (equals(sForm, 'Password')) {
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new Password(Todo$Companion_getInstance().htmlDivPrincipal)).show();
    }
    if (equals(sForm, 'Principal')) {
      clear(Todo$Companion_getInstance().htmlDivCabec);
      (new Cabec(Todo$Companion_getInstance().htmlDivCabec)).show();
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new Principal(Todo$Companion_getInstance().htmlDivPrincipal)).show();
      Todo$Companion_getInstance().gsRota = '';
    }
    if (equals(sForm, 'vw001')) {
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new vw001(Todo$Companion_getInstance().htmlDivPrincipal)).show();
    }
    if (equals(sForm, 'vw002')) {
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new vw002(Todo$Companion_getInstance().htmlDivPrincipal)).show();
    }
    if (equals(sForm, 'vw003')) {
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new vw003(Todo$Companion_getInstance().htmlDivPrincipal)).show();
    }
    if (equals(sForm, 'vw004')) {
      clear(Todo$Companion_getInstance().htmlDivPrincipal);
      (new vw004(Todo$Companion_getInstance().htmlDivPrincipal)).show_61zpoe$(sParametro);
    }
  };
  Todo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Todo',
    interfaces: []
  };
  function ff() {
    ff$Companion_getInstance();
  }
  function ff$Companion() {
    ff$Companion_instance = this;
  }
  ff$Companion.prototype.ffVsi_pdl1vj$ = function (sNumero) {
    try {
      var sNumero_0 = sNumero;
      if (sNumero_0 == null || equals('', sNumero_0) || equals('null', sNumero_0)) {
        sNumero_0 = '0';
      }
      sNumero_0 = replace(sNumero_0, '.', '');
      return toInt(sNumero_0);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e.message);
        return 0;
      }
       else
        throw e;
    }
  };
  ff$Companion.prototype.ffZeroLeft_bm4lxs$ = function (sString, tam) {
    var sStr1 = sString;
    while (tam > sStr1.toString().length) {
      var other = sStr1;
      sStr1 = String.fromCharCode(48) + other;
    }
    sStr1 = sStr1.substring(0, tam);
    return sStr1;
  };
  ff$Companion.prototype.ffDsBr_pdl1vj$ = function (dtData) {
    var sResult = '';
    if (dtData != null) {
      var dData1 = new Date(dtData);
      var sDia = ff$Companion_getInstance().ffZeroLeft_bm4lxs$(dData1.getDay().toString(), 2);
      var sMes = ff$Companion_getInstance().ffZeroLeft_bm4lxs$(dData1.getMonth().toString(), 2);
      var sAno = dData1.getFullYear().toString();
      sResult = sDia + '/' + sMes + '/' + sAno;
    }
    return sResult;
  };
  ff$Companion.prototype.format_j6vyb1$ = function ($receiver, digits) {
    return $receiver.toFixed(digits);
  };
  ff$Companion.prototype.format_lcymw2$ = function ($receiver, digits) {
    return $receiver.toFixed(digits);
  };
  ff$Companion.prototype.ffVsRel_bm4lxs$ = function (sValor, Dig) {
    var sResult = '0,00';
    if (sValor != null) {
      var cValor = toDouble(sValor);
      sResult = this.format_j6vyb1$(cValor, Dig).toString();
      sResult = replace(replace(sResult, ',', '$'), '.', '#');
      sResult = replace(replace(sResult, '$', '.'), '#', ',');
      sResult = this.ffSeparadorMilhar_61zpoe$(sResult);
    }
    return sResult;
  };
  ff$Companion.prototype.ffVsRel_61zpoe$ = function (sValor) {
    return this.ffVsRel_bm4lxs$(sValor, 0);
  };
  ff$Companion.prototype.ffVcRel_14dthe$ = function (sValor) {
    return this.ffVsRel_bm4lxs$(sValor.toString(), 0);
  };
  ff$Companion.prototype.ffSeparador_bm4lxs$ = function (Valor, Dig) {
    var sResult = '';
    var sDecimal = '';
    if (Valor != null && Valor.length > 0) {
      if (indexOf(Valor, ',') > 0) {
        var endIndex = indexOf(Valor, ',');
        sResult = Valor.substring(0, endIndex);
        var startIndex = indexOf(Valor, ',');
        var endIndex_0 = Valor.length;
        sDecimal = Valor.substring(startIndex, endIndex_0);
      }
       else {
        var endIndex_1 = Valor.length;
        sResult = Valor.substring(0, endIndex_1);
        sDecimal = '';
      }
      var sMilhar = '';
      var sCont = '';
      var iSep = Dig;
      var iCont = sResult.length - 1 | 0;
      while (iCont >= 0) {
        if (iSep > 0) {
          var $receiver = sResult.charCodeAt(iCont);
          var other = sMilhar;
          sMilhar = String.fromCharCode($receiver) + other;
          iSep = iSep - 1 | 0;
          iCont = iCont - 1 | 0;
        }
         else {
          sMilhar = '.' + sMilhar;
          iSep = Dig;
        }
      }
      println(sMilhar);
      sResult = sMilhar + sDecimal;
    }
    return sResult;
  };
  ff$Companion.prototype.ffSeparadorMilhar_61zpoe$ = function (Valor) {
    return this.ffSeparador_bm4lxs$(Valor, 3);
  };
  ff$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ff$Companion_instance = null;
  function ff$Companion_getInstance() {
    if (ff$Companion_instance === null) {
      new ff$Companion();
    }
    return ff$Companion_instance;
  }
  ff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ff',
    interfaces: []
  };
  var package$events = _.events || (_.events = {});
  package$events.TodoEventEmitter = TodoEventEmitter;
  package$events.TodoRegras = TodoRegras;
  _.main_kand9s$ = main;
  var package$model = _.model || (_.model = {});
  package$model.Funcionario = Funcionario;
  package$model.Notas = Notas;
  package$model.Regras = Regras;
  package$model.Task = Task;
  var package$services = _.services || (_.services = {});
  package$services.Ajax = Ajax;
  StorageService.stTask = StorageService$stTask;
  StorageService.stRegras = StorageService$stRegras;
  StorageService.stNotas = StorageService$stNotas;
  package$services.StorageService = StorageService;
  var package$views = _.views || (_.views = {});
  package$views.lvRegras_jjauij$ = lvRegras;
  package$views.todoItem_wzguh8$ = todoItem;
  package$views.checkTaskIsDone_ojpa3v$ = checkTaskIsDone;
  package$views.markAsDone_6g2q5w$ = markAsDone;
  package$views.randomIdRegras = randomIdRegras;
  package$views.inputViewRegras_q9xvdb$ = inputViewRegras;
  package$views.onInputViewKeyPressRegras = onInputViewKeyPressRegras;
  package$views.listView_n90gcm$ = listView;
  package$views.todoItem_c0u2ac$ = todoItem_0;
  package$views.checkTaskIsDone_y1s6kq$ = checkTaskIsDone_0;
  package$views.markAsDone_t0ft7w$ = markAsDone_0;
  package$views.randomId = randomId;
  package$views.inputView_q9xvdb$ = inputView;
  package$views.onInputViewKeyPress = onInputViewKeyPress;
  var package$forms = package$views.forms || (package$views.forms = {});
  package$forms.vw001 = vw001;
  package$forms.vw002 = vw002;
  package$forms.vw003 = vw003;
  package$forms.vw004 = vw004;
  var package$principal = package$views.principal || (package$views.principal = {});
  package$principal.Cabec = Cabec;
  package$principal.Password = Password;
  package$principal.Principal = Principal;
  Object.defineProperty(Todo, 'Companion', {
    get: Todo$Companion_getInstance
  });
  package$principal.Todo = Todo;
  Object.defineProperty(ff, 'Companion', {
    get: ff$Companion_getInstance
  });
  package$principal.ff = ff;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=main.js.map
