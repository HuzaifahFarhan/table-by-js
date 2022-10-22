var std1 = {
    name: "Huzaifah",
    rollNumber: "CSC-20F-100",
    Section: "5C",
  };
  
  var std2 = {
    name: "Mubashir",
    rollNumber: "CSC-20F-080",
    Section: "5D",
  };
  
  var std3 = {
    name: "Sufyan",
    rollNumber: "CSC-20F-074",
    Section: "5A",
  };
  
  var std4 = {
    name: "Aliyan",
    rollNumber: "CSC-20F-090",
    Section: "5E",
  };
  
  var std5 = {
    name: "ali",
    rollNumber: "CSC-20F-070",
    Section: "5D",
  };
  
  var std6 = {
    name: "bilal",
    rollNumber: "CSC-20F-060",
    Section: "5A",
  };
  
  var std7 = {
    name: "faizan",
    rollNumber: "CSC-20F-050",
    Section: "5B",
  };
  
  var std8 = {
    name: "kashif",
    rollNumber: "CSC-20F-040",
    Section: "5C",
  };
  
  var std9 = {
    name: "sami",
    rollNumber: "CSC-20F-030",
    Section: "5B",
  };
  
  var std10 = {
    name: "osama",
    rollNumber: "CSC-20F-020",
    Section: "5A",
  };
  
  var allClasses = [std1, std2, std3, std4, std5, std6, std7, std8, std9, std10];
  
  var parent = document.getElementById("parent") 
  parent.innerHTML = `<tr><th>Name</th><th>Roll Number</th><th>Section</th></tr>
  <tr><td>${std1.name}</td> <td>${std1.rollNumber}</td> <td>${std1.Section}</td></tr>
  <tr><td>${std2.name}</td> <td>${std2.rollNumber}</td> <td>${std2.Section}</td></tr>
  <tr><td>${std3.name}</td> <td>${std3.rollNumber}</td> <td>${std3.Section}</td></tr>
  <tr><td>${std4.name}</td> <td>${std4.rollNumber}</td> <td>${std4.Section}</td></tr>
  <tr><td>${std5.name}</td> <td>${std5.rollNumber}</td> <td>${std5.Section}</td></tr>
  <tr><td>${std6.name}</td> <td>${std6.rollNumber}</td> <td>${std6.Section}</td></tr>
  <tr><td>${std7.name}</td> <td>${std7.rollNumber}</td> <td>${std7.Section}</td></tr>
  <tr><td>${std8.name}</td> <td>${std8.rollNumber}</td> <td>${std8.Section}</td></tr>
  <tr><td>${std9.name}</td> <td>${std9.rollNumber}</td> <td>${std9.Section}</td></tr>
  <tr><td>${std10.name}</td> <td>${std10.rollNumber}</td> <td>${std10.Section}</td></tr>`
  
function search(){
    var chk = document.getElementById("check")
    var inp = chk.nodeValue
    console.log(inp);
}
