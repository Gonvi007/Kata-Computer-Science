fetch("https://elephant-api.herokuapp.com/elephants")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })