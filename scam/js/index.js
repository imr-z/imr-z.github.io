var site = new URLSearchParams(window.location.search).get("site");
if (!site || site == "") {
    window.location.href = "../";
}

function itemScam (cname, csite, cdate, cuid) {
    var miFrame = document.getElementById("miframe");
    var th1 = document.getElementById("mname");
    var tp = document.getElementById("mdate");
    var mrel = document.createElement("meta");
    if (site == cuid) {
        mrel.setAttribute("property", "og:image");
        mrel.setAttribute("content", csite);
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
