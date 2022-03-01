import React, { useEffect, useRef } from 'react';

const AutoFocus = ({ onType, onEnter }) => {
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
        class="invisible"
        onInput={handleKeyDown}
        type="text"
        maxlength="5"
      />
    </form>
  );
};

export default AutoFocus;
