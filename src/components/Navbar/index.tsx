import {
    Navbar as NextuiNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuItem,
    NavbarMenu,
    NavbarMenuToggle,
    useDisclosure,
    Tab,
    Tabs,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';
import { Key, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal';
import UserContext from '../../contexts/UserContext';

const Navbar = () => {
    const { user } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const navigate = useNavigate();

    const location = useLocation();
    const currentPageName = location.pathname.split('/').pop();

    const menuItems = ['Home', 'Dashboard', 'Virtual Machines'];
    const links = menuItems.map((item) => {
        return item.toLowerCase().split(' ').join('_');
    });

    return (
        <>
            <NextuiNavbar
                onMenuOpenChange={setIsMenuOpen}
                shouldHideOnScroll
                isBordered
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className='sm:hidden'
                    />
                    <NavbarBrand
                        className='select-none text-inherit'
                        as={Link}
                        href='/home'
                    >
                        <p className='font-semibold text-inherit text-2xl'>
                            Elysium
                        </p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className='hidden sm:flex gap-4'
                    justify='center'
                >
                    <Tabs
                        variant='underlined'
                        selectedKey={currentPageName}
                        aria-label='Tabs'
                        onSelectionChange={(key: Key) => {
                            navigate(key.toString());
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <Tab key={links[index]} title={item} />
                        ))}
                    </Tabs>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        {user === null ? (
                            <Button
                                color='primary'
                                variant='flat'
                                onClick={onOpen}
                            >
                                Log In
                            </Button>
                        ) : (
                            <Dropdown placement='bottom-end'>
                                <DropdownTrigger>
                                    <Avatar
                                        as='button'
                                        className='transition-transform'
                                        size='sm'
                                        color='secondary'
                                        isBordered
                                        name={user.name}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label='Profile Actions'
                                    variant='flat'
                                >
                                    <DropdownItem
                                        key='profile'
                                        className='h-14 mb-2'
                                    >
                                        <p className='font-semibold'>
                                            Signed in as
                                        </p>
                                        <p className='font-semibold text-lg text-rainbow'>
                                            {user.name}
                                        </p>
                                    </DropdownItem>
                                    <DropdownItem key='settings'>
                                        <p>Account Settings</p>
                                    </DropdownItem>
                                    <DropdownItem key='log_out'>
                                        <p className='text-danger font-semibold'>
                                            Log Out
                                        </p>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )}
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    currentPageName === links[index]
                                        ? 'primary'
                                        : 'foreground'
                                }
                                href={links[index]}
                                className='text-xl py-3'
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NextuiNavbar>

            <LoginModal
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
};

export default Navbar;
