import axios from "axios";

export async function fetchImage(uri: string) {
  let url;

  if (uri.startsWith("ipfs://")) {
    const ipfsHash = uri.replace("ipfs://", "");
    url = `https://ipfs.infura.io/ipfs/${ipfsHash}`;
  } else if (uri.startsWith("http")) {
    url = uri;
  } else {
    throw new Error(`Invalid URI: ${uri}`);
  }

  try {
    const response = await axios.get(url, { responseType: "blob" });
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch image from IPFS");
  }
}
