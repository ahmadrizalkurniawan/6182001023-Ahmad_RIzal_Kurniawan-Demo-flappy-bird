System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./Bird.ts"],(function(e){var t,n,i,r,s,o,a,c,u,l,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,a=e.Node,c=e.Vec3,u=e.Component},function(e){l=e.ResultScreen},function(e){p=e.Bird}],execute:function(){var d,h,b,g,f,w,y,B,k;s._RF.push({},"7aae1nwO01EIL3Ob9dGX/ss","Background",void 0);var m=o.ccclass,v=o.property;e("Background",(d=m("Background"),h=v({type:a}),b=v({type:a}),g=v({type:a}),d((y=t((w=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s))||this,i(t,"base",y,r(t)),i(t,"base2",B,r(t)),i(t,"birdNode",k,r(t)),t.wBackground=288,t.speed=1,t.temp=10,t}n(t,e);var s=t.prototype;return s.start=function(){},s.update=function(e){(console.log(e),0==l.Instance.node.active)&&(this.birdNode.getComponent(p).score>=this.temp&&(this.speed+=.1,this.temp+=10),this.node.translate(new c(-100*e*this.speed,0,0)),this.base.translate(new c(-100*e*this.speed,0,0)),this.base2.translate(new c(-100*e*this.speed,0,0)),this.node.position.x<=-1*(this.wBackground/2+this.wBackground)&&this.node.translate(new c(288,0,0)),this.base.position.x<=-this.wBackground&&this.base.translate(new c(2*this.wBackground,0,0)),this.base2.position.x<=-this.wBackground&&this.base2.translate(new c(2*this.wBackground,0,0)))},t}(u)).prototype,"base",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(w.prototype,"base2",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(w.prototype,"birdNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=w))||f));s._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(e){var t,n,o,i,r,s,a,c,l,p,u,d,h,f,y,m,S,g,b,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.SpriteFrame,c=e.Node,l=e.AudioClip,p=e.input,u=e.Input,d=e.Collider2D,h=e.Contact2DType,f=e.AudioSource,y=e.Sprite,m=e.Animation,S=e.Vec3,g=e.Component},function(e){b=e.ResultScreen},function(e){v=e.StartScreen}],execute:function(){var C,_,w,N,T,B,z,F,I,A,O,R,D;r._RF.push({},"06b00oYRWhLspgBghYvjJQv","Bird",void 0);var P=s.ccclass,L=s.property;e("Bird",(C=P("Bird"),_=L({type:[a]}),w=L({type:c}),N=L({type:l}),T=L({type:l}),B=L({type:l}),C((I=t((F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,o(t,"scoreSprites",I,i(t)),o(t,"scoreNode",A,i(t)),o(t,"hitSound",O,i(t)),o(t,"dieSound",R,i(t)),o(t,"obstacleSound",D,i(t)),t.score=0,t.vy=0,t.gravity=500,t}n(t,e);var r=t.prototype;return r.start=function(){this.updateScore(),p.on(u.EventType.TOUCH_START,this.onTouchStart,this);var e=this.getComponent(d);e&&e.on(h.BEGIN_CONTACT,this.onBeginContact,this)},r.onBeginContact=function(e,t,n){if("score_collider"==t.node.name||"score_collider-001"==t.node.name)this.score++,this.updateScore(),this.getComponent(f).playOneShot(this.obstacleSound);else{b.Instance.node.active=!0,this.getComponent(f).playOneShot(this.hitSound);this.schedule((function(){this.getComponent(f).playOneShot(this.dieSound)}),.2,0)}},r.onTouchStart=function(e){console.log("touch start"),this.vy=200;var t=this.node.getComponent(y);"redbird-midflap"===t.spriteFrame.name?this.getComponent(m).play("bird_flap"):"yellowbird-midflap"===t.spriteFrame.name?this.getComponent(m).play("yellow_bird_flap"):"bluebird-midflap"===t.spriteFrame.name&&this.getComponent(m).play("blue_bird_flap"),this.getComponent(f).playOneShot(this.getComponent(f).clip)},r.update=function(e){0==v.Instance.node.active&&0==b.Instance.node.active&&(this.node.translate(new S(0,this.vy*e,0)),this.vy-=this.gravity*e)},r.updateScore=function(){for(var e=this.score.toString().split(""),t=0;t<e.length;t++){var n=new c;n.addComponent(y),this.scoreNode.addChild(n)}for(var o=0;o<this.scoreNode.children.length;o++){var i=this.scoreNode.children[o].getComponent(y),r=parseInt(e[o]);i.spriteFrame=this.scoreSprites[r],this.score>9?this.scoreNode.children[o].setPosition(20*o-10,0,0):this.scoreNode.children[o].setPosition(20*o,0,0)}},t}(g)).prototype,"scoreSprites",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=t(F.prototype,"scoreNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(F.prototype,"hitSound",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(F.prototype,"dieSound",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(F.prototype,"obstacleSound",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=F))||z));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/demo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var c;o._RF.push({},"88d92hIBrBMI4I9uDpbx7ET","demo",void 0);var u=n.ccclass;n.property,t("demo",u("demo")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.start=function(){},n.update=function(t){},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./demo.ts","./Background.ts","./Bird.ts","./Pipe.ts","./ResultScreen.ts","./StartScreen.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StartScreen.ts","./ResultScreen.ts","./Bird.ts"],(function(e){var t,n,i,r,o,s,a,c,p,d,u,l,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.Node,c=e.Vec3,p=e.randomRangeInt,d=e.Component},function(e){u=e.StartScreen},function(e){l=e.ResultScreen},function(e){h=e.Bird}],execute:function(){var f,w,g,y,v;o._RF.push({},"bcdd2SagFtOmZv//sVs7eXK","Pipe",void 0);var P=s.ccclass,m=s.property;e("Pipe",(f=P("Pipe"),w=m({type:a}),f((v=t((y=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).wBackground=288,t.wPipa=104,t.speed=1,t.temp=10,i(t,"birdNode",v,r(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.node.translate(new c(this.wBackground+this.wPipa,p(-100,100),0))},o.update=function(e){0==u.Instance.node.active&&0==l.Instance.node.active&&(this.birdNode.getComponent(h).score>=this.temp&&(this.speed+=.1,this.temp+=10),this.node.translate(new c(-100*e*this.speed,0,0)),this.node.position.x<=-248&&(this.node.position.y<0?this.node.translate(new c(this.wBackground+this.wPipa,p(0,100),0)):this.node.translate(new c(this.wBackground+this.wPipa,p(-100,0),0))))},t}(d)).prototype,"birdNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/ResultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o,i,a,s,c,l,p,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,s=e.Node,c=e.Animation,l=e.AudioSource,p=e.director,u=e.Component}],execute:function(){var h,y,g,f,m,d,b,v;i._RF.push({},"bb019TVOwxJP5pzCZxl9Snc","ResultScreen",void 0);var S=a.ccclass,_=a.property;e("ResultScreen",(h=S("ResultScreen"),y=_({type:s}),g=_({type:s}),h(((v=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"gameover",d,o(t)),r(t,"btnrestart",b,o(t)),t}n(t,e);var i=t.prototype;return i.start=function(){t.Instance=this,this.gameover.getComponent(c).play("game_over"),this.btnrestart.getComponent(c).play("button_restart"),this.node.active=!1},i.update=function(e){},i.doRestart=function(e,t){this.getComponent(l).playOneShot(this.getComponent(l).clip),this.getComponent(c).play("transition_after_restart");this.schedule((function(){p.loadScene("gameplay")}),1,0)},t}(u)).Instance=void 0,d=t((m=v).prototype,"gameover",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(m.prototype,"btnrestart",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,l,a,p,u,c,s,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Button,p=e.SpriteFrame,u=e.Node,c=e.Animation,s=e.Sprite,d=e.Component}],execute:function(){var h,b,y,S,f,g,m,C,_,w,v,z,k,x,B,F;o._RF.push({},"6d22esWupBKR5AbZ1DWqzFN","StartScreen",void 0);var N=l.ccclass,D=l.property;e("StartScreen",(h=N("StartScreen"),b=D({type:a}),y=D({type:p}),S=D({type:p}),f=D({type:p}),g=D({type:u}),m=D({type:u}),h(((F=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,r(t,"changeColorButton",w,n(t)),r(t,"redSprite",v,n(t)),r(t,"yellowSprite",z,n(t)),r(t,"blueSprite",k,n(t)),r(t,"birdNode",x,n(t)),r(t,"title",B,n(t)),t.idxSprite=0,t}i(t,e);var o=t.prototype;return o.start=function(){t.Instance=this,this.changeColorButton.getComponent(c).play("button_color"),this.title.getComponent(c).play("intro_flappy_bird"),this.changeColorButton.node.on(u.EventType.TOUCH_END,this.onChangeColor,this),this.getComponent(c).play("transition_start")},o.update=function(e){},o.onChangeColor=function(){console.log("Ganti Warna diklik!");var e=this.birdNode.getComponent(s),t=this.birdNode.getComponent(c);e&&(0===this.idxSprite?(e.spriteFrame=this.redSprite,t.play("bird_iddle"),console.log("kena warna merah")):1===this.idxSprite?(e.spriteFrame=this.yellowSprite,t.play("yellow_bird_iddle"),console.log("kena warna kuning")):2===this.idxSprite&&(e.spriteFrame=this.blueSprite,t.play("blue_bird_iddle"),console.log("kena warna biru")),this.idxSprite++,this.idxSprite>2&&(this.idxSprite=0))},o.clickStart=function(e,t){this.getComponent(c).play("transition_after_restart"),this.schedule((function(){this.node.active=!1}),.5,0)},t}(d)).Instance=void 0,w=t((_=F).prototype,"changeColorButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(_.prototype,"redSprite",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(_.prototype,"yellowSprite",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(_.prototype,"blueSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(_.prototype,"birdNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(_.prototype,"title",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=_))||C));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});