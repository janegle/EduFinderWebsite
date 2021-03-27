// Modal code is referenced from https://material-ui.com/components/modal/
import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Form from './Form';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function LandingPage(props) {
    const { goToDemo } = props
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnackbarOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
        setSnackbarOpen(true);
    };

    return (
        <div className="container">
            <div className="row mt-5 mb-5 topContainer text-center demo-wrap">
                <div className="demo-content">
                    <h2 className="mt-4" style={{color: 'white'}}> EduFinder uses data analytics tools to help students find relevant job opportunities and scholarships </h2>
                    <h3 className="mt-4 mb-4" style={{fontWeight: 'normal', color: 'white'}}> Ready to try our solution? </h3>
                    <p className="mt-3 pb-3">
                        <a className="btn btn-primary buttonColor" onClick={goToDemo}>TRY EDUFINDER FOR FREE</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <h3 className="text-center" style={{fontWeight: 'normal'}}> Change the way you think about Higher Ed data </h3>
                <div className="col-6 mt-3">
                    <p className="bigFontSize"> Higher Ed Focus </p>
                    <p className="smallFontSize">A search engine focused exclusively on higher ed.</p>
                </div>
                <div className = "col-6 mt-3">
                    <p className="bigFontSize"> Save Time </p>
                    <p className="smallFontSize">Save many hours of manual research. Try our automated, easily scalable tools instead.</p>
                </div>
                <div className="col-6 mt-3">
                    <p className="bigFontSize"> Ease of Use </p>
                    <p className="smallFontSize">Specify your search criteria and let us build a customized solution for you.</p>
                </div>
                <div className="col-6 mt-3">
                    <p className="bigFontSize"> High Relevance </p>
                    <p className="smallFontSize">Our results include highly relevant information that you won't easily find elsewhere.</p>
                </div>
            </div>
            <div className="row mt-5 mb-5 text-center topContainer">
                <h3 className="mt-4"> Learn more about EduFinder </h3>
                <p className="mt-3 smallFontSize"> When it comes to elevating Higher Ed with the power of data, EduFinder 
                creates a robust, scalable solution to let your organization answer the most important questions such as
                how to find great job opportunities for my students or how to raise funds for a new initiative benefiting
                my students. </p>
                <div>
                    <p className="mt-3 pb-3">
                        <a className="btn btn-primary buttonColor" onClick={handleOpen}>CONTACT US</a>
                    </p>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <div className={classes.paper}>
                            <Form onSubmit={onSubmit} />
                        </div>
                        </Fade>
                    </Modal>

                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                    >
                        <Alert onClose={handleSnackbarClose} severity="success">
                        We'll be in touch shortly!
                        </Alert>
                    </Snackbar>


                </div>
            </div>
        </div>
    );
}

export default LandingPage;
