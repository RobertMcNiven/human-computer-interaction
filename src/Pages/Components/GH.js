import { Card } from 'antd';
const { Meta } = Card;

const GHCard = () => (
  <a href="https://github.com/RobertMcNiven" target="_blank" rel="noopener noreferrer">
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />}
    >
      <Meta title="GitHub" description="https://github.com/RobertMcNiven" />
    </Card>
  </a>
);

export default GHCard;
