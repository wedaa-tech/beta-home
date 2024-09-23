import Link from "next/link";

const Logo = () => {
    return (
        <Link 
            href="/" 
            className="flex items-center justify-center text-xl font-bold"
            style={{ height: '80px' }}
        >
            WeDAA
        </Link>
    );
}

export default Logo;
