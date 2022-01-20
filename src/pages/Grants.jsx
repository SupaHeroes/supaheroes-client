import React from "react";
import { useState } from "react";
import { Row, Col, Divider } from "antd";
import { Typography } from 'antd';
import MatchingCard from "../components/QEODemo/MatchingCard";

const { Title, Text } = Typography;

const Style = {
	paddingLeft: "14px",
	color: "white"
}

const Grants = () => {
  const [useGrantAmount, setGrantAmount] = useState("50000");
  return (
    <div className="pt-24 bg-supadark-dark flex min-h-screen flex-col">
      <div className="w-4/5 mx-auto h-52 bg-supagreen-dark rounded-xl">
        <h1 className="text-5xl text-center pt-12">${useGrantAmount}</h1>
        <h1 className=" font-light text-xl text-center">
          Funds for Public Goods
        </h1>
      </div>
      <div className="w-4/5 mx-auto pt-10">
        <h1 className="text-white text-3xl">QEO Funding Demo</h1>
		<h1 className="text-gray-300 font-light">Thank you for trying QEO funding model, let me have your feedback!</h1>
        <Divider />
        <Row gutter={16}>
          <MatchingCard/>
          <Col className="gutter-row" span={6}>
            <div className="h-full w-full border border-supagreen-dark rounded-xl"><Title style={Style} level={2}>Project B</Title></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="h-full w-full border border-supagreen-dark rounded-xl"><Title style={Style} level={2}>Project C</Title></div>
          </Col>
		  <Col className="gutter-row" span={6}>
            <div className="h-full w-full border border-supagreen-dark rounded-xl"><Title style={Style} level={2}>Project D</Title></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Grants;
