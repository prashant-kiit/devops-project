import { useEffect, useState } from "react";
import { api } from "./api/items";
import { ItemForm } from "./components/ItemForm";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";

function App() {
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await api.getItems();
      setItems(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items" + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async (item: { name: string }) => {
    try {
      await api.createItem(item);
      await fetchItems();
      setIsFormOpen(false);
    } catch (err) {
      setError("Failed to create item" + err);
    }
  };

  const handleUpdate = async (item: { name: string }) => {
    if (!editingItem) return;
    try {
      await api.updateItem({ ...item, id: editingItem.id });
      await fetchItems();
      setEditingItem(null);
    } catch (err) {
      setError("Failed to update user" + err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await api.deleteItem(id);
      await fetchItems();
    } catch (err) {
      setError("Failed to delete item" + err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Item Management
            </h1>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          {(isFormOpen || editingItem) && (
            <div className="mb-6 p-4 border rounded-md bg-gray-50">
              <h2 className="text-lg font-semibold mb-4">
                {editingItem ? "Edit Item" : "Create New Item"}
              </h2>
              <ItemForm
                item={editingItem || undefined}
                onSubmit={editingItem ? handleUpdate : handleCreate}
                onCancel={() => {
                  setIsFormOpen(false);
                  setEditingItem(null);
                }}
              />
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
