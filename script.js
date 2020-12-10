function pageLoaded() {

    // to do application-t készítünk, alapvetően 10 üres mező áll rendelkezésre, 
    //de hozzá tudunk adni újakat
    //minden síkban van egy checkbox amibe be tudjuk pipálni h kész van-e
    //text input mező
    //1 törlés gomb (ki tudjuk törölni a sort)

    //1.létre kell hoznom a  változót amiben a root-ot nyerem ki

    let rootE = document.getElementById("root");


    //2.El kell tárolnunk azt a számot, ami a maximális szám (ebben az esetben10)
    // el kell menteni a változóban egysornak mi lesz a strukturája

    let maxNumber = 10;

    let row = `
        <div class="row">
            <input type="checkbox">
            <input type="text">
            <button class="delete">Delete</button>
        </div>
    `;



    //3. 2.lépést 10xszer kell dumplikálni + for ciklusban hozzáadjuk az elemeinket

    for (let index = 0; index < maxNumber; index++) {
        rootE.insertAdjacentHTML("beforeend", row);
        
        
    }

    //4. Az insert adjesent html-nél az lesz a beállításunk h afterend (root-onkon kívül)
    //hozzáadunk egy plusz gombot

    rootE.insertAdjacentHTML("afterend", `
        <button id="add">Plusz gomb</button>
    `);

    //5.click eseményt hozzáadunk, addeventlistener, soronkhoz tartozó változót 
    //hozzáilesztjuk click-el

    function newItem() {
        rootE.insertAdjacentHTML("beforeend", row);

        //TODO: rá kellene tenni az eseményfigyelőt az újonnan hozzáadott sorokra is(70-es sor)
    }

    document.getElementById("add").addEventListener("click", newItem);



    //6.kijelölölöm classnév alapján az összes törlés gombot és elmentem egy változóba
    //queryselectorall-al összegyüjt

    let removeBtns = rootE.querySelectorAll(".delete");
    //console.log(removeBtns);

    //7.for ciklus - ráadni mindegyikre egy clickeseményt
    
    function removeItem(e){
        console.log(e.target);
        e.target.parentElement.remove();
    }
    for (let index = 0; index < removeBtns.length; index++) {
        removeBtns[index].addEventListener("click", removeItem);
    
    }


    //8.hogy fogom tudni kijelölni azt az elemet amit majd ki szeretnék törölni






}
window.addEventListener("load", pageLoaded);