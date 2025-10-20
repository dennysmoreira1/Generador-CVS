import React from 'react';
import { motion } from 'framer-motion';
import { useResume } from '../../context/ResumeContext';

const PersonalInfoForm = () => {
    const { state, actions } = useResume();

    const handleInputChange = (field, value) => {
        actions.updatePersonalInfo({ [field]: value });
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre completo */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nombre Completo *
                    </label>
                    <input
                        type="text"
                        value={state.personalInfo.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="Tu nombre completo"
                    />
                </motion.div>

                {/* Título profesional */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Título Profesional
                    </label>
                    <input
                        type="text"
                        value={state.personalInfo.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="Desarrollador Frontend, Diseñador UX, etc."
                    />
                </motion.div>

                {/* Email */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={state.personalInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="tu@email.com"
                    />
                </motion.div>

                {/* Teléfono */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        value={state.personalInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="+593 967328523"
                    />
                </motion.div>

                {/* Ubicación */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ubicación
                    </label>
                    <input
                        type="text"
                        value={state.personalInfo.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="Guayaquil, Ecuador"
                    />
                </motion.div>

                {/* Sitio web */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Sitio Web
                    </label>
                    <input
                        type="url"
                        value={state.personalInfo.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="https://tu-sitio.com"
                    />
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        LinkedIn
                    </label>
                    <input
                        type="url"
                        value={state.personalInfo.linkedin}
                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="https://linkedin.com/in/tu-perfil"
                    />
                </motion.div>

                {/* GitHub */}
                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        GitHub
                    </label>
                    <input
                        type="url"
                        value={state.personalInfo.github}
                        onChange={(e) => handleInputChange('github', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="https://github.com/tu-usuario"
                    />
                </motion.div>
            </div>

            {/* Foto de perfil */}
            <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
                className="mb-6"
            >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Foto de Perfil
                </label>
                <div className="flex items-center space-x-4">
                    {state.personalInfo.profilePhoto ? (
                        <div className="relative">
                            <img
                                src={state.personalInfo.profilePhoto}
                                alt="Foto de perfil"
                                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                            />
                            <button
                                type="button"
                                onClick={() => handleInputChange('profilePhoto', null)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                                ×
                            </button>
                        </div>
                    ) : (
                        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    )}
                    <div className="flex-1">
                        <input
                            type="url"
                            value={state.personalInfo.profilePhoto || ''}
                            onChange={(e) => handleInputChange('profilePhoto', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                            placeholder="https://ejemplo.com/mi-foto.jpg"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Ingresa la URL de tu foto de perfil (recomendado: imagen cuadrada)
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Resumen profesional */}
            <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
            >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resumen Profesional
                </label>
                <textarea
                    value={state.personalInfo.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-none"
                    placeholder="Escribe un breve resumen de tu experiencia y objetivos profesionales..."
                />
            </motion.div>
        </motion.div>
    );
};

export default PersonalInfoForm;
