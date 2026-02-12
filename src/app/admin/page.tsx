"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Check if already logged in
        if (localStorage.getItem("agc_admin_auth") === "authenticated") {
            router.push("/admin/dashboard");
        }
    }, [router]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (username === "adminagc" && password === "goldencaptainhook") {
            localStorage.setItem("agc_admin_auth", "authenticated");
            router.push("/admin/dashboard");
        } else {
            setError("Invalid credentials");
            setPassword("");
        }
    };

    return (
        <div className="min-h-screen bg-charcoal-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gold-500 rounded-sm mx-auto mb-4 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-charcoal-900" />
                    </div>
                    <h1 className="text-2xl font-heading font-bold text-white mb-2">AGC Admin Access</h1>
                    <p className="text-gray-400 text-sm">Authorized personnel only</p>
                </div>

                <div className="glass-panel p-8 rounded-sm border border-gold-500/20">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="bg-charcoal-900/50 border-charcoal-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="bg-charcoal-900/50 border-charcoal-600"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full bg-gold-500 text-charcoal-900 hover:bg-gold-400">
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
