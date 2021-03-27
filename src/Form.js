import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';


  
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Form = ({ onSubmit }) => {
    const classes = useStyles();
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <div className={classes.root}>
          <button
              variant="outlined"
              className="form-control btn btn-primary buttonColor"
              onClick={onSubmit}
          >
              Submit
          </button>
        </div>

      </div>
    </form>
  );
};
export default Form;