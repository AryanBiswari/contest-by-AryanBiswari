const array = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];


const updatedArray = array.map((item) => {
    return {
        ...item,
        age: parseInt(item.age, 10)
    };
});


updatedArray.forEach((item) => {
    if (item.name === 'john') {
        item.age = 19;
    }
});
const select = document.createElement('select');
select.name = 'profession';

const professionOption = document.createElement('option');
professionOption.value = 'profession';
professionOption.textContent = 'Profession';
select.appendChild(professionOption);

const developerOption = document.createElement('option');
developerOption.value = 'developer';
developerOption.textContent = 'Developer';
select.appendChild(developerOption);

const adminOption = document.createElement('option');
adminOption.value = 'admin';
adminOption.textContent = 'Admin';
select.appendChild(adminOption);

const designerOption = document.createElement('option');
designerOption.value = 'designer';
designerOption.textContent = 'Designer';
select.appendChild(designerOption);

const button = document.createElement('button');
button.textContent = 'Filter';
button.classList.add('btn-class');
button.addEventListener('click', () => {
    
    const selectedValue = select.value;

    if (selectedValue && selectedValue !== "profession") {
        
        const filteredArray = updatedArray.filter((item) => item.profession === selectedValue);

        
        filteredArray.forEach((item) => {
            const card = document.createElement('tr');
            card.innerHTML = `
                <td>${item.id}.</td>
                <td>Name : ${item.name}</td>
                <td>Profession :  ${item.profession}</td>
                <td>Age : ${item.age}</td>`;

            
            document.getElementById('cards').appendChild(card);
        });
    } else {
        
        alert('Please select a profession from the dropdown before clicking the filter button.');
    }
});


document.getElementById('dropdown-container').appendChild(select);
document.getElementById('button-container').appendChild(button);


const newObject = [{id: 4, name: "jane", age: "21", profession: "designer"}];
updatedArray.push(...newObject);