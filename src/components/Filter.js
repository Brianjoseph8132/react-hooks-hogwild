import React from 'react';
// to filter the greased hogs 
const Filter = ({ setShowGreased }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setShowGreased(e.target.checked)}
        />
        Show Greased Hogs
      </label>
    </div>
  );
};

export default Filter;