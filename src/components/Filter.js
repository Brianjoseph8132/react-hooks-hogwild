import React from 'react';
// the hogs will be greased 
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