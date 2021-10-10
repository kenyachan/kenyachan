function getDetails() {
    getBio();
}

function getBio() {
    fetch('txt/position-text')
    .then(response=>response.text())
    .then(data => {
        document.getElementById('position-text').innerHTML=data; 
    })

    var bio;

    fetch('txt/bio-text')
    .then(response=>response.text())
    .then(data => {
        bio = data.split(/\r?\n/);

        bio.forEach(element => {
            var tag = document.createElement("p");
            var text = document.createTextNode(element);

            tag.appendChild(text);
            document.getElementById('description-text').appendChild(tag);
        });
    })
}