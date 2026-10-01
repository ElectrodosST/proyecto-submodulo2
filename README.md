# CBTIS 128 - Cuidado de Instalaciones

Este proyecto es una aplicación web informativa sobre el cuidado y mantenimiento de las instalaciones del CBTIS 128.

## Descripción

La página presenta información sobre:
- centro de cómputo
- laboratorios
- aulas del 1 al 41
- canchas de futbol y basquetbol
- biblioteca
- cafetería
- instalación en general

También permite reportar una queja indicando el lugar y la descripción del problema.

## Archivos incluidos

- `index.html` - página principal de inicio
- `informacion.html` - información general y recomendaciones
- `quejas.html` - formulario para reportar incidencias
- `mantenimiento.html` - panel privado para administrar reportes y cuentas
- `auth.js` - autenticación local de jefes de grupo
- `contacto.html` - sección de contacto y ubicación
- `styles.css` - estilos generales y animaciones

## Cómo abrir la aplicación

1. Abre la carpeta del proyecto donde están los archivos HTML.
2. Haz doble clic en `index.html` para abrir la página directamente en el navegador.
3. También puedes abrir cualquiera de las otras páginas desde el mismo navegador si lo necesitas.

## Características

- diseño simple y moderno
- varias páginas con navegación
- animaciones suaves
- formulario para registrar quejas
- registro de jefes de grupo con correo institucional `a.<dígitos>@cbtis128.edu.mx`
- consulta pública de reportes, estados de atención y evidencias
- mantenimiento puede ver el correo institucional de quien publicó cada queja
- almacenamiento local de cuentas y reportes en el navegador
- estilos separados en un archivo CSS
- no requiere servidor local ni localhost

## Acceso y almacenamiento

Los jefes de grupo pueden crear su cuenta desde `quejas.html` usando un correo institucional con formato `a.<dígitos>@cbtis128.edu.mx`; sólo una sesión iniciada permite registrar quejas. `reportes.html` es público y muestra el estado y las evidencias sin exponer el correo del reportante. El acceso oculto a mantenimiento está en la esquina inferior derecha de `reportes.html`; la contraseña inicial es `mantenimiento128`. Desde ese panel se administran las cuentas y se consulta el correo del autor. Un reporte sólo se puede eliminar cuando está marcado como resuelto y tiene evidencia de seguimiento.

Las cuentas y los reportes se guardan en `localStorage` del navegador. Este modo sirve para uso local o demostración: no es una base de datos compartida ni ofrece seguridad real, porque los datos y la validación están en el navegador. Para proteger información institucional en producción se necesita un servidor con autenticación y una base de datos central.

### Cuenta de demostración

Sólo para iniciar el ejemplo local:

- Correo: `a.23308051280594@cbtis128.edu.mx`
- Contraseña temporal: `Ejemplo128#2026`

La cuenta se agrega automáticamente al abrir la aplicación por primera vez en cada navegador. No uses estas credenciales para una cuenta real ni publiques este README con ellas en un repositorio público.

## Recomendación

Para una mejor experiencia visual, abre los archivos directamente desde tu navegador sin depender de un servidor local.
