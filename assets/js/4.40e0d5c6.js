(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{26:function(t,r,e){},45:function(t,r,e){"use strict";var i=e(26);e.n(i).a},49:function(t,r,e){"use strict";e.r(r);var i={name:"IframeWrapper",props:{src:{type:String,required:!0},ratio:{type:String,default:"16:9"}},computed:{calcRatio(){let t=this.ratio.split(":");return t[1]/t[0]*100},ratioStyle(){return{paddingTop:`${this.calcRatio}%`}}}},a=(e(45),e(0)),s=Object(a.a)(i,function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"iframe-wrapper",style:this.ratioStyle},[r("iframe",{attrs:{src:this.src}})])},[],!1,null,"243c31b5",null);r.default=s.exports}}]);