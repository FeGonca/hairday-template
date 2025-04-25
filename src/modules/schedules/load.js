import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)

    // Obtém a data do input.
    const date = selectedDate.value;

    // Buscar na API os agendamentos para carregar do lado direito da tela.
    const dailySchedules = await scheduleFetchByDay({ date }) 
    
    // Exibe os agendamentos.
    scheduleShow({ dailySchedules })
    
    // Rederiza as horas disponíveis.
    hoursLoad({date});
}