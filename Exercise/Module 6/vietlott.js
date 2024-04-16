function getVietlottJackpotInfo(gender) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://webapi.dantri.com.vn/lottery/get-vietlott-jack", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Parse the response text to a JavaScript object
      var response = JSON.parse(xhr.responseText);
      
      // Depending on the gender, display the relevant lottery information
      if (gender === 'man') {
        displayTable(response.data.mega645, 'Mega 645 Jackpot Information');
      } else if (gender === 'woman') {
        displayTable(response.data.power655, 'Power 655 Jackpot Information');
      }
    } else {
      // Handle errors
      console.error('The request was unsuccessful!');
    }
  };
  xhr.send();
}

function displayTable(data, title) {
  var html = '<table border="1"><caption>' + title + '</caption><tr>';
  for (var key in data[0]) {
    html += '<th>' + key + '</th>';
  }
  html += '</tr>';
  data.forEach(function(item) {
    html += '<tr>';
    for (var key in item) {
      html += '<td>' + item[key] + '</td>';
    }
    html += '</tr>';
  });
  html += '</table>';
  
  // Assuming you have a div with id="lotteryInfo" in your HTML
  document.getElementById('lotteryInfo').innerHTML = html;
}

// Example usage:
// getVietlottJackpotInfo('man');
// getVietlottJackpotInfo('woman');