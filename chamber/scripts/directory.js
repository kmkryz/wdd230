const url = "https://kmkryz.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#directory-cards');



document.addEventListener('DOMContentLoaded', function() {
    const directoryCards = document.getElementById('directory-cards');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');

    directoryCards.classList.add('grid'); 

    gridButton.addEventListener('click', function() {
        directoryCards.classList.add('grid');
        directoryCards.classList.remove('list');
    });

    listButton.addEventListener('click', function() {
        directoryCards.classList.add('list');
        directoryCards.classList.remove('grid');
    });
});


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);

}

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement('section');
        const companyName = document.createElement('h2');
        const address = document.createElement('p');
        const phoneNumber = document.createElement('p');
        const website = document.createElement('a');
        const image = document.createElement('img')
        const memberLevel = document.createElement('h3');

        companyName.textContent = `${member.name}`;
        address.textContent= `${member.address}`;
        phoneNumber.textContent= `${member.phonenumber}`;
        website.href= `${member.websiteurl}`;
        website.textContent = "Visit Website";
        memberLevel.textContent= `${member.membershiplevel}`;
        image.setAttribute('src', member.img);
        image.setAttribute('alt', `Photo of ${member.name}`)
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');

        card.appendChild(image);
        card.appendChild(companyName)
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(memberLevel);


        cards.appendChild(card);
    })
}

getMemberData();








document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;