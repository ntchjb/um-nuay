"use client";

import React, { useState } from "react";

type todo = {
  name: string;
};

const Page = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleAddTodo = () => {
    if (inputTodo) {
      const newTodos = [...todos];
      newTodos.push({ name: inputTodo });
      setTodos(newTodos);
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>Todos</div>
      <div>
        <input
          className="bg-black"
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className="flex gap-4">
            <div>{todo.name}</div>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
