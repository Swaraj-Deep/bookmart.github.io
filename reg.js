function showinput() {
    var first_name = document.getElementById('firstname');
    var last_name = document.getElementById('lastname');
    var mail = document.getElementById('mail');
    var age = document.getElementById('age');
    var number = document.getElementById('number');
    var companyname = document.getElementById('companyname');
    var companyaddress = document.getElementById('companyaddress');
    if ((!first_name.value) || (!last_name.value) || (!mail.value) || (!age.value) || (!number.value) || (!companyname.value) || (!companyaddress.value)) {
        showalert('Please fill all the fields first.', 'danger')
        return false;
    }
    $('#complete').modal('show');
}

function showalert(message, alert_type) {
    $("#alert-wrapper").html(`<div class="alert alert-${alert_type} alert-dismissible fade show" role="alert" id="alertdialog">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`);
    window.setTimeout(function () { $("#alertdialog").alert('close'); }, 2000);
}

$(".dataclose").on({
    click: function () {
        var first_name = document.getElementById('firstname');
        var last_name = document.getElementById('lastname');
        var mail = document.getElementById('mail');
        var age = document.getElementById('age');
        var number = document.getElementById('number');
        var companyname = document.getElementById('companyname');
        var companyaddress = document.getElementById('companyaddress');
        first_name.value = "";
        last_name.value = "";
        mail.value = "";
        age.value = "";
        number.value = "";
        companyname.value = "";
        companyaddress.value = "";
        first_name.focus();
    }
});

$("#explore_btn").on({
    click: function () {
        location.href = "file:///home/swaraj/Public/labnetwork/catalog.html";
    }
});

$("#rstbtn").on({
    click: function () {
        var first_name = document.getElementById('firstname');
        var last_name = document.getElementById('lastname');
        var mail = document.getElementById('mail');
        var age = document.getElementById('age');
        var number = document.getElementById('number');
        var companyname = document.getElementById('companyname');
        var companyaddress = document.getElementById('companyaddress');
        first_name.value = "";
        last_name.value = "";
        mail.value = "";
        age.value = "";
        number.value = "";
        companyname.value = "";
        companyaddress.value = "";
        first_name.focus();
    }
});

window.onload = function () {
    document.getElementById('firstname').focus();
}
