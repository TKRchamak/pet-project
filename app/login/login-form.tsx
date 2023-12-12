"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import zod from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { authenticate } from "@/lib/action";

const formSchema = zod.object({
  email: zod.string().email({
    message: "Please enter a valid email address.",
  }),
  password: zod.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const router = useRouter();

  // authenticate
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: zod.infer<typeof formSchema>) => {
    // console.log("values:", values);

    // const params = new URLSearchParams(values);
    // params.append("param1", "value1");
    // params.append("param2", "value2");
    let value = { ...values, grant_type: "password_username" };

    const resData = await authenticate(value);
    console.log(resData);

    // if (values) {
    //   router.push("/dashboard");
    // }
  };

  // const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* <form action={dispatch} className="space-y-6"> */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="* * * * * * " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
