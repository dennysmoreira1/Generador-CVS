import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Star } from 'lucide-react';

const CorporateDarkTemplate = ({ data }) => {
    const { personalInfo, experience, education, skills, theme } = data;

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="bg-gray-800 px-8 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2" style={{ color: theme.primaryColor }}>
                        {personalInfo.fullName || 'Tu Nombre'}
                    </h1>
                    <h2 className="text-xl text-gray-300 mb-6">
                        {personalInfo.title || 'Tu Título Profesional'}
                    </h2>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        {personalInfo.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" style={{ color: theme.primaryColor }} />
                                <span>{personalInfo.email}</span>
                            </div>
                        )}
                        {personalInfo.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" style={{ color: theme.primaryColor }} />
                                <span>{personalInfo.phone}</span>
                            </div>
                        )}
                        {personalInfo.location && (
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" style={{ color: theme.primaryColor }} />
                                <span>{personalInfo.location}</span>
                            </div>
                        )}
                        {personalInfo.website && (
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" style={{ color: theme.primaryColor }} />
                                <span>{personalInfo.website}</span>
                            </div>
                        )}
                        {personalInfo.linkedin && (
                            <div className="flex items-center gap-2">
                                <Linkedin className="h-4 w-4" style={{ color: theme.primaryColor }} />
                                <span>{personalInfo.linkedin}</span>
                            </div>
                        )}
                        {personalInfo.github && (
                            <div className="flex items-center gap-2">
                                <Github className="h-4 w-4" style={{ color: theme.primaryColor }} />
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
                        <div className="flex items-center mb-4">
                            <div
                                className="w-1 h-8 mr-4"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <h3 className="text-2xl font-bold">Resumen Profesional</h3>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg border-l-4" style={{ borderColor: theme.primaryColor }}>
                            <p className="text-gray-300 leading-relaxed">
                                {personalInfo.summary}
                            </p>
                        </div>
                    </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-1 h-8 mr-4"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <h3 className="text-2xl font-bold">Experiencia Profesional</h3>
                        </div>
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div key={exp.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-xl font-semibold">{exp.position}</h4>
                                        <span className="text-sm text-gray-400">
                                            {exp.startDate} - {exp.current ? 'Presente' : exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 font-medium mb-3">{exp.company}</p>
                                    {exp.description && (
                                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                    )}
                                    {/* Separador visual para múltiples experiencias */}
                                    {index < experience.length - 1 && (
                                        <div className="mt-4 border-t border-gray-700 pt-4"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-1 h-8 mr-4"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <h3 className="text-2xl font-bold">Educación</h3>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold">
                                            {edu.degree} {edu.field && `en ${edu.field}`}
                                        </h4>
                                        <span className="text-sm text-gray-400">
                                            {edu.startDate} - {edu.current ? 'Presente' : edu.endDate}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                                    {edu.gpa && (
                                        <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>
                                    )}
                                    {edu.description && (
                                        <p className="text-gray-400 mt-2">{edu.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-1 h-8 mr-4"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <h3 className="text-2xl font-bold">Habilidades</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {skills.map((skill) => (
                                <div key={skill.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold">{skill.name}</span>
                                        <div className="flex space-x-1">
                                            {[1, 2, 3, 4].map((level) => (
                                                <Star
                                                    key={level}
                                                    className={`w-4 h-4 ${level <= (skill.level === 'beginner' ? 1 :
                                                        skill.level === 'intermediate' ? 2 :
                                                            skill.level === 'advanced' ? 3 : 4)
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-600'
                                                        }`}
                                                    fill={level <= (skill.level === 'beginner' ? 1 :
                                                        skill.level === 'intermediate' ? 2 :
                                                            skill.level === 'advanced' ? 3 : 4)
                                                        ? 'currentColor'
                                                        : 'none'
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 capitalize">{skill.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CorporateDarkTemplate;
