Ext.data.JsonP.Component_Render({"tagname":"class","name":"Component.Render","extends":"Component.UIBase","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Component.Render","members":{"cfg":[],"property":[{"name":"","tagname":"property","owner":"Component.Render","meta":{},"id":"property-"},{"name":"active","tagname":"property","owner":"Component.Render","meta":{},"id":"property-active"},{"name":"disabled","tagname":"property","owner":"Component.Render","meta":{},"id":"property-disabled"},{"name":"focusable","tagname":"property","owner":"Component.Render","meta":{},"id":"property-focusable"},{"name":"focused","tagname":"property","owner":"Component.Render","meta":{},"id":"property-focused"},{"name":"highlighted","tagname":"property","owner":"Component.Render","meta":{},"id":"property-highlighted"},{"name":"prefixCls","tagname":"property","owner":"Component.Render","meta":{},"id":"property-prefixCls"}],"method":[{"name":"_uiSetActive","tagname":"method","owner":"Component.Render","meta":{"protected":true},"id":"method-_uiSetActive"},{"name":"_uiSetDisabled","tagname":"method","owner":"Component.Render","meta":{"protected":true},"id":"method-_uiSetDisabled"},{"name":"_uiSetFocused","tagname":"method","owner":"Component.Render","meta":{"protected":true},"id":"method-_uiSetFocused"},{"name":"_uiSetHighlighted","tagname":"method","owner":"Component.Render","meta":{"protected":true},"id":"method-_uiSetHighlighted"},{"name":"getComponentCssClassWithState","tagname":"method","owner":"Component.Render","meta":{},"id":"method-getComponentCssClassWithState"},{"name":"getContentElement","tagname":"method","owner":"Component.Render","meta":{},"id":"method-getContentElement"},{"name":"getCssClassWithPrefix","tagname":"method","owner":"Component.Render","meta":{"private":true},"id":"method-getCssClassWithPrefix"},{"name":"getKeyEventTarget","tagname":"method","owner":"Component.Render","meta":{},"id":"method-getKeyEventTarget"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"render.js","href":"render.html#Component-Render"}],"html_meta":{},"component":false,"superclasses":["Component.UIBase"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Component.UIBase<div class='subclass '><strong>Component.Render</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/render.html#Component-Render' target='_blank'>render.js</a></div></pre><div class='doc-contents'><p>Base Render class for KISSY Component.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-' class='name not-expandable'></a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>@lends <a href=\"#!/api/Component.Render\" rel=\"Component.Render\" class=\"docClass\">Component.Render</a>#</p>\n</div><div class='long'><p>@lends <a href=\"#!/api/Component.Render\" rel=\"Component.Render\" class=\"docClass\">Component.Render</a>#</p>\n</div></div></div><div id='property-active' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-active' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-active' class='name expandable'>active</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.active ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-active\" rel=\"Component.Controller-property-active\" class=\"docClass\">Component.Controller.active</a></p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-disabled' class='name expandable'>disabled</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.disabled ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-disabled\" rel=\"Component.Controller-property-disabled\" class=\"docClass\">Component.Controller.disabled</a></p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-focusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-focusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-focusable' class='name expandable'>focusable</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.focusable ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-focusable\" rel=\"Component.Controller-property-focusable\" class=\"docClass\">Component.Controller.focusable</a></p>\n<p>Defaults to: <code>{value: true}</code></p></div></div></div><div id='property-focused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-focused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-focused' class='name expandable'>focused</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.focused ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-focused\" rel=\"Component.Controller-property-focused\" class=\"docClass\">Component.Controller.focused</a></p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-highlighted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-highlighted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-highlighted' class='name expandable'>highlighted</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.highlighted ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-highlighted\" rel=\"Component.Controller-property-highlighted\" class=\"docClass\">Component.Controller.highlighted</a></p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-prefixCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-property-prefixCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-property-prefixCls' class='name expandable'>prefixCls</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>see Component.Controller.prefixCls ...</div><div class='long'><p>see <a href=\"#!/api/Component.Controller-property-prefixCls\" rel=\"Component.Controller-property-prefixCls\" class=\"docClass\">Component.Controller.prefixCls</a></p>\n<p>Defaults to: <code>{value: &quot;ks-&quot;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_uiSetActive' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-_uiSetActive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-_uiSetActive' class='name expandable'>_uiSetActive</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> v</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_uiSetDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-_uiSetDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-_uiSetDisabled' class='name expandable'>_uiSetDisabled</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> v</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_uiSetFocused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-_uiSetFocused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-_uiSetFocused' class='name expandable'>_uiSetFocused</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> v</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_uiSetHighlighted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-_uiSetHighlighted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-_uiSetHighlighted' class='name expandable'>_uiSetHighlighted</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> v</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponentCssClassWithState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-getComponentCssClassWithState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-getComponentCssClassWithState' class='name expandable'>getComponentCssClassWithState</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> state]</span> )</div><div class='description'><div class='short'>Get all css class name to be applied to the root element of this component for given state. ...</div><div class='long'><p>Get all css class name to be applied to the root element of this component for given state.\nthe css class names are prefixed with component name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>This component's state info.</p>\n</div></li></ul></div></div></div><div id='method-getContentElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-getContentElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-getContentElement' class='name expandable'>getContentElement</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></div><div class='description'><div class='short'>Return the dom element into which child component to be rendered. ...</div><div class='long'><p>Return the dom element into which child component to be rendered.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCssClassWithPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-getCssClassWithPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-getCssClassWithPrefix' class='name expandable'>getCssClassWithPrefix</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> classes</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get full class name (with prefix) for current component ...</div><div class='long'><p>Get full class name (with prefix) for current component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classes</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>{String} class names without prefixCls. Separated by space.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>class name with prefixCls</p>\n</div></li></ul></div></div></div><div id='method-getKeyEventTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Component.Render'>Component.Render</span><br/><a href='source/render.html#Component-Render-method-getKeyEventTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Component.Render-method-getKeyEventTarget' class='name expandable'>getKeyEventTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></div><div class='description'><div class='short'>Returns the dom element which is responsible for listening keyboard events. ...</div><div class='long'><p>Returns the dom element which is responsible for listening keyboard events.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});