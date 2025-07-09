import React, { useEffect, useState } from 'react';
import { AboutInfo } from '../utils/types';
import { getAboutInfo } from '../utils/aboutData';
import { UserIcon, MapPinIcon, MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, BriefcaseIcon, HeartIcon, CodeIcon } from 'lucide-react';
export function AboutSection() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  useEffect(() => {
    setAboutInfo(getAboutInfo());
  }, []);
  if (!aboutInfo) {
    return null;
  }
  return <section id="about" className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">À Propos</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              {aboutInfo.photoUrl && <div className="aspect-square w-full overflow-hidden">
                  <img src={aboutInfo.photoUrl} alt={aboutInfo.name} className="w-full h-full object-cover" />
                </div>}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-500">
                  {aboutInfo.name}
                </h3>
                <p className="text-gray-300 mb-4">{aboutInfo.title}</p>
                <div className="space-y-4 text-gray-300">
                  {aboutInfo.location && <div className="flex items-center">
                      <MapPinIcon size={18} className="text-yellow-500 mr-3" />
                      <span>{aboutInfo.location}</span>
                    </div>}
                  {aboutInfo.email && <div className="flex items-center">
                      <MailIcon size={18} className="text-yellow-500 mr-3" />
                      <a href={`mailto:${aboutInfo.email}`} className="hover:text-yellow-500 transition-colors">
                        {aboutInfo.email}
                      </a>
                    </div>}
                  {aboutInfo.phone && <div className="flex items-center">
                      <PhoneIcon size={18} className="text-yellow-500 mr-3" />
                      <a href={`tel:${aboutInfo.phone}`} className="hover:text-yellow-500 transition-colors">
                        {aboutInfo.phone}
                      </a>
                    </div>}
                  <div className="flex space-x-4 pt-2">
                    {aboutInfo.linkedin && <a href={aboutInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                        <LinkedinIcon size={20} />
                      </a>}
                    {aboutInfo.github && <a href={aboutInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                        <GithubIcon size={20} />
                      </a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Info Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-4">
                <UserIcon size={22} className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Spécialisation</h3>
              </div>
              <p className="text-gray-300 mb-6">{aboutInfo.specialization}</p>
              <div className="flex items-center mb-4">
                <BriefcaseIcon size={22} className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Approche de Travail</h3>
              </div>
              <p className="text-gray-300 mb-6">{aboutInfo.philosophy}</p>
              <div className="flex items-center mb-4">
                <HeartIcon size={22} className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Valeurs</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 pl-4">
                {aboutInfo.values.map((value, index) => <li key={index}>{value}</li>)}
              </ul>
              <div className="flex items-center mb-4">
                <CodeIcon size={22} className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Bio</h3>
              </div>
              <p className="text-gray-300">{aboutInfo.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}