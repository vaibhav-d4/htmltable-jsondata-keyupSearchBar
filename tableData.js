var data = [
    {
        Nation: "COM",
        Dept: "",
        VND: "",
        InitialARS: "0.050",
        CreatedBy: "B001751",
        LastUpdatedBy: "B001751",
    },
    {
        Nation: "Stores",
        Dept: "",
        VND: "",
        InitialARS: "0.050",
        CreatedBy: "B001751",
        LastUpdatedBy: "",
    },
    {
        Nation: "COM",
        Dept: "50",
        VND: "",
        InitialARS: "15.420",
        CreatedBy: "B002443",
        LastUpdatedBy: "",
    },
    {
        Nation: "Stores",
        Dept: "51",
        VND: "",
        InitialARS: "1.500",
        CreatedBy: "Y156573",
        LastUpdatedBy: "B06DHN",
    },
    {
        Nation: "COM",
        Dept: "52",
        VND: "543",
        InitialARS: "6.900",
        CreatedBy: "P123EID",
        LastUpdatedBy: "",
    },
    {
        Nation: "Stores",
        Dept: "53",
        VND: "118",
        InitialARS: "1.230",
        CreatedBy: "B003587",
        LastUpdatedBy: "Y156573",
    },
    {
        Nation: "COM",
        Dept: "55",
        VND: "",
        InitialARS: "12.000",
        CreatedBy: "B003617",
        LastUpdatedBy: "U033771",
    },
    {
        Nation: "Stores",
        Dept: "55",
        VND: "10",
        InitialARS: "0.750",
        CreatedBy: "B003617",
        LastUpdatedBy: "Y156573",
    },
    {
        Nation: "COM",
        Dept: "56",
        VND: "",
        InitialARS: "1.230",
        CreatedBy: "Y156573",
        LastUpdatedBy: "",
    },
    {
        Nation: "COM",
        Dept: "58",
        VND: "54",
        InitialARS: "25.001",
        CreatedBy: "B003617",
        LastUpdatedBy: "B002769",
    },
    {
        Nation: "COM",
        Dept: "58",
        VND: "100",
        InitialARS: "26.000",
        CreatedBy: "B002769",
        LastUpdatedBy: "B002769",
    },
];

// FULL table
var col = [];
for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}
var table = document.createElement("table");

var tr = table.insertRow();
for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for (var i = 0; i < data.length; i++) {
    tr = table.insertRow();
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell();
        tabCell.innerHTML = data[i][col[j]];
    }
}
var divShowData = document.getElementById("showData");
divShowData.appendChild(table);

// BASED ON SEARCH
function search() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let select_input = document.getElementById("select-elements").value;

    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var num = 5;
    console.log(num);

    var table = document.createElement("table");

    var tr = table.insertRow();
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < data.length; i++) {
        tr = table.insertRow();
        for (var j = 0; j < col.length; j++) {
            if (select_input == "Nation") {
                if (data[i].Nation.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            } else if (select_input == "Dept") {
                if (data[i].Dept.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            } else if (select_input == "VND") {
                if (data[i].VND.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            } else if (select_input == "InitialARS") {
                if (data[i].InitialARS.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            } else if (select_input == "CreatedBy") {
                if (data[i].CreatedBy.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            } else if (select_input == "LastUpdatedBy") {
                if (data[i].LastUpdatedBy.toLowerCase().startsWith(input)) {
                    var tabCell = tr.insertCell();
                    tabCell.innerHTML = data[i][col[j]];
                }
            }
        }
    }

    var divShowData = document.getElementById("showData");
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}
