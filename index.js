// import Images from /Images/like.png;

let element = document.getElementById('card-main');



const data1 = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];


function showAllrecipes() {
    element.innerHTML = "";
    data1.forEach(data => {
        let container = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        //    gle.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
        img.src = data.imageSrc;
        img.setAttribute('id', 'img-id');
        img.setAttribute('width', '289px');
        img.setAttribute('height', '200px');
        img.setAttribute('class', 'img-class');
        container.setAttribute('id', 'card-container');

        card.appendChild(img);
        card.setAttribute('class', 'card');
        let div_container = document.createElement('div');
        div_container.setAttribute('id', 'div-container');
        let div = document.createElement('div');
        div.setAttribute('id', 'left-div');
        let p = document.createElement('p');
        p.innerHTML = data.type;
        div.appendChild(p);
        let h3 = document.createElement('h3');
        h3.innerHTML = data.name;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = data.time;
        div.appendChild(h4);

        //create right div

        let div_right = document.createElement('div');
        let divr = document.createElement('div');
        div_right.setAttribute('id', 'div-right');
        let star = document.createElement('img');
        star.src = "Images/Star.png";
        divr.appendChild(star);

        let span = document.createElement('span');
        span.innerHTML = data.rating;
        divr.appendChild(span);
        div_right.appendChild(divr);
        let br = document.createElement('div');

        let heart = document.createElement('img');


        if (data.isLiked == true) {

            heart.src = "Images/like.png";


        }

        else {
            heart.src = "Images/unliked.png";
        }
        br.appendChild(heart);
        div_right.appendChild(br);

        let comment = document.createElement('img');
        comment.src = "Images/comments.png"
        br.appendChild(comment);
        div_right.appendChild(br);
        br.setAttribute('class', 'br');
        div_container.appendChild(div);
        div_container.appendChild(div_right);
        card.appendChild(div_container);

        container.appendChild(card)
        element.appendChild(card);
    });
};


function searchByName() {
    let container = document.getElementById('card-main');
    container.innerHTML = "";
    let name = document.getElementById('search-bar').value;
    //   element.removeChil?d(container);
    let img = document.createElement('img');
    let div = document.createElement('div');
    data1.forEach(data => {
        let smalldata = data.name.toLowerCase();
        if (name == smalldata || name == data.name) {
            img.src = data.imageSrc;
            img.setAttribute('width', '289px');
            img.setAttribute('height', '200px');
            img.setAttribute('class', 'img-class');
            img.setAttribute('id', 'search-img');
            div.appendChild(img);
            let p = document.createElement('p');
            p.innerHTML = data.type;
            div.appendChild(p);
            let h3 = document.createElement('h3');
            h3.innerHTML = data.name;
            div.appendChild(h3);
            let h4 = document.createElement('h4');
            h4.innerHTML = data.time;
            div.appendChild(h4);


            div.setAttribute('class', 'card');
            element.appendChild(div);
            return;
        }
    });
}


function showOnyVegRecipes() {
    element.innerHTML = "";

    data1.forEach(data => {
        //  let container1=document.getElementById('card-main');
        //  container1.innerHTML="";


        let container = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        //    gle.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
        img.src = data.imageSrc;
        img.setAttribute('id', 'img-id');
        img.setAttribute('width', '289px');
        img.setAttribute('height', '200px');
        img.setAttribute('class', 'img-class');
        container.setAttribute('id', 'card-container');

        card.appendChild(img);
        card.setAttribute('class', 'card');
        let div_container = document.createElement('div');
        div_container.setAttribute('id', 'div-container');
        let div = document.createElement('div');
        div.setAttribute('id', 'left-div');
        let p = document.createElement('p');
        p.innerHTML = data.type;
        div.appendChild(p);
        let h3 = document.createElement('h3');
        h3.innerHTML = data.name;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = data.time;
        div.appendChild(h4);

        //create right div

        let div_right = document.createElement('div');
        let divr = document.createElement('div');
        div_right.setAttribute('id', 'div-right');
        let star = document.createElement('img');
        star.src = "Images/Star.png";
        divr.appendChild(star);

        let span = document.createElement('span');
        span.innerHTML = data.rating;
        divr.appendChild(span);
        div_right.appendChild(divr);
        let br = document.createElement('div');

        let heart = document.createElement('img');

        if (data.isLiked == true) {

            heart.src = "Images/like.png";
        }

        else {
            heart.src = "Images/unliked.png";
        }
        br.appendChild(heart);
        div_right.appendChild(br);

        let comment = document.createElement('img');
        comment.src = "Images/comments.png"
        br.appendChild(comment);
        div_right.appendChild(br);
        br.setAttribute('class', 'br');
        div_container.appendChild(div);
        div_container.appendChild(div_right);
        card.appendChild(div_container);

        if (data.type == "veg") {
            container.appendChild(card);

            element.appendChild(card);
        }




    }
    )
};


