var ourRequest = new XMLHttpRequest()
ourRequest.open('GET', '../ 09 Assignment6 /PictureLIst.json')
ourRequest.onload= function() {

    console.log(ourRequest.responseText);

};
ourRequest.send();