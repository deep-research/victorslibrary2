(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{C5dW:function(t,e,r){},Rg7E:function(t,e,r){"use strict";var n=r("C5dW");r.n(n).a},ToJy:function(t,e,r){"use strict";var n=r("I+eb"),o=r("HAuM"),i=r("ewvW"),s=r("0Dky"),a=r("pkCn"),c=[],u=c.sort,d=s((function(){c.sort(void 0)})),l=s((function(){c.sort(null)})),p=a("sort");n({target:"Array",proto:!0,forced:d||!l||!p},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"ck/j":function(t,e,r){"use strict";r.r(e);r("2B1R"),r("ToJy"),r("07d7");var n={computed:{customPage:function(){var t=this;return function(){return r("eNEB")("./".concat(t.$page.strapiSongs.custom,".vue"))}}},data:function(){return{recordingData:[],videoData:[],recordingsLabel:"",videoPlural:"Video:",currentTrack:null,isDemo:!0,componentKey:0}},created:function(){this.fetchData()},beforeUpdate:function(){this.fetchData(),this.forceRerender()},methods:{fetchData:function(){var t=this;this.recordingData=this.$page.strapiSongs.recordings,this.recordingData.length>0&&(this.recordingData.sort((function(t,e){return t.index-e.index})),this.recordingData.map((function(e){e.multitrack&&(t.isDemo=!1)})),this.isDemo?this.recordingData.length>1?this.recordingsLabel="Demos:":this.recordingsLabel="Demo:":this.recordingData.length>1?this.recordingsLabel="Recordings:":this.recordingsLabel="Recording:"),this.videoData=this.$page.strapiSongs.videos,this.videoData.length>0&&(this.videoData.sort((function(t,e){return t.index-e.index})),this.videoData.length>1&&(this.videoPlural="Videos:"))},stopOthers:function(t){if(this.currentTrack){var e="player-".concat(this.currentTrack),r=this.$refs[e][0];t==this.currentTrack||r.pause()}this.currentTrack=t},forceRerender:function(){this.componentKey+=1}}},o=(r("Rg7E"),r("KHd+")),i=null,s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{key:t.componentKey},[t.$page.strapiSongs.custom?r("div",[r(t.customPage,{tag:"component",attrs:{data:t.$page.strapiSongs}})],1):r("div",[r("h1",[t._v(t._s(t.$page.strapiSongs.title))]),r("h3",[t._v("\n      By "),r("g-link",{attrs:{to:"/music/"}},[t._v("Reenchantment")])],1),t.$page.strapiSongs.explicit?r("p",[t._v("⚠️ Warning: Contains explicit content.")]):t._e(),r("h2",[t._v("Description:")]),r("VueMarkdown",{attrs:{source:t.$page.strapiSongs.description}}),r("div",{staticClass:"audio"},[t.recordingData.length>0?r("h2",[t._v(t._s(t.recordingsLabel))]):t._e(),t._l(t.recordingData,(function(e,n){return r("div",{key:n},[t.recordingData.length>1?r("h3",[t._v(t._s(n+=1)+". "+t._s(e.title))]):t._e(),r("audio",{ref:"player-"+e.url,refInFor:!0,attrs:{controls:""},on:{play:function(r){return t.stopOthers(e.url)}}},[r("source",{attrs:{src:e.url,type:"audio/mp3"}}),t._v("\n            Your browser does not support the audio element.\n          ")])])}))],2),r("div",{staticClass:"video"},[t.$page.strapiSongs.videos.length>0?r("h2",[t._v(t._s(t.videoPlural))]):t._e(),t._l(t.videoData,(function(e,n){return r("div",{key:n},[t.$page.strapiSongs.videos.length>1?r("h3",[t._v(t._s(n+=1)+". "+t._s(e.title))]):t._e(),r("video",{ref:"player-"+e.url,refInFor:!0,attrs:{controls:""},on:{play:function(r){return t.stopOthers(e.url)}}},[r("source",{attrs:{src:e.url,type:"video/mp4"}}),t._v("\n            Your browser does not support the video element.\n          ")])])}))],2),t.$page.strapiSongs.lyrics?r("h2",[t._v("Lyrics:")]):t._e(),r("VueMarkdown",{attrs:{source:t.$page.strapiSongs.lyrics}}),r("h2",[t._v("Credits:")]),r("VueMarkdown",{attrs:{source:t.$page.strapiSongs.credits}})],1)])}),[],!1,null,"60c4a8ba",null);"function"==typeof i&&i(s);e.default=s.exports},eNEB:function(t,e,r){var n={"./CustomSong.vue":["4D5/",6]};function o(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return r.e(e[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id="eNEB",t.exports=o}}]);