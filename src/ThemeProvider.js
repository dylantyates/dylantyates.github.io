import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext('dark');

const ThemeProvider = ({ children }) => {
  const [theme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ])
};

ThemeProvider.defaultProps = {
  theme: 'dark',
  children: null,
}

export { ThemeContext, ThemeProvider };
