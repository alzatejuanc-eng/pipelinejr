# 📊 Guía: Conectar Pipeline JR Rodas con Google Sheets

## ¿Por qué Google Sheets?

El archivo HTML ya guarda todos los datos automáticamente en tu navegador (localStorage). Agregar Google Sheets te permite:
- **Sincronización en tiempo real**: Los datos se guardan en la nube
- **Acceso desde cualquier dispositivo**: Abre el pipeline desde cualquier computadora
- **Respaldo seguro**: Los datos están en Google Drive
- **Análisis adicional**: Usa Sheets para gráficos, filtros, etc.

---

## 📋 Pasos para configurar

### Paso 1: Crear un Google Apps Script

1. Ve a **https://script.google.com**
2. Haz clic en **"Nuevo proyecto"**
3. Copia **todo el código** que aparece en el botón **📋 Copiar código** del modal de Google Sheets en el HTML
4. Pega el código en el editor de Apps Script (reemplaza lo que está por defecto)
5. Guarda el proyecto (Ctrl+S)

### Paso 2: Crear una Google Sheet

1. Ve a **https://sheets.google.com**
2. Abre un **"Nuevo archivo"** o usa uno existente
3. La hoja debe estar en tu Google Drive
4. **Importante**: El script actualizará la primera hoja (_Sheet1_)

### Paso 3: Vincular el Apps Script a la Sheet

1. Vuelve a **script.google.com**
2. En el editor, ve a **Proyecto** (arriba a la izquierda)
3. Haz clic en el icono de engranaje ⚙️ para ver el **ID del Proyecto**
4. En el Apps Script, abre el menú **Ejecutar** → Selecciona la función `doPost`
5. Se pedirá permiso - autoriza la aplicación para acceder a tu Drive

### Paso 4: Desplegar el Apps Script

1. En el Apps Script, haz clic en **Deploy** (arriba, botón azul)
2. Elige **New deployment**
3. En "Tipo", selecciona **Web app**
4. En "Ejecutar como", elige **tu cuenta**
5. En "Quién tiene acceso", elige **Anyone** (importante para que funcione)
6. Haz clic en **Deploy**
7. Se te mostrará una **Deployment URL** - **CÓPIALA**

Ejemplo de URL:
```
https://script.google.com/macros/d/XXXX-YYYY-ZZZZ/usercopy
```

### Paso 5: Conectar en el Pipeline

1. Abre el archivo **Pipeline_Comercial_JR_Rodas_2026.html**
2. Haz clic en el botón **🔗 Sheets** (arriba a la derecha, al lado de 💾)
3. Se abrirá un modal de configuración
4. Pega la **Deployment URL** en el campo
5. Marca la casilla **"Guardar automáticamente en Google Sheets"** (recomendado)
6. Haz clic en **"Conectar Google Sheets"**

¡Listo! Ya está configurado.

---

## ✅ Prueba la conexión

1. Después de conectar, el sistema probará automáticamente la conexión
2. Si todo funciona, verás ✓ Conectado a Google Sheets en el modal
3. Abre tu Google Sheet - verás una fila de prueba con "Prueba de conexión"
4. Si todo va bien, ya puedes borrar esa fila de prueba

---

## 🔄 Cómo funciona la sincronización

**Con Auto-Sync activado:**
- Cada vez que edites un cliente (hacer clic y guardar cambios)
- Cada vez que muevas un cliente entre fases
- Cada vez que agregues un cliente nuevo
- Los datos se envían automáticamente a la Google Sheet

**Datos que se guardan en Google Sheets:**
- Código del cliente
- Nombre del cliente
- Fase actual del pipeline
- Valor estimado
- Producto/descripción
- Próxima acción
- Fecha de próximo contacto
- Notas
- Asesor asignado
- Timestamp (fecha/hora)

---

## 💾 Tu información sigue siendo segura

- Los datos se guardan **TAMBIÉN en tu navegador** (localStorage)
- Google Sheets es solo un **respaldo adicional**
- Puedes desconectar en cualquier momento sin perder datos
- Descarga el Excel cuando quieras (botón ⬇ Exportar Excel)
- Descarga el JSON cuando quieras (botón 💾)

---

## 🛠 Solucionar problemas

**"Error al conectar"**
- Verifica que copiaste la URL completa (debe empezar con https://script.google.com)
- Asegúrate que desplegaste como "Web app" con "Anyone" puede usar

**"Los datos no aparecen en Sheets"**
- Abre el Apps Script nuevamente
- Ve a **Ejecuciones** (izquierda) para ver si hay errores
- Verifica que autorizaste la aplicación

**"¿Qué pasa si pierdo la URL?"**
- Puedes regenerarla: En Apps Script → Deploy → Manage deployments → Nueva URL

**"¿Puedo cambiar la Sheet después?"**
- Sí. Desconecta, luego vuelve a conectar con una nueva URL desde otra Sheet

---

## 📱 Uso desde múltiples dispositivos

1. Descarga el archivo **Pipeline_Comercial_JR_Rodas_2026.html** en cada dispositivo
2. Conecta a la misma Google Sheet desde cada uno
3. Abre desde cualquier navegador
4. Los datos se sincronizarán automáticamente

---

## 📊 Hacer análisis en Google Sheets

Ya que tienes los datos en Sheets, puedes:
- Hacer **gráficos** del pipeline
- **Filtrar** por asesor, fase o fecha
- **Buscar** clientes específicos
- **Calcular** totales por fase con SUMA()
- **Crear reportes** con PIVOT TABLES

---

## ❌ Desconectar Google Sheets

Si quieres dejar de sincronizar:
1. Abre el modal 🔗 Sheets
2. Haz clic en **"Desconectar"**
3. Tus datos locales siguen intactos
4. El Excel export sigue funcionando

---

## 📞 Preguntas frecuentes

**P: ¿Es gratis?**
R: Sí, completamente. Google Apps Script y Google Sheets son gratuitos.

**P: ¿Cuántas filas puedo guardar?**
R: Google Sheets soporta más de 5 millones de filas. Para el pipeline, sobra.

**P: ¿Qué pasa si el internet se va?**
R: Los datos se guardan localmente sin problema. Cuando vuelva el internet, se sincronizarán.

**P: ¿Puedo compartir la Sheet con mi equipo?**
R: Sí, comparte la Google Sheet con tus colegas para que vean los datos en tiempo real.

**P: ¿Se pierden los datos si borro el Apps Script?**
R: No. Los datos en Sheets siguen ahí. Puedes crear un nuevo deployment en cualquier momento.

---

**Versión**: Pipeline JR Rodas 2026 con Google Sheets  
**Última actualización**: Mayo 2026
