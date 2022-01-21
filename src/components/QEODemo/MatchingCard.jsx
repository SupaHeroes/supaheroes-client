import React from "react";
import { Row, Col, Divider, Space } from "antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Style = {
  paddingLeft: "14px",
  color: "white",
};



const MatchingCard = ({ contributeBtn ,inputBtn ,name, goal, contribution, matching }) => {
  return (
    <Col className="gutter-row" span={6}>
      <div className="h-full w-full border border-supagreen-dark rounded-xl">
        <div className="p-4">
          <Title style={Style} level={2}>
            {name}
          </Title>
		  <Space>
          <Text style={Style}>Goal</Text>
          <Text style={Style}>$</Text>
		  {inputBtn}
		  </Space>
          <Divider />
		  <Space>
          <Text style={Style}>Contribution Amount:</Text>
          <Text style={Style}>$</Text>
		  {contributeBtn}
		  </Space>
          <Divider />
          <Text style={Style}>Matching Amount:</Text>
          <Text style={Style}>${matching}</Text>
        </div>
      </div>
    </Col>
  );
};

export default MatchingCard;
