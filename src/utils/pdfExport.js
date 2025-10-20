import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async () => {
    try {
        // Encontrar el elemento del CV en la vista previa
        const cvElement = document.querySelector('[data-cv-preview]');

        if (!cvElement) {
            throw new Error('No se encontró el elemento del CV para exportar');
        }

        // Mostrar indicador de carga
        const loadingIndicator = document.createElement('div');
        loadingIndicator.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        font-size: 18px;
      ">
        <div style="text-align: center;">
          <div style="
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
          "></div>
          Generando PDF...
        </div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
        document.body.appendChild(loadingIndicator);

        // Configurar html2canvas
        const canvas = await html2canvas(cvElement, {
            scale: 2, // Mayor resolución
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: cvElement.scrollWidth,
            height: cvElement.scrollHeight,
            scrollX: 0,
            scrollY: 0
        });

        // Crear PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Calcular dimensiones para ajustar la imagen al PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        // Centrar la imagen en el PDF
        const x = (pdfWidth - finalWidth) / 2;
        const y = (pdfHeight - finalHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);

        // Generar nombre de archivo con fecha
        const now = new Date();
        const dateString = now.toISOString().split('T')[0];
        const fileName = `CV_${dateString}.pdf`;

        // Descargar el PDF
        pdf.save(fileName);

        // Remover indicador de carga
        document.body.removeChild(loadingIndicator);

        // Mostrar notificación de éxito
        showNotification('PDF generado exitosamente', 'success');

    } catch (error) {
        console.error('Error al generar PDF:', error);

        // Remover indicador de carga si existe
        const loadingIndicator = document.querySelector('div[style*="position: fixed"]');
        if (loadingIndicator) {
            document.body.removeChild(loadingIndicator);
        }

        // Mostrar notificación de error
        showNotification('Error al generar PDF. Inténtalo de nuevo.', 'error');
    }
};

// Función para mostrar notificaciones
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;

    // Colores según el tipo
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);

    // Agregar estilos de animación
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);
    }
};

// Función para exportar datos como JSON
export const exportToJSON = (data) => {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `resume_data_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showNotification('Datos exportados exitosamente', 'success');
    } catch (error) {
        console.error('Error al exportar JSON:', error);
        showNotification('Error al exportar datos', 'error');
    }
};

// Función para importar datos desde JSON
export const importFromJSON = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                resolve(data);
                showNotification('Datos importados exitosamente', 'success');
            } catch (error) {
                console.error('Error al parsear JSON:', error);
                reject(new Error('Archivo JSON inválido'));
                showNotification('Error: Archivo JSON inválido', 'error');
            }
        };

        reader.onerror = () => {
            reject(new Error('Error al leer el archivo'));
            showNotification('Error al leer el archivo', 'error');
        };

        reader.readAsText(file);
    });
};
