import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header>
                <nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">
                    <div class="w-1/2 pl-2 md:pl-0">
                        <a class="text-gray-100 text-base text-3xl no-underline hover:no-underline font-bold"  href="/"> 
                            Dark Souls Boss Compendium
                        </a>
                    </div>
                    <div class="w-full flex-grow flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-900 z-20" id="nav-content">
                        <ul class="list-reset flex flex-1 items-center px-4 md:px-0">
                            <li class="mr-6 my-2 md:my-0">
                                <Link to={`/`} class="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400">
                                    <i class="fas fa-home fa-fw mr-3 text-blue-400"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                                </Link>
                            </li>
                            <li class="mr-6 my-2 md:my-0">
                                <Link to={`/boss/create`} class="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400">
                                    <i class="fas fa-tasks fa-fw mr-3 text-blue-400"></i><span class="pb-1 md:pb-0 text-sm">Create new boss</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main class="pt-20">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;