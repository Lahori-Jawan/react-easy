import { Carousel } from 'antd';
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const items = [
  {
    key: '1',
    title: 'The best app to increase your productivity',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam maiores ab perferendis, nobis nisi facilis aperiam, ipsa quaerat assumenda dolores illum officiis quo odio quasi modi magni porro rerum!',
  },
  {
    key: '2',
    title: 'Work better, together. Schedule meetings.',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam maiores ab perferendis, nobis nisi facilis aperiam, ipsa quaerat assumenda dolores illum officiis quo odio quasi modi magni porro rerum!',
  },
  {
    key: '3',
    title: 'Something to write is more of a skill.',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam maiores ab perferendis, nobis nisi facilis aperiam, ipsa quaerat assumenda dolores illum officiis quo odio quasi modi magni porro rerum!',
  },
];

function AppHero() {
  return (
    <div className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div className="container-fluid" key={item.key}>
              <div className="content">
                <Typography>
                  <Title level={3}>{item.title}</Title>
                  <Paragraph>{item.body}</Paragraph>
                </Typography>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
