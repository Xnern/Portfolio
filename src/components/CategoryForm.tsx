import React, { useEffect, useState } from 'react';
import { SkillCategory } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
interface CategoryFormProps {
  category: SkillCategory | null;
  onSave: (category: SkillCategory) => void;
  onCancel: () => void;
}
export function CategoryForm({
  category,
  onSave,
  onCancel
}: CategoryFormProps) {
  const [name, setName] = useState('');
  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      resetForm();
    }
  }, [category]);
  const resetForm = () => {
    setName('');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedCategory: SkillCategory = {
      id: category?.id || uuidv4(),
      name
    };
    onSave(updatedCategory);
    resetForm();
  };
  return <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block mb-2 text-sm font-medium">
            Category Name*
          </label>
          <input type="text" id="categoryName" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
      </div>
      <div className="mt-6 flex space-x-3">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-lg transition-colors">
          Save Category
        </button>
        {category && <button type="button" onClick={onCancel} className="border border-gray-700 hover:border-gray-600 px-5 py-2 rounded-lg transition-colors">
            Cancel
          </button>}
      </div>
    </form>;
}