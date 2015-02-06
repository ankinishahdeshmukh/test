
function sayHi() { alert('hi'); }

function ParseJsonData(){
    $.getJSON('data.json', function(data) {
        var output="";
        for (var i in data.tips) {
              output+= "<div class = 'block-main'>";
              output+= "<table>";
              output+= "<td class='block-header-left'> <img src=" + data.tips[i].img + "> </td>";
              output+= "<td class='block-header-right'>";
              output+= "<table>";
              output+= "<tr class='block-header-right-title'> <td>" + data.tips[i].title +"</td> </tr>";
              output+= "<tr class='block-header-right-date'> <td id='date'>" + data.tips[i].date + "</td> </tr>";
              output+= "</table>";
              output+= "</td>";
              output+= "</table>";
              output+= "<p class='block-message'>" + data.tips[i].details + "</p> </div>";
          }
          document.getElementById("tips").innerHTML=output;
    });
}