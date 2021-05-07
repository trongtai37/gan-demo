import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/api";
const UPLOAD_ENDPOINT = `${API_ENDPOINT}/transform-image`;

const transformImage = async (formData) => {
  const response = await axios.post(UPLOAD_ENDPOINT, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "arraybuffer",
  });

  const base64 = btoa(
    new Uint8Array(response.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  return `data:${response.headers[
    "content-type"
  ].toLowerCase()};base64,${base64}`;
};

export { transformImage };
