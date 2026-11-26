/* Default content + merge helper, shared by the website and the admin panel. */
(function(){
var plot=function(n){return{name:"Plot 0"+n,type:"Industrial plot",location:"",area:"",price:"",status:"",image:"",demo:true}};
window.SKY_DEFAULTS={
settings:{company:"Sky Industrial Park",whatsapp:"",phone:"",email:"",address:"",mapQuery:""},
hero:[
{small:"Sky Industrial Park",title:"The Foundation of Your Industrial Future.",text:"Premium industrial land for your business growth.",btn:"Explore plots",link:"#picks",image:""},
{small:"Legal status",title:"Mutation and conversion completed",text:"Land mutation and land conversion are both marked completed.",btn:"See status",link:"#overview",image:""},
{small:"Infrastructure",title:"Boundary work and road filling completed",text:"Completed work and facilities are listed separately.",btn:"See infrastructure",link:"#amenities",image:""}],
tiles:[{label:"Browse plots",link:"#picks",image:""},{label:"Legal status",link:"#overview",image:""},{label:"Infrastructure",link:"#amenities",image:""},{label:"Photo gallery",link:"#gallery",image:""},{label:"Project location",link:"#location",image:""},{label:"Contact us",link:"#top",image:""}],
plots:[1,2,3,4,5,6].map(plot),
services:[
{label:"Service",title:"Industrial land sale",text:"Plots with clear papers. Price on request.",btn:"Ask about plots",link:"whatsapp",image:""},
{label:"Service",title:"Land mutation",text:"Land mutation is marked completed.",btn:"See status",link:"#overview",image:""},
{label:"Service",title:"Land conversion",text:"Land conversion is marked completed.",btn:"See status",link:"#overview",image:""},
{label:"Completed work",title:"Boundary & road work",text:"Boundary work and brick-bat road filling are completed.",btn:"See work",link:"#amenities",image:""},
{label:"Facilities",title:"Electricity & water",text:"Electricity facility and water system.",btn:"See facilities",link:"#amenities",image:""}],
about:{text:"Industrial land and individual plots for companies, manufacturers, factory owners, businesses and investors. Write a few factual sentences about your company here.",video:""},
gallery:[],
videos:[],
tabs:[{label:"Buy plot"},{label:"Lease"},{label:"Warehouse"},{label:"Documents"},{label:"Site visit"}],
overview:[{label:"Land type",value:"Industrial plots"},{label:"Price",value:"On request"},{label:"Plot sizes",value:"Added per plot"},{label:"Land mutation",value:"Completed"},{label:"Land conversion",value:"Completed"},{label:"Enquiry",value:"WhatsApp / form"}],
infra:[{title:"Boundary work",tag:"Completed work",kind:"done",icon:"fence"},{title:"Brick-bat road filling",tag:"Completed work",kind:"done",icon:"road"},{title:"Electricity facility",tag:"Facility",kind:"fac",icon:"bolt"},{title:"Water system",tag:"Facility",kind:"fac",icon:"drop"}],
texts:{tilesT:"Get started with exploring our plots",featT:"Featured plots",featS:"Price on request. Tap a plot to enquire.",hiT:"Top highlighted plots",hiS:"Noteworthy plots to watch",svcT:"What we offer",svcS:"Services for industrial buyers",aboutT:"About SKY Industrial Park",ovT:"Project overview",infT:"Infrastructure",infN:"Completed work and facilities are listed separately. Ask us for the current status of any plot.",galT:"Gallery",locT:"Location",ctaT:"Looking for industrial land?",ctaS:"Tell us your requirement. We will reply with plots, photos and location."}
};
var MIN={hero:1,tiles:1,services:1};
window.SKY_MERGE=function(c){c=c||{};var D=window.SKY_DEFAULTS,o={};
Object.keys(D).forEach(function(k){var d=D[k],v=c[k];
if(v===undefined||v===null)o[k]=d;
else if(Array.isArray(d)){if(!Array.isArray(v))o[k]=d;else if(MIN[k]&&!v.length)o[k]=d;else o[k]=v.map(function(x){return Object.assign({},d[0]||{},x)})}
else o[k]=Object.assign({},d,v)});return o};
})();
