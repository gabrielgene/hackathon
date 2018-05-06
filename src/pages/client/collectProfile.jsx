import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import { withRouter } from 'react-router';
import { markets } from '../../utils/markets';

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: '90%',
  },
  cardWrapper: {
    marginTop: 68,
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


class CollectProfile extends React.Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes, history, match } = this.props;
    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton color="inherit" aria-label="Back" onClick={() => history.goBack()}>
              <Icon>navigate_before</Icon>
            </IconButton>
            <Typography variant="title" color="inherit">
              {markets.filter(value =>
                value.id.toString() === match.params.name)[0].name
              }
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.cardWrapper}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://media-cdn.tripadvisor.com/media/photo-s/0c/9e/02/00/mercadinho.jpg"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                {markets.filter(value =>
                  value.id.toString() === match.params.name)[0].end
                }
              </Typography>
              <Typography component="p">
                Recebemos residuos: Vidro, Papel, Plástico
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={this.handleClick}>
                Gerar e- vouncher
              </Button>
            </CardActions>
          </Card>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={1500}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Seu e-vouncher é SD5I9</span>}
          action={[
            <Button key="1" color="secondary" size="small" onClick={this.handleClose}>
              Copiar
            </Button>
          ]}
        />
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(CollectProfile));
