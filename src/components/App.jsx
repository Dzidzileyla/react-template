import React from 'react';
import PropTypes from 'prop-types';

import '../style/App.scss';

const App = ({ label }) => {
  return <div className="app">{label}</div>;
};

App.propTypes = {
  label: PropTypes.string,
};

App.defaultProps = {
  label: 'Hello World!',
};

export default App;
