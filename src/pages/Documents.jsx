import { useState } from 'react';
import { useDocuments, useAddDocument, useUpdateDocument, useDeleteDocument } from '../integrations/supabase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"

const Documents = () => {
  const [newDocument, setNewDocument] = useState({ title: '', content: '' });
  const { data: documents, isLoading, isError } = useDocuments();
  const addDocument = useAddDocument();
  const updateDocument = useUpdateDocument();
  const deleteDocument = useDeleteDocument();

  const handleAddDocument = async (e) => {
    e.preventDefault();
    try {
      await addDocument.mutateAsync(newDocument);
      setNewDocument({ title: '', content: '' });
      toast.success("Document added successfully");
    } catch (error) {
      toast.error("Failed to add document");
    }
  };

  const handleUpdateDocument = async (id, updatedData) => {
    try {
      await updateDocument.mutateAsync({ id, ...updatedData });
      toast.success("Document updated successfully");
    } catch (error) {
      toast.error("Failed to update document");
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      await deleteDocument.mutateAsync(id);
      toast.success("Document deleted successfully");
    } catch (error) {
      toast.error("Failed to delete document");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading documents</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Documents</h1>
      
      <form onSubmit={handleAddDocument} className="mb-4">
        <Input
          type="text"
          placeholder="Title"
          value={newDocument.title}
          onChange={(e) => setNewDocument({ ...newDocument, title: e.target.value })}
          className="mb-2"
        />
        <Input
          type="text"
          placeholder="Content"
          value={newDocument.content}
          onChange={(e) => setNewDocument({ ...newDocument, content: e.target.value })}
          className="mb-2"
        />
        <Button type="submit">Add Document</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.title}</TableCell>
              <TableCell>{doc.content}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdateDocument(doc.id, { title: doc.title + " (updated)" })} className="mr-2">
                  Update
                </Button>
                <Button onClick={() => handleDeleteDocument(doc.id)} variant="destructive">
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

export default Documents;
