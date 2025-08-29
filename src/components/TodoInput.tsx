// src/components/TodoInput.tsx

import React from 'react';

interface TodoInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onAddTask: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ inputValue, onInputChange, onAddTask }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onAddTask();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
};

export default TodoInput;
