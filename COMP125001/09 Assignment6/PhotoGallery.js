var photoList = document.getElementById("photoItems");
var mainPhoto = document.getElementById("fimg");

var btn = document.getElementById("btn");
btn.addEventListener("click", pictureList);
var j=0;


function pictureList() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../09 Assignment6/PictureLIst.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}

function renderHTML(data) {
    var photoListString = "";

    for (i = 1; i < data.length; i++) {
        photoListString += "<div class=\"box\"><img id=\"photo\" src=\"" + data[i].link +  "\"></div>";
    }

   
    photoList.innerHTML = photoListString;
    mainPhoto.innerHTML = "<img src=\"" + data[1].link + "\">";
    $('box').refresh;

}

$(document).ready(function () {
    //$('.box').click(function () {
    //    $('.full-image').html($(this).html());

    //});

    $('#nextBtn').click(function () {
        j++;
        if (j > 3) {
            j = 0;
        }
        $('.full-image').html($('.box').get(j).innerHTML);

    });

    $('#preBtn').click(function () {
        j--;
        if (j < 0) {
            j = 3;
        }
        $('.full-image').html($('.box').get(j).innerHTML);

    });

    $(document).on("click", ".box", function() {
        $('.full-image').html(this.innerHTML);
    });
});