import React from 'react';
import Tabs from './Tabs';
import Member from 'components/tabsStyled/member'
const TabsExample = () => (
  <Tabs>
    <Tabs.Panel label='Tab label 1'>
      <h4>Tab content 1</h4>
      <Member />
    </Tabs.Panel>
    <Tabs.Panel label='Tab label 2'>
      <h4>Tab content 2</h4>
      <Member />

    </Tabs.Panel>
  </Tabs>
);

export default TabsExample;
