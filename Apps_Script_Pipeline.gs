// ============================================================
// GOOGLE APPS SCRIPT PARA PIPELINE JR RODAS
// 
// Instrucciones:
// 1. Ve a https://script.google.com
// 2. Crea un nuevo proyecto
// 3. Copia TODO este código y reemplaza el contenido por defecto
// 4. Guarda (Ctrl+S)
// 5. Ve a Deploy → New deployment → Web app
// 6. Ejecutar como: tu cuenta
// 7. Quién tiene acceso: Anyone
// 8. Copia la URL del deployment y pégala en el Pipeline HTML
// ============================================================

function doPost(e) {
  try {
    // Obtener la hoja de cálculo activa
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0]; // Primera hoja
    
    // Parsear los datos enviados desde el HTML
    const data = JSON.parse(e.postData.contents);
    
    // Si la hoja está vacía, agregar encabezados
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Código Cliente',
        'Nombre Cliente',
        'Fase',
        'Valor Estimado ($)',
        'Producto/Descripción',
        'Próxima Acción',
        'Fecha Próximo Contacto',
        'Notas',
        'Asesor'
      ];
      sheet.appendRow(headers);
    }
    
    // Preparar la fila de datos
    const row = [
      new Date().toLocaleString('es-EC'),  // Timestamp con formato Ecuador
      data.code || '',                       // Código cliente
      data.name || '',                       // Nombre cliente
      data.phase || '',                      // Fase (p1, p2, p3, p4)
      data.value || 0,                       // Valor estimado
      data.product || '',                    // Producto
      data.action || '',                     // Próxima acción
      data.contactDate || '',                // Fecha contacto
      data.notes || '',                      // Notas
      data.advisor || ''                     // Asesor
    ];
    
    // Agregar la fila a la hoja
    sheet.appendRow(row);
    
    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Datos guardados' }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // En caso de error, registrarlo
    Logger.log('Error en doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función auxiliar para depuración (opcional)
function testDoPost() {
  const testData = {
    code: 'TEST001',
    name: 'Cliente de Prueba',
    phase: 'p1',
    value: 5000,
    product: 'Filtros y repuestos',
    action: 'Llamar al cliente',
    contactDate: '2026-05-25',
    notes: 'Este es un registro de prueba',
    advisor: 'Sistema'
  };
  
  Logger.log('Datos de prueba:');
  Logger.log(JSON.stringify(testData, null, 2));
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Código Cliente',
      'Nombre Cliente',
      'Fase',
      'Valor Estimado ($)',
      'Producto/Descripción',
      'Próxima Acción',
      'Fecha Próximo Contacto',
      'Notas',
      'Asesor'
    ];
    sheet.appendRow(headers);
  }
  
  const row = [
    new Date().toLocaleString('es-EC'),
    testData.code,
    testData.name,
    testData.phase,
    testData.value,
    testData.product,
    testData.action,
    testData.contactDate,
    testData.notes,
    testData.advisor
  ];
  
  sheet.appendRow(row);
  Logger.log('Fila insertada correctamente');
}

// ============================================================
// NOTAS IMPORTANTES:
// 
// 1. Este script se ejecuta CUANDO el Pipeline HTML envía datos
// 2. Cada vez que cambies un cliente en el pipeline, 
//    se agrega una fila con los datos actuales
// 3. Los encabezados se crean automáticamente en la primera ejecución
// 4. El script necesita acceso a Google Drive (lo pedirá al desplegarse)
// 5. Para actualizar después, Deploy → Manage deployments → editar
// ============================================================
