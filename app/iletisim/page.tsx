"use client";

import Image from "next/image";
import { motion } from "motion/react";

const contactInfo = {
  phone: "+90 536 924 32 13",
  whatsapp: "905369243213",
  address: "Güngören Cad. No:3, Çırçır Mah., Eyüpsultan, İstanbul",
  hours: {
    weekday: "11:00 - 23:00",
    weekend: "11:00 - 00:00",
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.912776968842!2d28.93199!3d41.05722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0f2a8c7c9c1%3A0x7e4a0b4c0c0c0c0c!2sG%C3%BCng%C3%B6ren%20Cad.%2C%20%C3%87%C4%B1r%C3%A7%C4%B1r%2C%20Ey%C3%BCpsultan%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1707400000000!5m2!1str!2str",
};

const contactMethods = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Hızlı iletişim için WhatsApp'tan yazın",
    icon: (
      <svg className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    action: `https://wa.me/${contactInfo.whatsapp}`,
    buttonText: "WhatsApp'tan Yazın",
    color: "from-green-600 to-green-700",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    id: "phone",
    title: "Telefon",
    description: "Bizi doğrudan arayın",
    icon: (
      <svg className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    action: `tel:${contactInfo.phone}`,
    buttonText: contactInfo.phone,
    color: "from-[rgb(var(--brandWine))] to-[rgb(var(--brand))]",
    hoverColor: "hover:shadow-[rgb(var(--brandWine))/30]",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-[104px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/gallery-1.jpg"
            alt="Medeniyet Kasap & Izgara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[rgb(var(--bg))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 py-20 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[var(--font-heading)] text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              İletişim
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-5 h-1 w-20 origin-left rounded-full bg-[rgb(var(--brandWine))]"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
            >
              Rezervasyon, sipariş veya sorularınız için bize ulaşın
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.id}
              href={method.action}
              target={method.id === "whatsapp" ? "_blank" : undefined}
              rel={method.id === "whatsapp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[rgb(var(--panel))] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl ${method.hoverColor}`}
            >
              {/* Icon with animation */}
              <motion.div
                whileHover={{ rotate: method.id === "phone" ? 12 : 0, scale: 1.1 }}
                className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${method.color} p-4 text-white transition-all duration-300`}
              >
                {method.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white">{method.title}</h3>
              <p className="mt-2 text-white/50">{method.description}</p>

              {/* Button */}
              <div className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${method.color} px-6 py-3 font-medium text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                {method.buttonText}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Decorative pulse */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-2xl border border-white/[0.06] bg-[rgb(var(--panel))] p-6 transition-all duration-300 hover:border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/10 p-3 text-white transition-all duration-300 group-hover:bg-[rgb(var(--brandWine))] group-hover:scale-110">
                <svg className="h-6 w-6 transition-transform duration-300 group-hover:bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Adres</h4>
                <p className="mt-1 text-white/50">{contactInfo.address}</p>
                <p className="mt-1 text-xs text-white/30">Çırçır Metro İstasyonu yakını</p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group rounded-2xl border border-white/[0.06] bg-[rgb(var(--panel))] p-6 transition-all duration-300 hover:border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/10 p-3 text-white transition-all duration-300 group-hover:bg-[rgb(var(--brandWine))] group-hover:scale-110">
                <svg className="h-6 w-6 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Çalışma Saatleri</h4>
                <p className="mt-1 text-white/50">Hafta içi: {contactInfo.hours.weekday}</p>
                <p className="text-white/50">Hafta sonu: {contactInfo.hours.weekend}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/[0.06]"
        >
          <div className="bg-[rgb(var(--panel))] px-6 py-4">
            <h3 className="text-lg font-semibold text-white">📍 Konum</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.5!2d28.931!3d41.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzI1LjIiTiAyOMKwNTUnNTEuNiJF!5e0!3m2!1str!2str!4v1707400000000!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale transition-all duration-500 hover:grayscale-0"
          />
        </motion.div>
      </section>
    </main>
  );
}
