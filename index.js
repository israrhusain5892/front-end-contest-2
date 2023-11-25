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




data1.forEach(data => {
    let container = document.createElement('div');
    let card = document.createElement('div');
    let img = document.createElement('img');
    // img.src = "https://drive.google.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
    img.src = data.imageSrc;
    img.setAttribute('id', 'img-id');
    img.setAttribute('width', '289px');
    img.setAttribute('height', '200px');
    img.setAttribute('class', 'img-class');
    container.setAttribute('id', 'card-container');
    // container.setAttribute('style','display:flex; justify-content:center; gap:20px;');
    // card.setAttribute('width','300px');
    // card.setAttribute('height','320px');
    card.appendChild(img);
    card.setAttribute('class', 'card');
    let div_container = document.createElement('div');
    div_container.setAttribute('id', 'div-container');
    let div = document.createElement('div');
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
    div_right.setAttribute('class', 'dev-right');
    let star = document.createElement('img');
    star.src = "https://drive.google.com/file/d/1l6f2NZwLO19bTiC7nh9uD84X2dpU89gz/view?usp=sharing";
    div_right.appendChild(star);
    let span = document.createElement('span');
    span.innerHTML = data.rating;
    div_right.appendChild(span);
    let br = document.createElement('br');
    div_right.appendChild(br);
    let heart = document.createElement('img');


    // div_right.innerHTML = <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M15.3927 2.57866C16.5976 2.64527 17.7273 3.18541 18.5357 4.08136C19.344 4.97731 19.7656 6.15645 19.7083 7.36183C19.7083 10.1778 17.2773 11.9076 14.9444 13.982C12.6417 16.0381 11.4015 17.1619 11 17.4213C10.5627 17.1381 9.03557 15.7502 7.05557 13.982C4.71257 11.8993 2.29166 10.1531 2.29166 7.36183C2.23443 6.15645 2.65593 4.97731 3.46431 4.08136C4.27269 3.18541 5.40243 2.64527 6.60732 2.57866C7.27479 2.55843 7.93608 2.71175 8.52656 3.02361C9.11703 3.33548 9.61648 3.79523 9.97607 4.35791C10.7461 5.435 10.8744 5.97399 11.0027 5.97399C11.1311 5.97399 11.2576 5.435 12.0202 4.35516C12.3778 3.78987 12.8774 3.3283 13.4692 3.01657C14.061 2.70483 14.7242 2.55383 15.3927 2.57866ZM15.3927 0.745328C14.5603 0.718678 13.7326 0.880155 12.9712 1.21773C12.2099 1.55531 11.5345 2.0603 10.9954 2.69508C10.4567 2.06214 9.78276 1.55833 9.02324 1.22085C8.26372 0.883375 7.43808 0.720866 6.60732 0.745328C4.91595 0.811468 3.31959 1.54465 2.1673 2.78454C1.01501 4.02443 0.400567 5.67015 0.458322 7.36183C0.458322 10.671 2.79582 12.7032 5.05541 14.6677C5.31482 14.8932 5.57699 15.1205 5.83732 15.3524L6.77874 16.1939C7.80544 17.1709 8.88182 18.0943 10.0036 18.9604C10.3004 19.1526 10.6464 19.2548 11 19.2548C11.3536 19.2548 11.6996 19.1526 11.9964 18.9604C13.1539 18.0678 14.2634 17.1147 15.3202 16.105L16.1654 15.3497C16.434 15.1113 16.7062 14.8739 16.9767 14.6402C19.1162 12.7839 21.5417 10.6802 21.5417 7.36183C21.5994 5.67015 20.985 4.02443 19.8327 2.78454C18.6804 1.54465 17.084 0.811468 15.3927 0.745328Z" fill="#FF0000" />
    // </svg>




    if (data.isLiked == true) {

        heart.src = 'D:\UI-WORKSPACE\contest-f2-week2\Images\like.png';

        // div_right.appendChild(heart);


    }

    else {
        heart.src = "https://drive.google.com/file/d/17pS4oAeYlYcoFIzPQvUvKYJDoFC2IkfB/view?usp=sharing";
    }
    div_right.appendChild(heart);


    div_container.appendChild(div);
    div_container.appendChild(div_right);
    card.appendChild(div_container);

    container.appendChild(card)
    element.appendChild(card);
});


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

