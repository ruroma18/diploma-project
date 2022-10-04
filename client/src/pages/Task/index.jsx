import Header from "components/Header";
import InteractiveTask from "components/InteractiveTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Task = () => {
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <InteractiveTask />
      </DndProvider>
    </>
  );
};

export default Task;
