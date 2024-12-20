"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Custominput from "./Custominput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/actions/user.actions";
import SignIn from "@/app/(auth)/signin/page";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "signup") {
        const newUser = await signUp(data);
        setUser(newUser);
      }

      if (type === "signin") {
        const response = await SignIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      //Sign Up with Appwrite & create plain link token
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="auth-form">
      <header className="flex gap-5 flex-col md:gap-5">
        <Link href="/" className="flex cursor-pointer item-center gap-1 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your detials"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/**PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "signup" && (
                <>
                  <div className="flex gap-4">
                    <Custominput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <Custominput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="ex: Doe"
                    />
                  </div>
                  <Custominput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <Custominput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <Custominput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="ex: NY"
                    />
                    <Custominput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 11101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Custominput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <Custominput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}
              <Custominput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Custominput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "signin" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "signin" ? "/signup" : "/signin"}
              className="form-link"
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
