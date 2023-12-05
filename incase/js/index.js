var mUniq, mName, mEmail, mNSite, mSite, copyText;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = new Date();
var month = months[d.getMonth()];
var mAlertErr = document.getElementById("alerterr");
var mSuccess = document.getElementById("success");
mAlertErr.style.display = "none";
mSuccess.style.display = "none";

function mCheck() {
    mName = document.getElementById("name").value;
    mEmail = document.getElementById("email").value;
    mNSite = document.getElementById("namesite").value;
    mSite = document.getElementById("site").value;
    copyText = document.getElementById("siteview");
    mUniq = "TAX-" + Math.floor(Math.random()*1000000000);
    var cpy = "https://imr-z.github.io/scam/?site="+mUniq;
    copyText.value = cpy;
    myDate = month + " " + d.getDate() + ", " + d.getFullYear();

    /* console.log(mUniq, mName, mEmail, mNSite, mSite, myDate, cpy); */
}

document.getElementById("insert").onclick = function () {
  mCheck();
  if (mName < 1 || mEmail < 1 || mNSite < 1 || mSite < 1) {
    mAlertErr.style.display = "block";
    mSuccess.style.display = "none";
    var myErrno = setTimeout(mErrno, 1500);
    function mErrno() {
        mAlertErr.style.display = "none";
    }
  } else {
    firebase
    .database()
    .ref("complaint/" + mUniq)
    .set({
        uid: mUniq,
        name: mName,
        email: mEmail,
        name_site: mNSite,
        site: mSite,
        date: myDate,
    });
    mSuccess.style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("namesite").value = "";
    document.getElementById("site").value = "";
  }
};

function myFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}