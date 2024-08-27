const inputText = document.getElementById("input-text");
const Text = document.getElementById("under-text");


function Add(){
    if(inputText.value == ""){
        alert("Please Enter Task")
    }else{
        let newText = document.createElement("li");
        newText.className = "task";
        newText.innerHTML =`<input
        class="newinput"
         type="checkbox">
		<span>${inputText.value}</span>
		<button class="delete-btn">Delete</button>`;
          Text.appendChild(newText);
          inputText.value = "";
          newText.querySelector("button").addEventListener("click", () => {
           newText.innerHTML = "";
          })
          

    }
}
