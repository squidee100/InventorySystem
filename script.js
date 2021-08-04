const inventoryList = document.getElementById("inventoryList");
const groundList = document.getElementById("groundList");

var init = true;

var inv = ["apple"]
var ground = ["banana", "pear", "grape", "peach"]

function PickUpItem(itemIndex) {
    if (itemIndex == -1) { return }
    var item = ground[itemIndex];

    inv.push(ground[itemIndex])
    ground.splice(itemIndex, 1);
    UpdateList();

    console.log(`picked up ${item}(${itemIndex})`)
}

function DropItem(itemIndex) {
    if (itemIndex == -1) { return }
    var item = inv[itemIndex];

    ground.push(inv[itemIndex])
    inv.splice(itemIndex, 1);
    UpdateList();

    console.log(`dropped ${item}(${itemIndex})`)
}

function UpdateList() {
    for (var i = 0; i < inventoryList.childElementCount; i++) {
        if (inv[i] == undefined) {
            inventoryList.children[i].innerHTML = "";
        }
        else {
            inventoryList.children[i].innerHTML = inv[i];
        }
        if (init) {
            inventoryList.children[i].addEventListener("click", function(e) {
                DropItem(inv.indexOf(this.innerHTML));
            })
        }
    }
    
    for (var i = 0; i < groundList.childElementCount; i++) {
        if (ground[i] == undefined) {
            groundList.children[i].innerHTML = "";
        }
        else {
            groundList.children[i].innerHTML = ground[i];
        }
        if (init) {
            groundList.children[i].addEventListener("click", function(e) {
                PickUpItem(ground.indexOf(this.innerHTML));
            })
        }
    }
    init = false;
}

UpdateList();
