(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,sq='com.google.gwt.core.client.',tq='com.google.gwt.lang.',uq='com.google.gwt.user.client.',vq='com.google.gwt.user.client.impl.',wq='com.google.gwt.user.client.ui.',xq='com.manning.gwtip.javascript.scriptaculous.client.',yq='com.manning.gwtip.scriptaculous.client.',zq='java.lang.',Aq='java.util.';function rq(){}
function Ck(a){return this===a;}
function Dk(){return ll(this);}
function Ak(){}
_=Ak.prototype={};_.eQ=Ck;_.hC=Dk;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!nb(a,2)){return false;}return B(b,mb(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new Ak();_.eQ=C;_.hC=D;_.tI=7;function F(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function bb(a,b,c){return a[b]=c;}
function cb(b,a){return b[a];}
function eb(b,a){return b[a];}
function db(a){return a.length;}
function gb(e,d,c,b,a){return fb(e,d,c,b,0,db(b),a);}
function fb(j,i,g,c,e,a,b){var d,f,h;if((f=cb(c,e))<0){throw new yk();}h=F(new E(),f,cb(i,e),cb(g,e),j);++e;if(e<a){j=el(j,1);for(d=0;d<f;++d){bb(h,d,fb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bb(h,d,b);}}return h;}
function hb(f,e,c,g){var a,b,d;b=db(g);d=F(new E(),b,e,c,f);for(a=0;a<b;++a){bb(d,a,eb(g,a));}return d;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !nb(c,a.b)){throw new ak();}return bb(a,b,c);}
function E(){}
_=E.prototype=new Ak();_.tI=0;function lb(b,a){return !(!(b&&qb[b][a]));}
function mb(b,a){if(b!=null)lb(b.tI,a)||pb();return b;}
function nb(b,a){return b!=null&&lb(b.tI,a);}
function pb(){throw new lk();}
function ob(a){if(a!==null){throw new lk();}return a;}
function rb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var qb;function vb(){vb=rq;lc=xn(new vn());{hc=new sd();yd(hc);}}
function wb(b,a){vb();Dd(hc,b,a);}
function xb(a,b){vb();return ud(hc,a,b);}
function yb(){vb();return Fd(hc,'div');}
function zb(){vb();return Fd(hc,'img');}
function Ab(){vb();return Fd(hc,'tbody');}
function Bb(){vb();return Fd(hc,'td');}
function Cb(){vb();return Fd(hc,'tr');}
function Db(){vb();return Fd(hc,'table');}
function ac(b,a,d){vb();var c;c=o;{Fb(b,a,d);}}
function Fb(b,a,c){vb();var d;if(a===kc){if(cc(b)==8192){kc=null;}}d=Eb;Eb=b;try{c.y(b);}finally{Eb=d;}}
function bc(b,a){vb();ae(hc,b,a);}
function cc(a){vb();return be(hc,a);}
function dc(a){vb();vd(hc,a);}
function ec(a){vb();return ce(hc,a);}
function fc(a){vb();return wd(hc,a);}
function gc(a){vb();return xd(hc,a);}
function ic(a){vb();var b,c;c=true;if(lc.b>0){b=ob(Bn(lc,lc.b-1));if(!(c=null.hb())){bc(a,true);dc(a);}}return c;}
function jc(b,a){vb();de(hc,b,a);}
function mc(a,b,c){vb();ee(hc,a,b,c);}
function nc(a,b){vb();fe(hc,a,b);}
function oc(a,b){vb();zd(hc,a,b);}
function pc(a,b){vb();Ad(hc,a,b);}
function qc(b,a,c){vb();ge(hc,b,a,c);}
function rc(a,b){vb();Bd(hc,a,b);}
var Eb=null,hc=null,kc=null,lc;function uc(b,a){if(nb(a,4)){return xb(b,mb(a,4));}return x(rb(b,sc),a);}
function vc(a){return uc(this,a);}
function wc(){return y(rb(this,sc));}
function sc(){}
_=sc.prototype=new v();_.eQ=vc;_.hC=wc;_.tI=8;function Ac(a){return x(rb(this,xc),a);}
function Bc(){return y(rb(this,xc));}
function xc(){}
_=xc.prototype=new v();_.eQ=Ac;_.hC=Bc;_.tI=9;function bd(){bd=rq;dd=xn(new vn());{cd();}}
function cd(){bd();hd(new Dc());}
var dd;function Fc(){while((bd(),dd).b>0){ob(Bn((bd(),dd),0)).hb();}}
function ad(){return null;}
function Dc(){}
_=Dc.prototype=new Ak();_.ab=Fc;_.bb=ad;_.tI=10;function gd(){gd=rq;id=xn(new vn());qd=xn(new vn());{md();}}
function hd(a){gd();yn(id,a);}
function jd(){gd();var a,b;for(a=cm(id);Bl(a);){b=mb(Cl(a),5);b.ab();}}
function kd(){gd();var a,b,c,d;d=null;for(a=cm(id);Bl(a);){b=mb(Cl(a),5);c=b.bb();{d=c;}}return d;}
function ld(){gd();var a,b;for(a=cm(qd);Bl(a);){b=ob(Cl(a));null.hb();}}
function md(){gd();__gwt_initHandlers(function(){pd();},function(){return od();},function(){nd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function nd(){gd();var a;a=o;{jd();}}
function od(){gd();var a;a=o;{return kd();}}
function pd(){gd();var a;a=o;{ld();}}
var id,qd;function Dd(c,b,a){b.appendChild(a);}
function Fd(b,a){return $doc.createElement(a);}
function ae(c,b,a){b.cancelBubble=a;}
function be(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ce(b,a){return a.__eventBits||0;}
function de(c,b,a){b.removeChild(a);}
function ee(c,a,b,d){a[b]=d;}
function fe(c,a,b){a.__listener=b;}
function ge(c,b,a,d){b.style[a]=d;}
function rd(){}
_=rd.prototype=new Ak();_.tI=0;function ud(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function vd(b,a){a.returnValue=false;}
function wd(b,a){return le(a);}
function xd(c,a){var b=a.parentElement;return b||null;}
function yd(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=Cd;Cd=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ic($wnd.event)){Cd=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)ac($wnd.event,a,b);Cd=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function zd(c,a,b){qe(a,b);}
function Ad(c,a,b){if(!b)b='';a.innerText=b;}
function Bd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function sd(){}
_=sd.prototype=new rd();_.tI=0;var Cd=null;function je(b,a){b.__kids.push(a);a.__pendingSrc=b.__pendingSrc;}
function ke(k,i,j){i.src=j;if(i.complete){return;}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null;}}},0);c&&c.call(i);}
i.onload=function(){h(g);};i.onerror=function(){h(f);};i.onabort=function(){h(e);};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j];};}
function le(a){return a.__pendingSrc||a.src;}
function me(a){return a.__pendingSrc||null;}
function ne(b,a){return b[a]||null;}
function oe(e,b){var f=b.uniqueID;var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c].uniqueID==f){d.splice(c,1);b.__pendingSrc=null;return;}}}
function pe(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;ke(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d;}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null;}}}}
function qe(a,c){var b,d;if(dl(le(a),c)){return;}if(re===null){re=A();}b=me(a);if(b!==null){d=ne(re,b);if(uc(d,rb(a,sc))){pe(re,d);}else{oe(d,a);}}d=ne(re,c);if(d===null){ke(re,a,c);}else{je(d,a);}}
var re=null;function kh(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function lh(b,a){if(b.i!==null){kh(b,b.i,a);}b.i=a;}
function mh(b,a){oh(b.i,a);}
function nh(b,a){rc(b.i,a|ec(b.i));}
function oh(a,b){mc(a,'className',b);}
function ih(){}
_=ih.prototype=new Ak();_.tI=11;_.i=null;function ii(a){if(a.g){throw tk(new sk(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;nc(a.i,a);a.n();a.D();}
function ji(a){if(!a.g){throw tk(new sk(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.o();nc(a.i,null);a.g=false;}}
function ki(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw tk(new sk(),"This widget's parent does not implement HasWidgets");}}
function li(b,a){if(b.g){nc(b.i,null);}lh(b,a);if(b.g){nc(a,b);}}
function mi(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){ji(c);}c.h=null;}else{if(a!==null){throw tk(new sk(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){ii(c);}}}
function ni(){}
function oi(){}
function pi(a){}
function qi(){}
function ri(){}
function wh(){}
_=wh.prototype=new ih();_.n=ni;_.o=oi;_.y=pi;_.D=qi;_.F=ri;_.tI=12;_.g=false;_.h=null;function rg(b,a){mi(a,b);}
function tg(b,a){mi(a,null);}
function ug(){var a,b;for(b=this.v();Bh(b);){a=Ch(b);ii(a);}}
function vg(){var a,b;for(b=this.v();Bh(b);){a=Ch(b);ji(a);}}
function wg(){}
function xg(){}
function qg(){}
_=qg.prototype=new wh();_.n=ug;_.o=vg;_.D=wg;_.F=xg;_.tI=13;function Ee(a){a.f=Fh(new xh(),a);}
function Fe(a){Ee(a);return a;}
function af(c,a,b){ki(a);ai(c.f,a);wb(b,a.i);rg(c,a);}
function cf(b,c){var a;if(c.h!==b){return false;}tg(b,c);a=c.i;jc(gc(a),a);gi(b.f,c);return true;}
function df(){return ei(this.f);}
function ef(a){return cf(this,a);}
function De(){}
_=De.prototype=new qg();_.v=df;_.db=ef;_.tI=14;function te(a){Fe(a);li(a,yb());qc(a.i,'position','relative');qc(a.i,'overflow','hidden');return a;}
function ue(a,b){af(a,b,a.i);}
function we(a){qc(a,'left','');qc(a,'top','');qc(a,'position','');}
function xe(b){var a;a=cf(this,b);if(a){we(b.i);}return a;}
function se(){}
_=se.prototype=new De();_.db=xe;_.tI=15;function ze(a){Fe(a);a.e=Db();a.d=Ab();wb(a.e,a.d);li(a,a.e);return a;}
function Be(c,b,a){mc(b,'align',a.a);}
function Ce(c,b,a){qc(b,'verticalAlign',a.a);}
function ye(){}
_=ye.prototype=new De();_.tI=16;_.d=null;_.e=null;function kf(){kf=rq;hf(new gf(),'center');lf=hf(new gf(),'left');hf(new gf(),'right');}
var lf;function hf(b,a){b.a=a;return b;}
function gf(){}
_=gf.prototype=new Ak();_.tI=0;_.a=null;function qf(){qf=rq;of(new nf(),'bottom');of(new nf(),'middle');rf=of(new nf(),'top');}
var rf;function of(a,b){a.a=b;return a;}
function nf(){}
_=nf.prototype=new Ak();_.tI=0;_.a=null;function vf(a){a.a=(kf(),lf);a.c=(qf(),rf);}
function wf(a){ze(a);vf(a);a.b=Cb();wb(a.d,a.b);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function xf(b,c){var a;a=zf(b);wb(b.b,a);af(b,c,a);}
function zf(b){var a;a=Bb();Be(b,a,b.a);Ce(b,a,b.c);return a;}
function Af(c){var a,b;b=gc(c.i);a=cf(this,c);if(a){jc(this.b,b);}return a;}
function uf(){}
_=uf.prototype=new ye();_.db=Af;_.tI=17;_.b=null;function gg(){gg=rq;hp(new no());}
function eg(a,b){gg();fg(a,ag(new Ef(),a,b));mh(a,'gwt-Image');return a;}
function fg(b,a){b.b=a;}
function hg(a){return cg(a.b,a);}
function ig(a){switch(cc(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function Bf(){}
_=Bf.prototype=new wh();_.y=ig;_.tI=18;_.b=null;function Cf(){}
_=Cf.prototype=new Ak();_.tI=0;function Ff(b,a){li(a,zb());nh(a,229501);return b;}
function ag(b,a,c){Ff(b,a);dg(b,a,c);return b;}
function cg(b,a){return fc(a.i);}
function dg(b,a,c){oc(a.i,c);}
function Ef(){}
_=Ef.prototype=new Cf();_.tI=0;function lg(a){li(a,yb());nh(a,131197);mh(a,'gwt-Label');return a;}
function mg(b,a){lg(b);og(b,a);return b;}
function og(b,a){pc(b.i,a);}
function pg(a){switch(cc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function kg(){}
_=kg.prototype=new wh();_.y=pg;_.tI=19;function Eg(){Eg=rq;dh=hp(new no());}
function Dg(b,a){Eg();te(b);if(a===null){a=Fg();}li(b,a);ii(b);return b;}
function ah(){Eg();return bh(null);}
function bh(c){Eg();var a,b;b=mb(np(dh,c),6);if(b!==null){return b;}a=null;if(dh.c==0){ch();}op(dh,c,b=Dg(new yg(),a));return b;}
function Fg(){Eg();return $doc.body;}
function ch(){Eg();hd(new zg());}
function yg(){}
_=yg.prototype=new se();_.tI=20;var dh;function Bg(){var a,b;for(b=Bm(kn((Eg(),dh)));cn(b);){a=mb(dn(b),6);if(a.g){ji(a);}}}
function Cg(){return null;}
function zg(){}
_=zg.prototype=new Ak();_.ab=Bg;_.bb=Cg;_.tI=21;function qh(a){a.a=(kf(),lf);a.b=(qf(),rf);}
function rh(a){ze(a);qh(a);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function sh(b,d){var a,c;c=Cb();a=uh(b);wb(c,a);wb(b.d,c);af(b,d,a);}
function uh(b){var a;a=Bb();Be(b,a,b.a);Ce(b,a,b.b);return a;}
function vh(c){var a,b;b=gc(c.i);a=cf(this,c);if(a){jc(this.d,gc(b));}return a;}
function ph(){}
_=ph.prototype=new ye();_.db=vh;_.tI=22;function Fh(b,a){b.a=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function ai(a,b){di(a,b,a.b);}
function ci(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function di(d,e,a){var b,c;if(a<0||a>d.b){throw new vk();}if(d.b==d.a.a){c=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function ei(a){return zh(new yh(),a);}
function fi(c,b){var a;if(b<0||b>=c.b){throw new vk();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function gi(b,c){var a;a=ci(b,c);if(a==(-1)){throw new nq();}fi(b,a);}
function xh(){}
_=xh.prototype=new Ak();_.tI=0;_.a=null;_.b=0;function zh(b,a){b.b=a;return b;}
function Bh(a){return a.a<a.b.b-1;}
function Ch(a){if(a.a>=a.b.b){throw new nq();}return a.b.a[++a.a];}
function Dh(){return Bh(this);}
function Eh(){return Ch(this);}
function yh(){}
_=yh.prototype=new Ak();_.u=Dh;_.x=Eh;_.tI=0;_.a=(-1);function ti(){ti=rq;Ci=bq(new aq());Bi=hp(new no());Ai=hp(new no());hp(new no());Di=hp(new no());zi=xn(new vn());{dj();}}
function ui(a){ti();yn(zi,a);}
function vi(c,a){ti();var b;b=mb(np(Bi,c),11);if(b===null){b=xn(new vn());op(Bi,c,b);}yn(b,a);}
function wi(a,b){ti();if(a==null)a=new Array();a.push(b);return a;}
function xi(a,b){ti();if(a==null)a=new Array();a.push(b);return a;}
function yi(a){ti();a.destroy();}
function Ei(c,a){ti();var b;for(b=cm(zi);Bl(b);){mb(Cl(b),13).z(c,mb(np(Di,rb(a,sc)),7));}}
function Fi(e,a){ti();var b,c,d;b=mb(np(Di,rb(a,sc)),7);d=mb(np(Bi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(Bn(d,c),12).A(e,b);}}
function aj(c,a){ti();var b;for(b=cm(zi);Bl(b);){mb(Cl(b),13).B(c,mb(np(Di,rb(a,sc)),7));}}
function bj(e,a){ti();var b,c,d;b=mb(np(Di,rb(a,sc)),7);d=mb(np(Bi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(Bn(d,c),12).C(e,b);}}
function cj(c,a){ti();var b;for(b=cm(zi);Bl(b);){mb(Cl(b),13).E(c,mb(np(Di,rb(a,sc)),7));}}
function dj(){ti();var d={'onStart':function(c,a,b){cj(c,a.element);},'onEnd':function(c,a,b){aj(c,a.element);},'onDrag':function(c,a,b){Ei(c,a.element);}};$wnd.Draggables.addObserver(d);}
function ej(a){ti();var b,c;c=null;for(b=0;a!==null&&b<a.a;b++){if(a[b]!==null){c=xi(c,a[b]);}else{c=wi(c,ob(a[b]));}}return c;}
function gj(f,d,e,g,a,c){ti();var b;if(np(Ai,f)!==null){jj(f);}b=fj(rb(f.i,sc),null,e,g,a,c);op(Ai,f,rb(b,v));op(Di,rb(f.i,sc),f);}
function fj(b,d,e,f,a,c){ti();return new ($wnd.Draggable)(b,{'handle':d,'revert':e,'zindex':f,'constraint':a,'ghosting':c});}
function ij(h,a,c,f,g,e){ti();var b,d;b=ej(a);d=null;cq(Ci,h);hj(h.i,b,d,f,g,e,h);}
function hj(i,d,e,g,h,f,j){ti();$wnd.Droppables.add(i,{'accept':d,'containment':e,'hoverclass':g,'overlap':h,'greedy':f,'onDrop':function(a,b,c){Fi(j,a);},'onHover':function(a,b){bj(j,a);}});}
function jj(b){ti();var a;if(np(Ai,b)!==null){a=mb(pp(Ai,b),2);if(!eq(Ci,b))pp(Di,rb(b.i,sc));yi(a);}}
var zi,Ai,Bi,Ci,Di;function oj(){oj=rq;gg();}
function nj(b,a,c){oj();eg(b,c);b.a=a;return b;}
function mj(){}
_=mj.prototype=new Bf();_.tI=23;_.a=null;function Bj(a){a.c=rh(new ph());a.a=wf(new uf());a.b=rh(new ph());}
function Cj(a){Bj(a);return a;}
function Ej(c){var a,b,d;d=eg(new Bf(),'trash.png');a=hb('[Ljava.lang.String;',0,1,['file']);ij(d,a,null,null,null,true);vi(d,rj(new qj(),c));xf(c.a,c.c);xf(c.a,d);b=nj(new mj(),'foo','webpage.png');mh(b,'file');sh(c.c,b);gj(b,null,false,1000,null,true);b=nj(new mj(),'bar','webpage.png');mh(b,'file');sh(c.c,b);gj(b,null,false,1000,null,true);b=nj(new mj(),'baz','webpage.png');mh(b,'file');sh(c.c,b);gj(b,null,false,1000,null,true);ui(wj(new vj(),c));ue(ah(),c.a);ue(ah(),c.b);}
function pj(){}
_=pj.prototype=new Ak();_.tI=0;function rj(b,a){b.a=a;return b;}
function tj(b,a){sh(this.a.b,mg(new kg(),'Drop file '+mb(a,14).a));}
function uj(b,a){sh(this.a.b,mg(new kg(),'Hover '+mb(a,14).a));}
function qj(){}
_=qj.prototype=new Ak();_.A=tj;_.C=uj;_.tI=24;function wj(b,a){b.a=a;return b;}
function yj(a,b){sh(this.a.b,mg(new kg(),a+' '+hg(mb(b,15))));}
function zj(a,b){sh(this.a.b,mg(new kg(),a+' '+hg(mb(b,15))));}
function Aj(a,b){sh(this.a.b,mg(new kg(),a+' '+hg(mb(b,15))));}
function vj(){}
_=vj.prototype=new Ak();_.z=yj;_.B=zj;_.E=Aj;_.tI=25;function nl(b,a){a;return b;}
function ml(){}
_=ml.prototype=new Ak();_.tI=3;function qk(b,a){nl(b,a);return b;}
function pk(){}
_=pk.prototype=new ml();_.tI=4;function Fk(b,a){qk(b,a);return b;}
function Ek(){}
_=Ek.prototype=new pk();_.tI=5;function ak(){}
_=ak.prototype=new Ek();_.tI=26;function ek(){ek=rq;fk=dk(new ck(),false);gk=dk(new ck(),true);}
function dk(a,b){ek();a.a=b;return a;}
function hk(a){return nb(a,16)&&mb(a,16).a==this.a;}
function ik(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function jk(a){ek();return a?gk:fk;}
function ck(){}
_=ck.prototype=new Ak();_.eQ=hk;_.hC=ik;_.tI=27;_.a=false;var fk,gk;function lk(){}
_=lk.prototype=new Ek();_.tI=28;function tk(b,a){Fk(b,a);return b;}
function sk(){}
_=sk.prototype=new Ek();_.tI=29;function wk(b,a){Fk(b,a);return b;}
function vk(){}
_=vk.prototype=new Ek();_.tI=30;function yk(){}
_=yk.prototype=new Ek();_.tI=31;function dl(b,a){if(!nb(a,1))return false;return fl(b,a);}
function el(b,a){return b.substr(a,b.length-a);}
function fl(a,b){return String(a)==b;}
function gl(a){return dl(this,a);}
function il(){var a=hl;if(!a){a=hl={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=gl;_.hC=il;_.tI=2;var hl=null;function ll(a){return s(a);}
function ql(b,a){Fk(b,a);return b;}
function pl(){}
_=pl.prototype=new Ek();_.tI=32;function tl(d,a,b){var c;while(a.u()){c=a.x();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function vl(a){throw ql(new pl(),'add');}
function wl(b){var a;a=tl(this,this.v(),b);return a!==null;}
function sl(){}
_=sl.prototype=new Ak();_.k=vl;_.m=wl;_.tI=0;function bm(b,a){throw wk(new vk(),'Index: '+a+', Size: '+b.b);}
function cm(a){return zl(new yl(),a);}
function dm(b,a){throw ql(new pl(),'add');}
function em(a){this.j(this.fb(),a);return true;}
function fm(e){var a,b,c,d,f;if(e===this){return true;}if(!nb(e,17)){return false;}f=mb(e,17);if(this.fb()!=f.fb()){return false;}c=cm(this);d=f.v();while(Bl(c)){a=Cl(c);b=Cl(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function gm(){var a,b,c,d;c=1;a=31;b=cm(this);while(Bl(b)){d=Cl(b);c=31*c+(d===null?0:d.hC());}return c;}
function hm(){return cm(this);}
function im(a){throw ql(new pl(),'remove');}
function xl(){}
_=xl.prototype=new sl();_.j=dm;_.k=em;_.eQ=fm;_.hC=gm;_.v=hm;_.cb=im;_.tI=33;function zl(b,a){b.c=a;return b;}
function Bl(a){return a.a<a.c.fb();}
function Cl(a){if(!Bl(a)){throw new nq();}return a.c.s(a.b=a.a++);}
function Dl(a){if(a.b<0){throw new sk();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function El(){return Bl(this);}
function Fl(){return Cl(this);}
function yl(){}
_=yl.prototype=new Ak();_.u=El;_.x=Fl;_.tI=0;_.a=0;_.b=(-1);function hn(f,d,e){var a,b,c;for(b=cp(f.p());Bo(b);){a=Co(b);c=a.q();if(d===null?c===null:d.eQ(c)){if(e){Do(b);}return a;}}return null;}
function jn(b){var a;a=b.p();return lm(new km(),b,a);}
function kn(b){var a;a=mp(b);return zm(new ym(),b,a);}
function ln(a){return hn(this,a,false)!==null;}
function mn(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!nb(d,18)){return false;}f=mb(d,18);c=jn(this);e=f.w();if(!sn(c,e)){return false;}for(a=nm(c);um(a);){b=vm(a);h=this.t(b);g=f.t(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function nn(b){var a;a=hn(this,b,false);return a===null?null:a.r();}
function on(){var a,b,c;b=0;for(c=cp(this.p());Bo(c);){a=Co(c);b+=a.hC();}return b;}
function pn(){return jn(this);}
function jm(){}
_=jm.prototype=new Ak();_.l=ln;_.eQ=mn;_.t=nn;_.hC=on;_.w=pn;_.tI=34;function sn(e,b){var a,c,d;if(b===e){return true;}if(!nb(b,19)){return false;}c=mb(b,19);if(c.fb()!=e.fb()){return false;}for(a=c.v();a.u();){d=a.x();if(!e.m(d)){return false;}}return true;}
function tn(a){return sn(this,a);}
function un(){var a,b,c;a=0;for(b=this.v();b.u();){c=b.x();if(c!==null){a+=c.hC();}}return a;}
function qn(){}
_=qn.prototype=new sl();_.eQ=tn;_.hC=un;_.tI=35;function lm(b,a,c){b.a=a;b.b=c;return b;}
function nm(b){var a;a=cp(b.b);return sm(new rm(),b,a);}
function om(a){return this.a.l(a);}
function pm(){return nm(this);}
function qm(){return this.b.a.c;}
function km(){}
_=km.prototype=new qn();_.m=om;_.v=pm;_.fb=qm;_.tI=36;function sm(b,a,c){b.a=c;return b;}
function um(a){return a.a.u();}
function vm(b){var a;a=b.a.x();return a.q();}
function wm(){return um(this);}
function xm(){return vm(this);}
function rm(){}
_=rm.prototype=new Ak();_.u=wm;_.x=xm;_.tI=0;function zm(b,a,c){b.a=a;b.b=c;return b;}
function Bm(b){var a;a=cp(b.b);return an(new Fm(),b,a);}
function Cm(a){return lp(this.a,a);}
function Dm(){return Bm(this);}
function Em(){return this.b.a.c;}
function ym(){}
_=ym.prototype=new sl();_.m=Cm;_.v=Dm;_.fb=Em;_.tI=0;function an(b,a,c){b.a=c;return b;}
function cn(a){return a.a.u();}
function dn(a){var b;b=a.a.x().r();return b;}
function en(){return cn(this);}
function fn(){return dn(this);}
function Fm(){}
_=Fm.prototype=new Ak();_.u=en;_.x=fn;_.tI=0;function wn(a){{zn(a);}}
function xn(a){wn(a);return a;}
function yn(b,a){jo(b.a,b.b++,a);return true;}
function zn(a){a.a=z();a.b=0;}
function Bn(b,a){if(a<0||a>=b.b){bm(b,a);}return fo(b.a,a);}
function Cn(b,a){return Dn(b,a,0);}
function Dn(c,b,a){if(a<0){bm(c,a);}for(;a<c.b;++a){if(eo(b,fo(c.a,a))){return a;}}return (-1);}
function En(c,a){var b;b=Bn(c,a);ho(c.a,a,1);--c.b;return b;}
function ao(a,b){if(a<0||a>this.b){bm(this,a);}Fn(this.a,a,b);++this.b;}
function bo(a){return yn(this,a);}
function Fn(a,b,c){a.splice(b,0,c);}
function co(a){return Cn(this,a)!=(-1);}
function eo(a,b){return a===b||a!==null&&a.eQ(b);}
function go(a){return Bn(this,a);}
function fo(a,b){return a[b];}
function io(a){return En(this,a);}
function ho(a,c,b){a.splice(c,b);}
function jo(a,b,c){a[b]=c;}
function ko(){return this.b;}
function vn(){}
_=vn.prototype=new xl();_.j=ao;_.k=bo;_.m=co;_.s=go;_.cb=io;_.fb=ko;_.tI=37;_.a=null;_.b=0;function jp(){jp=rq;qp=wp();}
function gp(a){{ip(a);}}
function hp(a){jp();gp(a);return a;}
function ip(a){a.a=z();a.d=A();a.b=rb(qp,v);a.c=0;}
function kp(b,a){if(nb(a,1)){return Ap(b.d,mb(a,1))!==qp;}else if(a===null){return b.b!==qp;}else{return zp(b.a,a,a.hC())!==qp;}}
function lp(a,b){if(a.b!==qp&&yp(a.b,b)){return true;}else if(vp(a.d,b)){return true;}else if(tp(a.a,b)){return true;}return false;}
function mp(a){return ap(new xo(),a);}
function np(c,a){var b;if(nb(a,1)){b=Ap(c.d,mb(a,1));}else if(a===null){b=c.b;}else{b=zp(c.a,a,a.hC());}return b===qp?null:b;}
function op(c,a,d){var b;if(nb(a,1)){b=Dp(c.d,mb(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=Cp(c.a,a,d,a.hC());}if(b===qp){++c.c;return null;}else{return b;}}
function pp(c,a){var b;if(nb(a,1)){b=Fp(c.d,mb(a,1));}else if(a===null){b=c.b;c.b=rb(qp,v);}else{b=Ep(c.a,a,a.hC());}if(b===qp){return null;}else{--c.c;return b;}}
function rp(e,c){jp();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function sp(d,a){jp();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=ro(c.substring(1),e);a.k(b);}}}
function tp(f,h){jp();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(yp(h,d)){return true;}}}}return false;}
function up(a){return kp(this,a);}
function vp(c,d){jp();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(yp(d,a)){return true;}}}return false;}
function wp(){jp();}
function xp(){return mp(this);}
function yp(a,b){jp();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function Bp(a){return np(this,a);}
function zp(f,h,e){jp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(yp(h,d)){return c.r();}}}}
function Ap(b,a){jp();return b[':'+a];}
function Cp(f,h,j,e){jp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(yp(h,d)){var i=c.r();c.eb(j);return i;}}}else{a=f[e]=[];}var c=ro(h,j);a.push(c);}
function Dp(c,a,d){jp();a=':'+a;var b=c[a];c[a]=d;return b;}
function Ep(f,h,e){jp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(yp(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.r();}}}}
function Fp(c,a){jp();a=':'+a;var b=c[a];delete c[a];return b;}
function no(){}
_=no.prototype=new jm();_.l=up;_.p=xp;_.t=Bp;_.tI=38;_.a=null;_.b=null;_.c=0;_.d=null;var qp;function po(b,a,c){b.a=a;b.b=c;return b;}
function ro(a,b){return po(new oo(),a,b);}
function so(b){var a;if(nb(b,20)){a=mb(b,20);if(yp(this.a,a.q())&&yp(this.b,a.r())){return true;}}return false;}
function to(){return this.a;}
function uo(){return this.b;}
function vo(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function wo(a){var b;b=this.b;this.b=a;return b;}
function oo(){}
_=oo.prototype=new Ak();_.eQ=so;_.q=to;_.r=uo;_.hC=vo;_.eb=wo;_.tI=39;_.a=null;_.b=null;function ap(b,a){b.a=a;return b;}
function cp(a){return zo(new yo(),a.a);}
function dp(c){var a,b,d;if(nb(c,20)){a=mb(c,20);b=a.q();if(kp(this.a,b)){d=np(this.a,b);return yp(a.r(),d);}}return false;}
function ep(){return cp(this);}
function fp(){return this.a.c;}
function xo(){}
_=xo.prototype=new qn();_.m=dp;_.v=ep;_.fb=fp;_.tI=40;function zo(c,b){var a;c.c=b;a=xn(new vn());if(c.c.b!==(jp(),qp)){yn(a,po(new oo(),null,c.c.b));}sp(c.c.d,a);rp(c.c.a,a);c.a=cm(a);return c;}
function Bo(a){return Bl(a.a);}
function Co(a){return a.b=mb(Cl(a.a),20);}
function Do(a){if(a.b===null){throw tk(new sk(),'Must call next() before remove().');}else{Dl(a.a);pp(a.c,a.b.q());a.b=null;}}
function Eo(){return Bo(this);}
function Fo(){return Co(this);}
function yo(){}
_=yo.prototype=new Ak();_.u=Eo;_.x=Fo;_.tI=0;_.a=null;_.b=null;function bq(a){a.a=hp(new no());return a;}
function cq(c,a){var b;b=op(c.a,a,jk(true));return b===null;}
function eq(b,a){return kp(b.a,a);}
function fq(a){return cq(this,a);}
function gq(a){return eq(this,a);}
function hq(){return nm(jn(this.a));}
function iq(){return this.a.c;}
function aq(){}
_=aq.prototype=new qn();_.k=fq;_.m=gq;_.v=hq;_.fb=iq;_.tI=41;_.a=null;function nq(){}
_=nq.prototype=new Ek();_.tI=42;function Fj(){Ej(Cj(new pj()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Fj();}catch(a){b(d);}else{Fj();}}
var qb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,15:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,14:1,15:1},{12:1},{13:1},{3:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{11:1,17:1},{18:1},{20:1},{19:1},{19:1},{3:1}];if (com_manning_gwtip_scriptaculous_ScriptaculousDemo) {  var __gwt_initHandlers = com_manning_gwtip_scriptaculous_ScriptaculousDemo.__gwt_initHandlers;  com_manning_gwtip_scriptaculous_ScriptaculousDemo.onScriptLoad(gwtOnLoad);}})();