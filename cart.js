function showalert(message, alert_type) {
    $("#alert-wrapper").html(`<div class="alert alert-${alert_type} alert-dismissible fade show" role="alert" id="alertdialog">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`);
    window.setTimeout(function () { $("#alertdialog").alert('close'); }, 2000);
}

window.onload = function () {
    var content = this.localStorage.getItem('content');
    if (!content) {
        this.showalert('Nothing in the cart. Select items from the store to view them here.', 'alert-warning');
    }
    $("#cards_elem").append(content);
}

function redirect () {
    location.href = "file:///home/swaraj/Public/labnetwork/pay.html"
}