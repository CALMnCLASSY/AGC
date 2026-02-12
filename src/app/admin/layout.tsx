export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white flex">
            {/* Sidebar (Mock) */}
            <aside className="w-64 border-r border-charcoal-700 p-6 hidden md:block">
                <h2 className="text-gold-500 font-bold mb-8 uppercase tracking-widest">AGC Admin</h2>
                <nav className="space-y-4 text-sm text-gray-400">
                    <div className="text-white font-bold">Dashboard</div>
                    <div>New Post</div>
                    <div>Inquiries</div>
                    <div>Settings</div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    )
}
