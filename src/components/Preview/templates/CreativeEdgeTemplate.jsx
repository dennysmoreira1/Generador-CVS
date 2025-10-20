import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Award, Briefcase, GraduationCap } from 'lucide-react';

const CreativeEdgeTemplate = ({ data }) => {
    const { personalInfo, experience, education, skills, theme } = data;

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header with Creative Design */}
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: theme.primaryColor }}
                />
                <div className="relative px-8 py-16">
                    <div className="flex items-center space-x-8">
                        {/* Profile Image */}
                        {personalInfo.profilePhoto ? (
                            <img
                                src={personalInfo.profilePhoto}
                                alt="Foto de perfil"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                        ) : (
                            <div
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold text-white"
                                style={{ backgroundColor: theme.primaryColor }}
                            >
                                {personalInfo.fullName ? personalInfo.fullName.charAt(0) : 'A'}
                            </div>
                        )}

                        <div className="flex-1">
                            <h1 className="text-5xl font-bold mb-2" style={{ color: theme.primaryColor }}>
                                {personalInfo.fullName || 'Tu Nombre'}
                            </h1>
                            <h2 className="text-2xl text-gray-600 mb-4">
                                {personalInfo.title || 'Tu Título Profesional'}
                            </h2>

                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4 text-sm">
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
                </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
                {/* Summary */}
                {personalInfo.summary && (
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <Award className="h-6 w-6 mr-3" style={{ color: theme.primaryColor }} />
                            <h3 className="text-xl font-semibold">Resumen Profesional</h3>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                {personalInfo.summary}
                            </p>
                        </div>
                    </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <Briefcase className="h-6 w-6 mr-3" style={{ color: theme.primaryColor }} />
                            <h3 className="text-xl font-semibold">Experiencia Profesional</h3>
                        </div>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={exp.id} className="relative">
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="w-4 h-4 rounded-full mt-2 flex-shrink-0"
                                            style={{ backgroundColor: theme.primaryColor }}
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-semibold">{exp.position}</h4>
                                                <span className="text-sm text-gray-600">
                                                    {exp.startDate} - {exp.current ? 'Presente' : exp.endDate}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                                            {exp.description && (
                                                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    {index < experience.length - 1 && (
                                        <div
                                            className="absolute left-2 top-8 w-0.5 h-20"
                                            style={{ backgroundColor: theme.primaryColor, opacity: 0.3 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <GraduationCap className="h-6 w-6 mr-3" style={{ color: theme.primaryColor }} />
                            <h3 className="text-xl font-semibold">Educación</h3>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
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
                        <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.id} className="text-center">
                                    <div
                                        className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                                        style={{ backgroundColor: theme.primaryColor }}
                                    >
                                        {skill.name.charAt(0).toUpperCase()}
                                    </div>
                                    <p className="text-sm font-medium">{skill.name}</p>
                                    <p className="text-xs text-gray-500 capitalize">{skill.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreativeEdgeTemplate;
