import React from 'react';
import { motion } from 'framer-motion';
import {
    Sun,
    Moon,
    Download,
    Eye,
    Edit3,
    FileText
} from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { exportToPDF } from '../utils/pdfExport';

const Navbar = () => {
    const { state, actions } = useResume();

    const handleThemeToggle = () => {
        actions.setTheme({
            mode: state.theme.mode === 'light' ? 'dark' : 'light'
        });
    };

    const handleExportPDF = async () => {
        try {
            await exportToPDF();
        } catch (error) {
            console.error('Error al exportar PDF:', error);
        }
    };

    const handlePreviewToggle = () => {
        actions.togglePreview();
    };

    const handleLogoClick = () => {
        // Si está en modo preview, salir del preview
        if (state.isPreviewMode) {
            actions.togglePreview();
        }
        // Si ya se seleccionó una plantilla, permitir volver al selector
        if (state.templateSelected) {
            actions.setTemplateSelected(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.button
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogoClick}
                        title="Volver al inicio"
                    >
                        <FileText className="h-8 w-8 text-primary-600" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ResumeCraft
                        </span>
                    </motion.button>

                    {/* Navegación central */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePreviewToggle}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${state.isPreviewMode
                                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            {state.isPreviewMode ? <Edit3 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span>{state.isPreviewMode ? 'Editar' : 'Vista Previa'}</span>
                        </motion.button>
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center space-x-2">
                        {/* Selector de color */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                        >
                            <input
                                type="color"
                                value={state.theme.primaryColor}
                                onChange={(e) => actions.setTheme({ primaryColor: e.target.value })}
                                className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 cursor-pointer"
                                title="Color principal"
                            />
                        </motion.div>

                        {/* Toggle tema */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleThemeToggle}
                            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title={`Cambiar a modo ${state.theme.mode === 'light' ? 'oscuro' : 'claro'}`}
                        >
                            {state.theme.mode === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </motion.button>

                        {/* Exportar PDF */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleExportPDF}
                            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            <Download className="h-4 w-4" />
                            <span className="hidden sm:inline">Exportar PDF</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
