import { Layout, Row, Col, Input } from "antd";
import Card from "../components/Card";
import { SearchOutlined } from '@ant-design/icons';
import { useState } from "react";

const { Content } = Layout;

const Explore = () => {
	const [network, setNetwork]= useState("Avalanche");
	const [category, setCategory]= useState("Categories");

	const categories = ["Creative", "Charity", "Education", "Technology"]

	const chooseCategory = (choose) => {
		return categories.map((value) => {
			<div onClick={setCategory(choose)} className="text-center rounded-md py-2 bg-supadark-medium">{value}</div>
		});
	}
	
  return (
    <div>
      <Layout>
        <Content style={{ background: "#0D1016" }}>
          <div
            style={{ maxWidth: "70%" }}
            className="pt-32 mx-auto justify-center items-center"
          >
            <div
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/1irdz9lsyrw/plutusrender__3wykITPm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1638359431895)",
                backgroundSize: "cover",
                backgroundPositionY: -45,
              }}
              className="rounded-lg w-full flex flex-col text-center  mb-10 items-center justify-center h-64 border border-supagreen-dark"
            >
              <h1 className="text-white uppercase font-bold text-5xl font-cormorant">
                Spread Wealth
              </h1>
              <h1 className="text-gray-300 text-lg font-inter tracking-wider uppercase font-light">
                fund our superheroes
              </h1>
            </div>
            <Row gutter={16} className="mb-8">
              <Col className="gutter-row" span={4}>
                <div className="text-center rounded-md py-2 bg-supadark-medium">{network}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div onClick={chooseCategory} className="text-center rounded-md py-2 bg-supadark-medium">{category}</div>
              </Col>
              <Col className="gutter-row" span={8}></Col>
              <Col className="gutter-row" span={8}>
                <Input prefix={<SearchOutlined />} placeholder="Search campaign" style={{backgroundColor:"#0D1016", borderColor:"#2F353F", borderRadius:3}} />
              </Col>
            </Row>
            <Row gutter={[32, 32]}>
              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>
              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <Card />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Explore;
