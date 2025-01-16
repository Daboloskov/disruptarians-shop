import { APP_NAME } from "@/lib/constants";
import ThemeToggle from './theme-toggle';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='border-t'>
            <div className="p-5 flex items-center justify-center">
                © {currentYear}, {APP_NAME}
                <div className='ml-2'>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
