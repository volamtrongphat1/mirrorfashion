var banners = ['img/destaque-home.png' , 'img/destaque-home-2.png'];
var bannerAtual = 0;
var banner = document.querySelector('.banner-destaque img');

function trocaBanner() {
    bannerAtual = bannerAtual + 1;
    if (bannerAtual == banners.length) {
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
}

setInterval(trocaBanner, 2500);
