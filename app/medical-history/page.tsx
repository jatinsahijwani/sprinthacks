"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HoverEffect1 } from "@/components/ui/card-hover-effect1";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { DiagnosisForm } from "@/components/component/diagnosis-form";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};







export default function CardHoverEffectDemo() {
  return (
    <div className=" w-full h-full ">
    <div className="ml-[2vw] grid grid-cols-2">
      <MedicalHistoryCard />
      <div>
      <HoverEffect1 items={projects1} />
    <DiagnosisForm />
      </div>
    </div>
    </div>
  );
}
 const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];

const projects1 = [
    {
      title: "Anirudh",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
  ];

  import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Separator } from "@/components/ui/separator"
  
  export function MedicalHistoryCard() {
    return (
      <Card key="1" className="m-[2vw] border-green-600 border-[5px]">
        <CardHeader>
          <CardTitle className=" text-green-600 text-4xl">Medical History</CardTitle>
          <CardDescription>Patient's medical history and prescription details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-black">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-red-600 text-2xl">Diabetes</h3>
                <Button  size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only ">Edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>Insulin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-500 ">Prescribed by</h4>
                  <p>Dr. Smith Johnson</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-500">Date</h4>
                  <p>March 12, 2023</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-red-600 text-2xl">Hypertension</h3>
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium  text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>Aspirin</li>
                    <li>Lisinopril</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium  text-yellow-500 ">Prescribed by</h4>
                  <p>Dr. Alice Lee</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-500">Date</h4>
                  <p>June 5, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-red-600 text-2xl">Asthma</h3>
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium  text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>Albuterol</li>
                    <li>Inhaled corticosteroids</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium  text-yellow-500">Prescribed by</h4>
                  <p>Dr. Michael Brown</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-500">Date</h4>
                  <p>August 20, 2023</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-red-600 text-2xl">Allergies</h3>
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium  text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>Antihistamines</li>
                    <li>EpiPen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium  text-yellow-500">Prescribed by</h4>
                  <p>Dr. Sarah White</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-500">Date</h4>
                  <p>December 10, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-[5vh]">
          <Button className="w-full" variant="outline">
            View previous reports
          </Button>
        </CardFooter>
      </Card>
    )
  }
  
  function FileEditIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      </svg>
    )
  }