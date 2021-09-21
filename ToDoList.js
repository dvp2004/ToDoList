function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // Note, need to use '' because of "" in HTML
      // So these things will always be added when you create a new list item.
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +  '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' +
      newTask;
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
        input.value = "";
        input.placeholder = "enter new task... ";
      
    }
  }
  // change styling used for given item
  function markDone (item) { 
      item.className = 'finished';
  }
  
  function remove (item) {
    // remove item completely from document
    if (item.className == 'finished') {
        item.remove();
    }
         
  }
  
  function doAbout() {
      var x = document.getElementById("divabout");
      x.className = "aboutcolor";
      x.innerHTML = "Devesh Pansare is the Author!";
  }
  
  function clearAbout() {
    var x = document.getElementById("divabout");
    x.innerHTML = "";
    // x.className = ""; No need to do anything to the color as if there is no string the bg color will not be displayed
  }

  function important (item) {
      item.className = "important";

}
  