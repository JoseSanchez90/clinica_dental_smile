import { FiCalendar, FiMail } from "react-icons/fi";
import { DemoForm } from "@/components/demo-form";

export function AppointmentCard() {
  return (
    <div className="w-full max-w-xl">
      <span className="eyebrow">Reserva en minutos</span>
      <h2 className="section-title mt-5">Agenda tu cita</h2>
      <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
        Tecnología moderna y atención de calidad para cuidar tu sonrisa con
        tranquilidad.
      </p>
      <DemoForm
        className="mt-8 grid gap-4"
        successTitle="Cita solicitada"
        successMessage="Recibimos tu solicitud. Pronto nos comunicaremos contigo para confirmar la fecha y el profesional elegido."
      >
        <label className="field">
          <FiMail />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
            required
          />
        </label>
        <label className="field">
          <select name="dentist" aria-label="Selecciona tu dentista" defaultValue="" required>
            <option value="" disabled>
              Selecciona tu dentista
            </option>
            <option>Dra. María Lubin</option>
            <option>Dr. Corey Dodkis</option>
            <option>Dra. Milagros Culhane</option>
          </select>
        </label>
        <label className="field">
          <FiCalendar />
          <input type="date" name="appointmentDate" aria-label="Fecha de cita" required />
        </label>
        <button className="button-primary mt-2 w-full" type="submit">
          Reservar consulta
        </button>
      </DemoForm>
    </div>
  );
}