function showOnyNonVegRecipes() {

    element.innerHTML = "";

    data1.forEach(data => {
        //  let container1=document.getElementById('card-main');
        //  container1.innerHTML="";


        let container = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        //    gle.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
        img.src = data.imageSrc;
        img.setAttribute('id', 'img-id');
        img.setAttribute('width', '289px');
        img.setAttribute('height', '200px');
        img.setAttribute('class', 'img-class');
        container.setAttribute('id', 'card-container');

        card.appendChild(img);
        card.setAttribute('class', 'card');
        let div_container = document.createElement('div');
        div_container.setAttribute('id', 'div-container');
        let div = document.createElement('div');
        div.setAttribute('id', 'left-div');
        let p = document.createElement('p');
        p.innerHTML = data.type;
        div.appendChild(p);
        let h3 = document.createElement('h3');
        h3.innerHTML = data.name;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = data.time;
        div.appendChild(h4);

        //create right div

        let div_right = document.createElement('div');
        let divr = document.createElement('div');
        div_right.setAttribute('id', 'div-right');
        let star = document.createElement('img');
        star.src = "Images/Star.png";
        divr.appendChild(star);

        let span = document.createElement('span');
        span.innerHTML = data.rating;
        divr.appendChild(span);
        div_right.appendChild(divr);
        let br = document.createElement('div');

        let heart = document.createElement('img');

        if (data.isLiked == true) {

            heart.src = "Images/like.png";
        }

        else {
            heart.src = "Images/unliked.png";
        }
        br.appendChild(heart);
        div_right.appendChild(br);

        let comment = document.createElement('img');
        comment.src = "Images/comments.png"
        br.appendChild(comment);
        div_right.appendChild(br);
        br.setAttribute('class', 'br');
        div_container.appendChild(div);
        div_container.appendChild(div_right);
        card.appendChild(div_container);

        if (data.type == "non-veg") {
            container.appendChild(card);

            element.appendChild(card);
        }

   })
};



function Rating4andAbove(){

    element.innerHTML = "";

    data1.forEach(data => {
        //  let container1=document.getElementById('card-main');
        //  container1.innerHTML="";


        let container = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        //    gle.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
        img.src = data.imageSrc;
        img.setAttribute('id', 'img-id');
        img.setAttribute('width', '289px');
        img.setAttribute('height', '200px');
        img.setAttribute('class', 'img-class');
        container.setAttribute('id', 'card-container');

        card.appendChild(img);
        card.setAttribute('class', 'card');
        let div_container = document.createElement('div');
        div_container.setAttribute('id', 'div-container');
        let div = document.createElement('div');
        div.setAttribute('id', 'left-div');
        let p = document.createElement('p');
        p.innerHTML = data.type;
        div.appendChild(p);
        let h3 = document.createElement('h3');
        h3.innerHTML = data.name;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = data.time;
        div.appendChild(h4);

        //create right div

        let div_right = document.createElement('div');
        let divr = document.createElement('div');
        div_right.setAttribute('id', 'div-right');
        let star = document.createElement('img');
        star.src = "Images/Star.png";
        divr.appendChild(star);

        let span = document.createElement('span');
        span.innerHTML = data.rating;
        divr.appendChild(span);
        div_right.appendChild(divr);
        let br = document.createElement('div');

        let heart = document.createElement('img');

        if (data.isLiked == true) {

            heart.src = "Images/like.png";
        }

        else {
            heart.src = "Images/unliked.png";
        }
        br.appendChild(heart);
        div_right.appendChild(br);

        let comment = document.createElement('img');
        comment.src = "Images/comments.png"
        br.appendChild(comment);
        div_right.appendChild(br);
        br.setAttribute('class', 'br');
        div_container.appendChild(div);
        div_container.appendChild(div_right);
        card.appendChild(div_container);

        if (data.rating>=4) {
            container.appendChild(card);

            element.appendChild(card);
        }

   })
        
}




function RatingBelow4(){

    element.innerHTML = "";

    data1.forEach(data => {
        //  let container1=document.getElementById('card-main');
        //  container1.innerHTML="";


        let container = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        //    gle.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
        img.src = data.imageSrc;
        img.setAttribute('id', 'img-id');
        img.setAttribute('width', '289px');
        img.setAttribute('height', '200px');
        img.setAttribute('class', 'img-class');
        container.setAttribute('id', 'card-container');

        card.appendChild(img);
        card.setAttribute('class', 'card');
        let div_container = document.createElement('div');
        div_container.setAttribute('id', 'div-container');
        let div = document.createElement('div');
        div.setAttribute('id', 'left-div');
        let p = document.createElement('p');
        p.innerHTML = data.type;
        div.appendChild(p);
        let h3 = document.createElement('h3');
        h3.innerHTML = data.name;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = data.time;
        div.appendChild(h4);

        //create right div

        let div_right = document.createElement('div');
        let divr = document.createElement('div');
        div_right.setAttribute('id', 'div-right');
        let star = document.createElement('img');
        star.src = "Images/Star.png";
        divr.appendChild(star);

        let span = document.createElement('span');
        span.innerHTML = data.rating;
        divr.appendChild(span);
        div_right.appendChild(divr);
        let br = document.createElement('div');

        let heart = document.createElement('img');

        if (data.isLiked == true) {

            heart.src = "Images/like.png";
        }

        else {
            heart.src = "Images/unliked.png";
        }
        br.appendChild(heart);
        div_right.appendChild(br);

        let comment = document.createElement('img');
        comment.src = "Images/comments.png"
        br.appendChild(comment);
        div_right.appendChild(br);
        br.setAttribute('class', 'br');
        div_container.appendChild(div);
        div_container.appendChild(div_right);
        card.appendChild(div_container);

        if (data.rating<4) {
            container.appendChild(card);

            element.appendChild(card);
        }

   })
        
}















