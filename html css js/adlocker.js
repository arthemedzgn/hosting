//<![CDATA[

var head = document.getElementsByTagName('head').item(0);
var script = document.createElement('script');
script.setAttribute('async', 'async');
script.setAttribute('onerror', 'adBlockFunction();');
script.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/google_top_exp.js');
head.appendChild(script);
function adBlockFunction() {
var adbku = document.getElementsByTagName("body")[0];
var create_adbku = document.createElement('div');
create_adbku.id ='antiadblock';
create_adbku.innerHTML =`
<div id="blure_area_adb" class="generateurl active"></div>
<div id="content-adblock" class="active">
<div id='titleadb'>AdBlock Detected !!</div>
<div id='areaimageadb'>
<img class='imgadb' src='data:image/jpeg;base64,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' />
</div>
<div id='massageadb'>Mohon Untuk Tidak Menggunakan Extension AdBlock.<br/>Penghasilan dari iklan sangat berguna untuk perkembangan website kami.<br/>Matikan Extension AdBlock di browser kamu, kemudian refresh ulang halaman ini.
</div>
<div style="text-align: center;">
<a class='buttonadb' href='javascript:new function(){let a=document.createElement("a");a.href=window.location.href,a.click();};' style="color: white;">Refresh</a></div>
</div>
`;
adbku.insertBefore(create_adbku, adbku.firstChild);   
}
//]]>
