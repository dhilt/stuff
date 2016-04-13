import React from 'react';
import Tags from './Tags';

class App extends React.Component {
  render() {
    return <div className="app">
      {<Tags allTags={this.props.tags}/>}
    </div>;
  }
}

export default App;