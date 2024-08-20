let data = [
    { name: 'Adeel Solangi', language: 'Sindhi', bio: 'Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.' },
    { name: 'Afzal Ghaffar', language: 'Sindhi',bio: 'Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nuncAliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod'},
    { name: 'Aamir Solang', language: 'sindhi',bio: 'Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque..'},
    { name: 'Abla Dilmurat', language: 'Uyghur',bio: 'Donec lobortis eleifend condimentum. Morbi ac tellus erat.'},
    {name: 'Adil Eli', language: 'Uyghur',bio: 'Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti'},
    {name: 'Adile Qadir', language: 'Uyghur',bio: 'Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.'},
    {name: 'Abdukerim Ibrahim', language: 'SUyghur',bio: 'Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.'}
]
let headers = ['Name', 'language', 'bio'];
function createTableWithForEach() {
    const table = document.createElement('table');
    table.setAttribute('border', '1');

    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(key));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

createTableWithForEach();