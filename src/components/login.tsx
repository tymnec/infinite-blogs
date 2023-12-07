"use client";

import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// Use State
import { useState } from "react";
import { auth } from "@/app/firebase";
import { GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

// Importing an alert
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import Link from "next/link";

export function LoginInAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState<AlertVariant>("default");
  const [details, setDetails] = useState<AlertDetails>({
    title: "",
    description: "",
  });

  //   Alert variant type
  type AlertVariant = "default" | "destructive" | null | undefined;
  //  Alert details type
  type AlertDetails = {
    title: string;
    description: string;
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = async (e: any) => {
    e.preventDefault();

    try {
      await signInWithRedirect(auth, githubProvider).then(() => {
        setShowAlert(true);
        setVariant("default");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      });
    } catch (error) {
      if (error instanceof Error) {
        setVariant("destructive");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    }
  };

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      await signInWithRedirect(auth, googleProvider).then(() => {
        setShowAlert(true);
        setVariant("default");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      });
    } catch (error) {
      if (error instanceof Error) {
        setVariant("destructive");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    }
  };

  const handleLoginAccount = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        setShowAlert(true);
        setVariant("default");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);

        // Set Details
        setDetails({
          title: "Success!",
          description: "Logged In Successfully",
        });

        console.log(auth.currentUser);
      });
    } catch (error) {
      if (error instanceof Error) {
        setVariant("destructive");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);

        // Set Details
        setDetails({
          title: "Error!",
          description: error.message,
        });
      }
    }
  };

  //   Alert box:
  const AlertMessage = ({
    variant,
    details,
  }: {
    variant: AlertVariant;
    details: AlertDetails;
  }) => {
    return (
      <>
        <Alert variant={variant}>
          <AlertTitle>{details.title}</AlertTitle>
          <AlertDescription>{details.description}</AlertDescription>
        </Alert>
      </>
    );
  };

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-5 left-5">
        <Link href={"/"}>
          <Button variant="outline" className="mb-4">
            Back
          </Button>{" "}
        </Link>
      </div>

      {/* Main Card */}
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login in to your account</CardTitle>
          <CardDescription>
            Enter your email below to login in your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={handleGithubSignIn}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLoginAccount}>
            Login
          </Button>
        </CardFooter>
      </Card>

      {
        <div className="fixed top-5 right-5">
          {showAlert && <AlertMessage variant={variant} details={details} />}
        </div>
      }
    </>
  );
}
