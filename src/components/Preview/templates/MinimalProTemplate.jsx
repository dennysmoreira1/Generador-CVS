import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const MinimalProTemplate = ({ data }) => {
    const { personalInfo, experience, education, skills, theme } = data;

    return (
        <div className="min-h-screen bg-white text-gray-900" style={{ color: theme.primaryColor }}>
            {/* Header */}
            <div className="bg-gray-50 px-8 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2" style={{ color: theme.primaryColor }}>
                        {personalInfo.fullName || 'Tu Nombre'}
                    </h1>
                    <h2 className="text-xl text-gray-600 mb-4">
                        {personalInfo.title || 'Tu Título Profesional'}
                    </h2>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        {personalInfo.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>{personalInfo.email}</span>
                            </div>
                        )}
                        {personalInfo.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>{personalInfo.phone}</span>
                            </div>
                        )}
                        {personalInfo.location && (
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{personalInfo.location}</span>
                            </div>
                        )}
                        {personalInfo.website && (
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <span>{personalInfo.website}</span>
                            </div>
                        )}
                        {personalInfo.linkedin && (
                            <div className="flex items-center gap-2">
                                <Linkedin className="h-4 w-4" />
                                <span>{personalInfo.linkedin}</span>
                            </div>
                        )}
                        {personalInfo.github && (
                            <div className="flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                <span>{personalInfo.github}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
                {/* Summary */}
                {personalInfo.summary && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: theme.primaryColor }}>
                            Resumen Profesional
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {personalInfo.summary}
                        </p>
                    </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: theme.primaryColor }}>
                            Experiencia Profesional
                        </h3>
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div key={exp.id} className="border-l-4 pl-4" style={{ borderColor: theme.primaryColor }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold">{exp.position}</h4>
                                        <span className="text-sm text-gray-600">
                                            {exp.startDate} - {exp.current ? 'Presente' : exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                                    {exp.description && (
                                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                                    )}
                                    {/* Separador visual para múltiples experiencias */}
                                    {index < experience.length - 1 && (
                                        <div className="mt-4 border-t border-gray-200 pt-4"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: theme.primaryColor }}>
                            Educación
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="border-l-4 pl-4" style={{ borderColor: theme.primaryColor }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold">
                                            {edu.degree} {edu.field && `en ${edu.field}`}
                                        </h4>
                                        <span className="text-sm text-gray-600">
                                            {edu.startDate} - {edu.current ? 'Presente' : edu.endDate}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                                    {edu.gpa && (
                                        <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                                    )}
                                    {edu.description && (
                                        <p className="text-gray-700 mt-2">{edu.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: theme.primaryColor }}>
                            Habilidades
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.id} className="flex justify-between items-center">
                                    <span className="font-medium">{skill.name}</span>
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4].map((level) => (
                                            <div
                                                key={level}
                                                className={`w-3 h-3 rounded-full ${level <= (skill.level === 'beginner' ? 1 :
                                                    skill.level === 'intermediate' ? 2 :
                                                        skill.level === 'advanced' ? 3 : 4)
                                                    ? 'opacity-100'
                                                    : 'opacity-30'
                                                    }`}
                                                style={{ backgroundColor: theme.primaryColor }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinimalProTemplate;
