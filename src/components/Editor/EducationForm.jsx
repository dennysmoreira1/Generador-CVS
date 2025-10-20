import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit3, Save, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const EducationForm = () => {
    const { state, actions } = useResume();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        current: false,
        gpa: '',
        description: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (editingId) {
            actions.updateEducation({ id: editingId, ...formData });
            setEditingId(null);
        } else {
            actions.addEducation(formData);
        }
        setFormData({
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            current: false,
            gpa: '',
            description: ''
        });
        setIsAdding(false);
    };

    const handleEdit = (education) => {
        setFormData(education);
        setEditingId(education.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        actions.deleteEducation(id);
    };

    const handleCancel = () => {
        setFormData({
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            current: false,
            gpa: '',
            description: ''
        });
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="space-y-6">
            {/* Lista de educación */}
            <div className="space-y-4">
                {state.education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {edu.degree} {edu.field && `en ${edu.field}`}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {edu.startDate} - {edu.current ? 'Presente' : edu.endDate}
                                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                                </p>
                                {edu.description && (
                                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex space-x-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleEdit(edu)}
                                    className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                                >
                                    <Edit3 className="h-4 w-4" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleDelete(edu.id)}
                                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Formulario de agregar/editar */}
            <AnimatePresence>
                {isAdding && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm"
                    >
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Institución *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.institution}
                                        onChange={(e) => handleInputChange('institution', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Nombre de la universidad o institución"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Título/Grado *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.degree}
                                        onChange={(e) => handleInputChange('degree', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Licenciatura, Maestría, Doctorado, etc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Campo de estudio
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.field}
                                        onChange={(e) => handleInputChange('field', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Ingeniería de Software, Marketing, etc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GPA
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.gpa}
                                        onChange={(e) => handleInputChange('gpa', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="3.8/4.0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Fecha de inicio
                                    </label>
                                    <input
                                        type="month"
                                        value={formData.startDate}
                                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Fecha de graduación
                                    </label>
                                    <input
                                        type="month"
                                        value={formData.endDate}
                                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                                        disabled={formData.current}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="current-education"
                                    checked={formData.current}
                                    onChange={(e) => handleInputChange('current', e.target.checked)}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="current-education" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                    Actualmente estudiando
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Descripción adicional
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                                    placeholder="Proyectos relevantes, honores, actividades extracurriculares..."
                                />
                            </div>

                            <div className="flex justify-end space-x-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCancel}
                                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    <X className="h-4 w-4" />
                                    <span>Cancelar</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSave}
                                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                                >
                                    <Save className="h-4 w-4" />
                                    <span>{editingId ? 'Actualizar' : 'Agregar'}</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botón agregar */}
            {!isAdding && (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsAdding(true)}
                    className="w-full flex items-center justify-center space-x-2 py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <Plus className="h-5 w-5" />
                    <span>Agregar Educación</span>
                </motion.button>
            )}
        </div>
    );
};

export default EducationForm;
