var site = new URLSearchParams(window.location.search).get("site");
if (!site || site == "") {
    window.location.href = "../";
}

function itemScam (cname, csite, cdate, cuid) {
    var miFrame = document.getElementById("miframe");
    var th1 = document.getElementById("mname");
    var tp = document.getElementById("mdate");
    var meta1 = document.getElementById("meimg1");
    var meta2 = document.getElementById("meimg2");
    var meta3 = document.getElementById("meimg3");
    var meta4 = document.getElementById("meimg4");
    var meta5 = document.getElementById("meimg5");
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
        miFrame.setAttribute("src", csite);

        th1.innerHTML = "<sup style='font-size:14px;'>By </sup>"+cname;
        tp.innerHTML = cdate;
    } else {}
}

function FetchDataScam() {
    firebase.database().ref("complaint/").once("value", function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let cname = ChildSnapshot.val().name;
                let csite = ChildSnapshot.val().site;
                let cdate = ChildSnapshot.val().date;
                let cuid = ChildSnapshot.val().uid;
                itemScam(cname, csite, cdate, cuid);
            }
        );
    });
}

FetchDataScam();
