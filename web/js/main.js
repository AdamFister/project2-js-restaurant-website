

//generate random menu items
function getAppetizers() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                //store menu item and get rid of quotes
                let app = JSON.stringify(myJson.menu_items[i].description);
                app = app.slice(1, -1);

                //generate random prices
                app += " $" + Math.round(Math.random() * 10000) / 100;
                console.log(app);

                //add zero to price when necessary
                if (app.charAt(app.length - 2) == ".") {
                    app += "0";
                }

                //display on page
                document.getElementById("apps" + i).innerHTML = app;
            }

        }
        ).catch(function (error) {
            console.log(error);

        });
}

//generate random menu items
function getMains() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                //store menu item and get rid of quotes
                let main = JSON.stringify(myJson.menu_items[i].description);
                main = main.slice(1, -1);

                //generate random prices
                main += " $" + Math.round(Math.random() * 10000) / 100;
                console.log(main);

                //add zero to price when necessary
                if (main.charAt(main.length - 2) == ".") {
                    main += "0";
                }
                document.getElementById("main" + i).innerHTML = main;
            }

        }
        ).catch(function (error) {
            console.log(error);

        });
}

//generate random menu items
function getSides() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                //store menu item and get rid of quotes
                let sides = JSON.stringify(myJson.menu_items[i].description);
                sides = sides.slice(1, -1);

                //generate random prices
                sides += " $" + Math.round(Math.random() * 10000) / 100;
                console.log(sides);

                //add zero to price when necessary
                if (sides.charAt(sides.length - 2) == ".") {
                    sides += "0";
                }
                document.getElementById("sides" + i).innerHTML = sides;

            }

        }
        ).catch(function (error) {
            console.log(error);

        });
}

//generate random menu items
function getBreakfasts() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                //store menu item and get rid of quotes
                let breakfast = JSON.stringify(myJson.menu_items[i].description);
                breakfast = breakfast.slice(1, -1);

                //generate random prices
                breakfast += " $" + Math.round(Math.random() * 10000) / 100;
                console.log(breakfast);

                //add zero to price when necessary
                if (breakfast.charAt(breakfast.length - 2) == ".") {
                    breakfast += "0";
                }
                document.getElementById("breakfast" + i).innerHTML = breakfast;

            }

        }
        ).catch(function (error) {
            console.log(error);

        });
}

function populateMenu() {
    getAppetizers();
    getMains();
    getSides();
    getBreakfasts();
}