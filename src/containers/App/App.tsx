import * as React from 'react';
import * as classes from './App.scss';

interface IProps {
  title: number
}

interface IState {
  counter: number
}

class App extends React.Component<IProps, IState> {
  public state = {
    counter: 0
  };
  public render() {
    const {title} = this.props;
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <h1 className={classes.AppTitle}>Welcome to {title}</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
