import { Button, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
const NavBar = () => {
    return (
        <>
            <nav class="fixed w-full z-20 top-0 start-0" style={{ backgroundColor: "rgb(254, 253, 237, 0.8)" }}>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">

                        <span class="self-center text-xl font-semibold whitespace-nowrap" style={{ fontWeight: "bold" }}>INMD1의 나른한곳</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button size='lg' variant='link' leftIcon={<FaGithub style={{ height: '3.5vh', width: 'auto' }} color='black' />} />
                        <Button size='lg' variant='link' leftIcon={<GoCodeReview style={{ height: '3.5vh', width: 'auto' }} color='black' />} />
                        <div className='pt-1 none sm:hidden'>
                            <Menu>
                                <MenuButton>
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </MenuButton>
                                <MenuList className='pt-2'>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>

                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="#home" class="block py-2 px-3  rounded md:bg-transparent  md:p-0 " aria-current="page">Home&About</a>
                            </li>
                            <li>
                                <a href="#skill" class="block py-2 px-3 rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent ">Skill</a>
                            </li>
                            <li>
                                <a href="projct" class="block py-2 px-3 rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent ">Project</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3  md:hover:bg-transparent md:p-0  md:dark:hover:bg-transparent ">More?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar