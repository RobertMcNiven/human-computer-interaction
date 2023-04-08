import { Card } from 'antd';
const { Meta } = Card;

const LICard = () => (
  <a href="https://www.linkedin.com/in/robertmcniven/" target="_blank" rel="noopener noreferrer">
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="LinkedIn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" />}
    >
      <Meta title="LinkedIn" description="https://www.linkedin.com/in/robertmcniven/" />
    </Card>
  </a>
);

export default LICard;
