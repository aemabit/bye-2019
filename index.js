const span = document.getElementById("change");
const body = document.querySelector("body");

let myArray = [
  "https://cflvdg.avoz.es/default/2019/11/29/00121575041643193126460/Foto/GN30P18F3_163241.jpg",
  "https://cnnespanol2.files.wordpress.com/2019/10/191021215227-pba-asi-fueron-las-protestas-en-chile-full-169-1.jpg?quality=100&strip=info",
  "https://s3.amazonaws.com/semanaruralvzla/imagenes/1552770757.jpg",
  "https://israelnoticias.com/wp-content/uploads/2019/11/protestas-ir%C3%A1n.jpg",
  "https://www.atlantico.net/media/atlantico/images/2019/10/28/2019102800490774173.jpg",
  "https://cnnespanol2.files.wordpress.com/2019/04/https___cdn.cnn_.com_cnnnext_dam_assets_190310095742-05-ethiopia-plane-crash.jpg?quality=100&strip=info",
  "http://www.catalunyapress.es/images/showid/711933",
  "https://foreignpolicy.com/wp-content/uploads/2018/07/gettyimages-992371694.jpg?w=800&h=532&quality=90",
  "https://www.futurity.org/wp/wp-content/uploads/2019/02/curiosity-rover-mars_1600.jpg",
  "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/04/16/Recortada/20190415-636909688612276097_20190415235011704-kpYG-U461682593290fsG-992x558@LaVanguardia-Web.jpg",
  "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aefimagesnew/aef_image/2019-04-15t201537z_588147156_rc14e222e300_rtrmadp_3_france-notredame.jpg",
  "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aefimagesnew/aef_image/agujero_negro.png",
  "https://cnnespanol2.files.wordpress.com/2019/05/190515064504-01-abraham-lincoln-carrier-strike-group-0509-super-tease.jpg?quality=100&strip=info&strip=info",
  "https://ep01.epimg.net/internacional/imagenes/2019/06/13/actualidad/1560441658_131247_1560441987_noticia_normal.jpg",
  "https://ep01.epimg.net/internacional/imagenes/2019/10/06/actualidad/1570375417_132781_1570380387_noticia_normal.jpg",
  "https://cnnespanol2.files.wordpress.com/2019/07/190726160645-ola-de-calor-full-169.jpg?quality=100&strip=info",
  "https://media.diariolasamericas.com/adjuntos/216/imagenes/001/733/0001733443.jpg",
  "https://images.clarin.com/2019/06/25/una-nueva-ola-de-calor___zLWSEKV19_1256x620__1.jpg",
  "https://sm.mashable.com/mashable_in/photo/default/ironman-endgame-cover_6twa.jpg",
  "https://elpais.com/internacional/imagenes/2019/10/15/actualidad/1571161588_850147_1571222634_noticia_fotograma.jpg",
  "https://evtvmiami.com/wp-content/uploads/2019/11/Protesta-chalecos-amarillos-42-e1543339798604.jpg",
  "https://nld.mediacdn.vn/thumb_w/684/2019/12/12/photo-1-15761109589781335622825.jpg",
  "https://cnet4.cbsistatic.com/img/y-iwpaifsPm5WpBDpgj73hxYDQg=/1092x0/2019/12/11/85f36995-3a42-455e-9782-5e0fb96d76e6/greta-gettyimages-1193255186.jpg",
  "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aefimagesnew/aef_image/gettyimages-1125307699_1_0.jpg",
  "https://tec.mx/sites/default/files/inline-images/protestas-feministas.jpg",
  "https://peru21.pe/resizer/pHpjHG172WxPLbv6c4f4CYKuwGk=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/52GSHUQENNFRDPOB7J2DTFDJ5I.jpg",
  "https://s3.eestatic.com/2019/12/09/omicrono/Omicrono_450715489_140031799_1024x576.jpg",
  "https://media.metrolatam.com/2019/11/06/elonmuskspacexfl-676145d07bc356c87df11796da810781.jpg"
];
let infiniteLoop;

span.addEventListener(
  "mouseover",
  () => {
    let count = 0;
    infiniteLoop = setInterval(() => {
      body.style.background = `linear-gradient(rgba(000,000,000,0.25), rgba(000,000,000,0.90)) ,url(${myArray[count]}) no-repeat center`;
      body.style.backgroundSize = "cover";
      count++;
      if (myArray.length === count) {
        count = 0;
      }
    }, 250);
  },
  false
);

span.addEventListener(
  "mouseout",
  () => {
    clearInterval(infiniteLoop);
    body.style.background = null;
  },
  false
);
