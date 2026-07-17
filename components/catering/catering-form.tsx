"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cateringSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  eventType: z.string().min(2, "Tell us what you are planning."),
  guestCount: z.string().min(1, "Add an estimated guest count."),
  details: z.string().min(20, "Share a few details so the team can reply with the right options."),
});

type CateringValues = z.infer<typeof cateringSchema>;

export function CateringForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CateringValues>({
    resolver: zodResolver(cateringSchema),
  });

  const onSubmit = async (values: CateringValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return;
    }

    reset();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-espresso/10 bg-white/75 p-7 shadow-[0_22px_55px_rgba(45,33,24,0.08)]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm text-charcoal/80">
          Name
          <input {...register("name")} className="mt-2 w-full rounded-2xl border border-espresso/10 bg-oat-milk px-4 py-3 outline-none" />
          {errors.name ? <span className="mt-1 block text-xs text-[#8d4330]">{errors.name.message}</span> : null}
        </label>
        <label className="text-sm text-charcoal/80">
          Email
          <input {...register("email")} className="mt-2 w-full rounded-2xl border border-espresso/10 bg-oat-milk px-4 py-3 outline-none" />
          {errors.email ? <span className="mt-1 block text-xs text-[#8d4330]">{errors.email.message}</span> : null}
        </label>
        <label className="text-sm text-charcoal/80">
          Event Type
          <input {...register("eventType")} className="mt-2 w-full rounded-2xl border border-espresso/10 bg-oat-milk px-4 py-3 outline-none" />
          {errors.eventType ? <span className="mt-1 block text-xs text-[#8d4330]">{errors.eventType.message}</span> : null}
        </label>
        <label className="text-sm text-charcoal/80">
          Estimated Guests
          <input {...register("guestCount")} className="mt-2 w-full rounded-2xl border border-espresso/10 bg-oat-milk px-4 py-3 outline-none" />
          {errors.guestCount ? <span className="mt-1 block text-xs text-[#8d4330]">{errors.guestCount.message}</span> : null}
        </label>
      </div>
      <label className="mt-5 block text-sm text-charcoal/80">
        Event Details
        <textarea {...register("details")} rows={5} className="mt-2 w-full rounded-[1.5rem] border border-espresso/10 bg-oat-milk px-4 py-3 outline-none" />
        {errors.details ? <span className="mt-1 block text-xs text-[#8d4330]">{errors.details.message}</span> : null}
      </label>
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-espresso px-5 py-3 text-sm font-medium text-oat-milk hover:bg-roast disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        {submitted ? <p className="text-sm text-sage">Inquiry submitted. This demo route accepts requests successfully.</p> : null}
      </div>
    </form>
  );
}
