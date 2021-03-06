import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const nums = [
  { text: 9 },
  { text: 8 },
  { text: 7 },
  { text: 6 },
  { text: 5 },
  { text: 4 },
  { text: 3 },
  { text: 2 },
  { text: 1 }
];

const symbs = [
  { text: '÷' },
  { text: 'x' },
  { text: '-' },
  { text: '+' },
  { text: '=' }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `${0}`,
      inputChange: false
    };
  }

  clearDisplay = () => {
    console.log('hello from cd');
    this.setState({
      input: `${0}`
    });
  };

  handleClick = e => {
    const value = e.target.getAttribute('datavalue');

    this.setState(prevState => ({
      input: `${prevState.input + value}`
    }));
  };

  render() {
    return (
      <div className='calc'>
        <CalculatorDisplay input={this.state.input} />
        <ActionButton
          text='clear'
          actionStyle='action thin'
          handleClick={this.clearDisplay}
        />
        <div className='numbers-container'>
          {nums.map((num, i) => (
            <NumberButton
              datavalue={'datavalue'}
              text={num.text}
              key={i}
              buttonStyle={'numbers'}
              handleClick={e => this.handleClick(e)}
              name={num.text}
            />
          ))}
        </div>

        <div className='symbol-container'>
          {symbs.map((symb, i) => (
            <NumberButton
              text={symb.text}
              key={i}
              buttonStyle={'symbols'}
              datavalue={'datavalue'}
              handleClick={e => this.handleClick(e)}
            />
          ))}
        </div>
        <ActionButton
          text='0'
          actionStyle='action bold'
          handleClick={e => this.handleClick(e)}
          name={0}
          value={this.state.input}
          datavalue={'datavalue'}
        />
      </div>
    );
  }
}

export default App;
