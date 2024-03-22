/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask } from "../../redux/operations";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        // checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteTask(task.id));
        }}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
