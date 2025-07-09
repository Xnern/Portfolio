import React, { useEffect, useState } from 'react';
import { Skill, SkillCategory } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
import { getSkillCategories } from '../utils/skillsData';
interface SkillFormProps {
  skill: Skill | null;
  onSave: (skill: Skill) => void;
  onCancel: () => void;
}
export function SkillForm({
  skill,
  onSave,
  onCancel
}: SkillFormProps) {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(50);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  useEffect(() => {
    setCategories(getSkillCategories());
  }, []);
  useEffect(() => {
    if (skill) {
      setName(skill.name);
      setLevel(skill.level);
      setCategory(skill.category);
    } else {
      resetForm();
    }
  }, [skill]);
  const resetForm = () => {
    setName('');
    setLevel(50);
    setCategory(categories.length > 0 ? categories[0].name : '');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSkill: Skill = {
      id: skill?.id || uuidv4(),
      name,
      level,
      category
    };
    onSave(updatedSkill);
    resetForm();
  };
  return <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Skill Name*
          </label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium">
            Category*
          </label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required>
            <option value="">Select a category</option>
            {categories.map(cat => <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>)}
          </select>
        </div>
        <div>
          <label htmlFor="level" className="block mb-2 text-sm font-medium">
            Proficiency Level: {level}%
          </label>
          <input type="range" id="level" value={level} onChange={e => setLevel(parseInt(e.target.value))} min="0" max="100" step="5" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
      <div className="mt-6 flex space-x-3">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-lg transition-colors">
          Save Skill
        </button>
        {skill && <button type="button" onClick={onCancel} className="border border-gray-700 hover:border-gray-600 px-5 py-2 rounded-lg transition-colors">
            Cancel
          </button>}
      </div>
    </form>;
}