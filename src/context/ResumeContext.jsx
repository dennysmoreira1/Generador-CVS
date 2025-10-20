import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Estado inicial
const initialState = {
    personalInfo: {
        fullName: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        website: '',
        linkedin: '',
        github: '',
        summary: '',
        profilePhoto: null // URL de la foto de perfil
    },
    experience: [],
    education: [],
    skills: [],
    selectedTemplate: 'minimal-pro',
    templateSelected: false, // Nuevo estado para controlar si se ha seleccionado plantilla
    theme: {
        mode: 'light',
        primaryColor: '#3b82f6'
    },
    isPreviewMode: false
};

// Tipos de acciones
const actionTypes = {
    UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
    ADD_EXPERIENCE: 'ADD_EXPERIENCE',
    UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
    DELETE_EXPERIENCE: 'DELETE_EXPERIENCE',
    ADD_EDUCATION: 'ADD_EDUCATION',
    UPDATE_EDUCATION: 'UPDATE_EDUCATION',
    DELETE_EDUCATION: 'DELETE_EDUCATION',
    ADD_SKILL: 'ADD_SKILL',
    UPDATE_SKILL: 'UPDATE_SKILL',
    DELETE_SKILL: 'DELETE_SKILL',
    SET_TEMPLATE: 'SET_TEMPLATE',
    SET_TEMPLATE_SELECTED: 'SET_TEMPLATE_SELECTED',
    SET_THEME: 'SET_THEME',
    TOGGLE_PREVIEW: 'TOGGLE_PREVIEW',
    LOAD_DATA: 'LOAD_DATA',
    RESET_DATA: 'RESET_DATA'
};

// Reducer
const resumeReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PERSONAL_INFO:
            return {
                ...state,
                personalInfo: { ...state.personalInfo, ...action.payload }
            };

        case actionTypes.ADD_EXPERIENCE:
            return {
                ...state,
                experience: [...state.experience, { id: Date.now(), ...action.payload }]
            };

        case actionTypes.UPDATE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.map(exp =>
                    exp.id === action.payload.id ? { ...exp, ...action.payload } : exp
                )
            };

        case actionTypes.DELETE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.filter(exp => exp.id !== action.payload)
            };

        case actionTypes.ADD_EDUCATION:
            return {
                ...state,
                education: [...state.education, { id: Date.now(), ...action.payload }]
            };

        case actionTypes.UPDATE_EDUCATION:
            return {
                ...state,
                education: state.education.map(edu =>
                    edu.id === action.payload.id ? { ...edu, ...action.payload } : edu
                )
            };

        case actionTypes.DELETE_EDUCATION:
            return {
                ...state,
                education: state.education.filter(edu => edu.id !== action.payload)
            };

        case actionTypes.ADD_SKILL:
            return {
                ...state,
                skills: [...state.skills, { id: Date.now(), ...action.payload }]
            };

        case actionTypes.UPDATE_SKILL:
            return {
                ...state,
                skills: state.skills.map(skill =>
                    skill.id === action.payload.id ? { ...skill, ...action.payload } : skill
                )
            };

        case actionTypes.DELETE_SKILL:
            return {
                ...state,
                skills: state.skills.filter(skill => skill.id !== action.payload)
            };

        case actionTypes.SET_TEMPLATE:
            return {
                ...state,
                selectedTemplate: action.payload
            };

        case actionTypes.SET_TEMPLATE_SELECTED:
            return {
                ...state,
                templateSelected: action.payload
            };

        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: { ...state.theme, ...action.payload }
            };

        case actionTypes.TOGGLE_PREVIEW:
            return {
                ...state,
                isPreviewMode: !state.isPreviewMode
            };

        case actionTypes.LOAD_DATA:
            return {
                ...state,
                ...action.payload
            };

        case actionTypes.RESET_DATA:
            return initialState;

        default:
            return state;
    }
};

// Contexto
const ResumeContext = createContext();

// Provider
export const ResumeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resumeReducer, initialState);

    // Cargar datos del localStorage al inicializar
    useEffect(() => {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                dispatch({ type: actionTypes.LOAD_DATA, payload: parsedData });
            } catch (error) {
                console.error('Error al cargar datos guardados:', error);
            }
        }
    }, []);

    // Guardar datos en localStorage cuando cambie el estado
    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(state));
    }, [state]);

    // Acciones
    const actions = {
        updatePersonalInfo: (data) =>
            dispatch({ type: actionTypes.UPDATE_PERSONAL_INFO, payload: data }),

        addExperience: (data) =>
            dispatch({ type: actionTypes.ADD_EXPERIENCE, payload: data }),

        updateExperience: (data) =>
            dispatch({ type: actionTypes.UPDATE_EXPERIENCE, payload: data }),

        deleteExperience: (id) =>
            dispatch({ type: actionTypes.DELETE_EXPERIENCE, payload: id }),

        addEducation: (data) =>
            dispatch({ type: actionTypes.ADD_EDUCATION, payload: data }),

        updateEducation: (data) =>
            dispatch({ type: actionTypes.UPDATE_EDUCATION, payload: data }),

        deleteEducation: (id) =>
            dispatch({ type: actionTypes.DELETE_EDUCATION, payload: id }),

        addSkill: (data) =>
            dispatch({ type: actionTypes.ADD_SKILL, payload: data }),

        updateSkill: (data) =>
            dispatch({ type: actionTypes.UPDATE_SKILL, payload: data }),

        deleteSkill: (id) =>
            dispatch({ type: actionTypes.DELETE_SKILL, payload: id }),

        setTemplate: (template) =>
            dispatch({ type: actionTypes.SET_TEMPLATE, payload: template }),

        setTemplateSelected: (selected) =>
            dispatch({ type: actionTypes.SET_TEMPLATE_SELECTED, payload: selected }),

        setTheme: (theme) =>
            dispatch({ type: actionTypes.SET_THEME, payload: theme }),

        togglePreview: () =>
            dispatch({ type: actionTypes.TOGGLE_PREVIEW }),

        resetData: () =>
            dispatch({ type: actionTypes.RESET_DATA })
    };

    return (
        <ResumeContext.Provider value={{ state, actions }}>
            {children}
        </ResumeContext.Provider>
    );
};

// Hook personalizado
export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume debe ser usado dentro de ResumeProvider');
    }
    return context;
};
