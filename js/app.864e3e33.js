(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0ade":function(e,t,s){e.exports=s.p+"img/logout.bc04a05d.png"},"17ff":function(e,t,s){e.exports=s.p+"img/Google_G.5f6ff37d.svg"},"2c22":function(e,t,s){e.exports=s.p+"img/green_login_page.03945da8.svg"},"4dd6":function(e,t,s){e.exports=s.p+"img/green_logo.65fd0f8d.svg"},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header",{staticClass:"container"}),s("router-view",{staticClass:"container"})],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{class:["header","flex","space-between","align-center",{blended:e.isBlendedHeader}]},[r("router-link",{staticClass:"flex align-center",attrs:{to:"/"}},[r("img",{staticClass:"pointer",attrs:{src:s("4dd6"),alt:"חשבונית ירוקה"}})])],1)},i=[],l={computed:{isBlendedHeader(){const e=["Welcome","Login"];return e.some(e=>this.$route.name===e)}}},u=l,c=s("2877"),d=Object(c["a"])(u,a,i,!1,null,null,null),p=d.exports,g={name:"App",components:{Header:p}},f=g,m=Object(c["a"])(f,n,o,!1,null,null,null),v=m.exports,h=s("8c4f"),_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"login grid"},[s("div",{staticClass:"login-background"}),s("LoginForm",{on:{login:e.login}}),s("LoginHero"),e.isActiveErr?s("div",{staticClass:"login-err"},[e._v("מייל או סיסמה לא נכונים")]):e._e()],1)},b=[],w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"login-hero flex"},[r("img",{attrs:{src:s("2c22"),alt:"login-hero"}})])}],x={},C=Object(c["a"])(x,w,y,!1,null,null,null),$=C.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"login-form"},[s("h2",[e._v("היי, טוב לראות אותך")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",attrs:{required:"",type:"email",name:"email",placeholder:"מייל"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("p",[e._v("כתובת המייל איתה נרשמת לחשבונית ירוקה")])]),s("div",{staticClass:"password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{required:"",type:"password",name:"password",placeholder:"סיסמה"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("a",{attrs:{href:"#"}},[e._v("שכחת סיסמה?")])]),e._m(0)])])},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"actions"},[r("div",{staticClass:"btns flex"},[r("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[e._v("כניסה")]),r("button",{staticClass:"google-btn pointer",attrs:{disabled:""}},[r("span",[e._v("כניסה מהירה")]),r("img",{attrs:{src:s("17ff"),alt:""}})])]),r("p",{staticClass:"register-msg"},[e._v(" עוד לא הצטרפת? "),r("a",{attrs:{href:"#"}},[e._v("ל-30 יום ניסיון חינם")])])])}],S={mounted(){this.$refs.email.focus()},data(){return{email:"",password:""}},methods:{login(){const{email:e,password:t}=this;this.$emit("login",{email:e,password:t})}}},j=S,U=Object(c["a"])(j,O,E,!1,null,null,null),k=U.exports,P={data(){return{isActiveErr:!1}},created(){const e=this.$store.getters.loggedinUser;e&&this.$router.push("/")},methods:{async login(e){const t=await this.$store.dispatch({type:"login",credentials:e});t?this.$router.push("/"):(this.isActiveErr=!0,setTimeout(()=>this.isActiveErr=!1,2e3))}},components:{LoginHero:$,LoginForm:k}},N=P,T=Object(c["a"])(N,_,b,!1,null,null,null),F=T.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("section",{staticClass:"welcome grid"},[r("content",[r("h2",[e._v("היי "+e._s(e.user.firstName)+",")]),r("h3",{staticClass:"flex wrap bold"},[r("span",[e._v("זהו עמוד העסק שלך עבור")]),e._v(" "+e._s(e.user.businesses[0].name)+" ")]),r("div",{staticClass:"flex"},[r("router-link",{attrs:{to:"/user"}},[e._v("פרטי משתמש")]),r("button",{on:{click:e.logout}},[e._v("יציאה")])],1)]),r("img",{attrs:{src:s("b768"),alt:"ברוכים הבאים"}})]):e._e()},L=[],H={created(){this.user||this.$router.push("/login")},computed:{user(){return this.$store.getters.loggedinUser}},methods:{async logout(){await this.$store.dispatch({type:"logout"}),this.$router.push("/login")}}},A=H,D=Object(c["a"])(A,I,L,!1,null,null,null),J=D.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("section",{staticClass:"user-info"},[r("img",{staticClass:"logout pointer",attrs:{src:s("0ade"),alt:"יציאה",title:"יציאה"},on:{click:e.logout}}),r("div",{staticClass:"user grid"},e._l(e.userInfoToShow,(function(t,s){return r("div",{key:s},[r("h2",[e._v(e._s(t.title))]),e._l(t.dataFields,(function(t,s){return r("div",{key:s,staticClass:"data"},[r("p",{staticClass:"field"},[e._v(e._s(t.field))]),r("p",[e._v(e._s(t.value))])])}))],2)})),0),r("div",{staticClass:"businesses"},[r("h2",[e._v("עסקים")]),e._l(e.businessesToShow,(function(t){return r("div",{key:t.id,staticClass:"business grid"},[r("div",{staticClass:"title flex align-center"},[r("img",{attrs:{src:t.logo,alt:t.name}}),r("div",[r("h3",[e._v(e._s(t.name))]),r("h3",[e._v(e._s(t.nameEn))])])]),r("div",{staticClass:"flex wrap"},e._l(t.dataFields,(function(t,s){return r("div",{key:s,staticClass:"data"},[r("p",{staticClass:"field"},[e._v(e._s(t.field))]),r("p",[e._v(e._s(t.value))])])})),0)])}))],2)]):e._e()},B=[],G={created(){this.user||this.$router.push("/login")},computed:{user(){return this.$store.getters.loggedinUser},userInfoToShow(){const{user:e}=this;return[{title:"פרטים אישיים",dataFields:[{field:"שם פרטי",value:e.firstName},{field:"שם משפחה",value:e.lastName},{field:"מספר ת.ז",value:e.idNumber}]},{title:"פרטי מנוי",dataFields:[{field:"תאריך רישום",value:new Date(1e3*e.signUpDate).toLocaleDateString("en-GB")},{field:"טלפון ליצירת קשר",value:e.phone},{field:"מייל חשבון",value:e.email}]}]},businessesToShow(){const{businesses:e}=this.user;return e.map(e=>{const{id:t,name:s,nameEn:r,logo:n}=e;return{id:t,name:s,nameEn:r,logo:n,dataFields:[{field:"מספר עוסק",value:e.taxId},{field:"כתובת",value:`${e.address}, ${e.city}`}]}})}},methods:{async logout(){await this.$store.dispatch({type:"logout"}),this.$router.push("/login")}}},q=G,W=Object(c["a"])(q,M,B,!1,null,null,null),z=W.exports;r["a"].use(h["a"]);const K=[{path:"/",name:"Welcome",component:J},{path:"/login",name:"Login",component:F},{path:"/user",name:"UserInfo",component:z}],Q=new h["a"]({routes:K});var R=Q,V=s("2f62"),X=s("bc3a"),Y=s.n(X);const Z="https://jupiter.d.greeninvoice.co.il/api/v1/account",ee="user",te={login:se,logout:re,loadUser:ne};async function se(e){try{const{data:t}=await Y.a.post(Z+"/login",e);return sessionStorage.setItem(ee,JSON.stringify(t)),t}catch(t){console.log("Error from userService:",t)}}async function re(){try{await Y.a.post(Z+"/logout"),sessionStorage.setItem(ee,"")}catch(e){console.log("Error from userService:",e)}}function ne(){var e=sessionStorage.getItem(ee);return e?JSON.parse(e):null}r["a"].use(V["a"]);const oe=te.loadUser();var ae=new V["a"].Store({state:{loggedinUser:oe},getters:{loggedinUser(e){return e.loggedinUser}},mutations:{setUser(e,{user:t}){e.loggedinUser=t}},actions:{async login(e,{credentials:t}){const s=await te.login(t);return e.commit({type:"setUser",user:s}),s},async logout(e){await te.logout(),e.commit({type:"setUser",user:null})}}});s("b7e3");r["a"].config.productionTip=!1,new r["a"]({router:R,store:ae,render:e=>e(v)}).$mount("#app")},b768:function(e,t,s){e.exports=s.p+"img/welcome.adfcca4a.png"},b7e3:function(e,t,s){}});
//# sourceMappingURL=app.864e3e33.js.map