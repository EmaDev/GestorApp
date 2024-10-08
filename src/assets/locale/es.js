const data = [
    {
        SELECCIONARPAIS: "Seleccioná tu país",
        CONTINUAR: "Continuar",
        TIPODOC: "Tipo Documento",
        NUMERODOC: "Número Documento",
        NUMEROCEDULA: "Número de Cédula",
        CEDULA: "Cédula de Identidad",
        CONTRASEÑA: "Contraseña",
        REPETIRCONTRASEÑA: "Repetir Contraseña",
        NUEVA_CONTRASEÑA: "Nueva contraseña",
        REPETIR_NUEVA_CONTRASEÑA: "Repetir nueva contraseña",
        INGRESAR: "Ingresar",
        OLVIDEPASS: "Olvidé mi contraseña",
        CAMBIARPAIS: "Cambiar país",
        LOGOLOGIN: "segurarse_es",
        LOGOREGISTRO: "segurarse",
        SALUDO: "Hola",
        POLIZASVIGENTES: "Tus pólizas",
        POLIZAS_AUTORIZADAS: "Pólizas autorizadas",
        VERMAS: "Ver más",
        DATOSPERSONALES: "Datos personales",
        NOMBRE: "Nombre",
        FECHANACIMIENTO: "Fecha de nacimiento",
        DOCUMENTO: "Documento",
        DOMICILIO: "Domicilio",
        EMAIL: "Email",
        CERRARSESION: "Cerrar sesión",
        AUTORIZACIONESATERCEROS: "Autorizaciones a terceros​",
        AUTORIZAAOTRASPERSONAS: "Autorizá a otras personas a ver tus pólizas",
        DESAUTORIZAR: "Quitar autorización",
        ADICIONARPERSONAS: "Agregar Autorizado",
        ASEGURADO: "Asegurado",
        USO: "Uso",
        POLIZA: "Póliza",
        CHASIS: "Chasis",
        VIGENCIA: "Vigencia",
        DESCARGARDOCUMENTACION: "Descargar documentación",
        COMPARTIR: "Compartir",
        CONSULTAS: "Consultas",
        PEDIRASISTENCIA: "Pedir asistencia",
        CAMBIARMEDIODEPAGO: "Cambiar medio de pago",
        AUTORIZACIONES: "Autorizaciones",
        MARCAMODELO: "Marca-Modelo",
        ASEGURADORA: "Compañía",
        LEYENDASINIESTRO: "Para informar a tu compañía sobre un siniestro, llamá al teléfono listado a continuación",
        TELEFONO: "TELEFONO",
        LLAMAR: "Llamar",
        SINIESTROS: "Siniestros",
        LEYENDASINSINIESTROS: "¡No tenés siniestros registrados!",
        VOLVER: "Volver",
        DATOS: "Datos",
        HACERCONSULTA: "Hacé tu consulta acá",
        SELECCIONAPOLIZA: "Seleccioná tu póliza",
        CONSULTA: "Consulta",
        ENVIAR: "Enviar",
        CENTROCONSULTAS: "Centro de Consultas",
        UNMOMENTO: "Un momento...",
        CONSULTAREGISTRADATITULAR: "Consulta Registrada",
        CONSULTAREGISTRADACUERPO: "Se registró tu consulta. Un asesor se va a comunicar con vos por correo o por teléfono para resolverla.",
        ACEPTAR: "Aceptar",
        CONSULTAERROR: "Error al enviar consulta",
        NOHAYCONEXIONCUERPO: "No hay conexión a internet",
        NOHAYCONEXIONNIDOCUMENTO: "No hay conexión a internet y no tenemos disponible el último documento. Intentá conectarte y descargalo nuevamente.",
        NOHAYCONEXIONTITULAR: "Conexion",
        NOPUDIMOSGUARDARPDF: "No pudimos guardar el PDF, intente nuevamente",
        DESCARGARPOLIZATITLE: "Documento",
        DESCARGARDOCUMENTOCUERPO: "Es recomendable descargar los archivos PDF por WiFi.",
        CANCELAR: "Cancelar",
        CONFIRMAR: "Confirmar",
        PROGRAMAPDF: "Recuerde que necesita un programa para visualizar PDFs. ¿Desea abrir el archivo?.",
        DESCARGAEXITOSA: "Se descargó su póliza con éxito.",
        DOCUMENTONOENCONTRADO: "No encontramos tu documentación.",
        ERRORTITLE: "Error",
        ULTIMODOCUMENTOGUARDADO: "No hay conexión a internet, pero tenemos el último documento guardado. ¿Querés visualizarlo?",
        ERRORALABRIRPDF: "Ocurrió un error al abrir archivo. Verificá si tenés una aplicación para visualizar los PDF.",
        NUEVACLAVENOCOINCIDE: "La nueva contraseña no coincide",
        NECESITACORREO: "Para registrarte necesitamos un correo electrónico",
        INFORMACION: "Información",
        DATOSINCORRECTOS: "Datos incorrectos",
        ACTUALIZACION: "Actualizacion",
        ACTUALIZACIONCUERPO: "¡Hay una nueva versión de nuestra app! Actualizala.",
        INICIOSERVIDORCAIDO: "Se produjo un error al intentar iniciar sesión.",
        PATENTE: "Patente"
    }
]

export const getEspaniol = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.map(item => item))
        }, 0)
    })
}