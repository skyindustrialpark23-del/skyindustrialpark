/* Default content + merge helper, shared by the website and the admin panel. */
(function(){
var plot=function(n){return{name:"Plot 0"+n,type:"Industrial plot",location:"",area:"",price:"",status:"",image:"",demo:false}};
window.SKY_DEFAULTS={
settings:{company:"Sky Industrial Park",whatsapp:"",phone:"",email:"",address:"",mapQuery:"",siteTitle:"SKY Industrial Park – Industrial Plots, Land & Site Development",siteDesc:"Industrial plots with land mutation and conversion completed. Price on request. Enquire on WhatsApp.",logoText:"SKY INDUSTRIAL PARK",logoImage:"",favicon:"",colorMain:"#5b21d6",colorDark:"#220a5e",waMsgPlot:"Hello Sky Industrial Park,\n\nI am interested in {plot}.\n\nPlease share the plot area, price, photos and location.\n\nThank you.",waMsgGeneral:"Hello Sky Industrial Park,\n\nI would like to know more about your industrial plots.\n\nThank you."},
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
about:{text:"Industrial land and individual plots for companies, manufacturers, factory owners, businesses and investors.",video:""},
gallery:[],
videos:[],
menu:[{group:"Our Location",label:"Project location",link:"#location"},{group:"Our Location",label:"Get directions",link:"#location"},{group:"For Buyers",label:"Browse plots",link:"#picks"},{group:"For Buyers",label:"Project overview",link:"#overview"},{group:"For Buyers",label:"Ask for price",link:"contact"},{group:"Services",label:"Industrial land sale",link:"#svc"},{group:"Services",label:"Mutation & conversion",link:"#svc"},{group:"Services",label:"Boundary & road work",link:"#svc"},{group:"Infrastructure",label:"Completed work",link:"#amenities"},{group:"Infrastructure",label:"Facilities",link:"#amenities"},{group:"Media",label:"Photo gallery",link:"#gallery"},{group:"Media",label:"Video",link:"#about"}],
drawer:[{label:"Plots",link:"#picks"},{label:"Services",link:"#svc"},{label:"About",link:"#about"},{label:"Overview",link:"#overview"},{label:"Infrastructure",link:"#amenities"},{label:"Gallery",link:"#gallery"},{label:"Location",link:"#location"},{label:"Contact",link:"contact"}],
sectabs:[{label:"About",link:"#about"},{label:"Overview",link:"#overview"},{label:"Infrastructure",link:"#amenities"},{label:"Gallery",link:"#gallery"},{label:"Location",link:"#location"}],
footerlinks:[{group:"Explore",label:"Plots",link:"#picks"},{group:"Explore",label:"Overview",link:"#overview"},{group:"Explore",label:"Infrastructure",link:"#amenities"},{group:"More",label:"Gallery",link:"#gallery"},{group:"More",label:"Location",link:"#location"},{group:"More",label:"Contact",link:"contact"}],
chips:[{label:"Mutation done"},{label:"Conversion done"}],
show:{tiles:true,featured:true,highlighted:true,services:true,about:true,overview:true,infra:true,gallery:true,location:true,banner:true},

tabs:[{label:"Buy plot"},{label:"Lease"},{label:"Warehouse"},{label:"Documents"},{label:"Site visit"}],
overview:[{label:"Land type",value:"Industrial plots"},{label:"Price",value:"On request"},{label:"Plot sizes",value:"Added per plot"},{label:"Land mutation",value:"Completed"},{label:"Land conversion",value:"Completed"},{label:"Enquiry",value:"WhatsApp / form"}],
infra:[{title:"Boundary work",tag:"Completed work",kind:"done",icon:"fence"},{title:"Brick-bat road filling",tag:"Completed work",kind:"done",icon:"road"},{title:"Electricity facility",tag:"Facility",kind:"fac",icon:"bolt"},{title:"Water system",tag:"Facility",kind:"fac",icon:"drop"}],
texts:{enquireBtn:"Enquire now",searchPh:'Search "Plot 03" or "industrial plot"',searchAll:"All plots",searchBtn:"Search",priceTxt:"Price on request",plotBtn1:"Contact",plotBtn2:"WhatsApp",mktd:"Mktd. by",sideTag:"PROJECT",sideTitle:"SKY Industrial Park",sideSub:"Industrial plots for business growth",sideBtn1:"Contact us",sideBtn2:"WhatsApp enquiry",ctaB1:"Send requirement",ctaB2:"WhatsApp",footTag:"The Foundation of Your Industrial Future.",footContactT:"Contact",copyright:"SKY Industrial Park. All rights reserved.",mTitle:"Contact us",mName:"Your name",mPhone:"Phone number",mEmail:"Email (optional)",mPlot:"Interested plot (optional)",mMsg:"Message (optional)",mConsent:"I agree to be contacted about this enquiry.",mSend:"Send on WhatsApp",barB1:"Contact",barB2:"WhatsApp",tilesT:"Get started with exploring our plots",featT:"Featured plots",featS:"Price on request. Tap a plot to enquire.",hiT:"Top highlighted plots",hiS:"Noteworthy plots to watch",svcT:"What we offer",svcS:"Services for industrial buyers",aboutT:"About SKY Industrial Park",ovT:"Project overview",infT:"Infrastructure",infN:"Completed work and facilities are listed separately. Ask us for the current status of any plot.",galT:"Gallery",locT:"Location",ctaT:"Looking for industrial land?",ctaS:"Tell us your requirement. We will reply with plots, photos and location."}
};

window.SKY_TL={enquireBtn:"Header button text",searchPh:"Search box hint text",searchAll:"Search list: first option",searchBtn:"Search button",priceTxt:"Default price text (when price is empty)",plotBtn1:"Plot card: first button",plotBtn2:"Plot card: second button",mktd:"Highlighted card: 'Mktd. by' text",sideTag:"Side card: small tag",sideTitle:"Side card: title",sideSub:"Side card: sub-text",sideBtn1:"Side card: first button",sideBtn2:"Side card: second button",ctaB1:"Bottom banner: first button",ctaB2:"Bottom banner: second button",footTag:"Footer: tagline",footContactT:"Footer: contact heading",copyright:"Footer: copyright text",mTitle:"Contact form: title",mName:"Contact form: name hint",mPhone:"Contact form: phone hint",mEmail:"Contact form: email hint",mPlot:"Contact form: plot hint",mMsg:"Contact form: message hint",mConsent:"Contact form: consent text",mSend:"Contact form: send button",barB1:"Mobile bottom bar: first button",barB2:"Mobile bottom bar: second button",tilesT:"Tiles heading",featT:"Featured plots heading",featS:"Featured plots sub-text",hiT:"Highlighted plots heading",hiS:"Highlighted plots sub-text",svcT:"Service boxes heading",svcS:"Service boxes sub-text",aboutT:"About heading",ovT:"Overview heading",infT:"Infrastructure heading",infN:"Infrastructure note",galT:"Gallery heading",locT:"Location heading",ctaT:"Bottom banner heading",ctaS:"Bottom banner text"};
var MIN={hero:1,tiles:1,services:1};
window.SKY_MERGE=function(c){c=c||{};var D=window.SKY_DEFAULTS,o={};
Object.keys(D).forEach(function(k){var d=D[k],v=c[k];
if(v===undefined||v===null)o[k]=d;
else if(Array.isArray(d)){if(!Array.isArray(v))o[k]=d;else if(MIN[k]&&!v.length)o[k]=d;else o[k]=v.map(function(x){return Object.assign({},d[0]||{},x)})}
else o[k]=Object.assign({},d,v)});return o};
})();
