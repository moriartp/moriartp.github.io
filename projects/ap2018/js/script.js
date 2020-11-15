$( document ).ready(function() { 
    d3.select("#d3er").append("p").text("3. This is a loaded js script from the file directory, unsing remotely loaded d3 library");   
    console.log('this confirms the d3 script ran');
});