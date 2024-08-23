/**
 * Convierte un objeto Date en una cadena de texto con el formato `DD/MM/YYYY`.
 *
 * @param {Date} date - La fecha que se va a formatear.
 * @returns {string} La fecha formateada como `DD/MM/YYYY`.
 *
 * @example
 * const date = new Date('2024-08-02T00:00:00');
 * const formattedDate = formatDate(date);
 * console.log(formattedDate); // "02/08/2024"
 */
export function formatDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}

/**
 * Convierte un objeto Date en una cadena de texto con el formato `HH : mm`.
 *
 * @param {Date} date - La fecha que se va a formatear.
 * @returns {string} La hora formateada como `HH : mm`.
 *
 * @example
 * const date = new Date('2024-08-02T10:58:00');
 * const formattedTime = formatHora(date);
 * console.log(formattedTime); // "10 : 58"
 */
export function formatHora(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0'); // Asegura que las horas tengan dos dígitos
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Asegura que los minutos tengan dos dígitos
  
    return `${hours} : ${minutes}`;
}