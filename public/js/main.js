window.addEventListener("DOMContentLoaded", (e) => {
  updateTodos();
});

const mapCheckboxes = () => {
  document.querySelectorAll(".complete-checkbox").forEach((item) => {
    item.addEventListener("click", async (e) => {
      const id = e.target.parentNode.parentNode.id;
      let classes = e.target.parentNode.parentNode.childNodes[3].className
        .replace("completed", "")
        .trim();
      const completed = e.target.checked;

      const res = await updateTodo(id, completed);

      if (res.response === "success") {
        if (completed) {
          e.target.parentNode.parentNode.childNodes[3].className += "completed";
        } else {
          e.target.parentNode.parentNode.childNodes[3].className = classes;
        }
      }
    });
  });
};

const updateTodo = async (id, status) => {
  const res = await fetch(
    `http://localhost:3000/v1/complete/${id}/${status}`
  ).then((res) => res.json());

  return res;
};

const updateTodos = () => {
  fetch("http://localhost:3000/v1/getall")
    .then((res) => res.json())
    .then((data) => {
      if (data.response === "success") {
        const todos = data.data;
        document.querySelector("#todos").innerHTML = "";

        todos.forEach((todo) => {
          document.querySelector("#todos").innerHTML += `
          <div class="todo" id ="${todo._id}"> 
          
          <div class="checkbox-container">
            <input type="checkbox" class="complete-checkbox" name="" id="" ${
              todo.completed === true ? "checked" : ""
            }></div>
            <div  class="text-container ${
              todo.completed === true ? "completed" : ""
            }">
            ${todo.text}
            </div>
            <div> 
            <a href="/v1/delete/${todo._id}">X</a>
            </div>
          </div>`;
        });
        mapCheckboxes();
      }
    })
    .catch((err) => {
      console.err(err);
    });
};

document.querySelector("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const text = document.querySelector("#text").value;
  if (text == "") return false;

  fetch("http://localhost:3000/v1/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.response === "success") {
        updateTodos();
        document.querySelector("#text").value = "";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
