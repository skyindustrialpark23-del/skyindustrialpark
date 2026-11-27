/* Default content + merge helper, shared by the website and the admin panel. */
(function(){
var plot=function(n){return{name:"Plot 0"+n,type:"Industrial plot",location:"",area:"",price:"",status:"",image:"",demo:true}};
window.SKY_DEFAULTS={
settings:{
  company:"Sky Industrial Park",
  siteTitle:"SKY Industrial Park – Industrial Plots, Land & Site Development",
  siteDesc:"Industrial plots with land mutation and conversion completed. Price on request. Enquire on WhatsApp.",
  logoText:"SKY INDUSTRIAL PARK",
  logoImage:"",
  favicon:"",
  colorMain:"#5b21d6",
  colorDark:"#220a5e",
  whatsapp:"",
  phone:"",
  email:"",
  address:"",
  mapQuery:"",
  waMsgGeneral:"Hello Sky Industrial Park,\n\nI would like to know more about your industrial plots.\n\nThank you.",
  waMsgPlot:"Hello Sky Industrial Park,\n\nI am interested in {plot}.\n\nPlease share the plot area, price, photos and location.\n\nThank you."
},
hero:[
  {small:"Sky Industrial Park",title:"The Foundation of Your Industrial Future.",text:"Premium industrial land for your business growth.",btn:"Explore plots",link:"#picks",image:""},
  {small:"Legal status",title:"Mutation and conversion completed",text:"Land mutation and land conversion are both marked completed.",btn:"See status",link:"#overview",image:""},
  {small:"Infrastructure",title:"Boundary work and road filling completed",text:"Completed work and facilities are listed separately.",btn:"See infrastructure",link:"#amenities",image:""}
],
tiles:[
  {label:"Browse plots",link:"#picks",image:""},
  {label:"Legal status",link:"#overview",image:""},
  {label:"Infrastructure",link:"#amenities",image:""},
  {label:"Photo gallery",link:"#gallery",image:""},
  {label:"Project location",link:"#location",image:""},
  {label:"Contact us",link:"#top",image:""}
],
plots:[1,2,3,4,5,6].map(plot),
chips:[
  {label:"Mutation done"},
  {label:"Conversion done"}
],
services:[
  {label:"Service",title:"Industrial land sale",text:"Plots with clear papers. Price on request.",btn:"Ask about plots",link:"whatsapp",image:""},
  {label:"Service",title:"Land mutation",text:"Land mutation is marked completed.",btn:"See status",link:"#overview",image:""},
  {label:"Service",title:"Land conversion",text:"Land conversion is marked completed.",btn:"See status",link:"#overview",image:""},
  {label:"Completed work",title:"Boundary & road work",text:"Boundary work and brick-bat road filling are completed.",btn:"See work",link:"#amenities",image:""},
  {label:"Facilities",title:"Electricity & water",text:"Electricity facility and water system.",btn:"See facilities",link:"#amenities",image:""}
],
about:{text:"Industrial land and individual plots for companies, manufacturers, factory owners, businesses and investors. Write a few factual sentences about your company here.",video:""},
gallery:[],
videos:[],
tabs:[{label:"Buy plot"},{label:"Lease"},{label:"Warehouse"},{label:"Documents"},{label:"Site visit"}],
overview:[
  {label:"Land type",value:"Industrial plots"},
  {label:"Price",value:"On request"},
  {label:"Plot sizes",value:"Added per plot"},
  {label:"Land mutation",value:"Completed"},
  {label:"Land conversion",value:"Completed"},
  {label:"Enquiry",value:"WhatsApp / form"}
],
infra:[
  {title:"Boundary work",tag:"Completed work",kind:"done",icon:"fence"},
  {title:"Brick-bat road filling",tag:"Completed work",kind:"done",icon:"road"},
  {title:"Electricity facility",tag:"Facility",kind:"fac",icon:"bolt"},
  {title:"Water system",tag:"Facility",kind:"fac",icon:"drop"}
],
menu:[
  {group:"Our Location",label:"Project location",link:"#location"},
  {group:"Our Location",label:"Get directions",link:"#location"},
  {group:"For Buyers",label:"Browse plots",link:"#picks"},
  {group:"For Buyers",label:"Project overview",link:"#overview"},
  {group:"For Buyers",label:"Ask for price",link:"contact"},
  {group:"Services",label:"Industrial land sale",link:"#svc"},
  {group:"Services",label:"Mutation & conversion",link:"#svc"},
  {group:"Services",label:"Boundary & road work",link:"#svc"},
  {group:"Infrastructure",label:"Completed work",link:"#amenities"},
  {group:"Infrastructure",label:"Facilities",link:"#amenities"},
  {group:"Media",label:"Photo gallery",link:"#gallery"},
  {group:"Media",label:"Video",link:"#about"}
],
drawer:[
  {label:"Plots",link:"#picks"},
  {label:"Services",link:"#svc"},
  {label:"About",link:"#about"},
  {label:"Overview",link:"#overview"},
  {label:"Infrastructure",link:"#amenities"},
  {label:"Gallery",link:"#gallery"},
  {label:"Location",link:"#location"},
  {label:"Contact",link:"contact"}
],
sectabs:[
  {label:"About",link:"#about"},
  {label:"Overview",link:"#overview"},
  {label:"Infrastructure",link:"#amenities"},
  {label:"Gallery",link:"#gallery"},
  {label:"Location",link:"#location"}
],
footerlinks:[
  {group:"Explore",label:"Plots",link:"#picks"},
  {group:"Explore",label:"Overview",link:"#overview"},
  {group:"Explore",label:"Infrastructure",link:"#amenities"},
  {group:"More",label:"Gallery",link:"#gallery"},
  {group:"More",label:"Location",link:"#location"},
  {group:"More",label:"Contact",link:"contact"}
],
show:{tiles:true,featured:true,highlighted:true,services:true,about:true,overview:true,infra:true,gallery:true,location:true,banner:true},
texts:{
  tilesT:"Get started with exploring our plots",
  featT:"Featured plots",
  featS:"Price on request. Tap a plot to enquire.",
  priceTxt:"Price on request",
  plotBtn1:"Contact",
  plotBtn2:"WhatsApp",
  mktd:"Mktd. by",
  hiT:"Top highlighted plots",
  hiS:"Noteworthy plots to watch",
  svcT:"What we offer",
  svcS:"Services for industrial buyers",
  aboutT:"About SKY Industrial Park",
  ovT:"Project overview",
  infT:"Infrastructure",
  infN:"Completed work and facilities are listed separately. Ask us for the current status of any plot.",
  galT:"Gallery",
  locT:"Location",
  ctaT:"Looking for industrial land?",
  ctaS:"Tell us your requirement. We will reply with plots, photos and location.",
  ctaB1:"Send requirement",
  ctaB2:"WhatsApp",
  enquireBtn:"Enquire now",
  searchPh:'Search "Plot 03" or "industrial plot"',
  searchAll:"All plots",
  searchBtn:"Search",
  sideTag:"PROJECT",
  sideTitle:"SKY Industrial Park",
  sideSub:"Industrial plots for business growth",
  sideBtn1:"Contact us",
  sideBtn2:"WhatsApp enquiry",
  footTag:"The Foundation of Your Industrial Future.",
  footContactT:"Contact",
  copyright:"SKY Industrial Park. All rights reserved.",
  mTitle:"Contact us",
  mName:"Your name",
  mPhone:"Phone number",
  mEmail:"Email (optional)",
  mPlot:"Interested plot (optional)",
  mMsg:"Message (optional)",
  mConsent:"I agree to be contacted about this enquiry.",
  mSend:"Send on WhatsApp",
  barB1:"Contact",
  barB2:"WhatsApp"
}
};
var MIN={hero:1,tiles:1,services:1};
window.SKY_MERGE=function(c){c=c||{};var D=window.SKY_DEFAULTS,o={};
Object.keys(D).forEach(function(k){var d=D[k],v=c[k];
if(v===undefined||v===null)o[k]=d;
else if(Array.isArray(d)){if(!Array.isArray(v))o[k]=d;else if(MIN[k]&&!v.length)o[k]=d;else o[k]=v.map(function(x){return Object.assign({},d[0]||{},x)})}
else o[k]=Object.assign({},d,v)});return o};
})();
