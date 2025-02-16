import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import {
    AppBar,
    Box,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from '@mui/material';
import {
    CanAccess,
    LoadingIndicator,
    LocalesMenuButton,
    Logout,
    UserMenu,
    usePermissions,
    useUserMenu,
} from 'react-admin';
import {Link, matchPath, useLocation} from 'react-router-dom';

import {useConfigurationContext} from '@/root/ConfigurationContext';

const Header = () => {
    const {logo, title} = useConfigurationContext();
    const {permissions} = usePermissions();
    const location = useLocation();

    let currentPath: string | boolean = '/';
    if (!!matchPath('/', location.pathname)) {
        currentPath = '/payments';
    } else if (!!matchPath('/payments/*', location.pathname)) {
        currentPath = '/payments';
    } else if (!!matchPath('/contacts/*', location.pathname)) {
        currentPath = '/contacts';
    } else if (!!matchPath('/companies/*', location.pathname)) {
        currentPath = '/companies';
    } else {
        currentPath = false;
    }

    return (
        <Box component="nav" sx={{flexGrow: 1}}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box
                            display="flex"
                            alignItems="center"
                            component={Link}
                            to="/"
                            sx={{
                                color: 'inherit',
                                textDecoration: 'inherit',
                            }}
                            gap={1.5}
                        >
                            <Box component="img" sx={{height: 24}} src={logo} alt={title}/>
                            <Typography component="span" variant="h5">
                                {title}
                            </Typography>
                        </Box>
                        <Box>
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                                indicatorColor="secondary"
                                textColor="inherit"
                            >
                                {permissions === 'processor' && (
                                    <Tab
                                        label={'Companies'}
                                        component={Link}
                                        to="/companies"
                                        value="/companies"
                                    />

                                )}
                                {permissions === 'processor' && (
                                    <Tab
                                        label={'Contacts'}
                                        component={Link}
                                        to="/contacts"
                                        value="/contacts"
                                    />

                                )}
                                <Tab
                                    label={'Payments'}
                                    component={Link}
                                    to="/payments"
                                    value="/payments"
                                />
                            </Tabs>
                        </Box>
                        <Box display="flex" alignItems="center">
                            {/*<LocalesMenuButton/>*/}
                            {/*<LoadingIndicator/>*/}
                            <UserMenu>
                                {/*<ConfigurationMenu/>*/}
                                {/*<CanAccess resource="sales" action="list">*/}
                                {/*    <UsersMenu/>*/}
                                {/*</CanAccess>*/}
                                <Logout/>
                            </UserMenu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const UsersMenu = () => {
    const {onClose} = useUserMenu() ?? {};
    return (
        <MenuItem component={Link} to="/sales" onClick={onClose}>
            <ListItemIcon>
                <PeopleIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
        </MenuItem>
    );
};

const ConfigurationMenu = () => {
    const {onClose} = useUserMenu() ?? {};
    return (
        <MenuItem component={Link} to="/settings" onClick={onClose}>
            <ListItemIcon>
                <SettingsIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>My info</ListItemText>
        </MenuItem>
    );
};
export default Header;
