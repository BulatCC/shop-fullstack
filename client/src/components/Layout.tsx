import { Outlet } from 'react-router-dom';
import { Header } from './Ui/Header/Header';
import { Footer } from './Ui/Footer/Footer';
import { useScrollTop } from '../hooks/UseScrollTop';

const Layout = (): JSX.Element => {
    useScrollTop();
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export { Layout };
