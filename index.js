// Variables
let myLeads = []
const inputEl = document.getElementById("input-el")    // const can also be used to declare variables. Const variables CANNOT be reassigned!!
const ulEl = document.getElementById("ul-el")
const LeadsDB = JSON.parse(localStorage.getItem("myLeads"))   // Checking if we have any leads in our localStorage & put into array


// If we have leads now in an array, then need to output these  before we use the renderLeads function (below). This lets you persist leads across refreshes of browser/extension (aka. old leads are still saved). 
if (LeadsDB) {              // Note: this is testing for a "truthy" value. If there is data in leadsDB this returns "True" and runs the code
    myLeads = LeadsDB
    render(myLeads)
}

// Render function to render out the any array you feed into the function. Info is rendered into a list using for loop into browser
function render(leads){
    let listItems = ""
    for(i = 0; i < leads.length; i += 1){
        listItems += 
            `<li>
                <a target='blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>`      // Can create HTML elements using javascript (using .innerHTML OR template strings). This is using template string.
    }
    ulEl.innerHTML = listItems
}


// Code for storing data when "save input" button is clicked
const inputBtn = document.getElementById("input-btn")    // More advanced way developers often run a function on clicking.
inputBtn.addEventListener("click", function(){         // Cleaner HTML as it doesn't worry about any HTML listeners.
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))  // Saving leads/data in localStorage when inputting in Chrome Extension
    render(myLeads) 
})

// Code for delete button functionality
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()                                                   // Clear out localStorage
    myLeads = []                                                           // Clear out myLeads array
    render(myLeads)                                                          // Clear out DOM as the array is now empty from above line
})

// Code for 'Save Tab' button - eg. save the URL of the tab you are on. Need to create variable for tab (which itself is an array) and it needs to recognise tab you are on. Then need to run similar code to the input button, but for the tab variable.
const tabBtn = document.getElementById("tab-btn")
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }) 
})