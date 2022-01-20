import React from 'react';
import { Row, Col, Divider } from "antd";
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Style = {
	paddingLeft: "14px",
	color: "white"
}

const MatchingCard = () => {
	return (
		<Col className="gutter-row" span={6}>
            <div className="h-full w-full border border-supagreen-dark rounded-xl">
			<Title style={Style} level={2}>Project A</Title>
            <Text style={Style}>Goal</Text>
			<Text style={Style}>$4500</Text>
            <Divider/>
			<Text style={Style}>Contribution Amount:</Text>
			<Text style={Style}>$4000</Text>
            <Divider/>
			<Text style={Style}>Matching Amount:</Text>
			<Text style={Style}>$4000</Text>
			</div>
          </Col>
	);
};

export default MatchingCard;
