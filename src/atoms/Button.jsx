import { useStyles } from '../StylesContext';

const Button = () => {
  const { styles, dispatch } = useStyles();

  const toggleMode = () => {
    dispatch({ type: 'TOGGLE_MODE' });
  };

  return (
    <button onClick={toggleMode}>
      {styles.darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Button;

