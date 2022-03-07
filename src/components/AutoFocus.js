import React, { useEffect, useRef } from 'react';

const AutoFocus = ({ onType, onEnter, playerInput }) => {
  const handleKeyDown = (e) => {
    const { value } = inputEl.current;
    onType(value.toUpperCase());
  };

  const inputEl = useRef(null);
  useEffect(() => {
    const focus = (e) => inputEl.current && inputEl.current.focus();
    document.addEventListener('keydown', focus);
    return () => {
      document.removeEventListener('keydown', focus);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputEl.current.value = '';
    onEnter();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputEl}
        className={playerInput}
        onInput={handleKeyDown}
        type="text"
        maxLength="5"
      />
    </form>
  );
};

export default AutoFocus;
