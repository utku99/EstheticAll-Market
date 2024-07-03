'use client'

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
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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

const NavbarContent = () => {
  const pathname = usePathname()
  const [data, setData] = useState([])

  useEffect(() => {
    let array = pathname.split('/')
    if (array[3] == 'products') {
      setData(['Ürünler'])
    } else if (array[3] == 'orders') {
      setData(['Siparişler'])
      if (array[4] == 'detail') {
        setData(['Siparişler', 'Sipariş Detayı'])
      }
    } else if (array[3] == 'customers') {
      setData(['Müşteriler'])
    } else if (array[3] == 'calendar') {
      setData(['Takvim'])
    }
  }, [pathname])

  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4 '>
        {/* <NavToggle />
        <NavSearch /> */}
        <Typography variant='h4'>Ana Sayfa</Typography>
        <div className='h-[26px] border-r border-[#EBE9F1]'></div>
        <i className='tabler-home bg-estheticAll_orange' />
        {data.map(item => (
          <>
            <div>{`${'>'}`}</div>
            <Typography variant='body1' color={'primary'}>
              {item}
            </Typography>
          </>
        ))}
      </div>
      <div className='flex items-center'>
        {/* <LanguageDropdown /> */}
        {/* <ModeDropdown /> */}
        {/* <ShortcutsDropdown shortcuts={shortcuts} /> */}
        {/* <NotificationsDropdown notifications={notifications} /> */}
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
