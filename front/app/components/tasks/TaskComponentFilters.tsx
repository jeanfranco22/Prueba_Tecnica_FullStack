interface TaskComponentFilterProps {
  status: string;
  setStatus: (status: string) => void;
}

const TaskComponentFilter = ({
  status,
  setStatus,
}: TaskComponentFilterProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setStatus("")}
        className={`border px-3 py-2 rounded ${
          status === "" ? "bg-blue-600 text-white" : ""
        }`}
      >
        All
      </button>

      <button
        onClick={() => setStatus("pending")}
        className={`border px-3 py-2 rounded ${
          status === "pending" ? "bg-blue-600 text-white" : ""
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setStatus("done")}
        className={`border px-3 py-2 rounded ${
          status === "done" ? "bg-blue-600 text-white" : ""
        }`}
      >
        Done
      </button>
    </div>
  );
};

export default TaskComponentFilter;
