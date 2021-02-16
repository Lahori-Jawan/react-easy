import React from 'react';
import { Col, Row, Space, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const items = [
  {
    key: '1',
    icon: 'fa-chart-pie',
    title: 'High Performance',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ipsa iusto dolores doloribus quis quam voluptatem fugit hic inventore quibusdam accusantium, neque obcaecati quisquam, maiores magni ea? Voluptatibus, quibusdam vitae',
  },
  {
    key: '2',
    icon: 'fa-desktop',
    title: 'Flat Design',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ipsa iusto dolores doloribus quis quam voluptatem fugit hic inventore quibusdam accusantium, neque obcaecati quisquam, maiores magni ea? Voluptatibus, quibusdam vitae',
  },
  {
    key: '3',
    icon: 'fa-database',
    title: 'Simplified Workflow',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ipsa iusto dolores doloribus quis quam voluptatem fugit hic inventore quibusdam accusantium, neque obcaecati quisquam, maiores magni ea? Voluptatibus, quibusdam vitae',
  },
];

function About() {
  return (
    <div className="about block text-center container-fluid">
      <Typography>
        <Title level={3}>About Us</Title>
        <Paragraph>Dolor Set amit. consectetur adipisicing elit</Paragraph>
      </Typography>
      <Typography>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sunt
          quia esse voluptatum odit ea cum inventore fugit aut! Similique
          laboriosam officia quia laborum nihil possimus dolorum nam nobis
          asperiores.
        </Paragraph>
      </Typography>
      <Row gutter={[16, 16]}>
        {items.map(item => {
          return (
            <Col span={8} key={item.key}>
              <i className={`fas ${item.icon}`}></i>
              <Space />
              <Typography>
                <Title level={5}>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
              </Typography>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default About;
