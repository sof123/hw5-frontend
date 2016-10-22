import Landing from './components/Landing'
import Main from './components/Main'
import Profile from './components/Profile'

var location = "Landing.js"


class App extends React.Component
{
  render()
  {
    if (location == "Landing.js")
    {
      return (
        <div>
          <Landing />
        </div>
      )
    }
    else if (location == "Main.js")
    {
      return (
        <div>
          <Main />
        </div>
      )
    }
    else
    {
      return (
        <div>
          <Profile />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
