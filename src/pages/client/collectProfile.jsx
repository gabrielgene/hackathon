import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
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


const CollectProfile = ({ classes, history, match }) => (
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
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            {markets.filter(value =>
              value.id.toString() === match.params.name)[0].end
            }
          </Typography>
          <div className={classes.root}>
            <List>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Papel" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <WorkIcon />
                </Avatar>
                <ListItemText primary="Plástico" />
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default withStyles(styles)(withRouter(CollectProfile));
