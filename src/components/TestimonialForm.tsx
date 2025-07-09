import React, { useEffect, useState } from 'react';
import { Testimonial } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
interface TestimonialFormProps {
  testimonial: Testimonial | null;
  onSave: (testimonial: Testimonial) => void;
  onCancel: () => void;
}
export function TestimonialForm({
  testimonial,
  onSave,
  onCancel
}: TestimonialFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (testimonial) {
      setName(testimonial.name);
      setCompany(testimonial.company);
      setRole(testimonial.role);
      setContent(testimonial.content);
      setImageUrl(testimonial.imageUrl || '');
    } else {
      resetForm();
    }
  }, [testimonial]);
  const resetForm = () => {
    setName('');
    setCompany('');
    setRole('');
    setContent('');
    setImageUrl('');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTestimonial: Testimonial = {
      id: testimonial?.id || uuidv4(),
      name,
      company,
      role,
      content,
      imageUrl: imageUrl || undefined
    };
    onSave(updatedTestimonial);
    resetForm();
  };
  return <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Nom*
          </label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium">
            Entreprise*
          </label>
          <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="role" className="block mb-2 text-sm font-medium">
            Poste / Fonction*
          </label>
          <input type="text" id="role" value={role} onChange={e => setRole(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 text-sm font-medium">
            Témoignage*
          </label>
          <textarea id="content" value={content} onChange={e => setContent(e.target.value)} rows={4} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium">
            URL de la Photo
          </label>
          <input type="url" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://example.com/photo.jpg" />
        </div>
      </div>
      <div className="mt-6 flex space-x-3">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-lg transition-colors">
          Enregistrer
        </button>
        {testimonial && <button type="button" onClick={onCancel} className="border border-gray-700 hover:border-gray-600 px-5 py-2 rounded-lg transition-colors">
            Annuler
          </button>}
      </div>
    </form>;
}