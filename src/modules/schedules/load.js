import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export function schedulesDay() {
    // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)

    // Obtém a data do input.
    const date = selectedDate.value;
    
    // Rederiza as horas disponíveis.
    hoursLoad({date})

    // Buscar na API os agendamentos para carregar do lado direito da tela.

}