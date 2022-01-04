import { BlobServiceClient } from "@azure/storage-blob";
import { config } from "dotenv";

config();

const blobService = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

export const createContainer = (req, res) => {
  try {
    const { container } = req.body;

    blobService.createContainer(container);

    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteContainer = (req, res) => {
  try {
    const { container } = req.body;

    blobService.deleteContainer(container);

    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listContainer = async (req, res) => {
  try {
    let containers = [];
    for await (const container of blobService.listContainers()) {
      containers.push(container.name);
    }

    res.json({ containers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
