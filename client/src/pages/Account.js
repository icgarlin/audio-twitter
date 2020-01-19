import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Autoplay from '../components/Autoplay/Autoplay';
import WhoToFollow from '../components/WhoToFollow/WhoToFollow';
import Messages from '../components/Messages/Messages';

import withAuthorization from '../session/withAuthorization';

const useStyles = makeStyles(theme => ({
  card: { width: '100%' },
  media: {
    height: 170,
  },
  large: {
    width: 150,
    height: 150,
    border: '3px solid #ffffff',
    bottom: 0,
    position: 'relative',
    left: 12,
    top: 70,
    alignItems: 'center',
  },
  content: {
    paddingTop: 20,
  },
  username: {
    fontWeight: 'bold',
  },
  numbers: {
    textAlign: 'center',
  },
  numbersSection: {
    paddingTop: 10,
  },
  editProfile: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  input: {
    display: 'none',
  },
  fileNames: {
    display: 'inline-block',
    marginLeft: theme.spacing(2),
  },
}));

const AccountPage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleInput = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'bio') setBio(value);
  };

  const handleAvatar = event => {
    setAvatar(event.target.files[0]);
  };
  const handleCover = event => {
    setCover(event.target.files[0]);
    console.log(event.target.files);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      direction="row-reverse"
    >
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={classes.item}
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Autoplay />
        </Grid>
        <Grid item>
          <WhoToFollow />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        spacing={2}
        md={8}
        sm={6}
        xs={12}
        className={classes.item}
      >
        <Grid item>
          <Card className={classes.card} elevation={0} square>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1470549638415-0a0755be0619"
              title="Contemplative Reptile"
            >
              <Avatar
                src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                className={classes.large}
              />
            </CardMedia>
            <CardContent className={classes.content}>
              <div className={classes.editProfile}>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={handleOpen}
                >
                  Edit profile
                </Button>
              </div>
              <Typography
                className={classes.username}
                variant="h6"
                component="p"
              >
                Username
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                @screen_name
              </Typography>
              <Typography variant="body1" component="p">
                Real knowledge is to know the extent of one's
                ignorance. - Confucius.
              </Typography>

              <Grid
                container
                className={classes.numbersSection}
                justify="space-between"
              >
                <Grid item className={classes.numbers}>
                  <Typography
                    variant="h5"
                    color="primary"
                    component="h5"
                  >
                    23
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Messages
                  </Typography>
                </Grid>
                <Grid item className={classes.numbers}>
                  <Typography
                    variant="h5"
                    color="primary"
                    component="h5"
                  >
                    23
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Followers
                  </Typography>
                </Grid>
                <Grid item className={classes.numbers}>
                  <Typography
                    variant="h5"
                    color="primary"
                    component="h5"
                  >
                    23
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Following
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Messages limit={2} />
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Edit profile
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file1"
                  type="file"
                  onChange={handleAvatar}
                />
                <label htmlFor="contained-button-file1">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                  >
                    Upload Avatar
                  </Button>
                </label>
                <Typography className={classes.fileNames}>
                  {avatar && avatar.name}
                </Typography>
              </Grid>
              <Grid item>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file2"
                  type="file"
                  onChange={handleCover}
                />
                <label htmlFor="contained-button-file2">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                  >
                    Upload Cover
                  </Button>
                </label>
                <Typography className={classes.fileNames}>
                  {cover && cover.name}
                </Typography>
              </Grid>
            </Grid>
            <TextField
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleInput}
            />
            <TextField
              label="Bio"
              type="text"
              name="bio"
              value={bio}
              onChange={handleInput}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default withAuthorization(session => session && session.me)(
  AccountPage,
);
