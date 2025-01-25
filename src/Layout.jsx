import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/boss/create`}>Create New Boss</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;