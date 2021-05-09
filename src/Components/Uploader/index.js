import { InboxOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";
import { ModelTypes } from "../../Constants";
import "./styles.css";

const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const Uploader = (props) => {
  const { loading, handleUpload } = props;
  const [inputPreview, setInputPreview] = React.useState("");
  const [inputFile, setInputFile] = React.useState([]);
  const [modelType, setModelType] = React.useState(ModelTypes.CYCLE_GAN);

  return (
    <>
      <Dragger
        multiple={false}
        onRemove={() => setInputFile([])}
        beforeUpload={(file) => {
          setInputFile([file]);
          getBase64(file, (imageUrl) => setInputPreview(imageUrl));
          return false;
        }}
        fileList={inputFile}
        style={{
          height: "65vh !important",
        }}
      >
        {inputPreview ? (
          <img src={inputPreview} style={{ height: "65vh" }} />
        ) : (
          <>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </>
        )}
      </Dragger>
      <Select
        defaultValue={ModelTypes.CYCLE_GAN}
        onChange={(value) => setModelType(value)}
        style={{ width: 240, marginRight: 20, marginTop: 20 }}
      >
        <Option value={ModelTypes.CYCLE_GAN}>Mô hình CycleGAN</Option>
        <Option value={ModelTypes.UNIT}>Mô hình UNIT</Option>
        <Option value={ModelTypes.MUNIT}>Mô hình MUINT</Option>
      </Select>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() =>
          handleUpload({
            inputFile: inputFile[0],
            modelType,
          })
        }
      >
        {loading ? "Processing" : "Start Upload"}
      </Button>
    </>
  );
};

export default Uploader;
