const btm_bn = document.getElementById("btm_bn");
const ketchup = document.getElementById("ketchup");
const ltc = document.getElementById("ltc");
const mstrd = document.getElementById("mstrd");
const chz = document.getElementById("chz");
const pty = document.getElementById("pty");
const onin = document.getElementById("onin");
const tmto = document.getElementById("tmto");
const tp_bn = document.getElementById("tp_bn");
const done = document.getElementById("done");
const sctn = document.getElementById("burger_canvas");
const btn_cont = document.getElementById("btn_cont");
const burger = [];
function compress_burger() {}
btm_bn.onclick = () => {
  sctn.innerHTML += `<img src="./imgs/btmbun.png" width="600" class="b">`;
};
ketchup.onclick = () => {
  sctn.innerHTML += `<img src="./imgs/ketchup.png" class="s k brgrprt" id="ketchupimg">`
};
ltc.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/lettuce.png" class="l brgrprt" id="lettuce">`);
mstrd.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/mustard.png" class="s m brgrprt" id="mustard">`);
chz.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/cheese.png" class="s c brgrprt" id="cheese">`);
pty.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/patty.png" class="p brgrprt" id="patty">`);
onin.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/onion.png" class="o brgrprt" id="onion">`);
tmto.onclick = () =>
  (sctn.innerHTML += `<img src="./imgs/tomato.png" class="t brgrprt" id="tomato">`);
tp_bn.onclick = () => {
  sctn.innerHTML += `<img src="./imgs/tpbun.png" class="tb">`;
};
done.onclick = () => {
  const imgs = document.getElementsByTagName('img')
  for (let i = 0; i < imgs.length; i++) { 
    const img = imgs[i]
    if (img.className === "s k brgrprt") {
      img.style.height = "2px"
      img.style.width = "550px"
    }
    if (img.className === "l brgrprt") {
      img.style.height = "25px"
    }
    if (img.className === "s m brgrprt") {
      img.style.height = "2px"
    }
    if (img.className === "s c brgrprt") {
      img.style.height = "2px"
    }
    if (img.className === "p brgrprt") {
      img.style.height = "30px"
    }
    if (img.className === "o brgrprt") {
      img.style.height = "10px"
    }
    if (img.className === "t brgrprt") {
      img.style.height = "10px"
    }

  }
  if (imgs.length === null) {
    return
  }
  urbd.innerText = "Your burger is ready!";
  sctn.style.animation = "dance 1s ease 5";
};
