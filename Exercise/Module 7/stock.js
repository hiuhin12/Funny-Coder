// Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// API url
var url = "https://gadgets.dantri.com.vn/api/finance/stocks";

// Open and send request 
xhr.open("GET", url);
xhr.send();

// Callback function when response is ready
xhr.onload = function() {

  // Parse JSON data
  var data = JSON.parse(xhr.responseText);

  // Build HTML string
  var html = "<table>";
  html += "<tr><th>Code</th><th>Price</th></tr>";
  
  // Loop through data
  for(var i=0; i<data.length; i++) {
    html += "<tr>";
    html += "<td>" + data[i].code + "</td>";
    html += "<td>" + data[i].price + "</td>";
    html += "</tr>";
  }

  html += "</table>";

  // Insert HTML into page
  document.getElementById("stocks").innerHTML = html;

}