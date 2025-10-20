import React from 'react';
import { motion } from 'framer-motion';
import { useResume } from '../../context/ResumeContext';
import MinimalProTemplate from './templates/MinimalProTemplate';
import CreativeEdgeTemplate from './templates/CreativeEdgeTemplate';
import CorporateDarkTemplate from './templates/CorporateDarkTemplate';

const Preview = () => {
    const { state } = useResume();

    const renderTemplate = (data) => {
        switch (state.selectedTemplate) {
            case 'minimal-pro':
                return <MinimalProTemplate data={data} />;
            case 'creative-edge':
                return <CreativeEdgeTemplate data={data} />;
            case 'corporate-dark':
                return <CorporateDarkTemplate data={data} />;
            default:
                return <MinimalProTemplate data={data} />;
        }
    };

    // Verificar si hay datos para mostrar
    const hasData = state.personalInfo.fullName || state.personalInfo.email ||
        state.experience.length > 0 || state.education.length > 0 ||
        state.skills.length > 0;

    // Crear datos de ejemplo para mostrar la plantilla
    const getDisplayData = () => {
        if (hasData) {
            return state;
        }

        // Datos de ejemplo para mostrar cómo se ve la plantilla
        return {
            ...state,
            personalInfo: {
                fullName: 'Juan Pérez',
                title: 'Desarrollador Frontend',
                email: 'juan.perez@email.com',
                phone: '+593 967328523',
                location: 'Guayaquil, Ecuador',
                website: 'https://juanperez.com',
                linkedin: 'linkedin.com/in/juanperez',
                github: 'github.com/juanperez',
                summary: 'Desarrollador frontend con 4 años de experiencia en React, JavaScript y TypeScript. Especializado en crear soluciones web innovadoras para empresas ecuatorianas. Actualmente trabajando en Banco del Pacífico liderando proyectos de transformación digital. Apasionado por crear interfaces de usuario intuitivas y accesibles que mejoren la experiencia digital.'
            },
            experience: [
                {
                    id: 1,
                    company: 'Banco del Pacífico',
                    position: 'Desarrollador Frontend Senior',
                    startDate: '2023-03',
                    endDate: '2024-12',
                    current: true,
                    description: 'Lideré el desarrollo de aplicaciones web modernas para servicios bancarios digitales usando React y TypeScript. Colaboré con equipos de diseño para implementar interfaces de usuario atractivas y funcionales. Gestioné un equipo de 3 desarrolladores y establecí mejores prácticas de desarrollo. Implementé arquitecturas escalables que redujeron el tiempo de carga en un 40%.'
                },
                {
                    id: 2,
                    company: 'Tecnología Ecuador S.A.',
                    position: 'Desarrollador Frontend',
                    startDate: '2021-08',
                    endDate: '2023-02',
                    current: false,
                    description: 'Desarrollé componentes reutilizables y optimicé el rendimiento de aplicaciones web para clientes corporativos ecuatorianos. Trabajé en estrecha colaboración con el equipo de backend para integrar APIs. Implementé testing automatizado que aumentó la cobertura de código al 90%. Participé en la planificación de sprints y revisiones de código.'
                },
                {
                    id: 3,
                    company: 'Digital Solutions Guayaquil',
                    position: 'Desarrollador Web Junior',
                    startDate: '2020-09',
                    endDate: '2021-07',
                    current: false,
                    description: 'Desarrollé sitios web responsivos para pequeñas y medianas empresas ecuatorianas usando HTML, CSS y JavaScript. Colaboré con diseñadores para convertir mockups en código funcional. Aprendí metodologías ágiles y herramientas de control de versiones.'
                }
            ],
            education: [
                {
                    id: 1,
                    institution: 'Universidad de Guayaquil',
                    degree: 'Ingeniería en Sistemas',
                    field: 'Informática',
                    startDate: '2018-09',
                    endDate: '2022-06',
                    current: false,
                    gpa: '3.8/4.0',
                    description: 'Especialización en desarrollo web y tecnologías frontend. Proyecto final sobre aplicaciones React escalables. Participé en el programa de intercambio estudiantil en Alemania durante el último año.'
                },
                {
                    id: 2,
                    institution: 'Instituto Tecnológico Superior Guayaquil',
                    degree: 'Certificación en Desarrollo Web',
                    field: 'Programación Web',
                    startDate: '2023-01',
                    endDate: '2023-06',
                    current: false,
                    gpa: '4.0/4.0',
                    description: 'Curso intensivo de 6 meses enfocado en tecnologías modernas de desarrollo web. Proyecto final: aplicación e-commerce completa con React y Node.js para empresas ecuatorianas.'
                }
            ],
            skills: [
                { id: 1, name: 'React', level: 'expert', category: 'technical' },
                { id: 2, name: 'JavaScript', level: 'expert', category: 'technical' },
                { id: 3, name: 'TypeScript', level: 'advanced', category: 'technical' },
                { id: 4, name: 'HTML/CSS', level: 'expert', category: 'technical' },
                { id: 5, name: 'Node.js', level: 'intermediate', category: 'technical' },
                { id: 6, name: 'Vue.js', level: 'intermediate', category: 'technical' },
                { id: 7, name: 'Python', level: 'intermediate', category: 'technical' },
                { id: 8, name: 'Git', level: 'advanced', category: 'tools' },
                { id: 9, name: 'Docker', level: 'intermediate', category: 'tools' },
                { id: 10, name: 'Trabajo en equipo', level: 'advanced', category: 'soft' },
                { id: 11, name: 'Liderazgo', level: 'advanced', category: 'soft' },
                { id: 12, name: 'Comunicación', level: 'expert', category: 'soft' },
                { id: 13, name: 'Inglés', level: 'advanced', category: 'languages' },
                { id: 14, name: 'Alemán', level: 'intermediate', category: 'languages' }
            ]
        };
    };

    return (
        <div className="h-full bg-gray-100 dark:bg-gray-900 p-2 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                >
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Vista Previa del CV
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Esta es cómo se verá tu CV con la plantilla seleccionada
                    </p>
                </motion.div>

                {/* Preview Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-2xl rounded-lg overflow-hidden"
                    style={{
                        maxWidth: '210mm',
                        minHeight: '297mm',
                        margin: '0 auto'
                    }}
                    data-cv-preview
                >
                    {renderTemplate(getDisplayData())}
                </motion.div>

                {/* Información sobre datos de ejemplo */}
                {!hasData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
                    >
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                    Vista previa con datos de ejemplo
                                </h4>
                                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                    Esta es una vista previa de cómo se verá tu CV con la plantilla seleccionada.
                                    Completa tu información personal para ver tu CV real.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Preview Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                    <p>Esta vista previa muestra cómo se verá tu CV al exportarlo a PDF</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Preview;
