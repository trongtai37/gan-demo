import React from "react";
import _ from "lodash";
import "antd/dist/antd.css";
import { Collapse, Col, Row } from "antd";
import { DEMO_IMAGES, ModelTypes } from "../Constants";
import DoubleImages from "../Components/DoubleImages";
const { Panel } = Collapse;

const Showcase = () => {
  return (
    <Collapse bordered defaultActiveKey={["1"]}>
      {/* CYCLE GAN */}
      <Panel header="Kết quả mô hình CycleGAN" key="1">
        {_.chunk(DEMO_IMAGES, 3).map((chunk, index) => {
          return (
            <Row key={index}>
              <Col flex="1 1 400px">
                {chunk[0] && (
                  <DoubleImages
                    filename={chunk[0]}
                    modelType={ModelTypes.CYCLE_GAN}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[1] && (
                  <DoubleImages
                    filename={chunk[1]}
                    modelType={ModelTypes.CYCLE_GAN}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[2] && (
                  <DoubleImages
                    filename={chunk[2]}
                    modelType={ModelTypes.CYCLE_GAN}
                  />
                )}
              </Col>
            </Row>
          );
        })}
      </Panel>
      {/* UNIT */}
      <Panel header="Kết quả mô hình UNIT" key="2">
        {_.chunk(DEMO_IMAGES, 3).map((chunk, index) => {
          return (
            <Row key={index}>
              <Col flex="1 1 400px">
                {chunk[0] && (
                  <DoubleImages
                    filename={chunk[0]}
                    modelType={ModelTypes.UNIT}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[1] && (
                  <DoubleImages
                    filename={chunk[1]}
                    modelType={ModelTypes.UNIT}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[2] && (
                  <DoubleImages
                    filename={chunk[2]}
                    modelType={ModelTypes.UNIT}
                  />
                )}
              </Col>
            </Row>
          );
        })}
      </Panel>
      {/* MUNIT */}
      <Panel header="Kết quả mô hình MUNIT" key="3">
        {_.chunk(DEMO_IMAGES, 3).map((chunk, index) => {
          return (
            <Row key={index}>
              <Col flex="1 1 400px">
                {chunk[0] && (
                  <DoubleImages
                    filename={chunk[0]}
                    modelType={ModelTypes.MUNIT}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[1] && (
                  <DoubleImages
                    filename={chunk[1]}
                    modelType={ModelTypes.MUNIT}
                  />
                )}
              </Col>
              <Col flex="1 1 400px">
                {chunk[2] && (
                  <DoubleImages
                    filename={chunk[2]}
                    modelType={ModelTypes.MUNIT}
                  />
                )}
              </Col>
            </Row>
          );
        })}
      </Panel>
    </Collapse>
  );
};

export default Showcase;
