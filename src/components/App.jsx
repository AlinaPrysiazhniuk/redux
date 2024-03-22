import { Layout } from "./Layout/Layout";
// import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/operations";
import Loader from "./Loader/Loader";
import { getError } from "../redux/selectors";
import Error from "./Error/Error";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      {/* <AppBar /> */}
      {loading && <Loader>Loading message...</Loader>}
      {error && <Error>Error message</Error>}
      <TaskForm />
      <TaskList />
    </Layout>
  );
}
