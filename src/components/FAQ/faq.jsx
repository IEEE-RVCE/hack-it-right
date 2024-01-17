import React from 'react';
import './faq.css';
import ReactDOM from 'react-dom';

// here
class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      mainHeight: 0
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector('.panel__inner').scrollHeight;
      const mainHeight = el.querySelector('.panel__label').scrollHeight;
      console.log('Height:', height);
      console.log('MainHeight:', mainHeight);
      this.setState({
        height: height,
        mainHeight: mainHeight
      });
    }, 400);
  }

  render() {
    console.log('Render State:', this.state);
    const {label, content, activeTab, index, activateTab} = this.props;
    const {height, mainHeight} = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`
    };
    const outerStyle = {
      height: `${
        !isActive ? (mainHeight > 54 ? mainHeight + 60 : mainHeight) : 0
      }px`
    };

    return (
      <div className="panel" role="tabpanel" aria-expanded={isActive}>
        <button
          className="panel__label"
          style={outerStyle}
          role="tab"
          onClick={activateTab}
        >
          <p
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '80%'
            }}
          >
            {label}
          </p>
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{content}</p>
        </div>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 100
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }

  render() {
    const {panels} = this.props;
    const {activeTab} = this.state;
    return (
      <div className="accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </div>
    );
  }
}

export {Accordion};
