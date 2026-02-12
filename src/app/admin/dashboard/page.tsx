"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { triggerWebhook } from "@/lib/webhook";
import { Send, Upload, Check, LogOut } from "lucide-react";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    const [post, setPost] = useState({
        title: "",
        category: "Production",
        description: "",
    });

    useEffect(() => {
        if (localStorage.getItem("agc_admin_auth") !== "authenticated") {
            router.push("/admin");
        } else {
            setAuthenticated(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("agc_admin_auth");
        router.push("/admin");
    };

    const handlePublish = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        await triggerWebhook({
            ...post,
            timestamp: new Date().toISOString(),
            platforms: ["Telegram", "Facebook", "WhatsApp"],
            author: "Admin User",
        });

        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
            setPost({ title: "", category: "Production", description: "" });
        }, 3000);
    };

    if (!authenticated) {
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-heading font-bold">Social Command Center</h1>
                <Button variant="outline" onClick={handleLogout} className="gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                </Button>
            </div>

            <div className="glass-panel p-8 rounded-sm border border-gold-500/20">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Send className="w-5 h-5 text-gold-500" />
                    Create Market Update
                </h2>

                <form onSubmit={handlePublish} className="space-y-6">

                    <div className="space-y-2">
                        <Label>Update Title</Label>
                        <Input
                            value={post.title}
                            onChange={(e) => setPost({ ...post, title: e.target.value })}
                            placeholder="e.g. Q3 Extraction Reports Live"
                            className="bg-charcoal-900/50 border-charcoal-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Category</Label>
                        <select
                            className="w-full h-12 bg-charcoal-900/50 border border-charcoal-600 rounded-sm px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            value={post.category}
                            onChange={(e) => setPost({ ...post, category: e.target.value })}
                        >
                            <option>Production</option>
                            <option>Market Analysis</option>
                            <option>Sustainability</option>
                            <option>Corporate News</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label>Media</Label>
                        <div className="border border-dashed border-charcoal-600 rounded-sm p-8 text-center bg-charcoal-900/50 hover:bg-charcoal-900/70 transition-colors cursor-pointer">
                            <Upload className="mx-auto h-8 w-8 text-gray-500 mb-2" />
                            <span className="text-xs text-gray-400">Click to upload image/video</span>
                        </div>
                    </div>

                    <div className="glass-panel p-4 rounded text-xs text-gray-400 border border-gold-500/10">
                        <span className="text-gold-500 font-bold block mb-1">Automation Targets:</span>
                        Telegram (Gold Investor Channel), Facebook (Page + Groups), WhatsApp (VVIP List)
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gold-500 text-charcoal-900 hover:bg-gold-400"
                        disabled={loading || !post.title}
                    >
                        {loading ? "Broadcasting..." : success ? <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Published</span> : "Publish to Network"}
                    </Button>

                </form>
            </div>

            <div className="mt-12">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Recent Broadcasts</h3>
                <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center p-3 glass-panel rounded text-sm text-gray-400 border border-gold-500/10">
                            <span>Msg ID #882{i} - Market Update</span>
                            <span className="text-green-500 text-xs">Delivered</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
