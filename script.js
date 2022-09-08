$(function () {
    var genelSayac = 0;
    $("input").change(function () {
        var input = $(this).val();
        $("ul").prepend(
            `<li>${input} <i class="fa-solid fa-xmark"></i><i class="fa-solid fa-pen"></i> <i class="fa-solid fa-check"></i> </li>`
        );
        $(this).val("");
        $(".todo-content p").css("display", "none")
        genelSayac++;
        $(".task-count-genel").text(genelSayac);
    });

    $("ul").on("click", ".fa-xmark", function () {
        $(this).parent("li").fadeOut();
        genelSayac--;
        $(".task-count-genel").text(genelSayac);
        if(genelSayac==0){
            $(".todo-content p").css("display", "inherit")
        }
    });

    $(".btn-all").click(function () {
        $("li").fadeOut();
        genelSayac=0;
        $(".task-count-genel").text(0);
        $(".todo-content p").css("display", "inherit")
    });

    $(".btn-comp").click(function () {
        $(".checked").fadeOut();
        console.log(liSayac);
        console.log(genelSayac);
        $(".task-count-genel").text(genelSayac);
    });

    $("ul").on("click", ".fa-check", function () {
        $(this).parent("li").toggleClass("checked");
        genelSayac--;
    });

    $("ul").on("click", ".fa-pen", function () {
        console.log("click");
        var icerik = $(this).parent("li").text();
        $(this).parent("li").fadeOut();
    });

    var tamTarih = new Date();
    var Aylar = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ];
    var gun = tamTarih.getDate();
    if (gun < 10) {
        gun = "0" + gun;
    }
    $(".tarih").text(
        `${gun}/${Aylar[tamTarih.getMonth()]}/${tamTarih.getFullYear()}`
    );

    function clock() {
        var saatTam = new Date();
        var saat = saatTam.getHours();
        var dakika = saatTam.getMinutes();
        var saniye = saatTam.getSeconds();
        if (saat < 10) {
            saat = "0" + saat;
        }
        if (dakika < 10) {
            dakika = "0" + dakika;
        }
        if (saniye < 10) {
            saniye = "0" + saniye;
        }
        
        fullSaat = `${saat}:${dakika}:${saniye}`;
        $(".saat").text(fullSaat);
    }
    clock();
    let dinamikSaat = setInterval(clock, 100);
    
});
