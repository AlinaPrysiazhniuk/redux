import { statusFilters } from "./constants";
import { combineReducers } from "redux";

const taskInitialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

const tasksReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case "task/addTask": {
      return [...state, action.payload];
    }
    case "tasks/deleteTask":
      return state.tasks.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filterInitialState = { status: statusFilters.all };

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});
