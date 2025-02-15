import axios from "axios";

const PORT = import.meta.env.VITE_BACKEND_PORT;

export const api = {
  getItems: async (): Promise<{ id: number; name: string }[]> => {
    const response = await axios.get(`http://localhost:${PORT}/app/items`);
    console.log(response.data);
    return response.data;
  },

  getItemById: async (
    id: number
  ): Promise<{ id: number; name: string } | undefined> => {
    const response = await axios.get(
      `http://localhost:${PORT}/app/items/${id}`
    );
    return response.data;
  },

  createItem: async (item: {
    name: string;
  }): Promise<{ id: number; name: string }> => {
    const response = await axios.post(
      `http://localhost:${PORT}/app/items`,
      item
    );
    return response.data;
  },

  updateItem: async (item: {
    id: number;
    name: string;
  }): Promise<{ id: number; name: string }> => {
    const response = await axios.put(
      `http://localhost:${PORT}/app/items/${item.id}`,
      item
    );
    return response.data;
  },

  deleteItem: async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:${PORT}/app/items/${id}`);
  },
};
