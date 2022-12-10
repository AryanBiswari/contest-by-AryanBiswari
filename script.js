const array = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

// Use the map function to iterate over all of the ages and make them integers
const updatedArray = array.map((item) => {
    return {
        ...item,
        age: parseInt(item.age, 10)
    };
});

// Use the forEach function to edit the object with the name "john" and change his age from 18 to 19
updatedArray.forEach((item) => {
    if (item.name === 'john') {
        item.age = 19;
    }
});
const select = document.createElement('select');
select.name = 'profession';

// Create the options for the dropdown

const developerOption = document.createElement('option');
developerOption.value = 'developer';
developerOption.textContent = 'Developer';
select.appendChild(developerOption);

const adminOption = document.createElement('option');
adminOption.value = 'admin';
adminOption.textContent = 'Admin';
select.appendChild(adminOption);

// Create the filter button
const button = document.createElement('button');
button.textContent = 'Filter';
button.classList.add('btn-class');
button.addEventListener('click', () => {
    // Get the selected value from the dropdown
    const selectedValue = select.value;

    if (selectedValue) {
        // Use the filter function to filter the cards by profession
        const filteredArray = updatedArray.filter((item) => item.profession === selectedValue);

        // Use another forEach to render the filtered cards in the UI
        filteredArray.forEach((item) => {
            const card = document.createElement('tr');
            card.innerHTML = `
                <td>${item.id}.</td>
                <td>Name : ${item.name}</td>
                <td>Profession :  ${item.profession}</td>
                <td>Age : ${item.age}</td>`;

            // Append the card to the UI
            document.getElementById('cards').appendChild(card);
        });
    } else {
        // No value was selected, show an alert
        alert('Please select a profession from the dropdown before clicking the filter button.');
    }
});

// Append the dropdown and button to the DOM
document.getElementById('dropdown-container').appendChild(select);
document.getElementById('button-container').appendChild(button);

// Use the spread operator to append another object to the array
const newObject = {id: 4, name: "jane", age: "21", profession: "designer"};
updatedArray.push(newObject);