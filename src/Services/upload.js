import axios from "axios";

const getNgrokEndpoint = () =>
  localStorage.getItem("ngrok-endpoint") || "http://f9770404ad74.ngrok.io";

const transformImage = async (formData) => {
  const UPLOAD_ENDPOINT = `${getNgrokEndpoint()}/api/transform-image`;
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
