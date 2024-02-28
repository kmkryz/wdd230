const baseURL = "https://kmkryz.github.io/wdd230/";
const linksURL = "https://kmkryz.github.io/wdd230/data/links.json";
const container = document.getElementById('links-container');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    displayLinks(data);

}

const displayLinks = (weeks) => {
    const container = document.getElementById('links-container'); // Get the container where links will be displayed

    // Clear previous content
    container.innerHTML = '';

    weeks.forEach(week => {
        // Create a div or section for each week
        const weekSection = document.createElement('section');
        weekSection.classList.add('week');

        // Add the week title
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = `Week ${week.lesson}`; // Assuming your JSON objects have a 'lesson' key
        weekSection.appendChild(weekTitle);

        // Create a list for links
        const linksList = document.createElement('ul');

        week.links.forEach(link => {
            // Create list item for each link
            const listItem = document.createElement('li');
            // Create anchor tag for the link
            const anchor = document.createElement('a');
            anchor.setAttribute('href', link.url);
            anchor.textContent = link.title;
            anchor.setAttribute('target', '_blank'); // Open in a new tab

            // Append anchor to list item, then list item to the list
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        // Append the links list to the week section, then append the week section to the container
        weekSection.appendChild(linksList);
        container.appendChild(weekSection);
    });
};


getLinks();