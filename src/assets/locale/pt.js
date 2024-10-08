const data = [
    {
        SELECCIONARPAIS: "Selecione seu país",
        CONTINUAR: "Continuar",
        TIPODOC: "Tipo Documento",
        NUMERODOC: "Número do Documento",
        NUMEROCEDULA: "Número do Cédula",
        CEDULA: "Carteira de identidade",
        CONTRASEÑA: "Senha",
        REPETIRCONTRASEÑA: "Repetir Senha",
        INGRESAR: "Entrar",
        OLVIDEPASS: "Esqueci minha senha",
        CAMBIARPAIS: "Mudar país",
        LOGOLOGIN: "segurarse_pt",
        LOGOREGISTRO: "segurarse_reg_pt",
        SALUDO: "Oi",
        POLIZASVIGENTES: "Apólices",
        VERMAS: "Ver Mais",
        DATOSPERSONALES: "Dados Pessoais",
        NOMBRE: "Nome",
        FECHANACIMIENTO: "Data de nascimiento",
        DOCUMENTO: "CPF",
        DOMICILIO: "Endereço",
        EMAIL: "EMAIL",
        CERRARSESION: "Encerrar sessão",
        AUTORIZACIONESATERCEROS: "Autorização de terceiros​",
        AUTORIZAAOTRASPERSONAS: "Autorizar outras pessoas a ver suas apólices",
        ADICIONARPERSONAS: "Adicionar pessoas",
        ASEGURADO: "Segurado",
        USO: "Uso",
        POLIZA: "Apólice",
        CHASIS: "Chassi",
        VIGENCIA: "Fim de vigência",
        DESCARGARDOCUMENTACION: "Descarregar documentos​",
        COMPARTIR: "Compartilhar​",
        CONSULTAS: "Consultas",
        PEDIRASISTENCIA: "Pedir assistência",
        CAMBIARMEDIODEPAGO: "Mudar forma de pagamento​",
        AUTORIZACIONES: "Autorizações",
        MARCAMODELO: "Fazer-modelo",
        ASEGURADORA: "Companhia",
        LEYENDASINIESTRO: "Para informar sua empresa sobre uma reclamação, ligue para o número de telefone listado abaixo",
        TELEFONO: "TELEFONE",
        LLAMAR: "Chamar",
        SINIESTROS: "Sinistros",
        LEYENDASINSINIESTROS: "Não existem sinistros em abertos!",
        VOLVER: "Voltar",
        DATOS: "Dados",
        HACERCONSULTA: "Faça sua consulta aqui",
        SELECCIONAPOLIZA: "Selecione sua política",
        CONSULTA: "Inquerir",
        ENVIAR: "Mandar",
        CENTROCONSULTAS: "Centro de Consulta",
        UNMOMENTO: "Um momento...",
        CONSULTAREGISTRADATITULAR: "Consulta Registrada",
        CONSULTAREGISTRADACUERPO: "Sua consulta foi registrada. Um consultor entrará em contato com você por correio ou telefone para resolver o problema.",
        ACEPTAR: "Aceitar",
        CONSULTAERROR: "Erro ao enviar consulta",
        NOHAYCONEXIONCUERPO: "Não há conexão com a Internet",
        NOHAYCONEXIONTITULAR: "Conexão",
        NOPUDIMOSGUARDARPDF: "Não foi possível salvar o PDF, tente novamente",
        DESCARGARPOLIZATITLE: "Documento",
        DESCARGARDOCUMENTOCUERPO: "Recomenda-se fazer o download dos arquivos PDF por WiFi.",
        CANCELAR: "Cancelar",
        CONFIRMAR: "Confirme",
        PROGRAMAPDF: "Lembre-se de que você precisa de um programa para visualizar PDFs. Você quer abrir o arquivo?",
        DESCARGAEXITOSA: "Sua política foi baixada com sucesso.",
        DOCUMENTONOENCONTRADO: "Não encontramos sua documentação.",
        ERRORTITLE: "Erro",
        ULTIMODOCUMENTOGUARDADO: "Não há conexão com a Internet, mas temos o último documento salvo. Você quer visualizar isso?",
        ERRORALABRIRPDF: "Ocorreu um erro ao abrir o arquivo. Verifique se você possui um aplicativo para visualizar os PDFs.",
        NUEVACLAVENOCOINCIDE: "A nova senha não corresponde",
        NECESITACORREO: "Para se registrar, precisamos de um email",
        INFORMACION: "Em formação",
        DATOSINCORRECTOS: "Dados incorretos",
        ACTUALIZACION: "Melhoria",
        ACTUALIZACIONCUERPO: "Existe uma nova versão do nosso aplicativo! Atualizar isso.",
        INICIOSERVIDORCAIDO: "Ocorreu um erro ao tentar fazer login.",
        PATENTE: "Patente",
    }
]

export const getPortugues = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.map(item => item))
        }, 0)
    })
}