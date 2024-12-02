// ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import DesktopHomepage from '../homepage';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Zpracování odeslaných dat
    console.log(data);
    // Můžeš zde přidat kód pro odeslání dat na server
  };

  return (
    <div className="contact-form">
      <h2>Kontaktujte nás</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Jméno</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Jméno je povinné' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'E-mail je povinný',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Zadejte platný e-mail'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message">Zpráva</label>
          <textarea
            id="message"
            {...register('message', { required: 'Zpráva je povinná' })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <button type="submit">Odeslat</button>
      </form>
    </div>
  );
}

export default ContactForm;
