import { useState } from 'react';
import { useItems, useAddItem, useUpdateItem, useDeleteItem } from '../integrations/supabase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"

const Items = () => {
  const [newItem, setNewItem] = useState({ name: '', size: '', price: '' });
  const { data: items, isLoading, isError } = useItems();
  const addItem = useAddItem();
  const updateItem = useUpdateItem();
  const deleteItem = useDeleteItem();

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await addItem.mutateAsync({
        ...newItem,
        size: parseInt(newItem.size),
        price: parseFloat(newItem.price)
      });
      setNewItem({ name: '', size: '', price: '' });
      toast.success("Item added successfully");
    } catch (error) {
      toast.error("Failed to add item");
    }
  };

  const handleUpdateItem = async (id, updatedData) => {
    try {
      await updateItem.mutateAsync({ id, ...updatedData });
      toast.success("Item updated successfully");
    } catch (error) {
      toast.error("Failed to update item");
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem.mutateAsync(id);
      toast.success("Item deleted successfully");
    } catch (error) {
      toast.error("Failed to delete item");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading items</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      
      <form onSubmit={handleAddItem} className="mb-4">
        <Input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="mb-2"
        />
        <Input
          type="number"
          placeholder="Size"
          value={newItem.size}
          onChange={(e) => setNewItem({ ...newItem, size: e.target.value })}
          className="mb-2"
        />
        <Input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="mb-2"
        />
        <Button type="submit">Add Item</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdateItem(item.id, { name: item.name + " (updated)" })} className="mr-2">
                  Update
                </Button>
                <Button onClick={() => handleDeleteItem(item.id)} variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Items;
