import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeProvider, useResume } from './context/ResumeContext';
import Navbar from './components/Navbar';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import TemplateSelector from './components/TemplateSelector/TemplateSelector';

// Componente principal de la aplicación
const AppContent = () => {
    const { state, actions } = useResume();

    // Aplicar tema al documento
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', state.theme.primaryColor);

        if (state.theme.mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [state.theme]);

    // Determinar qué componente mostrar
    const getCurrentView = () => {
        if (state.isPreviewMode) {
            return <Preview />;
        }

        // Si no se ha seleccionado una plantilla, mostrar selector
        if (!state.templateSelected) {
            return <TemplateSelector />;
        }

        return <Editor />;
    };

    // Función para manejar el toggle de vista previa
    const handlePreviewToggle = () => {
        // Si no hay datos básicos y está en modo preview, volver al selector
        if (!state.personalInfo.fullName && !state.personalInfo.email && state.isPreviewMode) {
            actions.togglePreview();
            return;
        }
        actions.togglePreview();
    };

    // Función para volver al selector de plantillas
    const handleBackToTemplates = () => {
        actions.setTemplateSelected(false);
        if (state.isPreviewMode) {
            actions.togglePreview();
        }
    };

    const pageVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="h-screen pt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={state.isPreviewMode ? 'preview' : 'editor'}
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="h-full"
                    >
                        {getCurrentView()}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Floating Action Button para cambiar vista */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePreviewToggle}
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
                style={{ backgroundColor: state.theme.primaryColor }}
            >
                {state.isPreviewMode ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
};

// Componente principal con provider
const App = () => {
    return (
        <ResumeProvider>
            <AppContent />
        </ResumeProvider>
    );
};

export default App;
