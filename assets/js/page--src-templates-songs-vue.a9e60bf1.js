(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,e,r){"use strict";var n=r(5),i=r(38),o=r(23),s=r(2),a=r(64),c=[],u=c.sort,d=s((function(){c.sort(void 0)})),g=s((function(){c.sort(null)})),l=a("sort");n({target:"Array",proto:!0,forced:d||!g||!l},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},346:function(t,e,r){},347:function(t,e){},351:function(t,e,r){var n={"./CustomSong.vue":[363,6]};function i(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],i=e[0];return r.e(e[1]).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id=351,t.exports=i},352:function(t,e,r){"use strict";var n=r(346);r.n(n).a},353:function(t,e,r){"use strict";var n=r(347),i=r.n(n);e.default=i.a},364:function(t,e,r){"use strict";r.r(e);r(99),r(345),r(32);var n={computed:{customPage:function(){var t=this;return function(){return r(351)("./".concat(t.$page.strapiSongs.custom,".vue"))}}},data:function(){return{recordingData:[],videoData:[],recordingsLabel:"",videoPlural:"Video:",currentTrack:null,isDemo:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.recordingData=this.$page.strapiSongs.recordings,this.recordingData.length>0&&(this.recordingData.sort((function(t,e){return t.index-e.index})),this.recordingData.map((function(e){e.multitrack&&(t.isDemo=!1)})),this.isDemo?this.recordingData.length>1?this.recordingsLabel="Demos:":this.recordingsLabel="Demo:":this.recordingData.length>1?this.recordingsLabel="Recordings:":this.recordingsLabel="Recording:"),this.videoData=this.$page.strapiSongs.videos,this.videoData.length>0&&(this.videoData.sort((function(t,e){return t.index-e.index})),this.videoData.length>1&&(this.videoPlural="Videos:"))},stopOthers:function(t){if(this.currentTrack){var e="player-".concat(this.currentTrack),r=this.$refs[e][0];t==this.currentTrack||r.pause()}this.currentTrack=t}}},i=(r(352),r(24)),o=r(353),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[t.$page.strapiSongs.custom?r("div",[r(t.customPage,{tag:"component",attrs:{data:t.$page.strapiSongs}})],1):r("div",[r("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.strapiSongs.title)}}),r("h3",[r("g-link",{attrs:{to:"/music/"}},[t._v("Music by Reenchantment")])],1),t.$page.strapiSongs.explicit?r("p",[t._v("⚠️ Warning: Contains explicit content.")]):t._e(),r("h2",[t._v("Description:")]),r("VueMarkdown",[t._v(t._s(t.$page.strapiSongs.description))]),r("div",{staticClass:"audio"},[t.$page.strapiSongs.recordings.length>0?r("h2",[t._v(t._s(t.recordingsLabel))]):t._e(),t._l(t.recordingData,(function(e,n){return r("div",{key:n},[t.$page.strapiSongs.recordings.length>1?r("h3",[t._v(t._s(n+=1)+". "+t._s(e.title))]):t._e(),r("audio",{ref:"player-"+e.url,refInFor:!0,attrs:{controls:""},on:{play:function(r){return t.stopOthers(e.url)}}},[r("source",{attrs:{src:e.url,type:"audio/mp3"}}),t._v("\n            Your browser does not support the audio element.\n          ")])])}))],2),r("div",{staticClass:"video"},[t.$page.strapiSongs.videos.length>0?r("h2",[t._v(t._s(t.videoPlural))]):t._e(),t._l(t.videoData,(function(e,n){return r("div",{key:n},[t.$page.strapiSongs.videos.length>1?r("h3",[t._v(t._s(n+=1)+". "+t._s(e.title))]):t._e(),r("video",{ref:"player-"+e.url,refInFor:!0,attrs:{controls:""},on:{play:function(r){return t.stopOthers(e.url)}}},[r("source",{attrs:{src:e.url,type:"video/mp4"}}),t._v("\n            Your browser does not support the video element.\n          ")])])}))],2),t.$page.strapiSongs.lyrics?r("h2",[t._v("Lyrics:")]):t._e(),r("VueMarkdown",[t._v(t._s(t.$page.strapiSongs.lyrics))]),r("h2",[t._v("Credits:")]),r("VueMarkdown",[t._v(t._s(t.$page.strapiSongs.credits))])],1)])}),[],!1,null,"8ef46e88",null);"function"==typeof o.default&&Object(o.default)(s);e.default=s.exports}}]);