// from data.js
var tableData = data;



// Filter parameters needed to filter. This is called on submit.
var filterDate;
var filterCity;
var filterState;
var filterCountry;
var filterShape;
var filterDuration;
var filterComments;



// YOUR CODE HERE!




// Create a function used to create a new table for each filter.
function TableCreate(objects) {
    var tbody = d3.select("tbody");
    objects.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    
    });
};

// Cleans up the code through function that checks each filter parameter.
function Filtering(TableToFilter) {
    
    var passedTable = TableToFilter;

    if (filterDate !== undefined) {
        passedTable = passedTable.filter(element => element.datetime.includes(filterDate));
    }
    
    if (filterCity !== undefined) {
        passedTable = passedTable.filter(element => element.city.includes(filterCity));
    
    }
    
    if (filterState !== undefined) {
        passedTable = passedTable.filter(element => element.state.includes(filterState));
    
    }
    
    if (filterCountry !== undefined) {
        passedTable = passedTable.filter(element => element.country.includes(filterCountry));
        
    }
    
    
    if (filterShape !== undefined) {
        passedTable = passedTable.filter(element => element.shape.includes(filterShape));
        
    }
    

    
    if (filterComments !== undefined) {
        passedTable = passedTable.filter(element => element.comments.includes(filterComments));
        
    }


return passedTable;
};


// Passes the filter parameters in the fields to the proper filters vars.
function passFilterParameters() {


    filterDate = d3.select("#datetime").property("value") ;
    filterCity = d3.select("#city").property("value");
    filterState = d3.select("#state").property("value");
    filterCountry = d3.select("#country").property("value") ;
    filterShape = d3.select("#shape").property("value");
    filterDuration = d3.select("#duration").property("value");
    filterComments = d3.select("#comments").property("value");

}






var submit = d3.select("#filter-btn");




submit.on("click", function() {

d3.event.preventDefault();


passFilterParameters();

// Removes the row elements in the table to clear for a new table.
d3.select('tbody').selectAll("tr").remove();

//Passes filtered table to the createTable function and populates the html with table elements.
TableCreate(Filtering(tableData));


});

