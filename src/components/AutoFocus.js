import React, { useEffect, useRef } from 'react';

const AutoFocus = ({ onType, onEnter, word }) => {
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
    if (inputEl.current.value.length < 5) return;
    console.log(inputEl.current.value);
    for (let i = 0; i < inputEl.current.value.length; i++) {
      if (word[i] == inputEl.current.value[i]) {
        console.log('green');
        continue;
      }
      console.log('not here');
    }
    // for (let i = 0; i < inputEl.current.value.length; i++) {
    //   if (word.includes(inputEl.current.value[i])) {
    //     console.log('yellow');
    //   }
    // }
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
