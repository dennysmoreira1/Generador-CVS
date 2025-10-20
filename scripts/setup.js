#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Configurando ResumeCraft...\n');

// Crear archivo .env.local si no existe
const envPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Archivo .env.local creado');
}

// Verificar que todas las dependencias estén instaladas
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
    console.log('✅ package.json encontrado');
} else {
    console.log('❌ package.json no encontrado');
    process.exit(1);
}

console.log('\n🎉 ¡Configuración completada!');
console.log('\nPara iniciar el proyecto:');
console.log('  npm start');
console.log('\nPara construir para producción:');
console.log('  npm run build');
console.log('\nPara desplegar en Vercel:');
console.log('  vercel --prod');
