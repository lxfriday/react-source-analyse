import React, { PureComponent, Component, createElement } from 'react';

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'lxfriday',
        age: 24,
      },
      school: 'hzzz',
    };
  }

  handleChangeUserInfo = () => {
    const {
      userInfo,
    } = this.state;
    userInfo.sex = 'male';

    console.log('userInfo', userInfo);
    this.setState({ userInfo: userInfo });
  };

  handleChangeSchool = () => {
    this.setState({ school: 'zzzh' });
  };

  render() {
    const {
      userInfo,
      school,
    } = this.state;
    return (
      <div>
        <button onClick={this.handleChangeUserInfo}>change userInfo</button>
        <button onClick={this.handleChangeSchool}>change school</button>
        <br />
        {JSON.stringify(userInfo)}
        <br />
        {school}
      </div>
    );
  }
}

console.log(<PureComp />);

export default PureComp;
