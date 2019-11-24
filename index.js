// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
let http = require('http');
let fs = require('fs');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};
// Once you have read the above messages, you can delete all comments. 
// window.onload = function() {
//     // var svg = d3.select("body").append("svg")
//     // .attr("width", 500).attr("height", 500);
//     var dataset = null;
//     var datasetx = null;
//     var datasety = null;
//     datasetx = fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
//       .then(result => result.json())
//       .then(json => {
//         datasetx = json.data;
//         datasetx = datasetx.filter( (val) => {
//            return val[0];
//         });      
//       });
//     datasety = fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
//       .then(result => result.json())
//       .then(json => {
//         datasety = json.data;
//         datasety = datasety.filter((val) =>{
//           return val[0];
//         });
//     });
    
//   console.log("test");
//   // console.log(dataset);
//     // console.log(dataset[0]);
//     // var xscale = 
//     var yscale = d3.scaleLinear().domain([243, 18000]).rang([0, 100]);
    
//     // svg = d3.select("svg").attr("width", 500).attr("height", 500);
//     // svg.selectAll("rect")
//     // .data(dataset)  
//     // .enter()
//     // .append("rect")
//     // .attr("x", 0)
//     // .attr("y", 0)
//     // .attr("width", 20)
//     // .attr("height", 40);
//     // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
  
//       const w = 500;
//       const h = 100;
  
//       const svg = d3.select("body").select("svg")
//                     .attr("width", w)
//                     .attr("height", h);
//       svg.selectAll("rect")
//          // Add your code below this line
//           .data(dataset)
//           .enter()
//           .append("rect")
//          // Add your code above this line
//          .attr("x", (d, i) => i * 15)
//          .attr("y", (d) => 100 - d)
//          .attr("width", 10)
//          .attr("height", (d) => d);
//   }
  