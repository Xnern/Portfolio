import React, { useEffect, useState } from 'react';
import { Skill, SkillCategory } from '../utils/types';
import { getSkills, getSkillCategories } from '../utils/skillsData';
import { CodeIcon } from 'lucide-react';
export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  useEffect(() => {
    setSkills(getSkills());
    setCategories(getSkillCategories());
  }, []);
  // Group skills by category
  const skillsByCategory = categories.map(category => {
    const categorySkills = skills.filter(skill => skill.category === category.name);
    return {
      category,
      skills: categorySkills
    };
  });
  return <section id="skills" className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Mes compétences</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-12"></div>
        {skillsByCategory.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillsByCategory.map(({
          category,
          skills
        }) => skills.length > 0 && <div key={category.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-6 flex items-center">
                      <CodeIcon className="mr-2" size={20} />
                      {category.name}
                    </h3>
                    <div className="space-y-5">
                      {skills.map(skill => <div key={skill.id}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                          </div>
                        </div>)}
                    </div>
                  </div>)}
          </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
            <p className="text-gray-400">
              Aucune compétence n'a été trouvée. Veuillez vérifier les données ou ajouter des compétences.
            </p>
          </div>}
      </div>
    </section>;
}