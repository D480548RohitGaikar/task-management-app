/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import moment from "moment";
import "./task.css";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../Axios/axios.js";
import TokenContext from "../../context/TokenContext";

function Task({ task, id }) {
  const { dispatch } = useContext(TaskContext);
  const { userToken } = useContext(TokenContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedTask, setEditedTask] = useState(task);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_TASK",
      id,
    });
  };

  const handleMarkDone = (e) => {
    dispatch({
      type: "MARK_DONE",
      id,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const editTask = async (updatedTask) => {
    try {
      const res = await axios.put(
        `/task/editTask/${updatedTask.id}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      dispatch({ type: "EDIT_TASK", id: updatedTask.id, ...updatedTask });
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      await editTask({
        id: task.id,
        title: editedTitle,
        description: editedDescription,
        completed: task.completed,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return (
    <div className="bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3">
      <div className="mark-done">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleMarkDone}
          checked={task.completed}
        />
      </div>
      <div className="task-info text-slate-900 text-sm w-10/12">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              required
              onChange={(e) => setEditedTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              value={editedDescription}
              required
              onChange={(e) => setEditedDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </>
        ) : (
          <>
            <h4 className="task-title text-lg capitalize">{task.title}</h4>
            <p className="task-description">{task.description}</p>
          </>
        )}
        <div className=" italic opacity-60">
          {task?.createdAt ? (
            <p>{moment(task.createdAt).fromNow()}</p>
          ) : (
            <p>just now</p>
          )}
        </div>
      </div>
      <div className="actions">
        {isEditing ? (
          <button
            style={{ fontSize: 15, cursor: "pointer" }}
            onClick={handleSaveEdit}
            className="remove-task-btn bg-blue-700 rounded-full border-2 shadow-2xl border-white p-1"
          >
            Save
          </button>
        ) : (
          <EditIcon
            style={{ fontSize: 30, cursor: "pointer" }}
            size="large"
            onClick={handleEdit}
            className="remove-task-btn bg-blue-700 rounded-full border-2 shadow-2xl border-white p-1"
          />
        )}
        <DeleteIcon
          style={{ fontSize: 30, cursor: "pointer" }}
          size="large"
          onClick={handleRemove}
          className="remove-task-btn bg-blue-700 rounded-full border-2 shadow-2xl border-white p-1"
        />
      </div>
    </div>
  );
}

export default Task;
