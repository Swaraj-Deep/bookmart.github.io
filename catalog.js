var content = "";
function savestate(ele) {
    parent = ele.parentNode.parentNode;
    title = parent.querySelectorAll(".card-title");
    text = parent.querySelectorAll(".card-text");
    img = parent.querySelectorAll(".card-img-top");
    content += `<div class="col col-md-4 py-2">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${img[0].src}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${title[0].innerHTML}</h5>
            <p class="card-text">${text[0].innerHTML}</p>
        </div>
        <div class="card-body">
            <button type="button" class="btn btn-primary" onclick="redirect();">Proceed To Pay</button>
        </div>
    </div>
</div>`;
    localStorage.setItem('content', content);
}