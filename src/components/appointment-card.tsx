import { FiCalendar, FiMail } from "react-icons/fi";

export function AppointmentCard() {
  return (
    <div className="w-full max-w-xl">
      <span className="eyebrow">Reserva en minutos</span><h2 className="section-title mt-5">Agenda tu cita</h2>
      <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">Tecnología moderna y atención de calidad para cuidar tu sonrisa con tranquilidad.</p>
      <form className="mt-8 grid gap-4">
        <label className="field"><FiMail /><input type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" /></label>
        <label className="field"><select aria-label="Selecciona tu dentista" defaultValue=""><option value="" disabled>Selecciona tu dentista</option><option>Dra. María Lubin</option><option>Dr. Corey Dodkis</option><option>Dra. Milagros Culhane</option></select></label>
        <label className="field"><FiCalendar /><input type="date" aria-label="Fecha de cita" /></label>
        <button className="button-primary mt-2 w-full" type="submit">Reservar consulta</button>
      </form>
    </div>
  );
}
