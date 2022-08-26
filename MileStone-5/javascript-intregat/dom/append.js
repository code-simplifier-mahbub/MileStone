// where we add element
const mainContainer = document.getElementById("main-container");

// create section
const section = document.createElement("section");
// create element heading
const h4 = document.createElement("h4");
h4.innerText = "Hi this is my eid collection";
section.appendChild(h4);
//create element ul
const ul = document.createElement("ul");
section.appendChild(ul);
//create element li
const li1 = document.createElement("li");
li1.innerText = "T-shirt";
ul.appendChild(li1);
//create element li
const li2 = document.createElement("li");
li2.innerText = "lungi";
ul.appendChild(li2);
//create element li
const li3 = document.createElement("li");
li3.innerText = "genji";
ul.appendChild(li3);
//(add)or append section in main section
mainContainer.appendChild(section);

// another section add in another way
//create another section
const anotherSection = document.createElement("section");
mainContainer.appendChild(anotherSection);
//create direct html element for section
anotherSection.innerHTML = `
<h1> Hi this is my another collection</h1>
<ul>
    <li>shirt</li>
    <li>fotua</li>
    <li>pant</li>
</ul>
`





















 

