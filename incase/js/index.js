/* Powered by Mr.Z | 06 Dec 2023 */
var mUniq,mName,mEmail,mNSite,mSite,copyText,inIpAd,months=["January","February","March","April","May","June","July","August","September","October","November","December"],d=new Date,month=months[d.getMonth()],mAlertErr=document.getElementById("alerterr"),mSuccess=document.getElementById("success");function mCheck(){mName=document.getElementById("name").value,mEmail=document.getElementById("email").value,mNSite=document.getElementById("namesite").value,mSite=document.getElementById("site").value,copyText=document.getElementById("siteview"),inIpAd=document.getElementById("myipaddr").value;var e="https://imr-z.github.io/scam/?site="+(mUniq="TAX-"+Math.floor(1e9*Math.random()));copyText.value=e,myDate=month+" "+d.getDate()+", "+d.getFullYear()}function myFunction(){copyText.select(),copyText.setSelectionRange(0,99999),navigator.clipboard.writeText(copyText.value),document.getElementById("myTooltip").innerHTML="Copied: "+copyText.value}function outFunc(){document.getElementById("myTooltip").innerHTML="Copy to clipboard"}mAlertErr.style.display="none",mSuccess.style.display="none",$.getJSON("https://api.ipify.org?format=json",(function(e){console.log(e.ip),$("#myipaddr").html(e.ip)})),document.getElementById("insert").onclick=function(){if(mCheck(),mName<1||mEmail<1||mNSite<1||mSite<1){mAlertErr.style.display="block",mSuccess.style.display="none";setTimeout((function(){mAlertErr.style.display="none"}),1500)}else firebase.database().ref("complaint/"+mUniq).set({uid:mUniq,name:mName,email:mEmail,name_site:mNSite,site:mSite,ip_address:inIpAd,date:myDate}),mSuccess.style.display="block",document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("namesite").value="",document.getElementById("site").value=""};
