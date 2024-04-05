// TASK MANAGER

// taskManager object
const taskManager = {
  // fill up with properties, see instructions
  tasks: [],
  // isComplete: Boolean,

  addTask: function (id, task, status) {
    const newTask = { id: id, task: task, status: status };
    this.tasks.push(newTask);
  },

  isComplete: function (id, status) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index].status = status;

      if (status === true) {
        this.tasks.splice(index, 1);
      }
    }
  },
};

// Adding new tasks to the taskManager object
taskManager.addTask(1, "Hello, World", false);
taskManager.addTask(2, "Eat Kebab", false);
taskManager.addTask(3, "delete me", false);

// Logging all tasks to the console
console.log(taskManager.tasks);

taskManager.isComplete(3, true);

// Logging all tasks after removing a task
console.log(taskManager.tasks);

// function for asking the user to fill in their name
function askUserName() {
  // add logic here to as the user to enter their name
  alert(
    "This is the alert() function which dispays some text for the user.\n" +
      "Unlike the prompt(), the alert() does not take any input.\nUse it only to display messages for the user.",
  );
  menu();
}

// menu function
function menu() {
  const choice = parseInt(
    prompt(
      "Hello, this is a the prompt function that displays an input and some text.\n" +
        "We use parseInt() to make sure that we can take an int as a input from the user.\n" +
        "By default the prompt() function takes all input as strings.",
    ),
  );
  // add some more3 logic here
  // choose between if/else or switch
}

// starts with the function asUserName() which triggers the menu() function
askUserName();
