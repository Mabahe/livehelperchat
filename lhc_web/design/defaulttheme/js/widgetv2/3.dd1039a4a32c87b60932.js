(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[3],{131:function(t,e,a){"use strict";a.r(e);var i,n=a(3),o=a.n(n),s=a(4),d=a.n(s),h=a(5),r=a.n(h),c=a(6),p=a.n(c),l=a(1),g=a.n(l),u=a(7),v=a.n(u),w=a(9),m=a.n(w),f=a(0),I=a.n(f),y=a(12),_=a(8),b=a(2),P=a(24),E=Object(y.b)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){function e(t){var a;return o()(this,e),a=r()(this,p()(e).call(this,t)),m()(g()(a),"state",{shown:!1}),a.hideInvitation=a.hideInvitation.bind(g()(a)),a.fullInvitation=a.fullInvitation.bind(g()(a)),a.setBotPayload=a.setBotPayload.bind(g()(a)),a}return v()(e,t),d()(e,[{key:"componentDidMount",value:function(){var t=this;b.a.sendMessageParent("showInvitation",[]),this.props.chatwidget.getIn(["proactive","data","play_sound"])&&b.a.emitEvent("play_sound",[{type:"new_invitation",sound_on:!0===this.props.chatwidget.getIn(["proactive","data","play_sound"]),widget_open:this.props.chatwidget.get("shown")&&"widget"==this.props.chatwidget.get("mode")||document.hasFocus()}]),document.getElementById("id-invitation-height")&&setTimeout((function(){b.a.sendMessageParent("widgetHeight",[{force_width:t.props.chatwidget.hasIn(["proactive","data","message_width"])?t.props.chatwidget.getIn(["proactive","data","message_width"])+40:240,force_height:document.getElementById("id-invitation-height").offsetHeight+20}]),t.setState({shown:!0})}),50)}},{key:"componentWillUnmount",value:function(){b.a.sendMessageParent("widgetHeight",[{reset_height:!0}])}},{key:"hideInvitation",value:function(t){this.props.dispatch(Object(_.f)()),t.preventDefault(),t.stopPropagation()}},{key:"fullInvitation",value:function(){b.a.sendMessageParentDirect("hideInvitation",[{full:!0}]),this.props.dispatch({type:"FULL_INVITATION"})}},{key:"setBotPayload",value:function(t){this.props.setBotPayload(t),this.fullInvitation()}},{key:"render",value:function(){var t=this;this.props.chatwidget.hasIn(["proactive","data","full_widget"])&&this.fullInvitation();var e="proactive-need-help p-2 float-right pointer";return!1===this.state.shown?e+=" invisible":e+=" fade-in",I.a.createElement("div",{className:e,style:{width:this.props.chatwidget.hasIn(["proactive","data","message_width"])?this.props.chatwidget.getIn(["proactive","data","message_width"]):200},onClick:this.fullInvitation,id:"id-invitation-height"},I.a.createElement("button",{title:"Close",onClick:function(e){return t.hideInvitation(e)},className:"float-right btn btn-sm rounded"},I.a.createElement("i",{className:"material-icons mr-0"},"")),I.a.createElement("div",{className:"fs14"},this.props.chatwidget.getIn(["proactive","data","photo"])&&I.a.createElement("img",{src:this.props.chatwidget.getIn(["proactive","data","photo"])}),I.a.createElement("b",null,this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]))),I.a.createElement("p",{className:"fs13 mb-0",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["proactive","data","message"])}}),this.props.chatwidget.hasIn(["proactive","data","bot_intro"])&&I.a.createElement(P.a,{setBotPayload:this.setBotPayload,content:this.props.chatwidget.getIn(["proactive","data","message_full"])}))}}]),e}(f.Component))||i;e.default=E}}]);