import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divDetail: {
    flexGrow: '1',
  },  
  titulo: {
    marginLeft: '100px',
  },
  gridHorizontal: {
    margin: 'auto',
    maxWidth: '85%',    
  },  
  divImageCharacter: {
  },
  imageCharacter: {
    height: '77vh',
    width: '100%'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonSave: {
    margin: '3px',
  },
  divGridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'theme.palette.background.paper',    
  },
  gridList: {
    height: '77vh',
    transform: 'translateZ(0)',
  },
  iconSerie: {
    color: 'white',
  },
}))


export default useStyles;