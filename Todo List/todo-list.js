const todoList = [];
function addtodo () {
  const inputEle= document.querySelector(".js-name-input");
  const name= inputEle.value;

  todoList.push(name);
  console.log(todoList);
 inputEle.value= ""; 
}