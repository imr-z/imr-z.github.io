var site = new URLSearchParams(window.location.search).get("site");
if (!site || site == "") {
    window.location.href = "../";
}

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);

function itemScam (cname, csite, cdate, cuid) {
    var miFrame = document.getElementById("miframe");
    var th2 = document.getElementById("smoking");
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
        document.getElementById("canv").style.display = "none";
        miFrame.setAttribute("src", csite);
        th2.innerHTML = "S C A M";
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
