function getDetails() {
    fetch(`https://api.github.com/users/kenyachan`)
    .then(response=>response.json().then(data=> {
        //console.log(data);
        document.getElementById('name-text').innerHTML=data.name;
        document.getElementById('description-text').innerHTML=data.bio;
        document.getElementById('github-link').setAttribute('href', data.html_url)
    }))
}
