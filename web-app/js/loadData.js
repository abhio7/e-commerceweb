$(document).ready(function () {
    // Fuction To Load the data...............................
    function loadTable(jdata) {
        $("#table-2").html(" ");
        // let n = web.replace(/"/g, "");
        // console.log(n);
        console.log(jdata);

        $.ajax({
            url: 'http://localhost/products/medicine/data/getTable.php',
            type: "POST",
            data: jdata,
            success: function (data) {

                console.log(data);
                if (data.status == false) {
                    $("#table-2").append("<tr>" + "<td colspan='6' >No Data Found </td>");
                } else {
                    $.each(data, function (key, value) {
                        $("#table-2").append("<tr>" +
                            "<td>" + value.mg + "mg * " + value.package + "</td>" +
                            "<td>" + "<b>$</b>" + value.price + "</td>" +
                            "<td>" + "<b>$</b>" + value.perpill + "</td>" +
                            "<td>" + "<b>$</b>" + value.savings + "</td>" +
                            "<td> <button class='btn btn-primary' id='buy-btn' data-eid='" + value.pId + "'>Buy </button></td>" +
                            "</tr>"

                        );
                        console.log("<td>" + value.mg + "mg * " + value.package + "</td>" +
                            "<td>" + "<b>$</b>" + value.price + "</td>" +
                            "<td>" + "<b>$</b>" + value.perpill + "</td>" +
                            "<td>" + "<b>$</b>" + value.savings + "</td>" +
                            "<td> <button class='btn btn-primary' id='buy-btn' data-eid='" + value.pId + "'>Buy </button></td>" +
                            "</tr>");

                        // console.log("<button class='btn btn-primary'  data-eid='" + value.pId + "'>Buy </button></td>");
                    });
                }
            }
        })
    }

    // Generic Cealis tables start
    $("#gc-mg-2").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 2.5;
        const data = {
            mg: mg,
            name: name
        };
        // console.log(data)
        Jsondata = JSON.stringify(data);
        // console.log(Jsondata)
        // loadTable( data);
        loadTable(Jsondata);
    })

    $("#gc-mg-5").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 5;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gc-mg-10").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 10;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gc-mg-20").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gc-mg-40").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 40;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gc-mg-60").on('click', () => {
        const name = "Generic Cialis";
        // const web = 'generic-cialis';
        const mg = 60;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // Generic Cealis tables end.................

    // generic levitra tables start
    $("#gl-mg-10").on('click', () => {
        const name = "Levitra Generic";
        const mg = 10;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    });
    $("#gl-mg-20").on('click', () => {
        const name = "Levitra Generic";
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gl-mg-40").on('click', () => {
        const name = "Levitra Generic";
        const mg = 40;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gl-mg-60").on('click', () => {
        const name = "Levitra Generic";
        const mg = 60;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // generic levitra ends.................

    // Generic Viagara table starts
    $("#gv-mg-25").on('click', () => {
        const name = "Viagra Generic";
        const mg = 25;
        const data = {
            mg: mg,
            name: name
        };
        // console.log(data)
        Jsondata = JSON.stringify(data);
        // console.log(Jsondata)
        // loadTable( data);
        loadTable(Jsondata);
    })

    $("#gv-mg-50").on('click', () => {
        const name = "Viagra Generic";
        const mg = 50;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gv-mg-100").on('click', () => {
        const name = "Viagra Generic";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gv-mg-150").on('click', () => {
        const name = "Viagra Generic";
        const mg = 150;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    $("#gv-mg-200").on('click', () => {
        const name = "Viagra Generic";
        const mg = 200;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // generic viagara ends.............................

    // oral jelly kamagra table start............
    $("#ojk-mg-100").on('click', () => {
        const name = "Kamagra Original";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // oral jelly kamagra table end.............................

    // original cialis start
    $("#oc-mg-20").on('click', () => {
        const name = "Original Cialis";
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // original cialis ends.............................

    // kamagra original start
    $("#ok-mg-100").on('click', () => {
        const name = "Kamagra Original";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // kamagra original ends..................

    // original viagara start
    $("#ov-mg-100").on('click', () => {
        const name = "Viagra Original";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })

    // original viagara ends....................

    // priligy dapoxetine start.................
    $("#pd-mg-30").on('click', () => {

        const name = "Priligy Generic";
        const mg = 30;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    });
    $("#pd-mg-60").on('click', () => {

        const name = "Priligy Generic";
        const mg = 60;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })
    // priligy dapoxetine ends.........
    // lovegra

    $("#l-mg-100").on('click', () => {

        const name = "Lovegra";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        // function to load table
        loadTable(Jsondata);
    })

    // cialis-daily 2.5mg

    $("#cd-mg-2").on("click", () => {
        const name = "";
        const mg = 2.5;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });

    // cialis-daily 5mg

    $("#cd-mg-2").on("click", () => {
        const name = "Cialis Daily 5mg";
        const mg = 5;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });

    // cialis profesional 20

    $("#cp-mg-20").on("click", () => {
        const name = "Cialis Professional";
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });

    // cialis profesional 40

    $("#cp-mg-40").on("click", () => {
        const name = "Cialis Professional";
        const mg = 40;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });


    // cialis soft tabs 20
    $("#cst-mg-20").on("click", () => {
        const name = "Cialis Soft Tabs";
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });

    //cialis super active 20mg


    $("#csa-mg-20").on("click", () => {
        const name = "Cialis Super Active";
        const mg = 20;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });
    //viagara profesional

    $("#vp-mg-100").on("click", () => {
        const name = "Viagra Professional";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });
    //viagara soft tabs 100


    $("#vst-mg-100").on("click", () => {
        const name = "Viagra Soft Tabs";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });
    //viagra super active 100


    $("#vsa-mg-100").on("click", () => {
        const name = "Viagra Super Active";
        const mg = 100;
        const data = {
            mg: mg,
            name: name
        };
        Jsondata = JSON.stringify(data);
        loadTable(Jsondata);
    });
})

