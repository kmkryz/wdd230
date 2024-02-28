// const baseURL = "https://kmkryz.github.io/wdd230/";
//chose to change links in JSON because not all links follow the BaseURL format



const linksURL = "https://kmkryz.github.io/wdd230/data/links.json";
const list = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        const listItem = document.createElement('li');
        const linksHtml = week.links.map(link => {
            return `<a href="${link.url}">${link.title}</a>`;
        }).join(' | ');
        listItem.innerHTML = linksHtml;
        list.appendChild(listItem);
        
    });
};


getLinks();
