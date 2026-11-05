import Link from "next/link";

export default function Navbar() {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="flex flex-row gap-3 ">
                <div className="mx-auto w-full max-w-5xl px-4">
                    <Link href="/" className="btn btn-ghost text-xl">
                        Solar Explorer
                    </Link>
                </div>
                <div className="mx-auto w-full max-w-5xl px-4 text-[14px]">
                    <p>
                        Planetas
                    </p>
                </div>
            </div>
        </header>
    );
}
