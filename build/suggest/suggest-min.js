/*
Copyright 2010, KISSY UI Library v1.1.0
MIT Licensed
build time: Aug 5 16:06
*/
KISSY.add("suggest",function(g,n){function j(a,b,d){if(!(this instanceof j))return new j(a,b,d);this.textInput=g.get(a);b+=b.indexOf("?")===-1?"?":"&";this.dataSource=b+"code=utf-8&callback="+t;this.config=g.merge(A,d);this.queryParams=this.query=k;this._dataCache={};this._init()}function u(a){a.style.visibility=k}function v(a){a.style.visibility=w}function x(a,b){if(b.nodeType===1){c.html(a,k);a.appendChild(b)}else c.html(a,b)}var c=g.DOM,i=g.Event,q=window,o=document,p,y=g.get("head"),r=g.UA.ie,
t="g_ks_suggest_callback",k="",w="hidden",z=parseInt,B=/input|button|a/i,A={containerCls:k,resultFormat:"%result%",closeBtnText:"\u5173\u95ed",shim:r===6,submitOnSelect:true};g.augment(j,g.EventTarget,{_init:function(){p=o.body;this._initTextInput();this._initContainer();this.config.shim&&this._initShim();this._initStyle();this._initEvent()},_initTextInput:function(){var a=this,b=a.textInput,d=false,f=0;c.attr(b,"autocomplete","off");a.config.autoFocus&&b.focus();i.on(b,"keydown",function(e){e=e.keyCode;
if(e===27){a.hide();b.value=a.query}else if(e>32&&e<41)if(b.value){if(e===40||e===38)if(f++===0){a._isRunning&&a.stop();d=true;a._selectItem(e===40)}else if(f==3)f=0}else b.blur();else if(e===13){b.blur();if(d)if(b.value==a._getSelectedItemKey())if(a.fire("itemSelect")===false)return;a._submitForm()}else{a._isRunning||a.start();d=false}});i.on(b,"keyup",function(){f=0});i.on(b,"blur",function(){a.stop();g.later(function(){a._focusing||a.hide()},0)})},_initContainer:function(){var a=c.create("<div>",
{"class":"ks-suggest-container "+this.config.containerCls,style:"position:absolute;visibility:hidden"}),b=c.create("<div>",{"class":"ks-suggest-content"}),d=c.create("<div>",{"class":"ks-suggest-footer"});a.appendChild(b);a.appendChild(d);p.insertBefore(a,p.firstChild);this.container=a;this.content=b;this.footer=d;this._initContainerEvent()},_setContainerRegion:function(){var a=this.textInput,b=c.offset(a),d=this.container;c.offset(d,{left:b.left,top:b.top+a.offsetHeight-1});c.width(d,this.config.containerWidth||
a.offsetWidth-2)},_initContainerEvent:function(){var a=this,b=a.textInput,d=a.container,f=a.content,e=a.footer,l,s;i.on(f,"mousemove",function(h){h=h.target;if(h.nodeName!=="LI")h=c.parent(h,"li");if(c.contains(f,h))if(h!==a.selectedItem){a._removeSelectedItem();a._setSelectedItem(h)}});i.on(f,"mousedown",function(h){h=h.target;if(h.nodeName!=="LI")h=c.parent(h,"li");l=h});i.on(d,"mousedown",function(h){if(!B.test(h.target.nodeName)){b.onbeforedeactivate=function(){q.event.returnValue=false;b.onbeforedeactivate=
null};h.preventDefault()}});i.on(f,"mouseup",function(h){var m=h.target;if(!(h.which>2)){if(m.nodeName!=="LI")m=c.parent(m,"li");if(m==l)if(c.contains(f,m)){a._updateInputFromSelectItem(m);if(a.fire("itemSelect")!==false){b.blur();a._submitForm()}}}});i.on(e,"focusin",function(){a._focusing=true;a._removeSelectedItem();s=false});i.on(e,"focusout",function(){a._focusing=false;g.later(function(){if(s)a.hide();else a._focusing||a.textInput.focus()},0)});i.on(a.container,"mouseleave",function(){s=true});
i.on(e,"click",function(h){c.hasClass(h.target,"ks-suggest-closebtn")&&a.hide()})},_submitForm:function(){if(this.config.submitOnSelect){var a=this.textInput.form;if(a)if(this.fire("beforeSubmit",{form:a})!==false){if(o.createEvent){var b=o.createEvent("MouseEvents");b.initEvent("submit",true,false);a.dispatchEvent(b)}else o.createEventObject&&a.fireEvent("onsubmit");a.submit()}}},_initShim:function(){var a=c.create("<iframe>",{src:"about:blank","class":"ks-suggest-shim",style:"position:absolute;visibility:hidden;border:none"});
this.container.shim=a;p.insertBefore(a,p.firstChild)},_setShimRegion:function(){var a=this.container,b=a.style,d=a.shim;d&&c.css(d,{left:z(b.left)-2,top:b.top,width:z(b.width)+2,height:c.height(a)-2})},_initStyle:function(){g.get("#ks-suggest-style")||c.addStyleSheet(".ks-suggest-container{background:white;border:1px solid #999;z-index:99999}.ks-suggest-shim{z-index:99998}.ks-suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.ks-suggest-container .ks-selected{background-color:#39F;cursor:default}.ks-suggest-key{float:left;text-align:left;padding-left:5px}.ks-suggest-result{float:right;text-align:right;padding-right:5px;color:green}.ks-suggest-container .ks-selected span{color:#FFF;cursor:default}.ks-suggest-footer{padding:0 5px 5px}.ks-suggest-closebtn{float:right}.ks-suggest-container li,.ks-suggest-footer{overflow:hidden;zoom:1;clear:both}.ks-suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}",
"ks-suggest-style")},_initEvent:function(){var a=this;i.on(q,"resize",function(){a._setContainerRegion();a._setShimRegion()})},start:function(){var a=this;if(a.fire("beforeStart")!==false){j.focusInstance=a;a._timer=g.later(function(){a._updateContent();a._timer=g.later(arguments.callee,200)},200);a._isRunning=true}},stop:function(){j.focusInstance=n;this._timer&&this._timer.cancel();this._isRunning=false},show:function(){if(!this.isVisible()){var a=this.container,b=a.shim;this._setContainerRegion();
u(a);if(b){this._setShimRegion();u(b)}}},hide:function(){if(this.isVisible()){var a=this.container,b=a.shim;b&&v(b);v(a)}},isVisible:function(){return this.container.style.visibility!=w},_updateContent:function(){var a=this.textInput;if(a.value!=this.query){a=this.query=a.value;if(g.trim(a))if(this._dataCache[a]!==n){this._fillContainer(this._dataCache[a]);this._displayContainer()}else this._requestData();else{this._fillContainer();this.hide()}}},_requestData:function(){var a=this,b;if(!r)a.dataScript=
n;if(!a.dataScript){b=o.createElement("script");b.charset="utf-8";b.async=true;y.insertBefore(b,y.firstChild);a.dataScript=b;if(!r){var d=g.now();a._latestScriptTime=d;c.attr(b,"data-time",d);i.on(b,"load",function(){a._scriptDataIsOut=c.attr(b,"data-time")!=a._latestScriptTime})}}a.queryParams="q="+encodeURIComponent(a.query);if(a.fire("beforeDataRequest")!==false)a.dataScript.src=a.dataSource+"&"+a.queryParams},_handleResponse:function(a){var b=k,d,f,e,l;if(!this._scriptDataIsOut){this.returnedData=
a;if(this.fire("dataReturn",{data:a})!==false){a=this._formatData(this.returnedData);if((d=a.length)>0){f=c.create("<ol>");for(b=0;b<d;++b){e=a[b];e=this._formatItem(l=e.key,e.result);c.attr(e,"key",l);c.addClass(e,b%2?"ks-even":"ks-odd");f.appendChild(e)}b=f}this._fillContainer(b);if(this.fire("beforeShow")!==false){this._dataCache[this.query]=c.html(this.content);this._displayContainer()}}}},_formatData:function(a){var b=[],d,f,e,l=0;if(!a)return b;if(g.isArray(a.result))a=a.result;if(!(d=a.length))return b;
for(e=0;e<d;++e){f=a[e];if(g.isString(f))b[l++]={key:f};else if(g.isArray(f)&&f.length>1)b[l++]={key:f[0],result:f[1]}}return b},_formatItem:function(a,b){var d=c.create("<li>"),f=c.create("<span>",{"class":"ks-suggest-key"});c.html(f,a);d.appendChild(f);if(b){a=this.config.resultFormat.replace("%result%",b);if(g.trim(a)){b=c.create("<span>",{"class":"ks-suggest-result"});c.html(b,a);d.appendChild(b)}}return d},_fillContainer:function(a,b){this._fillContent(a||k);this._fillFooter(b||k)},_fillContent:function(a){x(this.content,
a);this.selectedItem=n},_fillFooter:function(a){var b=this.config,d=this.footer;x(d,a);if(b.closeBtn){a=c.create("<a>",{"class":"ks-suggest-closebtn",href:"javascript: void(0)",target:"_self"});c.html(a,b.closeBtnText);d.appendChild(a)}this.fire("updateFooter",{footer:d,query:this.query});c.css(d,"display",c.text(d)?k:"none")},_displayContainer:function(){g.trim(c.text(this.container))?this.show():this.hide()},_selectItem:function(a){var b=g.query("li",this.container);if(b.length!==0)if(this.isVisible()){if(this.selectedItem){a=
c[a?"next":"prev"](this.selectedItem);if(!a)this.textInput.value=this.query}else a=b[a?0:b.length-1];this._removeSelectedItem();if(a){this._setSelectedItem(a);this._updateInputFromSelectItem()}}else this.show()},_removeSelectedItem:function(){c.removeClass(this.selectedItem,"ks-selected");this.selectedItem=n},_setSelectedItem:function(a){c.addClass(a,"ks-selected");this.selectedItem=a;this.textInput.focus()},_getSelectedItemKey:function(){if(!this.selectedItem)return k;return c.attr(this.selectedItem,
"key")},_updateInputFromSelectItem:function(){this.textInput.value=this._getSelectedItemKey(this.selectedItem)||this.query}});q[t]=function(a){j.focusInstance&&g.later(function(){j.focusInstance._handleResponse(a)},0)};j.version=1.1;g.Suggest=j});