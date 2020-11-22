import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  characterInfo: {
    background: '#202020',
    marginTop: '-20px',
    height: '91vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'rown',
    justifyContent: 'center'
  },
  divImagem: {
    height: '91vh',
    width: '100vh',
  },
  descriptionContent: {
    background: '#fff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    //marginRight: '20px',
    //marginLeft: '20px'

  },
  abaProfile: {
    width: '100%',
    background: '#ff0000',
    color: '#ff0000'
  },
  titulo: {
    fontSize: '40px',
    padding: '20px',
    fontWeight: 'bold',
  },
});

export default useStyles;