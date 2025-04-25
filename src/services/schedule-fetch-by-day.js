import { dayjs } from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {

        // Fazendo a requisição.
        const response = await fetch(`${apiConfig.baseURL}/schedule`);

        // Converte para Json.
        const data = await response.json();

        // Filtra os agendamentos pelo dia selecionado.
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscare os agendamentos do dia selecionado.");
        
    }
    
}