import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert('Message sent successfully!');
      reset(); // form clear ho jaayega
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
  
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
          <input
            {...register('fullName', { required: 'Name is required' })}
            type="text"
            placeholder="John Doe"
            className={`w-full bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors font-light`}
          />
          {errors.fullName && <p className="text-red-500 text-[10px] ml-4">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Email Address</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="john@example.com"
            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors font-light`}
          />
          {errors.email && <p className="text-red-500 text-[10px] ml-4">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Subject</label>
        <input
          {...register('subject', { required: 'Subject is required' })}
          type="text"
          placeholder="Project Inquiry"
          className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors font-light`}
        />
        {errors.subject && <p className="text-red-500 text-[10px] ml-4">{errors.subject.message}</p>}
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          placeholder="Hello Sushma, I'm interested in..."
          className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors font-light resize-none`}
        />
        {errors.message && <p className="text-red-500 text-[10px] ml-4">{errors.message.message}</p>}
      </div>
      <button
  type="submit"
  disabled={sending}
  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
>
  {sending ? 'Sending...' : 'Launch Message'}
  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
</button>
    </form>
  );
}
