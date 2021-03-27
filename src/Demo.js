import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Truncate from 'react-truncate';
import { Container } from '@material-ui/core';
import './styles.css';
import jobs from './job.json';
import scholarships from './scholarship.json'

function DisplayCard({ item }) {
    const [expanded, setExpanded] = React.useState(false)
    const isJob = !!item.titles;

    const header = isJob ? item.organization : item.url.slice(0, 80);

    let moneyStr = '';
    if (item.money && item.money.length > 3) {
      moneyStr = `${item.money.slice(0, 3).join(', ')} ...`
    } else {
      moneyStr = `${item.money ? item.money.join(', ') : ''}`
    }
  
    moneyStr = `Money: ${moneyStr}`;
  
    const subheader1 = isJob
      ? `Titles: ${item.titles ? item.titles.join(', ') : ''}`
      : moneyStr
  
    const subheader2 = `Functions: ${item.functions ? item.functions.join(', ') : ''}`;

    return (
      <Card variant="elevation" raised>
        <CardHeader
          title={
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{color:"#ff6c02"}}>
              {header}
            </a>
          }
          subheader={`Retrieved ${item.time} CST (UID: ${item.uid})`}
        />
        <CardContent>
          <Typography variant="subtitle1" style={{ fontStyle: 'italic', fontWeight: 700 }}>
            {subheader1}
          </Typography>
          {isJob ? 
            <Typography variant="subtitle1" style={{ fontStyle: 'italic', fontWeight: 700 }}>{subheader2}</Typography>
            : null}
          
          <br />
          <Truncate lines={expanded ? 0 : 12} style={{ fontFamily: 'sans-serif'}} width={750}>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          </Truncate>
          <Button onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</Button>
        </CardContent>
      </Card>
    );
}

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: "none" }
    }

    handleJobButtonClicked = (e) => {
      e.preventDefault()
      this.setState({ content: "job" })
    }

    handleScholarshipButtonClicked = (e) => {
      e.preventDefault()
      this.setState({ content: "scholarship" })
    }


    render () {
        let cards = null
        if (this.state.content === 'job') {
          cards =  jobs.map((item) => <DisplayCard item={item} />)
        }

        if (this.state.content === 'scholarship') {
          cards =  scholarships.map((item) => <DisplayCard item={item} />)
        }

        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h1>Sample Search</h1>
                <button onClick={this.handleJobButtonClicked} className="btn btn-primary mb-2 me-5 buttonColor">Job Query Sample</button>
                <button onClick={this.handleScholarshipButtonClicked} className="btn btn-primary mb-2 buttonColor">Scholarship Query Sample</button>
                <hr></hr>
              </div>
            </div>
    
            <Container>
              {cards}
            </Container>
    
          </div>
        )
    }
}

export default Demo;