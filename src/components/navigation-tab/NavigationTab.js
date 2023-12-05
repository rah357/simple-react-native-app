import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

export default () => {
const [index, setIndex] = React.useState(0);

return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Play Games"
        titleStyle={{ fontSize: 10 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="favorite"
        titleStyle={{ fontSize: 10 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Withdraw Money"
        titleStyle={{ fontSize: 10 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>
    </TabView>
  </>
);
};