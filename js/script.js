//Mirna Garcia 300367454

const listLength = users.length;
const limit = 10;
const pageCount = Math.ceil(listLength / limit);

function userList() {

    let headerTotal = document.createElement('h3');
    headerTotal.innerText = "Total: " + listLength;
    let title = document.getElementsByClassName("page-header cf");
    title[0].appendChild(headerTotal);


    let parentlist = document.getElementsByClassName("contact-list");

    for (var i = 0; i < 10; i++) {
        let newLine = document.createElement('li');
        newLine.classList.add("contact-item", "cf");
        parentlist[0].appendChild(newLine);

        let newDiv = document.createElement('div');
        newDiv.classList.add("contact-details");
        newLine.appendChild(newDiv);

        let image = document.createElement('img');
        image.classList.add("avatar");
        image.setAttribute('src', users[i].image);
        newDiv.appendChild(image);

        let header = document.createElement('h3');
        header.innerText = users[i].name;
        newDiv.appendChild(header);

        let newSpan = document.createElement('span');
        newSpan.innerText = users[i].name.replace(" ", ".") + "@example.com";
        newDiv.appendChild(newSpan);

        let newDiv2 = document.createElement('div');
        newDiv2.classList.add("joined-details");
        newLine.appendChild(newDiv2);

        let newSpan2 = document.createElement('span');
        newSpan2.innerText = "Joined " + users[i].joined;
        newDiv2.appendChild(newSpan2);

    }
}

function paginationButtons() {

    let parentElement = document.querySelector('.pagination');
    parentElement.setAttribute('onclick', 'pagination(event)');

    for (var i = 0; i < pageCount; i++) {
        let newElement = document.createElement('li');

        let newElement2 = document.createElement('a');
        parentElement.appendChild(newElement);

        newElement.appendChild(newElement2);
        newElement2.textContent = `${i + 1}`;
    }
}

function pagination(e) {

    let parentlist = document.getElementsByClassName("contact-list"); 

    while (parentlist[0].firstChild) {
        parentlist[0].removeChild(parentlist[0].firstChild);
    }

    let element = e.target;

    let pageValue = element.innerText;

    if ((pageValue * limit) > listLength) {
        var contacts = listLength % limit;
        var starterIndex = (listLength - contacts);
        var endIndex = starterIndex + contacts;
    }
    else{
        var endIndex = pageValue*limit;
        var starterIndex = endIndex-limit;
    }

    for (var i = starterIndex; i < endIndex; i++) {
        let newLine = document.createElement('li');
        newLine.classList.add("contact-item", "cf");
        parentlist[0].appendChild(newLine);

        let newDiv = document.createElement('div');
        newDiv.classList.add("contact-details");
        newLine.appendChild(newDiv);

        let image = document.createElement('img');
        image.classList.add("avatar");
        image.setAttribute('src', users[i].image);
        newDiv.appendChild(image);

        let header = document.createElement('h3');
        header.innerText = users[i].name;
        newDiv.appendChild(header);

        let newSpan = document.createElement('span');
        newSpan.innerText = users[i].name.replace(" ", ".") + "@example.com";
        newDiv.appendChild(newSpan);

        let newDiv2 = document.createElement('div');
        newDiv2.classList.add("joined-details");
        newLine.appendChild(newDiv2);

        let newSpan2 = document.createElement('span');
        newSpan2.innerText = "Joined " + users[i].joined;
        newDiv2.appendChild(newSpan2);
    }
} 
