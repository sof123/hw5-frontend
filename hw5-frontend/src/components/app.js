import {setLocation, getLocation} from '../location'

export const App = ({location}) =>
{
  if (location === "Main.js")
  {
    return (
      <div>
        <Main />
      </div>
    );
  }
  else if (location === "Landing.js")
  {
    return (
      <div>
        <Landing />
      </div>
    );
  }
  else if (location === "Profile.js")
  {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}
