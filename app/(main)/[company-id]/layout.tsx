import Sidebar from "../this/components/sidebar"
import CompanyGuard from "../this/components/company-guard"

export default function MainLayout({ children, params }: { children: React.ReactNode, params: { 'company-id': string } }) {
    return (
        <div className="flex h-screen">
            <CompanyGuard urlCompanyId={params['company-id']} />
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}