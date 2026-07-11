import React from 'react'

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://ph-files.imgix.net/29a11823-9dc5-4cd1-b31e-d8e964c16db7.png?auto=format&fit=crop&frame=1&h=512&w=1024"
        alt="blogify"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;