import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

const Editor = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const tabs = [
        { id: 'personal', label: 'Información Personal', icon: '👤' },
        { id: 'experience', label: 'Experiencia', icon: '💼' },
        { id: 'education', label: 'Educación', icon: '🎓' },
        { id: 'skills', label: 'Habilidades', icon: '⚡' }
    ];

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalInfoForm />;
            case 'experience':
                return <ExperienceForm />;
            case 'education':
                return <EducationForm />;
            case 'skills':
                return <SkillsForm />;
            default:
                return <PersonalInfoForm />;
        }
    };

    return (
        <div className="h-full bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto p-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Editor de CV
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Completa tu información para crear un CV profesional
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex border-b border-gray-200 dark:border-gray-700">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${activeTab === tab.id
                                    ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="text-lg">{tab.icon}</span>
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                {renderTabContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Auto-save indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                >
                    <Save className="h-4 w-4" />
                    <span>Los cambios se guardan automáticamente</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Editor;
