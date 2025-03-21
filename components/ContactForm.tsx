"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const details: {
    id: number;
  name: "Name" | "Email" | "Phone" | "Subject" | "Message";
  value: string;
}[] = [
  {
    id: 1,
    name: "Name",
    value: "Enter your name",
  },
  {
    id: 2,
    name: "Email",
    value: "abc@example.com",
  },
  {
    id: 3,
    name: "Phone",
    value: "Enter your phone number",
  },
  {
    id: 4,
    name: "Subject",
    value: "Enter your subject",
  },
];
const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof FormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {details.map((detail) => (
          <FormField
            key={detail.id}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-slate-700">
                  {detail.name}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={detail.value}
                    {...field}
                    className="rounded-lg border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

<FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-slate-700">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here"
                  {...field}
                  className="rounded-lg border-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default ContactForm;
