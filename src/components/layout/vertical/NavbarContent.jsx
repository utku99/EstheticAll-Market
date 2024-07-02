// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import NavSearch from '@components/layout/shared/search'
import LanguageDropdown from '@components/layout/shared/LanguageDropdown'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import ShortcutsDropdown from '@components/layout/shared/ShortcutsDropdown'
import NotificationsDropdown from '@components/layout/shared/NotificationsDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material'

// Vars
const shortcuts = [
  {
    url: '/apps/calendar',
    icon: 'tabler-calendar',
    title: 'Calendar',
    subtitle: 'Appointments'
  },
  {
    url: '/apps/invoice/list',
    icon: 'tabler-file-dollar',
    title: 'Invoice App',
    subtitle: 'Manage Accounts'
  },
  {
    url: '/apps/user/list',
    icon: 'tabler-user',
    title: 'Users',
    subtitle: 'Manage Users'
  },
  {
    url: '/apps/roles',
    icon: 'tabler-users-group',
    title: 'Role Management',
    subtitle: 'Permissions'
  },
  {
    url: '/',
    icon: 'tabler-device-desktop-analytics',
    title: 'Dashboard',
    subtitle: 'User Dashboard'
  },
  {
    url: '/pages/account-settings',
    icon: 'tabler-settings',
    title: 'Settings',
    subtitle: 'Account Settings'
  }
]

const notifications = [
  {
    avatarImage: '/images/avatars/8.png',
    title: 'Congratulations Flora 🎉',
    subtitle: 'Won the monthly bestseller gold badge',
    time: '1h ago',
    read: false
  },
  {
    title: 'Cecilia Becker',
    avatarColor: 'secondary',
    subtitle: 'Accepted your connection',
    time: '12h ago',
    read: false
  },
  {
    avatarImage: '/images/avatars/3.png',
    title: 'Bernard Woods',
    subtitle: 'You have new message from Bernard Woods',
    time: 'May 18, 8:26 AM',
    read: true
  },
  {
    avatarIcon: 'tabler-chart-bar',
    title: 'Monthly report generated',
    subtitle: 'July month financial report is generated',
    avatarColor: 'info',
    time: 'Apr 24, 10:30 AM',
    read: true
  },
  {
    avatarText: 'MG',
    title: 'Application has been approved 🚀',
    subtitle: 'Your Meta Gadgets project application has been approved.',
    avatarColor: 'success',
    time: 'Feb 17, 12:17 PM',
    read: true
  },
  {
    avatarIcon: 'tabler-mail',
    title: 'New message from Harry',
    subtitle: 'You have new message from Harry',
    avatarColor: 'error',
    time: 'Jan 6, 1:48 PM',
    read: true
  }
]

// const handleUserLogout = async () => {
//   try {
//     // Sign out from the app
//     await signOut({ redirect: false })

//     // Redirect to login page
//     router.push(getLocalizedUrl('/login', locale))
//   } catch (error) {
//     console.error(error)

//     // Show above error in a toast like following
//     // toastService.error((err as Error).message)
//   }
// }

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        {/* <NavToggle />
        <NavSearch /> */}
        <Stack spacing={2}>
          <Breadcrumbs separator='›' aria-label='breadcrumb'>
            [
            <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
              MUI
            </Link>
            ,
            <Link
              underline='hover'
              key='2'
              color='inherit'
              href='/material-ui/getting-started/installation/'
              onClick={handleClick}
            >
              Core
            </Link>
            ,
            <Typography key='3' color='text.primary'>
              Breadcrumb
            </Typography>
            , ]
          </Breadcrumbs>
          <Breadcrumbs separator='-' aria-label='breadcrumb'>
            [
            <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
              MUI
            </Link>
            ,
            <Link
              underline='hover'
              key='2'
              color='inherit'
              href='/material-ui/getting-started/installation/'
              onClick={handleClick}
            >
              Core
            </Link>
            ,
            <Typography key='3' color='text.primary'>
              Breadcrumb
            </Typography>
            , ]
          </Breadcrumbs>
          <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
            [
            <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
              MUI
            </Link>
            ,
            <Link
              underline='hover'
              key='2'
              color='inherit'
              href='/material-ui/getting-started/installation/'
              onClick={handleClick}
            >
              Core
            </Link>
            ,
            <Typography key='3' color='text.primary'>
              Breadcrumb
            </Typography>
            , ]
          </Breadcrumbs>
        </Stack>
      </div>
      <div className='flex items-center'>
        {/* <LanguageDropdown /> */}
        {/* <ModeDropdown /> */}
        <ShortcutsDropdown shortcuts={shortcuts} />
        {/* <NotificationsDropdown notifications={notifications} /> */}
        {/* <UserDropdown /> */}
      </div>
    </div>
  )
}

export default NavbarContent
