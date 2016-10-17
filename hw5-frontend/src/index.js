import Landing from './components/Landing'
import Main from './components/Main'

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <Landing />
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
