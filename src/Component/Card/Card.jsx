import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Login from 'Component/Login/Login.js'
import Password from 'Component/Password/Password.js'
import Button from 'Component/Button/Button.js'
import axios from 'axios'
import 'css/cardLoginPassword.css';
import 'css/signIn.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class MediaCard extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  submitButton = async () => {

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://localhost:8000/login', user).then(res => {
      console.log('axios return value ', res)
    })

    console.log('in the submitButton ')
  }

  render() {
    return (
      <Card>
        <CardContent className="cardLoginPassword" >
          <h1 className="signIn">Sign In</h1>
          <Login value={this.state.username} onChange={this.handleUsernameChange} />
          <Password value={this.state.password} onChange={this.handlePasswordChange} />
          <Button onClick={this.submitButton} />
        </CardContent>
      </Card>
    )
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);