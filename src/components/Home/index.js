import {Component} from 'react'
import Dropdown from 'react-drop-down'
import {ButtonContainer} from './styledComponents'
import './index.css'

class Header extends Component {
  state = {
    firstButtonClick: false,
    secondButtonClick: false,
    thirdButtonClick: false,
  }

  onFirstButtonClick = () => {
    this.setState(prevState => ({
      firstButtonClick: !prevState.firstButtonClick,
    }))
  }

  onSecondButtonClick = () => {
    this.setState(prevState => ({
      secondButtonClick: !prevState.secondButtonClick,
    }))
  }

  onThirdButtonClick = () => {
    this.setState(prevState => ({
      thirdButtonClick: !prevState.thirdButtonClick,
    }))
  }

  render() {
    const {firstButtonClick, secondButtonClick, thirdButtonClick} = this.state

    return (
      <div className="home-container">
        <div className="header-container">
          <p className="header-item">Home</p>
          <ButtonContainer firstButtonClick={firstButtonClick}>
            <button
              className="dropdown-button"
              type="button"
              onClick={this.onFirstButtonClick}
            >
              Dropdown
            </button>
            <div className="dropdown-container">
              {firstButtonClick && (
                <Dropdown
                  onChange={this.handleChange}
                  options={['Option 1', 'Option 2', 'Option 3']}
                />
              )}
            </div>
          </ButtonContainer>
          <p className="header-item-2">Logout</p>
        </div>
        <div>
          <div className="input-container">
            <input type="search" className="input" placeholder="Search" />
          </div>
          <div className="filters">
            <ButtonContainer secondButtonClick={secondButtonClick}>
              <button
                className="dropdown-button"
                type="button"
                onClick={this.onSecondButtonClick}
              >
                Dropdown
              </button>
              <div className="dropdown-container">
                {secondButtonClick && (
                  <Dropdown
                    onChange={this.handleChange}
                    options={['Option 1', 'Option 2', 'Option 3']}
                  />
                )}
              </div>
            </ButtonContainer>
            <p>Filter 1</p>
            <p>Filter 2</p>
            <p>Filter 3</p>
            <ButtonContainer thirdButtonClick={thirdButtonClick}>
              <button
                className="dropdown-button"
                type="button"
                onClick={this.onThirdButtonClick}
              >
                Dropdown
              </button>
              <div className="dropdown-container">
                {thirdButtonClick && (
                  <Dropdown
                    onChange={this.handleChange}
                    options={['Option 1', 'Option 2', 'Option 3']}
                  />
                )}
              </div>
            </ButtonContainer>
          </div>
          <div className="box">{}</div>
          <div className="box">{}</div>
          <div className="box">{}</div>
        </div>
      </div>
    )
  }
}

export default Header
