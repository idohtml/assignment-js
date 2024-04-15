// TASK MANAGER

// Global variable
let userName;

// taskManager object
const taskManager = {
  // fill up with properties, see instructions
  tasks: [],

  // Adds a task to the tasks array
  addTask: function (id, task, status) {
    const newTask = { id: id, task: task, status: status };
    this.tasks.push(newTask);
  },

  // Completes a specific task based on ID
  isComplete: function (id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index].status = true;
    }
  },

  // Lists all tasks available
  listAllTasks: function () {
    this.tasks.forEach((index) => console.log(index.task));
  },

  // Lists all completed tasks
  listCompletedTasks: function () {
    this.tasks.forEach((index) => {
      if (index.status === true) {
        console.log(`"${index.task}" is now complete`);
      } else {
        console.log("You have not completed any tasks yet..");
      }
    });
  },
};

// function for asking the user to fill in their name
function askUserName() {
  // add logic here to as the user to enter their name
  // do-while will prompt the user untill they have entered a valid username
  do {
    userName = prompt("Please enter your username");
    /* 
    While the field is empty, 
    not a number and has a length that isn't less than 3. 
    We are good to go. 
    */
  } while (!userName || !isNaN(userName) || userName.length < 3);

  console.log(`Username set to: ${userName}`);

  menu();
}

// menu function
function menu() {
  let id;

  const choice = parseInt(
    prompt(
      `Welcome to the task manager ${userName}!. Please select an option:\n
      1. Add task\n
      2. Add complete\n
      3. List all tasks\n
      4. List all completed tasks\n
      5. Exit
      `
    ),
    10
  );

  switch (choice) {
    case 1:
      // Add a new task
      let task = prompt("Enter a task:");
      id = taskManager.tasks.length;

      taskManager.addTask(id, task, false);
      console.log("New task added successfully");
      break;

    // Marks a specific task as complete
    case 2:
      id = parseInt(
        prompt("Enter the ID of the task you want to mark as completed:"),
        10
      );
      taskManager.isComplete(id);
      break;

    // Lists all tasks available
    case 3:
      taskManager.listAllTasks();
      break;

    // Lists all completed tasks
    case 4:
      taskManager.listCompletedTasks();
      break;

    // Exits the task manager
    case 5:
      console.log("Exiting task manager");
      return;

    default:
      console.log("Invalid option, please try again.");
      break;
  }

  menu();
}

// starts with the function asUserName() which triggers the menu() function
askUserName();
