(self.webpackChunk=self.webpackChunk||[]).push([[9822],{18693:(e,t,n)=>{n.r(t),n.d(t,{DisablePopup:()=>p});var o=n(42356),a=n(72154),r=n(27378),s=n(85908);n(9102);const i=({className:e})=>r.createElement("div",{className:`gr_-spinner ${e}`},r.createElement("div",{className:"gr_-bounce1"}),r.createElement("div",{className:"gr_-bounce2"}),r.createElement("div",{className:"gr_-bounce3"}));class l extends r.Component{constructor(){super(...arguments),this.onClick=e=>{e.preventDefault(),this.props.loading||this.props.onClick&&this.props.onClick(e)}}render(){const{loading:e,cls:t}=this.props,n=e?"":this.props.text,l=this.props.styles||{width:290},c=(0,o.cs)({[s.buttonContainer]:!0,[s[t]]:void 0!==t,[s.loading]:e});return r.createElement("div",{className:c,style:l},e&&r.createElement(i,{className:s.buttonSpinner}),r.createElement(a.M,{clickHandler:this.onClick,dataGrammarlyPart:this.props.dataGrammarlyPart},r.createElement("button",{type:"button",style:l,className:s.button},n)))}}var c=n(56407);class p extends r.Component{constructor(){super(...arguments),this.cancel=()=>this.props.remove()}render(){return r.createElement("div",{className:(0,o.cs)(c.gButtonPopup,c.disable,{[c.gdocs]:this.props.gdocsView},this.props.isFlipped&&c.flipped)},r.createElement("p",{className:c.text},"Turn off Grammarly ",r.createElement("br",null)," for ",r.createElement("span",{className:c.bold},this.props.domain),"?"),this.props.gdocsView?r.createElement((()=>r.createElement(r.Fragment,null,r.createElement(l,{cls:"disable",styles:{width:208},text:"yes, disable",onClick:()=>this.props.disableSite()}),r.createElement(a.M,{clickHandler:()=>this.cancel()},r.createElement("button",{className:c.link},"No, don’t turn it off.")))),null):r.createElement((()=>r.createElement(r.Fragment,null,r.createElement(l,{cls:"disable",styles:{width:208},text:"Yes, for this session.",onClick:()=>this.props.disableOnTab()}),r.createElement(l,{cls:"disable",styles:{width:208},text:"Yes, from now on.",onClick:()=>this.props.disableSite()}),r.createElement(a.M,{clickHandler:()=>this.cancel()},r.createElement("button",{className:c.link},"No, don’t turn it off.")))),null),r.createElement(a.M,{clickHandler:()=>this.cancel()},r.createElement("button",{className:c.close})))}}},56407:e=>{e.exports={gButtonPopup:"diNpB",newDataControl:"kwuQj",showWrapper:"UUYhD",flipped:"iGBQj",title:"pQCa0",icon:"ylCbI",button:"TufcJ",buttonText:"oE1vN",popupFooter:"rA9f6",isFlipped:"hSt1p",settings:"H5xEt",loginSSOPopup:"dGc8e",text:"jfR06",bold:"K4CWO",link:"UAmjO",secondary:"EXtIt",firstTime:"JpYft",close:"OUiPJ",disable:"_1jcw8",gdocs:"TQdVK",loginReminder:"H1d0B",permission:"RPuBs",buttonsContainer:"oNYLG",mainButton:"vJMgg",secondaryButton:"yRqtR",onboarding:"QrVo6",onboardingWithReminder:"njXr2",onboardingClose:"G0tug",dropdownContainer:"WJP1a",arrowhead:"HI72s",dropdownList:"Rog_Q",onboardingWithReminderIconPosition:"v1L7z",chipmunkGButtonCalloutPopup:"wmSgc",closeWrapper:"zd8Dn",containerContents:"_OFkc",container:"A9Cva",containerHeaderDefault:"p2BMe",containerKeyboardQRCodeImageBlock:"z7o3z",qrcode:"byUvC",containerBrandToneImageBlock:"u2hm1",img:"FWo6L",containerSnippetImageBlock:"C4IQI",containerLlamaAdoptionImageBlock:"DQV9Q",containerOwnerActivationImageBlock:"Vw5tG",containerGraduationImageBlock:"pFkGw",containerWritingProgressImageBlock:"phgXA",containerDunningImageBlock:"AW1D4",downgraded:"GNTdE",containerHeaderImageBlock:"VXd7r",containerTitle:"VF3Bz",containerText:"mR_zr",containerButton:"Al3lo",dismiss:"r5cHp",chipmunkGButtonToastPopup:"eJ4pl",chipmunkGButtonToastPopupDark:"dotB_",chipmunkGButtonToastPopupLight:"xBRlb",warningPopup:"HFaC5",btn:"Qq9h5",warningWithoutIcon:"FyT69",ctaBtnGroup:"_FPqK",ctaButton:"u6LqV",later:"ZFbyQ",managedSSOControl:"L1Rzm",illustration:"qESn3",signInWithSSO:"rq8co",signInWithSSO2:"wE0K3"}},85908:e=>{e.exports={buttonContainer:"eNNNu",form:"MbfZN",buttonSpinner:"qvCG5",button:"jFVJS",loading:"k2H0g",onboarding:"ph6fU",disable:"XW_PA"}},9102:e=>{e.exports={}}}]);