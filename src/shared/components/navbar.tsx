import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    Solar Explorer
                </Link>
            </div>
            <div className="mr-4">
                <p className="text-[15px] font-medium">Planetas</p>
            </div>
        </div>
    );
}