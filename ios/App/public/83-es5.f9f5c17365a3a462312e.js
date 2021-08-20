function asyncGeneratorStep(t,e,o,i,n,r,c){try{var s=t[r](c),a=s.value}catch(l){return void o(l)}s.done?e(a):Promise.resolve(a).then(i,n)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(i,n){var r=t.apply(e,o);function c(t){asyncGeneratorStep(r,i,n,c,s,"next",t)}function s(t){asyncGeneratorStep(r,i,n,c,s,"throw",t)}c(void 0)}))}}function _createForOfIteratorHelper(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return c=t.done,t},e:function(t){s=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(s)throw r}}}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],i=!0,n=!1,r=void 0;try{for(var c,s=t[Symbol.iterator]();!(i=(c=s.next()).done)&&(o.push(c.value),!e||o.length!==e);i=!0);}catch(a){n=!0,r=a}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return o}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{TBb5:function(t,e,o){"use strict";o.r(e),o.d(e,"UserProfilePageModule",(function(){return ot}));var i=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),s=o("KFg1"),a=o("iBXB"),l=o("oWRX"),u=o("5HCe"),p=o("IzEk"),d=o("lJxs"),g=o("2Vo4"),b=o("VQPA"),h=o("y8Nm"),f=o("ue0K"),v=o("fXoL"),y=o("e8h1"),m=o("mrSG"),O=o("HDdC"),k=o("D0XW"),C=o("Y7HM"),S=o("z+Ro");function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=-1;return Object(C.a)(e)?i=Number(e)<1?1:Number(e):Object(S.a)(e)&&(o=e),Object(S.a)(o)||(o=k.a),new O.a((function(e){var n=Object(C.a)(t)?t:+t-o.now();return o.schedule(j,n,{index:0,period:i,subscriber:e})}))}function j(t){var e=t.index,o=t.period,i=t.subscriber;if(i.next(e),!i.closed){if(-1===o)return i.complete();t.index=e+1,this.schedule(t,o)}}function x(t,e){if(1&t&&(v.rc(),v.hc(0,"linearGradient"),v.dc(1,"stop",5),v.dc(2,"stop",6),v.gc()),2&t){var o=v.sc(2);v.Sb("id",o.svg.outerLinearGradient.id),v.Rb(1),v.Sb("stop-color",o.svg.outerLinearGradient.colorStop1)("stop-opacity",1),v.Rb(1),v.Sb("stop-color",o.svg.outerLinearGradient.colorStop2)("stop-opacity",1)}}function _(t,e){if(1&t&&(v.rc(),v.hc(0,"radialGradient"),v.dc(1,"stop",5),v.dc(2,"stop",6),v.gc()),2&t){var o=v.sc(2);v.Sb("id",o.svg.radialGradient.id),v.Rb(1),v.Sb("stop-color",o.svg.radialGradient.colorStop1)("stop-opacity",1),v.Rb(1),v.Sb("stop-color",o.svg.radialGradient.colorStop2)("stop-opacity",1)}}function F(t,e){if(1&t&&(v.rc(),v.dc(0,"circle")),2&t){var o=v.sc(3);v.Sb("cx",o.svg.backgroundCircle.cx)("cy",o.svg.backgroundCircle.cy)("r",o.svg.backgroundCircle.r)("fill",o.svg.backgroundCircle.fill)("fill-opacity",o.svg.backgroundCircle.fillOpacity)("stroke",o.svg.backgroundCircle.stroke)("stroke-width",o.svg.backgroundCircle.strokeWidth)}}function I(t,e){if(1&t&&(v.rc(),v.dc(0,"circle")),2&t){var o=v.sc(3);v.Tb("fill","url(#",o.svg.radialGradient.id,")"),v.Sb("cx",o.svg.backgroundCircle.cx)("cy",o.svg.backgroundCircle.cy)("r",o.svg.backgroundCircle.r)("fill-opacity",o.svg.backgroundCircle.fillOpacity)("stroke",o.svg.backgroundCircle.stroke)("stroke-width",o.svg.backgroundCircle.strokeWidth)}}function P(t,e){if(1&t&&(v.rc(),v.fc(0),v.Jc(1,F,1,7,"circle",2),v.Jc(2,I,1,7,"circle",2),v.ec()),2&t){var o=v.sc(2);v.Rb(1),v.yc("ngIf",!o.options.backgroundGradient),v.Rb(1),v.yc("ngIf",o.options.backgroundGradient)}}function M(t,e){if(1&t&&(v.rc(),v.dc(0,"circle")),2&t){var o=v.sc(2);v.Sb("cx",o.svg.circle.cx)("cy",o.svg.circle.cy)("r",o.svg.circle.r)("fill",o.svg.circle.fill)("stroke",o.svg.circle.stroke)("stroke-width",o.svg.circle.strokeWidth)}}function W(t,e){if(1&t&&(v.rc(),v.dc(0,"path")),2&t){var o=v.sc(3);v.Sb("d",o.svg.path.d)("stroke",o.svg.path.stroke)("stroke-width",o.svg.path.strokeWidth)("stroke-linecap",o.svg.path.strokeLinecap)("fill",o.svg.path.fill)}}function R(t,e){if(1&t&&(v.rc(),v.dc(0,"path")),2&t){var o=v.sc(3);v.Tb("stroke","url(#",o.svg.outerLinearGradient.id,")"),v.Sb("d",o.svg.path.d)("stroke-width",o.svg.path.strokeWidth)("stroke-linecap",o.svg.path.strokeLinecap)("fill",o.svg.path.fill)}}function z(t,e){if(1&t&&(v.rc(),v.fc(0),v.Jc(1,W,1,5,"path",2),v.Jc(2,R,1,5,"path",2),v.ec()),2&t){var o=v.sc(2);v.Rb(1),v.yc("ngIf",!o.options.outerStrokeGradient),v.Rb(1),v.yc("ngIf",o.options.outerStrokeGradient)}}function T(t,e){if(1&t&&(v.rc(),v.hc(0,"tspan"),v.Kc(1),v.gc()),2&t){var o=e.$implicit,i=v.sc(4);v.Sb("x",i.svg.title.x)("y",i.svg.title.y)("dy",o.dy)("font-size",i.svg.title.fontSize)("font-weight",i.svg.title.fontWeight)("fill",i.svg.title.color),v.Rb(1),v.Lc(o.span)}}function L(t,e){if(1&t&&(v.rc(),v.fc(0),v.Jc(1,T,2,7,"tspan",8),v.ec()),2&t){var o=v.sc(3);v.Rb(1),v.yc("ngForOf",o.svg.title.tspans)}}function G(t,e){if(1&t&&(v.rc(),v.hc(0,"tspan"),v.Kc(1),v.gc()),2&t){var o=v.sc(3);v.Sb("font-size",o.svg.units.fontSize)("font-weight",o.svg.units.fontWeight)("fill",o.svg.units.color),v.Rb(1),v.Lc(o.svg.units.text)}}function A(t,e){if(1&t&&(v.rc(),v.hc(0,"tspan"),v.Kc(1),v.gc()),2&t){var o=e.$implicit,i=v.sc(4);v.Sb("x",i.svg.subtitle.x)("y",i.svg.subtitle.y)("dy",o.dy)("font-size",i.svg.subtitle.fontSize)("font-weight",i.svg.subtitle.fontWeight)("fill",i.svg.subtitle.color),v.Rb(1),v.Lc(o.span)}}function E(t,e){if(1&t&&(v.rc(),v.fc(0),v.Jc(1,A,2,7,"tspan",8),v.ec()),2&t){var o=v.sc(3);v.Rb(1),v.yc("ngForOf",o.svg.subtitle.tspans)}}function B(t,e){if(1&t&&(v.rc(),v.hc(0,"text",7),v.Jc(1,L,2,1,"ng-container",2),v.Jc(2,G,2,4,"tspan",2),v.Jc(3,E,2,1,"ng-container",2),v.gc()),2&t){var o=v.sc(2);v.Sb("x",o.svg.circle.cx)("y",o.svg.circle.cy)("text-anchor",o.svg.title.textAnchor),v.Rb(1),v.yc("ngIf",o.options.showTitle),v.Rb(1),v.yc("ngIf",o.options.showUnits),v.Rb(1),v.yc("ngIf",o.options.showSubtitle)}}function U(t,e){if(1&t&&(v.rc(),v.dc(0,"image",9)),2&t){var o=v.sc(2);v.Sb("height",o.svg.image.height)("width",o.svg.image.width)("href",o.svg.image.src,null,"xlink")("x",o.svg.image.x)("y",o.svg.image.y)}}function V(t,e){if(1&t){var o=v.ic();v.rc(),v.hc(0,"svg",1),v.pc("click",(function(t){return v.Fc(o),v.sc().emitClickEvent(t)})),v.hc(1,"defs"),v.Jc(2,x,3,5,"linearGradient",2),v.Jc(3,_,3,5,"radialGradient",2),v.gc(),v.Jc(4,P,3,2,"ng-container",2),v.Jc(5,M,1,6,"circle",2),v.Jc(6,z,3,2,"ng-container",2),v.Jc(7,B,4,6,"text",3),v.Jc(8,U,1,5,"image",4),v.gc()}if(2&t){var i=v.sc();v.Sb("viewBox",i.svg.viewBox)("height",i.svg.height)("width",i.svg.width)("class",i.options.class),v.Rb(2),v.yc("ngIf",i.options.outerStrokeGradient),v.Rb(1),v.yc("ngIf",i.options.backgroundGradient),v.Rb(1),v.yc("ngIf",i.options.showBackground),v.Rb(1),v.yc("ngIf",i.options.showInnerStroke),v.Rb(1),v.yc("ngIf",i.options.percent-0!=0||i.options.showZeroOuterStroke),v.Rb(1),v.yc("ngIf",!i.options.showImage&&(i.options.showTitle||i.options.showUnits||i.options.showSubtitle)),v.Rb(1),v.yc("ngIf",i.options.showImage)}}var N,J=function t(){_classCallCheck(this,t),this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1},D=function(){function t(e,o,i){var n=this;_classCallCheck(this,t),this.elRef=o,this.document=i,this.onClick=new v.t,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new v.t,this._viewportChangedSubscriber=null,this.options=new J,this.defaultOptions=new J,this._lastPercent=0,this._gradientUUID=null,this.render=function(){n.applyOptions(),n.options.lazy?(null===n.svgElement&&n.draw(n._lastPercent),n.isInViewport&&(n.options.animation&&n.options.animationDuration>0?n.animate(n._lastPercent,n.options.percent):n.draw(n.options.percent),n._lastPercent=n.options.percent)):(n.options.animation&&n.options.animationDuration>0?n.animate(n._lastPercent,n.options.percent):n.draw(n.options.percent),n._lastPercent=n.options.percent)},this.polarToCartesian=function(t,e,o,i){var n=i*Math.PI/180;return{x:t+Math.sin(n)*o,y:e-Math.cos(n)*o}},this.draw=function(t){var e,o=(t=void 0===t?n.options.percent:Math.abs(t))>100?100:t,i=2*n.options.radius+2*n.options.outerStrokeWidth;n.options.showBackground&&(i+=2*n.options.backgroundStrokeWidth+n.max(0,2*n.options.backgroundPadding));var r,c,s={x:i/2,y:i/2},a=s.x,l=s.y-n.options.radius,u=n.polarToCartesian(s.x,s.y,n.options.radius,360*(n.options.clockwise?o:100-o)/100);100===o&&(u.x=u.x+(n.options.clockwise?-.01:.01)),r=(e=_slicedToArray(o>50?n.options.clockwise?[1,1]:[1,0]:n.options.clockwise?[0,1]:[0,0],2))[0],c=e[1];var p=n.options.animateTitle?t:n.options.percent,d=p>n.options.maxPercent?n.options.maxPercent.toFixed(n.options.toFixed)+"+":p.toFixed(n.options.toFixed),g=n.options.animateSubtitle?t:n.options.percent,b={x:s.x,y:s.y,textAnchor:"middle",color:n.options.titleColor,fontSize:n.options.titleFontSize,fontWeight:n.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==n.options.titleFormat&&"Function"===n.options.titleFormat.constructor.name){var h=n.options.titleFormat(p);h instanceof Array?b.texts=_toConsumableArray(h):b.texts.push(h.toString())}else"auto"===n.options.title?b.texts.push(d):n.options.title instanceof Array?b.texts=_toConsumableArray(n.options.title):b.texts.push(n.options.title.toString());var f={x:s.x,y:s.y,textAnchor:"middle",color:n.options.subtitleColor,fontSize:n.options.subtitleFontSize,fontWeight:n.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==n.options.subtitleFormat&&"Function"===n.options.subtitleFormat.constructor.name){var v=n.options.subtitleFormat(g);v instanceof Array?f.texts=_toConsumableArray(v):f.texts.push(v.toString())}else n.options.subtitle instanceof Array?f.texts=_toConsumableArray(n.options.subtitle):f.texts.push(n.options.subtitle.toString());var y={text:""+n.options.units,fontSize:n.options.unitsFontSize,fontWeight:n.options.unitsFontWeight,color:n.options.unitsColor},m=0,O=1;if(n.options.showTitle&&(m+=b.texts.length),n.options.showSubtitle&&(m+=f.texts.length),n.options.showTitle){var k,C=_createForOfIteratorHelper(b.texts);try{for(C.s();!(k=C.n()).done;){var S=k.value;b.tspans.push({span:S,dy:n.getRelativeY(O,m)}),O++}}catch(_){C.e(_)}finally{C.f()}}if(n.options.showSubtitle){var w,j=_createForOfIteratorHelper(f.texts);try{for(j.s();!(w=j.n()).done;){var x=w.value;f.tspans.push({span:x,dy:n.getRelativeY(O,m)}),O++}}catch(_){j.e(_)}finally{j.f()}}null===n._gradientUUID&&(n._gradientUUID=n.uuid()),n.svg={viewBox:"0 0 ".concat(i," ").concat(i),width:n.options.responsive?"100%":i,height:n.options.responsive?"100%":i,backgroundCircle:{cx:s.x,cy:s.y,r:n.options.radius+n.options.outerStrokeWidth/2+n.options.backgroundPadding,fill:n.options.backgroundColor,fillOpacity:n.options.backgroundOpacity,stroke:n.options.backgroundStroke,strokeWidth:n.options.backgroundStrokeWidth},path:{d:"M ".concat(a," ").concat(l,"\n        A ").concat(n.options.radius," ").concat(n.options.radius," 0 ").concat(r," ").concat(c," ").concat(u.x," ").concat(u.y),stroke:n.options.outerStrokeColor,strokeWidth:n.options.outerStrokeWidth,strokeLinecap:n.options.outerStrokeLinecap,fill:"none"},circle:{cx:s.x,cy:s.y,r:n.options.radius-n.options.space-n.options.outerStrokeWidth/2-n.options.innerStrokeWidth/2,fill:"none",stroke:n.options.innerStrokeColor,strokeWidth:n.options.innerStrokeWidth},title:b,units:y,subtitle:f,image:{x:s.x-n.options.imageWidth/2,y:s.y-n.options.imageHeight/2,src:n.options.imageSrc,width:n.options.imageWidth,height:n.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+n._gradientUUID,colorStop1:n.options.outerStrokeColor,colorStop2:"transparent"===n.options.outerStrokeGradientStopColor?"#FFF":n.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+n._gradientUUID,colorStop1:n.options.backgroundColor,colorStop2:"transparent"===n.options.backgroundGradientStopColor?"#FFF":n.options.backgroundGradientStopColor}}},this.getAnimationParameters=function(t,e){var o,i,r,c=n.options.startFromZero||t<0?0:t,s=e<0?0:n.min(e,n.options.maxPercent),a=Math.abs(Math.round(s-c));return a>=100?(o=100,i=n.options.animateTitle||n.options.animateSubtitle?Math.round(a/o):1):(o=a,i=1),(r=Math.round(n.options.animationDuration/o))<10&&(r=10,o=n.options.animationDuration/r,i=!n.options.animateTitle&&!n.options.animateSubtitle&&a>100?Math.round(100/o):Math.round(a/o)),i<1&&(i=1),{times:o,step:i,interval:r}},this.animate=function(t,e){n._timerSubscription&&!n._timerSubscription.closed&&n._timerSubscription.unsubscribe();var o=n.options.startFromZero?0:t,i=e,r=n.getAnimationParameters(o,i),c=r.step,s=r.interval,a=o;n._timerSubscription=o<i?w(0,s).subscribe((function(){(a+=c)<=i?!n.options.animateTitle&&!n.options.animateSubtitle&&a>=100?(n.draw(i),n._timerSubscription.unsubscribe()):n.draw(a):(n.draw(i),n._timerSubscription.unsubscribe())})):w(0,s).subscribe((function(){(a-=c)>=i?!n.options.animateTitle&&!n.options.animateSubtitle&&i>=100?(n.draw(i),n._timerSubscription.unsubscribe()):n.draw(a):(n.draw(i),n._timerSubscription.unsubscribe())}))},this.emitClickEvent=function(t){n.options.renderOnClick&&n.animate(0,n.options.percent),n.onClick.emit(t)},this.applyOptions=function(){for(var t=0,e=Object.keys(n.options);t<e.length;t++){var o=e[t];n.hasOwnProperty(o)&&void 0!==n[o]?n.options[o]=n[o]:n.templateOptions&&void 0!==n.templateOptions[o]&&(n.options[o]=n.templateOptions[o])}n.options.radius=Math.abs(+n.options.radius),n.options.space=+n.options.space,n.options.percent=+n.options.percent>0?+n.options.percent:0,n.options.maxPercent=Math.abs(+n.options.maxPercent),n.options.animationDuration=Math.abs(n.options.animationDuration),n.options.outerStrokeWidth=Math.abs(+n.options.outerStrokeWidth),n.options.innerStrokeWidth=Math.abs(+n.options.innerStrokeWidth),n.options.backgroundPadding=+n.options.backgroundPadding},this.getRelativeY=function(t,e){return(1*(t-e/2)-.18).toFixed(2)+"em"},this.min=function(t,e){return t<e?t:e},this.max=function(t,e){return t>e?t:e},this.uuid=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){var t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=function(){n.findSvgElement();var t=n.isInViewport;n.isInViewport=n.isElementInViewport(n.svgElement),t!==n.isInViewport&&n.onViewportChanged.emit({oldValue:t,newValue:n.isInViewport})},this.onScroll=function(t){n.checkViewport()},this.loadEventsForLazyMode=function(){if(n.options.lazy){n.document.addEventListener("scroll",n.onScroll,!0),n.window.addEventListener("resize",n.onScroll,!0),null===n._viewportChangedSubscriber&&(n._viewportChangedSubscriber=n.onViewportChanged.subscribe((function(t){t.oldValue;t.newValue&&n.render()})));var t=w(0,50).subscribe((function(){null===n.svgElement?n.checkViewport():t.unsubscribe()}))}},this.unloadEventsForLazyMode=function(){n.document.removeEventListener("scroll",n.onScroll,!0),n.window.removeEventListener("resize",n.onScroll,!0),null!==n._viewportChangedSubscriber&&(n._viewportChangedSubscriber.unsubscribe(),n._viewportChangedSubscriber=null)},this.document=i,this.window=this.document.defaultView,Object.assign(this.options,e),Object.assign(this.defaultOptions,e)}return _createClass(t,[{key:"isDrawing",value:function(){return this._timerSubscription&&!this._timerSubscription.closed}},{key:"isElementInViewport",value:function(t){if(null==t)return!1;var e,o=t.getBoundingClientRect(),i=t.parentNode;do{if(e=i.getBoundingClientRect(),o.top>=e.bottom)return!1;if(o.bottom<=e.top)return!1;if(o.left>=e.right)return!1;if(o.right<=e.left)return!1;i=i.parentNode}while(i!=this.document.body);return!(o.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||o.bottom<=0||o.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||o.right<=0)}},{key:"ngOnInit",value:function(){this.loadEventsForLazyMode()}},{key:"ngOnDestroy",value:function(){this.unloadEventsForLazyMode()}},{key:"ngOnChanges",value:function(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}}]),t}();D.\u0275fac=function(t){return new(t||D)(v.cc(J),v.cc(v.r),v.cc(i.d))},D.\u0275cmp=v.Wb({type:D,selectors:[["circle-progress"]],inputs:{name:"name",class:"class",backgroundGradient:"backgroundGradient",backgroundColor:"backgroundColor",backgroundGradientStopColor:"backgroundGradientStopColor",backgroundOpacity:"backgroundOpacity",backgroundStroke:"backgroundStroke",backgroundStrokeWidth:"backgroundStrokeWidth",backgroundPadding:"backgroundPadding",radius:"radius",space:"space",percent:"percent",toFixed:"toFixed",maxPercent:"maxPercent",renderOnClick:"renderOnClick",units:"units",unitsFontSize:"unitsFontSize",unitsFontWeight:"unitsFontWeight",unitsColor:"unitsColor",outerStrokeGradient:"outerStrokeGradient",outerStrokeWidth:"outerStrokeWidth",outerStrokeColor:"outerStrokeColor",outerStrokeGradientStopColor:"outerStrokeGradientStopColor",outerStrokeLinecap:"outerStrokeLinecap",innerStrokeColor:"innerStrokeColor",innerStrokeWidth:"innerStrokeWidth",titleFormat:"titleFormat",title:"title",titleColor:"titleColor",titleFontSize:"titleFontSize",titleFontWeight:"titleFontWeight",subtitleFormat:"subtitleFormat",subtitle:"subtitle",subtitleColor:"subtitleColor",subtitleFontSize:"subtitleFontSize",subtitleFontWeight:"subtitleFontWeight",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",animation:"animation",animateTitle:"animateTitle",animateSubtitle:"animateSubtitle",animationDuration:"animationDuration",showTitle:"showTitle",showSubtitle:"showSubtitle",showUnits:"showUnits",showImage:"showImage",showBackground:"showBackground",showInnerStroke:"showInnerStroke",clockwise:"clockwise",responsive:"responsive",startFromZero:"startFromZero",showZeroOuterStroke:"showZeroOuterStroke",lazy:"lazy",templateOptions:["options","templateOptions"]},outputs:{onClick:"onClick"},features:[v.Pb],decls:1,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet",3,"click",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet",3,"click"],[4,"ngIf"],["alignment-baseline","baseline",4,"ngIf"],["preserveAspectRatio","none",4,"ngIf"],["offset","5%"],["offset","95%"],["alignment-baseline","baseline"],[4,"ngFor","ngForOf"],["preserveAspectRatio","none"]],template:function(t,e){1&t&&v.Jc(0,V,9,11,"svg",0),2&t&&v.yc("ngIf",e.svg)},directives:[i.k,i.j],encapsulation:2}),Object(m.b)([Object(v.N)(),Object(m.e)("design:type",v.t)],D.prototype,"onClick",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"name",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"class",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"backgroundGradient",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"backgroundColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"backgroundGradientStopColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"backgroundOpacity",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"backgroundStroke",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"backgroundStrokeWidth",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"backgroundPadding",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"radius",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"space",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"percent",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"toFixed",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"maxPercent",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"renderOnClick",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"units",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"unitsFontSize",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"unitsFontWeight",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"unitsColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"outerStrokeGradient",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"outerStrokeWidth",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"outerStrokeColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"outerStrokeGradientStopColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"outerStrokeLinecap",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"innerStrokeColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Object)],D.prototype,"innerStrokeWidth",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Function)],D.prototype,"titleFormat",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Object)],D.prototype,"title",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"titleColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"titleFontSize",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"titleFontWeight",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Function)],D.prototype,"subtitleFormat",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Object)],D.prototype,"subtitle",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"subtitleColor",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"subtitleFontSize",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"subtitleFontWeight",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",String)],D.prototype,"imageSrc",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"imageHeight",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"imageWidth",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"animation",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"animateTitle",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"animateSubtitle",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Number)],D.prototype,"animationDuration",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showTitle",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showSubtitle",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showUnits",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showImage",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showBackground",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showInnerStroke",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"clockwise",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"responsive",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"startFromZero",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"showZeroOuterStroke",void 0),Object(m.b)([Object(v.C)(),Object(m.e)("design:type",Boolean)],D.prototype,"lazy",void 0),Object(m.b)([Object(v.C)("options"),Object(m.e)("design:type",J)],D.prototype,"templateOptions",void 0),D=Object(m.b)([Object(m.f)(2,Object(v.y)(i.d)),Object(m.e)("design:paramtypes",[J,v.r,Object])],D);var K=N=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:N,providers:[{provide:J,useValue:t}]}}}]),t}();K.\u0275mod=v.ac({type:K}),K.\u0275inj=v.Zb({factory:function(t){return new(t||K)},imports:[[i.c]]});var H=o("cZdB");function Z(t,e){if(1&t){var o=v.ic();v.hc(0,"ion-button",37),v.pc("click",(function(){return v.Fc(o),v.sc().presentUserSettings()})),v.dc(1,"ion-icon",38),v.gc()}}function Y(t,e){if(1&t){var o=v.ic();v.hc(0,"ion-item",40),v.pc("click",(function(){v.Fc(o);var t=e.$implicit;return v.sc(2).dataas(t)})),v.hc(1,"ion-label"),v.Kc(2),v.gc(),v.gc()}if(2&t){var i=e.$implicit;v.Rb(2),v.Lc(i.name)}}function $(t,e){if(1&t){var o=v.ic();v.hc(0,"ion-item",40),v.pc("click",(function(){v.Fc(o);var t=e.$implicit;return v.sc(2).dataas(t)})),v.hc(1,"ion-label"),v.Kc(2),v.gc(),v.gc()}if(2&t){var i=e.$implicit;v.Rb(2),v.Lc(i.name)}}function X(t,e){if(1&t&&(v.hc(0,"ion-list"),v.Jc(1,Y,3,1,"ion-item",39),v.tc(2,"filter"),v.Jc(3,$,3,1,"ion-item",39),v.tc(4,"filter"),v.gc()),2&t){var o=v.sc();v.Rb(1),v.yc("ngForOf",v.vc(2,2,o.countries.Countries,o.filterTerm)),v.Rb(2),v.yc("ngForOf",v.vc(4,5,o.states.States,o.filterTerm))}}var Q=function(){function t(e,o,i,n,r,c,s,l,u){var p=this;_classCallCheck(this,t),this.modalController=e,this.loadingController=o,this.userService=i,this.accountService=n,this.zone=r,this.route=c,this.searchLocations=s,this.router=l,this.storage=u,this.userId=void 0,this.selectionMode=a.a.NONE,this.user=new g.a({}),this.canEditProfile=!1,this.toVisitCount=0,this.visitedCount=0,this.visitedPercent=0,this.countries=h,this.states=f,this.hide=!1,this.route.queryParams.subscribe((function(){p.router.getCurrentNavigation().extras.state&&(p.userId=p.router.getCurrentNavigation().extras.state.userId)}))}var e,o,i,n;return _createClass(t,[{key:"ionViewDidEnter",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({});case 2:return e=t.sent,t.next=5,e.present();case 5:this.map=new s.a(this.zone),this.map.addMapToDiv(this.selectionMode,"user-map"),void 0===this.userId&&(this.userId=this.accountService.getUserId()),this.zone.run((function(){o.getUser(e).pipe(Object(p.a)(1)).subscribe((function(){}))}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getUser",value:function(t){var e=this;return this.userService.userIdGet(this.userId).pipe(Object(d.a)((function(o){e.storage.set("alluser",o),e.accountService.getUserId()===e.userId&&(e.canEditProfile=!0,e.storage.set("alluser",o)),e.user.next(o),void 0===e.user.value.avi&&(e.user.value.avi="../../../assets/defaultuser.png",e.storage.set("alluser",o)),e.visitedCount=0,e.visitedPercent=0,e.toVisitCount=0,o.userLocations.forEach((function(t){e.map.changeVisitStatus(t.fkLocation.locationCode,t.status),"toVisit"===t.status?e.toVisitCount++:(t.fkLocation.locationCountry,e.visitedCount++)}));var i=e.visitedCount-0;e.visitedPercent=100*(i/405+0),t.dismiss()})))}},{key:"searchvalue",value:function(){this.hide=!0,this.mapvalue=this.filterTerm,this.map.zoomToLocation(this.mapvalue)}},{key:"dataas",value:function(t){this.hide=!1,this.map.zoomToLocation(t.id)}},{key:"setFilteredItems",value:function(){var t=this;return this.country.filter((function(e){return e.name.toLowerCase().indexOf(t.searchTerm.toLowerCase())>-1}))}},{key:"ionViewWillLeave",value:function(){this.canEditProfile=!1,this.map.destroyMap(),this.toVisitCount=0,this.visitedCount=0,this.visitedPercent=0}},{key:"presentSearchModal",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.router.navigateByUrl("/search");case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"presentUserTimeline",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={replaceUrl:!0,skipLocationChange:!0,state:{userId:this.user.value.userId,userLocations:JSON.stringify(this.user.value.userLocations)}},this.router.navigateByUrl("user-timeline",e);case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"show",value:function(t){this.searchLocations.dis=t}},{key:"presentUserSettings",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(this.user.value),this.router.navigate(["user-settings",this.user.value]);case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}();Q.\u0275fac=function(t){return new(t||Q)(v.cc(r.V),v.cc(r.U),v.cc(l.a),v.cc(u.a),v.cc(v.L),v.cc(c.a),v.cc(b.a),v.cc(c.g),v.cc(y.b))},Q.\u0275cmp=v.Wb({type:Q,selectors:[["user-profile"]],decls:87,vars:16,consts:[[1,"ion-no-border",2,"background-color","#128C7E"],["color","#128C7E",1,"ion-no-border"],[1,"header-grid"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["defaultHref","/tab1",2,"color","white"],[1,"ion-justify-self-center"],[2,"text-align","center","font-size","15px","color","#FFF","margin","0","text-transform","capitalize","font-weight","bold"],[1,"ion-justify-content-end"],[1,"ion-justify-content-end",3,"click"],["src","../../../assets/UI/search-outline.svg",1,"img-center"],[3,"scrollY"],[1,"three-col-grid"],[3,"src"],[1,"header-text"],["size",".5"],["src","../../../assets/UI/cake_icon.svg",1,"places"],["color","medium"],["src","../../../assets/UI/location_pin_icon.svg",1,"places"],["fill","clear","class","edit-button",3,"click",4,"ngIf"],[1,"profile-info-row"],[1,"ion-align-self-end"],[1,"profile-info"],[1,"ion-align-self-end","visited-col"],[1,"ion-align-self-end","to-visit-col"],[2,"margin-bottom","0"],["size",".5",1,"ion-align-self-center"],["src","../../../assets/UI/globe_icon.svg"],["size","1.7",1,"ion-align-self-center","ion-justify-content-start"],["size","1",3,"percent"],[1,"map-search-container"],["spellcheck","true",3,"ngModel","focusout","search","focusin","ngModelChange"],[4,"ngIf"],["id","user-map","onload","onLoad()",1,"chartdiv"],["vertical","bottom",1,"map-filter-fab"],["fill","clear",1,"map-filter",3,"click"],["src","../../../assets/UI/floating_map_button.svg"],["fill","clear",1,"edit-button",3,"click"],["name","settings-outline"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(v.hc(0,"ion-header",0),v.hc(1,"ion-toolbar",1),v.hc(2,"ion-grid",2),v.hc(3,"ion-row",3),v.hc(4,"ion-col",4),v.hc(5,"ion-buttons"),v.dc(6,"ion-back-button",5),v.gc(),v.gc(),v.hc(7,"ion-col",6),v.hc(8,"h1",7),v.Kc(9),v.gc(),v.gc(),v.hc(10,"ion-col",8),v.hc(11,"ion-buttons",8),v.hc(12,"ion-button",9),v.pc("click",(function(){return e.presentSearchModal()})),v.dc(13,"img",10),v.gc(),v.gc(),v.gc(),v.gc(),v.gc(),v.gc(),v.gc(),v.hc(14,"ion-content",11),v.hc(15,"ion-card"),v.hc(16,"ion-card-content"),v.hc(17,"ion-grid",12),v.hc(18,"ion-row"),v.hc(19,"ion-col"),v.hc(20,"ion-avatar"),v.dc(21,"img",13),v.gc(),v.gc(),v.hc(22,"ion-col"),v.hc(23,"ion-row"),v.hc(24,"h2"),v.Kc(25),v.gc(),v.gc(),v.hc(26,"ion-row"),v.hc(27,"h3"),v.Kc(28),v.gc(),v.gc(),v.hc(29,"ion-row",14),v.hc(30,"ion-col",15),v.dc(31,"img",16),v.gc(),v.hc(32,"ion-col"),v.hc(33,"ion-text",17),v.Kc(34),v.gc(),v.gc(),v.gc(),v.hc(35,"ion-row",14),v.hc(36,"ion-col",15),v.dc(37,"img",18),v.gc(),v.hc(38,"ion-col"),v.hc(39,"ion-text",17),v.Kc(40),v.gc(),v.gc(),v.gc(),v.gc(),v.hc(41,"ion-col",15),v.Jc(42,Z,2,0,"ion-button",19),v.gc(),v.gc(),v.hc(43,"ion-row",20),v.hc(44,"ion-col",21),v.hc(45,"ion-row",22),v.hc(46,"ion-text"),v.Kc(47,"Following"),v.gc(),v.gc(),v.hc(48,"ion-row"),v.hc(49,"ion-text"),v.Kc(50),v.gc(),v.gc(),v.gc(),v.hc(51,"ion-col",21),v.hc(52,"ion-row",22),v.hc(53,"ion-text"),v.Kc(54,"Followers"),v.gc(),v.gc(),v.hc(55,"ion-row"),v.hc(56,"ion-text"),v.Kc(57),v.gc(),v.gc(),v.gc(),v.hc(58,"ion-col",23),v.hc(59,"ion-row",22),v.hc(60,"ion-text"),v.Kc(61,"Places Visited"),v.gc(),v.gc(),v.hc(62,"ion-row"),v.hc(63,"ion-text"),v.Kc(64),v.gc(),v.gc(),v.gc(),v.hc(65,"ion-col",24),v.hc(66,"ion-row",22),v.hc(67,"ion-text"),v.Kc(68,"Future Visits"),v.gc(),v.gc(),v.hc(69,"ion-row"),v.hc(70,"ion-text"),v.Kc(71),v.gc(),v.gc(),v.gc(),v.gc(),v.hc(72,"ion-row",25),v.hc(73,"ion-col",26),v.dc(74,"img",27),v.gc(),v.hc(75,"ion-col",28),v.hc(76,"b"),v.Kc(77,"World Visited"),v.gc(),v.gc(),v.hc(78,"ion-col"),v.dc(79,"circle-progress",29),v.gc(),v.gc(),v.gc(),v.gc(),v.gc(),v.hc(80,"div",30),v.hc(81,"ion-searchbar",31),v.pc("focusout",(function(){return e.show(!0)}))("search",(function(){return e.searchvalue()}))("focusin",(function(){return e.show(!1)}))("ngModelChange",(function(t){return e.filterTerm=t})),v.gc(),v.Jc(82,X,5,8,"ion-list",32),v.gc(),v.dc(83,"div",33),v.gc(),v.hc(84,"ion-fab",34),v.hc(85,"ion-button",35),v.pc("click",(function(){return e.presentUserTimeline()})),v.dc(86,"img",36),v.gc(),v.gc()),2&t&&(v.Rb(9),v.Nc("",e.user.value.firstname," ",e.user.value.lastname,""),v.Rb(5),v.yc("scrollY",!0),v.Rb(7),v.yc("src",e.user.value.avi,v.Gc),v.Rb(4),v.Lc(e.user.value.title),v.Rb(3),v.Lc(e.user.value.education),v.Rb(6),v.Mc(" ",e.user.value.birthLocation,""),v.Rb(6),v.Mc(" ",e.user.value.residenceLocation,""),v.Rb(2),v.yc("ngIf",e.canEditProfile),v.Rb(8),v.Lc(e.user.value.followingCount),v.Rb(7),v.Lc(e.user.value.followerCount),v.Rb(7),v.Lc(e.visitedCount),v.Rb(7),v.Lc(e.toVisitCount),v.Rb(8),v.yc("percent",e.visitedPercent),v.Rb(2),v.yc("ngModel",e.filterTerm),v.Rb(1),v.yc("ngIf",1==e.hide))},directives:[r.s,r.Q,r.r,r.G,r.l,r.g,r.d,r.e,r.f,r.m,r.h,r.i,r.c,r.N,i.k,D,r.H,r.bb,n.k,n.m,r.o,r.t,r.B,i.j,r.x,r.A],pipes:[H.a],styles:["ion-content[_ngcontent-%COMP%]{--background:linear-gradient(180deg,#128c7e 30%,#fff 0)}.header-grid[_ngcontent-%COMP%]{--ion-grid-columns:3;--ion-grid-column-padding:.5px;--ion-grid-padding:1px}.header-text[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:13px;text-transform:capitalize}.profile-info[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:11px;text-transform:capitalize}.profile-info-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{justify-content:space-evenly;margin-bottom:0}.three-col-grid[_ngcontent-%COMP%]{--ion-grid-padding:5px;--ion-grid-columns:3;--ion-grid-column-padding:.5px}.three-col-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-bottom:3%;font-size:13px}h3[_ngcontent-%COMP%]{font-size:12px}h6[_ngcontent-%COMP%]{font-size:3vw;color:#000}.to-visit-col[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .to-visit-col[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#f05e23}.visited-col[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .visited-col[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#128c7e}.edit-button[_ngcontent-%COMP%]{--background:transparent;--color:#000}ion-avatar[_ngcontent-%COMP%]{width:110%!important;height:110%!important;max-width:80px!important;max-height:80px!important}.map-search-container[_ngcontent-%COMP%]{padding-left:10%;padding-right:10%;margin-top:5px}.chartdiv[_ngcontent-%COMP%]{width:100%;height:40%}ion-card[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:0}ion-card-content[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:0}.map-filter[_ngcontent-%COMP%], .map-filter-fab[_ngcontent-%COMP%]{justify-content:center;align-self:center}"]});var q=[{path:"",component:Q}],tt=function t(){_classCallCheck(this,t)};tt.\u0275mod=v.ac({type:tt}),tt.\u0275inj=v.Zb({factory:function(t){return new(t||tt)},imports:[[c.k.forChild(q)],c.k]});var et=o("PCNd"),ot=function t(){_classCallCheck(this,t)};ot.\u0275mod=v.ac({type:ot}),ot.\u0275inj=v.Zb({factory:function(t){return new(t||ot)},imports:[[i.c,n.g,r.S,H.b,et.a,tt,K.forRoot({backgroundStrokeWidth:0,backgroundPadding:7,space:-3,toFixed:0,outerStrokeWidth:8,outerStrokeColor:"#128C7E",innerStrokeWidth:2,innerStrokeColor:"#12B2B3",animationDuration:500,animation:!0,startFromZero:!1,responsive:!0,showUnits:!0,showSubtitle:!1,showImage:!1,renderOnClick:!1,titleColor:"#128C7E",titleFontSize:"50",titleFontWeight:"150",unitsColor:"#128C7E",unitsFontSize:"25",unitsFontWeight:"150"})]]})}}]);