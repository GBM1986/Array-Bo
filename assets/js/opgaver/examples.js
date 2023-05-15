let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(e) {
    /* din map kode her... */

   

    myExtras.push(e.target.value);
    updateExtras();
    
}



function updateExtras() {

    let myHtml="<li>";

    myExtras.map((myElement) => {

        myHtml += "<li>" +myElement+ "</li>";

    })

    myHtml += "</ul>"

    /* din map kode her... */

    myExtrasListElement.innerHTML=myHtml;

}






