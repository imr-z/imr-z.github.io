var site = new URLSearchParams(window.location.search).get("site");
if (!site || site == "") {
    window.location.href = "../";
}

function itemScam (cname, csname, csite, cdate, cuid) {
    var miFrame = document.getElementById("miframe");
    var th2 = document.getElementById("smoking");
    var th1 = document.getElementById("mname");
    var tp = document.getElementById("mdate");
    var meta1 = document.getElementById("meimg1");
    var meta2 = document.getElementById("meimg2");
    var meta3 = document.getElementById("meimg3");
    var meta4 = document.getElementById("meimg4");
    var meta5 = document.getElementById("meimg5");
    var tpp = document.getElementById("mmurl");
    var ta = document.createElement("a");
    if (site == cuid) {
        meta1.setAttribute("property", "og:image");
        meta1.setAttribute("content", csite);
        meta2.setAttribute("name", "twitter:image");
        meta2.setAttribute("content", csite);
        meta3.setAttribute("itemprop", "thumbnailUrl");
        meta3.setAttribute("content", csite);
        meta4.setAttribute("itemprop", "image");
        meta4.setAttribute("content", csite);
        meta5.setAttribute("itemprop", "imageUrl");
        meta5.setAttribute("content", csite);
        document.getElementById("main").style.display = "block";
        document.getElementById("canv").style.display = "none";
        miFrame.setAttribute("src", csite);
        th2.setAttribute("style", "color:brown;");
        tp.setAttribute("style", "color:darkorange;");
        tpp.setAttribute("style", "font-size:12px;color:chartreuse;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;");
        ta.setAttribute("style", "color:chartreuse;text-decoration:none;");
        ta.setAttribute("target", "_blank");
        ta.setAttribute("title", csname);
        ta.setAttribute("alt", csname);
        if (csite == "https://imr-z.github.io/scam/img/sites.google.com_view_grandparkhotelrestaurantcom_halaman-muka.png") {
            ta.setAttribute("href", "https://sites.google.com/view/grandparkhotelrestaurantcom/");
            ta.innerHTML = "https://sites.google.com/view/grandparkhotelrestaurantcom/";
        } else {
            ta.setAttribute("href", csite);
            ta.innerHTML = csite;
        }
        th2.innerHTML = "S C A M";
        th1.innerHTML = "<sup style='font-size:14px;color:brown;'>By </sup>"+cname;
        tp.innerHTML = cdate;

        tpp.appendChild(ta);
    } else {}
}

function FetchDataScam() {
    firebase.database().ref("complaint/").once("value", function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let cname = ChildSnapshot.val().name;
                let csname = ChildSnapshot.val().name_site;
                let csite = ChildSnapshot.val().site;
                let cdate = ChildSnapshot.val().date;
                let cuid = ChildSnapshot.val().uid;
                itemScam(cname, csname, csite, cdate, cuid);
            }
        );
    });
}

FetchDataScam();
