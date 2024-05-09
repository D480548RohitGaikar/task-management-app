function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          title: action.title,
          description: action.description,
          completed: false,
        },
      ];
    }
    case "SET_TASKS": {
      return action.payload;
    }
    case "SET_TASK": {
      return tasks.find((task) => task.id === action.payload);
    }
    case "EDIT_TASK": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            title: action.title,
            description: action.description,
            completed: action.completed,
          };
        }
        return task;
      });
    }
    case "REMOVE_TASK": {
      return tasks.filter((task, index) => index !== action.id);
    }
    case "MARK_DONE": {
      return tasks.map((task, index) => {
        if (index === action.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    }
    default: {
      throw Error("Unknown Action" + action.type);
    }
  }
}

export default taskReducer;
