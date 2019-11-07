import React, {Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
      super()
    this.state = {
      parameterState: "name"
    }
  }

  sortByParameter(parameter) {
    // set state of 'parameterState' here
  }
  onChange = (type) =>{
      this.setState({
          parameterState: type
      });
  }

  render() {
      const {parameterState} = this.state;
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio onChange={this.onChange} option={parameterState} />
        <Table parameterState={parameterState}/>
      </div>
);


  }
}

export default App;
