document.addEventListener("DOMContentLoaded", ()=>{
    const soatElement = document.getElementById("soat")
    const minutElement = document.getElementById("minut")
    const sekundElement = document.getElementById("sekund")
    const yilElement = document.getElementById("yil")
    const oyElement = document.getElementById("oy")
    const kunElement = document.getElementById("kun")
    const haftaKunElement = document.getElementById("haftaKuni")

    const oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
    const haftaKun = ["Yakshanba", "Dushanba",  "Seshanba", "Chorshanba",  "Payshanba", "Juma",  "Shanba"]
    const sana = new Date();
    let yil, oy, kun, haftaKuni;
    yil = sana.getFullYear();
    oy = sana.getMonth();
    kun = sana.getDate();
    haftaKuni = sana.getDay();
    yilElement.textContent = yil;
    oyElement.textContent = oylar[oy];
    kunElement.textContent = kun;
    haftaKunElement.textContent = haftaKun[haftaKuni];
    setInterval(() => {
        const vaqt = new Date();
        let soat, minut, sekund;
        soat = vaqt.getHours();
        minut = vaqt.getMinutes();
        sekund = vaqt.getSeconds();
        millisekund = vaqt.getMilliseconds();

        soatElement.textContent = soat<10? `0${soat}`: soat;
        minutElement.textContent = minut<10? `0${minut}`: minut;
        sekundElement.textContent = sekund<10? `0${sekund}`: sekund;
    }, 1);


})