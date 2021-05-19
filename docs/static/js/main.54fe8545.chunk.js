(this.webpackJsonpNYCTaxiTrips=this.webpackJsonpNYCTaxiTrips||[]).push([[0],{159:function(e,t){},255:function(e,t,i){},256:function(e,t,i){},279:function(e,t){},282:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(48),r=i.n(o),d=(i(255),i(256),i(139)),l=i(187),s=i(188),c=i(189),u=i(210),h=i(135),g=i(43),j=i(324),b=i(328),p=i(330),m=i(322),f=i(329),x=i(153),O=i(196),v=i.n(O),w=i(332),y=i(313),k=i(284),S=i(326),C=i(317),T=i(289),P=i(316),A=i(199),L=i.n(A),_=i(197),E=i.n(_),F=i(198),D=i.n(F),H=i(314),M=i(6);function R(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Introduction"}),Object(M.jsx)("div",{children:"This visualization explores where New Yorkers traveled via taxi during the initial months of the COVID-19 pandemic."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"For each trip, a pickup location (green dot) and dropoff location (red dot) are marked on the map."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"To pan and navigate the map, click and drag. Shift+click and drag to rotate the map view. Scroll to zoom in and out."}),Object(M.jsx)("h4",{children:"Guided Exploration"}),Object(M.jsx)("div",{children:"Take a look around on the map and see if you can spot where riders may like to be dropped off."})]})}function B(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Time Filter"}),Object(M.jsx)("div",{children:"Certain locations are popular at certain times of the day. To filter based on when a trip was taken, use the filter at the bottom of the map."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"The size of the filter can be made adjustable by using the lock icon to analyze larger periods of time"}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"To view how trips change over time, the play/pause icon can automatically increment the filter window."}),Object(M.jsx)("h4",{children:"Performance note"}),Object(M.jsx)("div",{children:"It is recommended that the filter size is less than 6 hours when using the autoplay function."})]})}function N(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"Brushing is a method of analyzing specific regions on the map."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"Hovering on the map will highlight the trips around that location. Arcs annotate the trip's pickup (green) and dropoff (red) locations."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"The target of the brush indicates which trips are highlighted in the area: pickups, dropoffs, or both."}),Object(M.jsx)("h4",{children:"Guided Exploration"}),Object(M.jsx)("div",{children:"What are some popular destinations and where to people travel to get there?"})]})}function V(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"Aggregation of individual trips into bins provides a summary view of the trips taken in the city."}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"These bins can aggregate over pickups or dropoffs in the area. Hovering over a bin column shows the count and location of the aggregation bin."}),Object(M.jsx)("br",{}),Object(M.jsx)("h4",{children:"Guided Exploration"}),Object(M.jsx)("div",{children:"How do popular pickup and dropoff locations change with time?"}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"When do people usually depart from LaGuardia Airport (LGA)? When do they arrive?"})]})}function I(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"Data courtesy of New York City's Taxi and Limousine Commision"})]})}function J(e){e.counts;var t=e.resetFilter,i=e.resetView,o=e.brushing,r=e.setBrushing,d=e.aggregate,l=e.setAggregate,s=e.brushRadius,c=e.setBrushRadius,u=e.pickupAgg,h=e.setPickupAgg,j=e.arcType,b=e.setArcType,p=[Object(M.jsx)(R,{}),Object(M.jsx)(B,{}),Object(M.jsx)(N,{}),Object(M.jsx)(V,{}),Object(M.jsx)(I,{})],m=p.length,f=Object(n.useState)(0),x=Object(g.a)(f,2),O=x[0],v=x[1],A=function(e){var t=O+e;t<0?t=0:t>=m&&(t=m-1),O!==t&&(2===t?(r(!0),l(!1)):3===t?(r(!1),l(!0)):(r(!1),l(!1)),v(t))},_=Object(w.a)("div")({position:"absolute",zIndex:1,top:"1vh",left:"1vw",height:"90vh",width:"20vw"}),F=Object(w.a)("div")({color:"#dddddd",borderColor:"rgb(72,72,72)",padding:"1em",position:"",zIndex:1,height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",background:"rgb(48,48,48)",borderRadius:"10px"}),J=Object(w.a)("div")({color:"#dddddd",display:"block",fontSize:"1.75em",marginTop:"0.25em",marginBottom:"0.83em",marginLeft:0,marginRight:0,fontWeight:"bold"}),z=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{color:"#dddddd",background:"rgb(48,48,48)",border:"0px solid #000",padding:e.spacing(2,4,3)}}}))(),G=a.a.useState(!1),Y=Object(g.a)(G,2),W=Y[0],q=Y[1],U=function(e,t){c(t)};return Object(M.jsxs)("div",{children:[Object(M.jsx)(_,{children:Object(M.jsxs)(F,{children:[Object(M.jsx)(J,{children:"NYC COVID Taxi Trips"}),Object(M.jsx)("div",{children:Object(M.jsxs)(H.a,{children:[Object(M.jsx)(k.a,{variant:O?"contained":"outlined",disableElevation:!0,onClick:function(){return A(-1)},color:"primary",startIcon:Object(M.jsx)(E.a,{}),children:"Back"}),Object(M.jsx)(k.a,{variant:O!==m-1?"contained":"outlined",disableElevation:!0,onClick:function(){return A(1)},color:"primary",endIcon:Object(M.jsx)(D.a,{}),children:"Next"})]})}),Object(M.jsxs)("div",{children:[O===m-1?Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Free Exploration"}),Object(M.jsx)("div",{children:"Analysis Method"}),Object(M.jsx)("br",{}),Object(M.jsxs)(H.a,{children:[Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){r(!o),l(!1)},color:o?"":"primary",children:"brushing"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){l(!d),r(!1)},color:d?"":"primary",children:"aggregation"})]}),Object(M.jsx)("div",{}),Object(M.jsx)("br",{}),Object(M.jsxs)(H.a,{children:[Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:t,color:"primary",children:"Reset Time"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:i,color:"primary",children:"Reset View"})]}),Object(M.jsx)(P.a,{variant:"contained",disableElevation:!0,onClick:function(){q(!0)},color:"secondary",children:Object(M.jsx)(L.a,{})})]}):Object(M.jsx)("div",{}),o?Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Location Brushing"}),Object(M.jsx)("div",{children:"Brushing Arc Target"}),Object(M.jsx)("br",{}),Object(M.jsxs)(H.a,{size:"small",children:[Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return b("source")},color:"source"===j?"":"primary",children:"Pickups"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return b("target")},color:"target"===j?"":"primary",children:"Dropoffs"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return b("source_target")},color:"source_target"===j?"":"primary",children:"Both"})]}),Object(M.jsx)("div",{}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:"Brush Radius"}),Object(M.jsx)("br",{}),Object(M.jsxs)(H.a,{size:"small",children:[Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return U(0,100)},color:100===s?"":"primary",children:"Small"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return U(0,200)},color:200===s?"":"primary",children:"Medium"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return U(0,400)},color:400===s?"":"primary",children:"Large"})]}),Object(M.jsx)("br",{})]}):Object(M.jsx)("div",{}),d?Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Location Aggregation"}),Object(M.jsx)("div",{children:"Aggregation Type"}),Object(M.jsx)("br",{}),Object(M.jsxs)(H.a,{size:"small",children:[Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return h(!0)},color:u?"":"primary",children:"Pickup"}),Object(M.jsx)(k.a,{variant:"contained",disableElevation:!0,onClick:function(){return h(!1)},color:u?"primary":"",children:"Dropoff"})]})]}):Object(M.jsx)("div",{}),Object(M.jsx)("div",{children:p[O]})]})]})}),Object(M.jsx)("div",{children:Object(M.jsx)(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:z.modal,open:W,onClose:function(){q(!1)},closeAfterTransition:!0,BackdropComponent:C.a,BackdropProps:{timeout:500},children:Object(M.jsx)(T.a,{in:W,children:Object(M.jsxs)("div",{className:z.paper,children:[Object(M.jsx)("h2",{id:"transition-modal-title",children:"Help:"}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:"The map displays where New Yrok City Taxis picked up and dropped off passengers during the first few months of the COVID pandemic."}),Object(M.jsx)("li",{children:"Green Represents a pickup location and red means a dropoff location."}),Object(M.jsx)("p",{}),Object(M.jsx)("li",{children:"Enabling brushing allows for the specific trips to be highlighted."}),Object(M.jsx)("li",{children:"The brushing can filter the trips with pickups, dropoffs, or both inside the radius."}),Object(M.jsx)("li",{children:"The radius of the brush can be changed via the slider."}),Object(M.jsx)("p",{}),Object(M.jsx)("li",{children:"An aggregate view of the data can be enabled to show aggregation of where pickup and dropoff locations are."}),Object(M.jsx)("p",{}),Object(M.jsx)("li",{children:"The time filter can be adjusted to view how trip locations change over time."}),Object(M.jsx)("li",{children:"The lock icon toggles the fixed/free filter size."}),Object(M.jsx)("li",{children:'The filter can be reset with the "Reset Filter" button.'}),Object(M.jsx)("p",{}),Object(M.jsx)("li",{children:'The view of the map can be reset to the initial using the "Reset View" button'})]}),Object(M.jsx)("p",{children:"Data courtesy of NYC TLS: https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page"})]})})})})]})}function z(e){var t=e.width,i=e.height,n=e.viewState,o=e.onViewStateChange,r=e.stations,d=e.trips,l=e.time_filter,s=e.loading,c=(e.isPlaying,e.setHighlight,e.resetFilter),u=e.resetView,x=function(){var e={};return r.forEach((function(t){e[t.id]=0})),e},O=function(){return d.filter((function(e){return e.start_minutes>=l[0]&&e.start_minutes<=l[1]}))},v=new f.a,w=[255,0,0],y=[0,255,0],k=a.a.useState(void 0),S=Object(g.a)(k,2),C=(S[0],S[1],a.a.useState(x())),T=Object(g.a)(C,2),P=(T[0],T[1],a.a.useState(0)),A=Object(g.a)(P,2),L=A[0],_=(A[1],a.a.useState(O())),E=Object(g.a)(_,2),F=E[0],D=E[1],H=a.a.useState(!1),R=Object(g.a)(H,2),B=R[0],N=R[1],V=a.a.useState(100),I=Object(g.a)(V,2),z=I[0],G=I[1],Y=a.a.useState(!1),W=Object(g.a)(Y,2),q=W[0],U=W[1],X=a.a.useState(!0),Q=Object(g.a)(X,2),Z=Q[0],K=Q[1],$=a.a.useState("source"),ee=Object(g.a)($,2),te=ee[0],ie=ee[1];a.a.useEffect((function(){D(O())}),[l,s]);var ne=[new j.a({id:"pickup-agg",data:F,elevationRange:[0,3e3],elevationScale:1,extruded:!0,opacity:.7,visible:q&&Z,radius:100,coverage:.7,pickable:!0,getPosition:function(e){return e.start_position},autoHighlight:!0}),new j.a({id:"dropoff-agg",data:F,elevationRange:[0,3e3],elevationScale:d&&d.length?1:0,extruded:!0,opacity:.7,visible:q&&!Z,radius:100,coverage:.7,pickable:!0,autoHighlight:!0,getPosition:function(e){return e.end_position}}),new b.a({id:"pickup",data:F,getPosition:function(e){return e.start_position},getFillColor:[0,255,0,50],visible:!q,getRadius:5}),new b.a({id:"dropoff",data:F,getPosition:function(e){return e.end_position},getFillColor:[255,0,0,50],visible:!q,getRadius:5}),new b.a({id:"pickup-brushed",data:F,getPosition:function(e){return e.start_position},getFillColor:y,getRadius:5,brushingRadius:z,brushingEnabled:B,visible:!q,extensions:[v]}),new b.a({id:"dropoff-brushed",data:F,getPosition:function(e){return e.end_position},getFillColor:w,getRadius:5,brushingRadius:z,brushingEnabled:B,visible:!q,extensions:[v]}),new p.a({id:"arc-layer",data:F,getSourcePosition:function(e){return e.start_position},getTargetPosition:function(e){return e.end_position},getSourceColor:function(e){return y},getTargetColor:function(e){return w},opacity:.2,updateTriggers:{getSourceColor:[l],getTargetColor:[l]},brushingRadius:z,brushingEnabled:B,visible:B&&!q,brushingTarget:te,extensions:[v]})];return Object(M.jsxs)("div",{children:[Object(M.jsx)(J,{counts:L,resetFilter:c,resetView:u,brushing:B,setBrushing:N,aggregate:q,setAggregate:U,brushRadius:z,setBrushRadius:G,pickupAgg:Z,setPickupAgg:K,arcType:te,setArcType:ie}),Object(M.jsx)(h.b,{mapboxApiAccessToken:"pk.eyJ1IjoianpoYW5nNTYiLCJhIjoiY2tuMXhmNG44MTI1MzJ2bW9rbWhjNTM4YSJ9.Oukq6B1n9DOXpjfRZfUOJQ",width:t,height:i,viewState:n,onViewStateChange:o,mapStyle:"mapbox://styles/mapbox/dark-v9",children:Object(M.jsx)(m.a,{viewState:n,layers:ne,getTooltip:function(e){var t=e.object;if(!t)return null;if(Z){var i=t.position[1],n=t.position[0],a=t.points.length;return t&&"        Hexbin LatLng: ".concat([i,n],"\n        Number of taxi pickups: ").concat(a)}var o=t.position[1],r=t.position[0],d=t.points.length;return t&&"        Hexbin LatLng: ".concat([o,r],"\n        Number of taxi dropoffs: ").concat(d)}})})]})}v.a.workerClass=i(278).default;var G={3186:{name:"Grove St PATH",latitude:40.71958611647166,longitude:-74.0431174635887},3195:{name:"Sip Ave",latitude:40.73089709786179,longitude:-74.06391263008119},3199:{name:"Newport Pkwy",latitude:40.728744799999994,longitude:-74.03210820000001},3792:{name:"Columbus Dr at Exchange Pl",latitude:40.71687,longitude:-74.03281},3185:{name:"City Hall",latitude:40.717732500000004,longitude:-74.04384499999999},3275:{name:"Columbus Drive",latitude:40.71835519823214,longitude:-74.03891444206238},3639:{name:"Harborside",latitude:40.71925170000001,longitude:-74.034234},3276:{name:"Marin Light Rail",latitude:40.71458403535893,longitude:-74.04281705617905},3202:{name:"Newport PATH",latitude:40.7272235,longitude:-74.03375890000001},3211:{name:"Newark Ave",latitude:40.72152515,longitude:-74.046304543},3213:{name:"Van Vorst Park",latitude:40.71848892,longitude:-74.047726625},3640:{name:"Journal Square",latitude:40.733670000000004,longitude:-74.0625},3187:{name:"Warren St",latitude:40.721123600000006,longitude:-74.03805095},3203:{name:"Hamilton Park",latitude:40.727595965999996,longitude:-74.044247311},3207:{name:"Oakland Ave",latitude:40.7376037,longitude:-74.05247829999999},3678:{name:"Fairmount Ave",latitude:40.72572613742557,longitude:-74.07195925712584},3194:{name:"McGinley Square",latitude:40.7253399253558,longitude:-74.06762212514876},3206:{name:"Hilltop",latitude:40.7311689,longitude:-74.0575736},3225:{name:"Baldwin at Montgomery",latitude:40.7236589,longitude:-74.0641943},3220:{name:"5 Corners Library",latitude:40.73496102000952,longitude:-74.05950307846071},3196:{name:"Riverview Park",latitude:40.7443187,longitude:-74.04399090000001},3272:{name:"Jersey & 3rd",latitude:40.723331586464354,longitude:-74.04595255851744},3269:{name:"Brunswick & 6th",latitude:40.726011729646245,longitude:-74.0503889322281},3638:{name:"Washington St",latitude:40.7242941,longitude:-74.0354826},3278:{name:"Monmouth and 6th",latitude:40.72568548362901,longitude:-74.0487903356552},3273:{name:"Manila & 1st",latitude:40.72165072487999,longitude:-74.04288411140442},3279:{name:"Dixon Mills",latitude:40.72163014263835,longitude:-74.04996782541275},3270:{name:"Jersey & 6th St",latitude:40.72528910781132,longitude:-74.04557168483734},3205:{name:"JC Medical Center",latitude:40.71653978099194,longitude:-74.0496379137039},3209:{name:"Brunswick St",latitude:40.7241765,longitude:-74.05065640000001},3267:{name:"Morris Canal",latitude:40.7124188237569,longitude:-74.03852552175522},3212:{name:"Christ Hospital",latitude:40.734785818,longitude:-74.050443636},3184:{name:"Paulus Hook",latitude:40.7141454,longitude:-74.0335519},3681:{name:"Grand St",latitude:40.71517767732029,longitude:-74.03768330812454},3679:{name:"Bergen Ave",latitude:40.72210378668603,longitude:-74.07145500183104},3483:{name:"Montgomery St",latitude:40.71942,longitude:-74.05099},3280:{name:"Astor Place",latitude:40.71928220070703,longitude:-74.07126188278198},3214:{name:"Essex Light Rail",latitude:40.712774200000005,longitude:-74.03648570000001},3791:{name:"Hoboken Ave at Monmouth St",latitude:40.73520838045357,longitude:-74.04696375131606},3481:{name:"York St",latitude:40.71649,longitude:-74.04105},3193:{name:"Lincoln Park",latitude:40.7246050998869,longitude:-74.07840594649316},3677:{name:"Glenwood Ave",latitude:40.72755146730012,longitude:-74.07106071710588},3268:{name:"Lafayette Park",latitude:40.71346382669195,longitude:-74.06285852193831},3281:{name:"Leonard Gordon Park",latitude:40.74590996631558,longitude:-74.05727148056029},3210:{name:"Pershing Field",latitude:40.742677141,longitude:-74.051788633},3201:{name:"Dey St",latitude:40.737711,longitude:-74.066921},3694:{name:"Jackson Square",latitude:40.71113,longitude:-74.0789},3192:{name:"Liberty Light Rail",latitude:40.711242299999995,longitude:-74.0557013},3198:{name:"Heights Elevator",latitude:40.748715945380226,longitude:-74.04044330120088},3277:{name:"Communipaw & Berry Lane",latitude:40.71435836870427,longitude:-74.06661093235016},3191:{name:"Union St",latitude:40.71821129999999,longitude:-74.08363940000001},3426:{name:"JCBS Depot",latitude:40.70965083364061,longitude:-74.06860113143921}},Y=[{name:"Grove St PATH",latitude:40.71958611647166,longitude:-74.0431174635887,id:3186},{name:"Sip Ave",latitude:40.73089709786179,longitude:-74.06391263008119,id:3195},{name:"Newport Pkwy",latitude:40.728744799999994,longitude:-74.03210820000001,id:3199},{name:"Columbus Dr at Exchange Pl",latitude:40.71687,longitude:-74.03281,id:3792},{name:"City Hall",latitude:40.717732500000004,longitude:-74.04384499999999,id:3185},{name:"Columbus Drive",latitude:40.71835519823214,longitude:-74.03891444206238,id:3275},{name:"Harborside",latitude:40.71925170000001,longitude:-74.034234,id:3639},{name:"Marin Light Rail",latitude:40.71458403535893,longitude:-74.04281705617905,id:3276},{name:"Newport PATH",latitude:40.7272235,longitude:-74.03375890000001,id:3202},{name:"Newark Ave",latitude:40.72152515,longitude:-74.046304543,id:3211},{name:"Van Vorst Park",latitude:40.71848892,longitude:-74.047726625,id:3213},{name:"Journal Square",latitude:40.733670000000004,longitude:-74.0625,id:3640},{name:"Warren St",latitude:40.721123600000006,longitude:-74.03805095,id:3187},{name:"Hamilton Park",latitude:40.727595965999996,longitude:-74.044247311,id:3203},{name:"Oakland Ave",latitude:40.7376037,longitude:-74.05247829999999,id:3207},{name:"Fairmount Ave",latitude:40.72572613742557,longitude:-74.07195925712584,id:3678},{name:"McGinley Square",latitude:40.7253399253558,longitude:-74.06762212514876,id:3194},{name:"Hilltop",latitude:40.7311689,longitude:-74.0575736,id:3206},{name:"Baldwin at Montgomery",latitude:40.7236589,longitude:-74.0641943,id:3225},{name:"5 Corners Library",latitude:40.73496102000952,longitude:-74.05950307846071,id:3220},{name:"Riverview Park",latitude:40.7443187,longitude:-74.04399090000001,id:3196},{name:"Jersey & 3rd",latitude:40.723331586464354,longitude:-74.04595255851744,id:3272},{name:"Brunswick & 6th",latitude:40.726011729646245,longitude:-74.0503889322281,id:3269},{name:"Washington St",latitude:40.7242941,longitude:-74.0354826,id:3638},{name:"Monmouth and 6th",latitude:40.72568548362901,longitude:-74.0487903356552,id:3278},{name:"Manila & 1st",latitude:40.72165072487999,longitude:-74.04288411140442,id:3273},{name:"Dixon Mills",latitude:40.72163014263835,longitude:-74.04996782541275,id:3279},{name:"Jersey & 6th St",latitude:40.72528910781132,longitude:-74.04557168483734,id:3270},{name:"JC Medical Center",latitude:40.71653978099194,longitude:-74.0496379137039,id:3205},{name:"Brunswick St",latitude:40.7241765,longitude:-74.05065640000001,id:3209},{name:"Morris Canal",latitude:40.7124188237569,longitude:-74.03852552175522,id:3267},{name:"Christ Hospital",latitude:40.734785818,longitude:-74.050443636,id:3212},{name:"Paulus Hook",latitude:40.7141454,longitude:-74.0335519,id:3184},{name:"Grand St",latitude:40.71517767732029,longitude:-74.03768330812454,id:3681},{name:"Bergen Ave",latitude:40.72210378668603,longitude:-74.07145500183104,id:3679},{name:"Montgomery St",latitude:40.71942,longitude:-74.05099,id:3483},{name:"Astor Place",latitude:40.71928220070703,longitude:-74.07126188278198,id:3280},{name:"Essex Light Rail",latitude:40.712774200000005,longitude:-74.03648570000001,id:3214},{name:"Hoboken Ave at Monmouth St",latitude:40.73520838045357,longitude:-74.04696375131606,id:3791},{name:"York St",latitude:40.71649,longitude:-74.04105,id:3481},{name:"Lincoln Park",latitude:40.7246050998869,longitude:-74.07840594649316,id:3193},{name:"Glenwood Ave",latitude:40.72755146730012,longitude:-74.07106071710588,id:3677},{name:"Lafayette Park",latitude:40.71346382669195,longitude:-74.06285852193831,id:3268},{name:"Leonard Gordon Park",latitude:40.74590996631558,longitude:-74.05727148056029,id:3281},{name:"Pershing Field",latitude:40.742677141,longitude:-74.051788633,id:3210},{name:"Dey St",latitude:40.737711,longitude:-74.066921,id:3201},{name:"Jackson Square",latitude:40.71113,longitude:-74.0789,id:3694},{name:"Liberty Light Rail",latitude:40.711242299999995,longitude:-74.0557013,id:3192},{name:"Heights Elevator",latitude:40.748715945380226,longitude:-74.04044330120088,id:3198},{name:"Communipaw & Berry Lane",latitude:40.71435836870427,longitude:-74.06661093235016,id:3277},{name:"Union St",latitude:40.71821129999999,longitude:-74.08363940000001,id:3191},{name:"JCBS Depot",latitude:40.70965083364061,longitude:-74.06860113143921,id:3426}],W=i.p+"static/media/taxis.ac20a2fd.csv",q=i(42),U=i(331),X=i(204),Q=i.n(X),Z=i(205),K=i.n(Z),$=i(203),ee=i.n($),te=i(202),ie=i.n(te),ne=Object(w.a)("div")({position:"absolute",left:"20vw",zIndex:1,bottom:"40px",width:"80vw",display:"flex",justifyContent:"center",alignItems:"center"}),ae=Object(w.a)("div")({position:"",zIndex:1,height:"120%",width:"65%",display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(48,48,48)",borderRadius:"10px"}),oe=Object(q.a)({root:{marginLeft:12,width:"80%"},valueLabel:{"& span":{background:"rgb(75,75,75)",color:"#ffffff"}}})(U.a);function re(e){var t=e.min,i=e.max,a=e.value,o=e.animationSpeed,r=e.onChange,d=e.formatLabel,l=Object(n.useState)(!0),s=Object(g.a)(l,2),c=s[0],u=s[1],h=Object(n.useState)(a[1]-a[0]),j=Object(g.a)(h,2),b=j[0],p=j[1],m=Object(n.useState)(!1),f=Object(g.a)(m,2),x=f[0],O=f[1],v=Object(n.useState)({}),w=Object(g.a)(v,1)[0];if(Object(n.useEffect)((function(){return function(){return w.id&&cancelAnimationFrame(w.id)}}),[w]),x&&!w.id){var y=a[1]-a[0],k=a[0]+o;k+y>=i&&(k=t),w.id=requestAnimationFrame((function(){w.id=0,r([k,k+y])}))}var S=a[0]>t||a[1]<i;Object(n.useEffect)((function(){p(a[1]-a[0])}),[a]);var C=function(e){var n=[a[0],a[1]];c?((n=e[1]===n[1]?[e[0],e[0]+b]:[e[1]-b,e[1]])[0]<t&&(n=[t,t+b]),n[1]>i&&(n=[i-b,i]),r(n)):r(e)};return Object(M.jsx)(ne,{children:Object(M.jsxs)(ae,{children:[Object(M.jsx)(P.a,{color:"secondary",disabled:!S,onClick:function(){return O(!x)},children:x?Object(M.jsx)(ie.a,{title:"Stop"}):Object(M.jsx)(ee.a,{title:"Animate"})}),Object(M.jsx)(oe,{color:"secondary",min:t,max:i,value:a,"aria-labelledby":"time-filter",onChange:function(e,t){return C(t)},valueLabelDisplay:"on",valueLabelFormat:d}),Object(M.jsx)(P.a,{color:"secondary",onClick:function(){u(!c),p(a[1]-a[0])},children:c?Object(M.jsx)(Q.a,{title:"Lock Time Filter"}):Object(M.jsx)(K.a,{title:"Open Time Filter"})})]})})}var de=i(321),le=i(206),se=i.n(le),ce=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{color:"#dddddd",background:"rgb(48,48,48)",border:"0px solid #000",padding:e.spacing(2,4,3)}}}));function ue(e){var t=e.loading,i=ce(),n=a.a.useState(!0),o=Object(g.a)(n,2),r=o[0],d=o[1];return Object(M.jsx)("div",{children:Object(M.jsx)(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:i.modal,open:r,onClose:function(){t||d(!1)},closeAfterTransition:!0,BackdropComponent:C.a,BackdropProps:{timeout:500},children:Object(M.jsx)(T.a,{in:r,children:Object(M.jsxs)("div",{className:i.paper,children:[Object(M.jsx)("h2",{id:"transition-modal-title",children:"NYC Taxi Trips during COVID"}),Object(M.jsx)("p",{id:"transition-modal-description",children:"The COVID pandemic led to lockdowns and the reduction of travels."}),Object(M.jsx)("p",{children:"A city that was hit espectially hard was NYC."}),Object(M.jsx)("p",{children:"Let's explore how the first few months of the pandemic (March - June 2020) changed how people used taxis in NYC."}),Object(M.jsx)("p",{children:"Data courtesy of NYC TLS: https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page"}),t?Object(M.jsxs)("div",{children:["The data is loading, please wait. ",Object(M.jsx)(de.a,{})]}):Object(M.jsx)("div",{children:Object(M.jsxs)("p",{children:["Loading complete. Click outside to continue ",Object(M.jsx)(se.a,{})]})})]})})})})}var he={longitude:-74,latitude:40.72,zoom:13.5,pitch:45,bearing:0},ge=function(e){Object(c.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).setViewState=function(e){n.setState({viewState:e})},n.setFilter=function(e){n.setState({time_filter:e})},n.resetFilter=function(){n.setState({time_filter:[600,780]})},n.resetView=function(){n.handleFlyTo(he)},n.setHighlight=function(e,t){n.setState({highlightStation:e,highlightCount:t})},n.formatLabel=function(e){var t=("00"+Math.floor(e/60)).slice(-2),i=("00"+e%60).slice(-2);return"".concat(t,":").concat(i)},n.handleChangeViewState=function(e){var t=e.viewState;n.setViewState(t)},n.handleFlyTo=function(e){n.setViewState(Object(d.a)(Object(d.a)(Object(d.a)({},n.state.viewState),e),{},{transitionDuration:1500,transitionInterpolator:new h.a}))},n.togglePlaying=function(){n.setState({playing:!n.state.playing})},n.state={viewState:he,station_info:G,stations:Y,trips:[],loading:!0,time_filter:[600,780],playing:!1,highlightStation:void 0,highlightCount:0},n}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var e=this;Object(x.a)(W,(function(e){var t=new Date(e.tpep_pickup_datetime),i=new Date(e.tpep_dropoff_datetime);return{taxi_type:+e.VendorID,duration:(i-t)/6e4,distance:+e.trip_distance,passenger_count:+e.passenger_count,start_time:t.toTimeString(),start_minutes:60*t.getHours()+t.getMinutes(),fare_amount:+e.fare_amount,tip_amount:+e.tip_amount,total_amount:+e.total_amount,start_position:[+e.pickup_longitude,+e.pickup_latitude],end_position:[+e.dropoff_longitude,+e.dropoff_latitude]}})).then((function(t){new Date("01-01-2020"),new Date("05-01-2020");var i=t;e.setState({trips:i,loading:!1})})).then((function(){e.handleFlyTo(he)}))}},{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)(ue,{loading:this.state.loading}),Object(M.jsx)(z,{width:"100vw",height:"100vh",viewState:this.state.viewState,onViewStateChange:this.handleChangeViewState,stations:this.state.stations,trips:this.state.trips,toggle:this.state.toggle,time_filter:this.state.time_filter,loading:this.state.loading,isPlaying:this.state.playing,resetFilter:this.resetFilter,resetView:this.resetView}),Object(M.jsx)(re,{min:0,max:1439,value:this.state.time_filter,animationSpeed:10,formatLabel:this.formatLabel,onChange:this.setFilter,togglePlaying:this.togglePlaying})]})}}]),i}(n.Component),je=function(){return Object(M.jsx)(ge,{})},be=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,333)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),o(e),r(e)}))};r.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(je,{})}),document.getElementById("root")),be()}},[[282,1,2]]]);
//# sourceMappingURL=main.54fe8545.chunk.js.map