import Link from "next/link";
import Footer from "../Footer/Footer";


export default function HomeLayout({children}) {
    return (
        <div>
            <Link href = '/'>
                <a><h4 style = {{position: 'absolute', top: '20px' ,left: '20px'}} > <span className="text-white">Tasnia</span> <span className="text-danger">Tamanna</span> </h4></a>
            </Link>
        {children} 
        <div>
            <Footer />
        </div>
        </div>
    )
}
