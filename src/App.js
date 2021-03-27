import React from 'react';
import Button from '@material-ui/core/Button'
import Demo from './Demo'
import LandingPage from './LandingPage'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'landing'
    }
  }

  goToDemo() {
    this.setState({ page: 'demo' })
  }

  render() {
    const content = this.state.page === 'demo' ? <Demo /> : <LandingPage goToDemo={() => this.goToDemo()} />

    return (
      <div>
        <Button variant="contained" onClick={() => this.setState({ page: 'landing' })}>Home</Button>
        <Button variant="contained" onClick={() => this.goToDemo()}>Demo</Button>
        {content}
      </div>
    )
  }
}



export default App;
