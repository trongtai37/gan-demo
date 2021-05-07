import React from "react";
import { Row, Col, Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./styles.css";
import {
  CUT_DIR,
  CYCLE_GAN_DIR,
  ModelTypes,
  MUNIT_DIR,
  ORIGIN_DIR,
  UNIT_DIR,
} from "../../Constants";

const getDemoImagePath = (filename, modelType) => {
  switch (modelType) {
    case ModelTypes.CYCLE_GAN:
      return CYCLE_GAN_DIR + filename;
    case ModelTypes.UNIT:
      return UNIT_DIR + filename;
    case ModelTypes.MUNIT:
      return MUNIT_DIR + filename;
    case ModelTypes.CUT:
      return CUT_DIR + filename;
    default:
      return CYCLE_GAN_DIR + filename;
  }
};

const DoubleImages = ({ filename, modelType }) => {
  return (
    <Row justify="space-around" align="middle" className="container">
      <Col span={11}>
        <Image width={180} src={ORIGIN_DIR + filename} />
      </Col>
      <Col span={2} className="double-image__arrow">
        <ArrowRightOutlined className="arrow" />
      </Col>
      <Col span={11}>
        <Image width={180} src={getDemoImagePath(filename, modelType)} />
      </Col>
    </Row>
  );
};

export default DoubleImages;
