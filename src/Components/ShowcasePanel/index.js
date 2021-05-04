import { Col, Collapse, Row } from "antd";
import "antd/dist/antd.css";
import _ from "lodash";
import React from "react";
import { DEMO_IMAGES } from "../../Constants";
import DoubleImages from "../DoubleImages";
const { Panel } = Collapse;

const ShowcasePanel = ({ header, forwardKey, modelType }) => {
  return (
    <Panel header={header} key={forwardKey}>
      {_.chunk(DEMO_IMAGES, 3).map((chunk, index) => {
        console.log("chunk", chunk);
        return (
          <Row key={index}>
            <Col flex="1 1 400px">
              {chunk[0] && (
                <DoubleImages filename={chunk[0]} modelType={modelType} />
              )}
            </Col>
            <Col flex="1 1 400px">
              {chunk[1] && (
                <DoubleImages filename={chunk[1]} modelType={modelType} />
              )}
            </Col>
            <Col flex="1 1 400px">
              {chunk[2] && (
                <DoubleImages filename={chunk[2]} modelType={modelType} />
              )}
            </Col>
          </Row>
        );
      })}
    </Panel>
  );
};

export default ShowcasePanel;
