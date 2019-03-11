


function getAppetizers() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            for (let i = 0; i < 8; i++) {

            let app = JSON.stringify(myJson.menu_items[i].description);
            app = app.slice(1, -1);

            document.getElementById("apps" + i).innerHTML = app;
            
            }
        }
        ).catch(function (error) {
            console.log(error);

        });
}

function getMains() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            let mainObject = JSON.stringify(myJson.menu_items);
            // console.log(mainObject);
        }
        ).catch(function (error) {
            console.log(error);

        });
}

function getSides() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            let sideObject = JSON.stringify(myJson.menu_items);
            // console.log(sideObject);
        }
        ).catch(function (error) {
            console.log(error);

        });
}

function getBreakfasts() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            let breakfastObject = JSON.stringify(myJson.menu_items);
            // console.log(breakfastObject);
        }
        ).catch(function (error) {
            console.log(error);

        });
}

function getEachItem(appObject) {
    for (let i = 0; i < 8; i++) {
      //  console.log(appObject[i].description);
    }
}




function populateMenu() {
    getAppetizers();
    getMains();
    getSides();
    getBreakfasts();

    getEachItem();
}