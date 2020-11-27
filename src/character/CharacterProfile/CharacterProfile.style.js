import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  detail: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: '1200px',
    // width: '100vh',
  },
  titulo: {
    display: 'flex',
    flexDirection: 'rown',
    alignItems: 'center',
    // fontSize: '40px',
    // padding: '20px',
    fontWeight: 'bold',
    color: '#202020'
  },
  h1: {
    marginRight: '5px',
  },
  // edit:hover {

  // },
  horizontal: {
    display: 'flex',
    flexDirection: '',
    margin: 'auto',
    maxWidth: '1200px',
    height: '90vh'
  },
  image: {
    display: 'flex',
    flexDirection: 'rown',
    height: '120vh',
    width: 'auto',
  },
  gridForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }, 
  descriptionContent: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  seriesList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '120vh',
    transform: 'translateZ(0)',
    margin: 'auto',
    // maxWidth: '1200px'
  },
  iconSerie: {
    color: 'white'
  },
  gridButtons: {
    display: 'flex',
    flexDirection: 'rown',
    justifyContent: 'flex-end'
  },
  buttonSave: {
    marginRight: '5px'
  }
});

export default useStyles;