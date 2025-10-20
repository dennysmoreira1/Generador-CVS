import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit3, Save, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const SkillsForm = () => {
    const { state, actions } = useResume();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        level: 'intermediate',
        category: 'technical'
    });

    const skillLevels = [
        { value: 'beginner', label: 'Principiante' },
        { value: 'intermediate', label: 'Intermedio' },
        { value: 'advanced', label: 'Avanzado' },
        { value: 'expert', label: 'Experto' }
    ];

    const skillCategories = [
        { value: 'technical', label: 'Técnicas' },
        { value: 'soft', label: 'Blandas' },
        { value: 'languages', label: 'Idiomas' },
        { value: 'tools', label: 'Herramientas' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (editingId) {
            actions.updateSkill({ id: editingId, ...formData });
            setEditingId(null);
        } else {
            actions.addSkill(formData);
        }
        setFormData({
            name: '',
            level: 'intermediate',
            category: 'technical'
        });
        setIsAdding(false);
    };

    const handleEdit = (skill) => {
        setFormData(skill);
        setEditingId(skill.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        actions.deleteSkill(id);
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            level: 'intermediate',
            category: 'technical'
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'beginner':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'advanced':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'expert':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'technical':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'soft':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
            case 'languages':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'tools':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const groupedSkills = state.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <div className="space-y-6">
            {/* Lista de habilidades agrupadas */}
            {Object.keys(groupedSkills).length > 0 && (
                <div className="space-y-6">
                    {Object.entries(groupedSkills).map(([category, skills]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-3"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                                {skillCategories.find(cat => cat.value === category)?.label || category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {skill.name}
                                                </h4>
                                                <div className="flex space-x-2 mt-2">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(skill.level)}`}>
                                                        {skillLevels.find(level => level.value === skill.level)?.label}
                                                    </span>
                                                    <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(skill.category)}`}>
                                                        {skillCategories.find(cat => cat.value === skill.category)?.label}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleEdit(skill)}
                                                    className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                                                >
                                                    <Edit3 className="h-4 w-4" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleDelete(skill.id)}
                                                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nombre de la habilidad *
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="JavaScript, Python, Liderazgo, etc."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nivel
                                    </label>
                                    <select
                                        value={formData.level}
                                        onChange={(e) => handleInputChange('level', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    >
                                        {skillLevels.map(level => (
                                            <option key={level.value} value={level.value}>
                                                {level.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Categoría
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => handleInputChange('category', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    >
                                        {skillCategories.map(category => (
                                            <option key={category.value} value={category.value}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
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
                    <span>Agregar Habilidad</span>
                </motion.button>
            )}
        </div>
    );
};

export default SkillsForm;
