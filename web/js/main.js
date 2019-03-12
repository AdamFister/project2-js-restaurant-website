


function getAppetizers() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                let app = JSON.stringify(myJson.menu_items[i].description);
                app = app.slice(1, -1);

                app += app + " $" + Math.round(Math.random() * 10000) / 100;
                console.log(app);
                if (app.charAt(app.length - 2) == ".") {
                    app += "0";
                }
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

            for (let i = 0; i < 8; i++) {

                let main = JSON.stringify(myJson.menu_items[i].description);
                main = main.slice(1, -1);

                main += main + " $" + Math.round(Math.random() * 10000) / 100;
                console.log(main);
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

function getSides() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                let sides = JSON.stringify(myJson.menu_items[i].description);
                sides = sides.slice(1, -1);

                sides += sides + " $" + Math.round(Math.random() * 10000) / 100;
                console.log(sides);
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

function getBreakfasts() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                let breakfast = JSON.stringify(myJson.menu_items[i].description);
                breakfast = breakfast.slice(1, -1);

                breakfast += breakfast + " $" + Math.round(Math.random() * 10000) / 100;
                console.log(breakfast);
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