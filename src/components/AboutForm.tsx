import React, { useEffect, useState } from 'react';
import { AboutInfo } from '../utils/types';
interface AboutFormProps {
  aboutInfo: AboutInfo;
  onSave: (aboutInfo: AboutInfo) => void;
}
export function AboutForm({
  aboutInfo,
  onSave
}: AboutFormProps) {
  const [name, setName] = useState(aboutInfo.name);
  const [title, setTitle] = useState(aboutInfo.title);
  const [specialization, setSpecialization] = useState(aboutInfo.specialization);
  const [bio, setBio] = useState(aboutInfo.bio);
  const [philosophy, setPhilosophy] = useState(aboutInfo.philosophy);
  const [valuesInput, setValuesInput] = useState(aboutInfo.values.join(', '));
  const [photoUrl, setPhotoUrl] = useState(aboutInfo.photoUrl || '');
  const [location, setLocation] = useState(aboutInfo.location || '');
  const [email, setEmail] = useState(aboutInfo.email || '');
  const [phone, setPhone] = useState(aboutInfo.phone || '');
  const [linkedin, setLinkedin] = useState(aboutInfo.linkedin || '');
  const [github, setGithub] = useState(aboutInfo.github || '');
  useEffect(() => {
    setName(aboutInfo.name);
    setTitle(aboutInfo.title);
    setSpecialization(aboutInfo.specialization);
    setBio(aboutInfo.bio);
    setPhilosophy(aboutInfo.philosophy);
    setValuesInput(aboutInfo.values.join(', '));
    setPhotoUrl(aboutInfo.photoUrl || '');
    setLocation(aboutInfo.location || '');
    setEmail(aboutInfo.email || '');
    setPhone(aboutInfo.phone || '');
    setLinkedin(aboutInfo.linkedin || '');
    setGithub(aboutInfo.github || '');
  }, [aboutInfo]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Parse values from comma-separated string
    const values = valuesInput.split(',').map(value => value.trim()).filter(value => value);
    const updatedAboutInfo: AboutInfo = {
      name,
      title,
      specialization,
      bio,
      philosophy,
      values,
      photoUrl: photoUrl || undefined,
      location: location || undefined,
      email: email || undefined,
      phone: phone || undefined,
      linkedin: linkedin || undefined,
      github: github || undefined
    };
    onSave(updatedAboutInfo);
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">
          Informations Personnelles
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nom*
              </label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
            </div>
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium">
                Titre / Poste*
              </label>
              <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="specialization" className="block mb-2 text-sm font-medium">
              Spécialisation / Expertise*
            </label>
            <input type="text" id="specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
          </div>
          <div>
            <label htmlFor="bio" className="block mb-2 text-sm font-medium">
              Biographie*
            </label>
            <textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} rows={4} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
          </div>
          <div>
            <label htmlFor="philosophy" className="block mb-2 text-sm font-medium">
              Approche / Philosophie de Travail*
            </label>
            <textarea id="philosophy" value={philosophy} onChange={e => setPhilosophy(e.target.value)} rows={3} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
          </div>
          <div>
            <label htmlFor="values" className="block mb-2 text-sm font-medium">
              Valeurs (séparées par des virgules)*
            </label>
            <input type="text" id="values" value={valuesInput} onChange={e => setValuesInput(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium">
              URL de la Photo
            </label>
            <input type="url" id="photoUrl" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://example.com/photo.jpg" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Coordonnées</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium">
              Localisation
            </label>
            <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="Paris, France" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Téléphone
            </label>
            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="+33 6 12 34 56 78" />
          </div>
          <div>
            <label htmlFor="linkedin" className="block mb-2 text-sm font-medium">
              LinkedIn URL
            </label>
            <input type="url" id="linkedin" value={linkedin} onChange={e => setLinkedin(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://linkedin.com/in/username" />
          </div>
          <div>
            <label htmlFor="github" className="block mb-2 text-sm font-medium">
              GitHub URL
            </label>
            <input type="url" id="github" value={github} onChange={e => setGithub(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://github.com/username" />
          </div>
        </div>
      </div>
      <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors">
        Enregistrer
      </button>
    </form>;
}