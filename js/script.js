function create_table() {
    //Get all input values
    var pc_client = document.getElementById("pc_client").value;
    var pc_serial = document.getElementById("pc_serial").value;
    var pc_problem = document.getElementById("pc_problem").value;
    var pc_test = document.getElementById("pc_test").value;
    var pc_solution = document.getElementById("pc_solution").value;

    // Fill table
    var insert_table_client = document.getElementById("table_client");
    var insert_table_serial = document.getElementById("table_serial");
    var insert_table_problem = document.getElementById("table_problem");
    var insert_table_test = document.getElementById("table_test");
    var insert_table_solution = document.getElementById("table_solution");
    if (pc_client == "") {
        insert_table_client.textContent = "N/A"
    } else {
        insert_table_client.textContent = pc_client;
    }
    if (pc_serial == "") {
        insert_table_serial.textContent = "N/A"
    } else {
        insert_table_serial.textContent = pc_serial;
    }
    if (pc_problem == "") {
        insert_table_problem.textContent = "N/A";
    } else {
        insert_table_problem.textContent = pc_problem;
    }
    if (pc_test == "") {
        insert_table_test.textContent = "N/A";
    } else {
        insert_table_test.textContent = pc_test;
    }
    if (pc_solution == "") {
        insert_table_solution.textContent = "N/A";
    } else {
        insert_table_solution.textContent = pc_solution;
    }
}

// Convert && Prepare selected code to print
function printdiv(printdivname) {
    var mywindow = window.open('', 'new div', 'height=720,width=1024');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<link rel="stylesheet" href="./css/style.css"><link rel="stylesheet" href="./css/materialize.css"><link rel="stylesheet" href="./css/gicons.css"><script src="./js/jquery.js"></script><script src="./js/materialize.js"></script><script src="./js/script.js"></script>');
    mywindow.document.write('</head><body>');
    mywindow.document.write('<header><nav><div class="nav-wrapper white"><a href="#" class="brand-logo right"><img src="./img/logo.png" id="logo"></a><ul id="nav-mobile" class="left print_ul">C/Progreso Nº118 Local 3<br/>Barcelona<br/>tel: 931980626</ul></div></nav></header><br/>');
    mywindow.document.write('<div id="get_date"></div><script>let date= new Date(); var_nw_date = date.toLocaleDateString(); var put_date = document.getElementById("get_date"); var date_text = document.createTextNode("Fecha: " + var_nw_date); put_date.appendChild(date_text)</script>');
    mywindow.document.write(document.getElementById(printdivname).innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.onload = function() {
        mywindow.focus();
        mywindow.print();
        mywindow.close();
    };
}

// Initialize Materialize scripts
$(document).ready(function(){
    $('.modal').modal();
});
$(document).ready(function() {
    $('input#input_text, textarea.area').characterCounter();
});