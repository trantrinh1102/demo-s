import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import withRipple from './withRipple';

const TabContent = styled.div`
  flex: 1;
  width: 100%;
`;

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabButton = styled.button`
  flex: 1;
  height: 50px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  /* cursor: default; */
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease-in;
  border: none;
  border-bottom: 4px solid ${props => props.selected ? '#6D6D6D' : '#D8D8D8'};

  &:hover, &:focus, &:active {
    border-bottom: 1px solid ${props => props.selected ? '#6D6D6D' : '#D8D8D8'};
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TabPanel = ({ children }) => (
  <TabContent role='tabpanel' tabindex='0'>{children}</TabContent>
);

TabPanel.propTypes = {
  children: PropTypes.any.isRequired,
};

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
`;

class Tabs extends Component {
  static Panel = TabPanel;

  static propTypes = {
    children: PropTypes.any.isRequired,
    tabBreak: PropTypes.string,
  };

  static defaultProps = {
    // tabBreak: '768px',
  };

  state = {
    selectedTab: 0,
  };

  selectTab = (tabIndex) => {
    this.setState({ selectedTab: tabIndex });
  };

  render() {
    const { children } = this.props;
    const { selectedTab } = this.state;

    return (
      <TabsWrapper>
        <TabList role='tablist'>
          {React.Children.map(children, ({ props: { label } }, index) =>
            <TabButton
              role='tab'
              selected={selectedTab === index}
              aria-selected={selectedTab === index ? 'true' : 'false'}
              onClick={() => this.selectTab(index)}
            >
              {label}
            </TabButton>
          )}
        </TabList>

        <Content>
          {React.Children.map(children, (comp, index) =>
            selectedTab === index ? comp : undefined
          )}
        </Content>
      </TabsWrapper>
    );
  }
}

export default Tabs;
