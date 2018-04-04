import React from 'react';
import ReactDOM from 'react-dom';
import Comp from 'Components/Component';

const Index = () => {
  // make it a string
  const ts = `${new Date().getTime()}`;

  return (
    <React.Fragment>
      <h1>Hello React!</h1>
      <Comp value={ts} />
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
