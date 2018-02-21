import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Rotate from './components/Rotate';
import { Card, SpinCard } from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List
          url="https://api.github.com/users/jonhni/repos"
          render={({ list, isLoading }) => (
            <div>
              <h1 style={{ color: 'papayawhip' }}>
                O store fagsjef sin hellige kode{' '}
              </h1>
              {isLoading && <h2>Loading...</h2>}
              <Rotate>
                <img src="https://avatars2.githubusercontent.com/u/430645?s=400&v=4" />
              </Rotate>
              <Card>
                <ul>
                  {list.map(repo => (
                    <li key={repo.id}>
                      <a href={`${repo.svn_url}`}>{repo.full_name}</a>
                      <p>{repo.stargazers_count} ⭐</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        />
        <hr />
        <h1 style={{ background: '#f0f0f0' }}>Her skjer det andre ting</h1>
        <List
          url="https://api.entur.org/api/geocoder/1.1/autocomplete?text=Char&categories=NO_FILTER&focus.point.lat=59.91&focus.point.lon=10.76&lang=en"
          render={({ list, isLoading }) => (
            <div>
              {Object.values(list).length > 0 &&
                list.features.map(({ properties }) => {
                  return (
                    <div key={properties.id}>
                      <SpinCard>
                        <p>{`Gate: ${properties.street} som ligger i ${
                          properties.county
                        } `}</p>
                      </SpinCard>
                    </div>
                  );
                })}
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
