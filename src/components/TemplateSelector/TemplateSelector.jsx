import React from 'react';
import { motion } from 'framer-motion';
import { Check, Eye } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const TemplateSelector = () => {
    const { state, actions } = useResume();

    const templates = [
        {
            id: 'minimal-pro',
            name: 'Minimal Pro',
            description: 'Diseño limpio y profesional con colores suaves',
            preview: '/api/placeholder/300/400',
            features: ['Diseño minimalista', 'Fácil de leer', 'Ideal para profesionales']
        },
        {
            id: 'creative-edge',
            name: 'Creative Edge',
            description: 'Plantilla moderna con elementos visuales llamativos',
            preview: '/api/placeholder/300/400',
            features: ['Diseño creativo', 'Incluye foto de perfil', 'Perfecto para diseñadores']
        },
        {
            id: 'corporate-dark',
            name: 'Corporate Dark',
            description: 'Estilo corporativo con tema oscuro y elegante',
            preview: '/api/placeholder/300/400',
            features: ['Tema oscuro', 'Estilo corporativo', 'Ideal para ejecutivos']
        }
    ];

    const handleTemplateSelect = (templateId) => {
        actions.setTemplate(templateId);
        actions.setTemplateSelected(true);
        // Ahora el usuario irá automáticamente al editor
    };

    const handlePreview = (templateId) => {
        actions.setTemplate(templateId);
        actions.setTemplateSelected(true);
        actions.togglePreview();
    };

    return (
        <div className="h-full bg-gray-50 dark:bg-gray-800 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Selecciona una Plantilla
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Elige el diseño que mejor represente tu perfil profesional
                            </p>
                        </div>

                        {/* Botón para volver si ya se seleccionó una plantilla */}
                        {state.templateSelected && (
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => actions.setTemplateSelected(false)}
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span>Cambiar plantilla</span>
                            </motion.button>
                        )}
                    </div>
                </motion.div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-lg border-2 transition-all duration-300 ${state.selectedTemplate === template.id
                                ? 'border-primary-500 shadow-primary-200 dark:shadow-primary-900'
                                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                                }`}
                        >
                            {/* Selected indicator */}
                            {state.selectedTemplate === template.id && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10"
                                >
                                    <Check className="h-5 w-5 text-white" />
                                </motion.div>
                            )}

                            {/* Template Preview */}
                            <div className="p-4">
                                <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 rounded-lg mx-auto mb-2"
                                            style={{ backgroundColor: state.theme.primaryColor }}
                                        />
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Vista previa de {template.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Template Info */}
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {template.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {template.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-1">
                                        {template.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full mr-2"
                                                    style={{ backgroundColor: state.theme.primaryColor }}
                                                />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-4 pt-0 flex space-x-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleTemplateSelect(template.id)}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${state.selectedTemplate === template.id
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {state.selectedTemplate === template.id ? 'Seleccionado' : 'Seleccionar'}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handlePreview(template.id)}
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    title="Vista previa"
                                >
                                    <Eye className="h-4 w-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Current Selection Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Plantilla Seleccionada
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        {templates.find(t => t.id === state.selectedTemplate)?.name} -
                        {templates.find(t => t.id === state.selectedTemplate)?.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Puedes cambiar de plantilla en cualquier momento. Los cambios se aplicarán inmediatamente a tu CV.
                    </p>

                    {/* Call to Action */}
                    <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                        <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                            ¡Siguiente paso!
                        </h4>
                        <p className="text-sm text-primary-700 dark:text-primary-300 mb-3">
                            Ahora que has seleccionado una plantilla, es hora de completar tu información personal.
                        </p>
                        <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            ✅ Plantilla seleccionada - Ya puedes comenzar a editar
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TemplateSelector;
