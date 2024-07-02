// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import CustomAvatar from '@core/components/mui/Avatar'
import AddEditAddress from '@/components/dialogs/add-edit-address'
import BillingCard from '@/components/dialogs/billing-card'
import EditBankInfo from '@/components/dialogs/edit-bank-info'

// Vars
const userData = {
  firstName: 'ABC',
  lastName: 'Medikal',
  userName: '@shallamb',
  billingEmail: 'Medikal Ürünler',
  status: 'Tax-8894',
  role: 'Üsküdar',
  taxId: '+1 (609) 933-44-22',
  contact: 'ABC Medikal Ürünler Pazarlama Lojistik Satış AŞ',
  address: 'Atatürk Mah. Sedef Cad. Ata 3/4 Sitesi B1 Blok No:19 D:265 Ataşehir/İstanbul/Türkiye',
  language: ['English']
}

const UserDetails = () => {
  // Vars
  const buttonProps = (children, color, variant, className) => ({
    children,
    color,
    variant,
    className
  })

  return (
    <>
      <Card>
        <CardContent className='flex flex-col pbs-12 gap-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center justify-center flex-col gap-4'>
              <div className='flex flex-col items-center gap-4'>
                <CustomAvatar alt='user-profile' src='/images/avatars/1.png' variant='rounded' size={120} />
                <Typography variant='h5'>{`${userData.firstName} ${userData.lastName}`}</Typography>
              </div>
              {/* <Chip label='Medikal Ürünler' color='secondary' size='small' variant='tonal' /> */}
              <Chip label='Medikal Ürünler' className='bg-[#7367F0] bg-opacity-[0.12]' size='small' variant='tonal' />
            </div>
            <div className='flex items-center justify-around flex-wrap gap-4'>
              <div className='flex items-center gap-4'>
                {/* <CustomAvatar variant='rounded' color='secondary' skin='light'>
                  <i className='tabler-check' />
                </CustomAvatar> */}
                <CustomAvatar variant='rounded' className='bg-[#7367F0] bg-opacity-[0.12]'>
                  <i className='tabler-check' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>1.23k</Typography>
                  <Typography>Sipariş</Typography>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                {/* <CustomAvatar variant='rounded' color='backgroundDefault' skin='light'>
                  <i className='tabler-shopping-bag' />
                </CustomAvatar> */}
                <CustomAvatar variant='rounded' className='bg-[#7367F0] bg-opacity-[0.12]'>
                  <i className='tabler-shopping-bag' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>568</Typography>
                  <Typography>Ürün</Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography variant='h5'>Genel Bilgiler</Typography>
            <Divider className='mlb-4' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Satış İletişim:
                </Typography>
                <Typography>{userData.userName}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Türü:
                </Typography>
                <Typography>{userData.billingEmail}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Vergi No:
                </Typography>
                <Typography color='text.primary'>{userData.status}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Vergi Dairesi:
                </Typography>
                <Typography color='text.primary'>{userData.role}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  İletişim:
                </Typography>
                <Typography color='text.primary'>{userData.taxId}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Ünvan:
                </Typography>
                <Typography color='text.primary'>{userData.contact}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Adres:
                </Typography>
                <Typography color='text.primary'>{userData.address}</Typography>
              </div>
              {/* <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Country:
                </Typography>
                <Typography color='text.primary'>{userData.country}</Typography>
              </div> */}
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Düzenle', 'primary', 'contained', 'text-white')}
              dialog={EditUserInfo}
              dialogProps={{ data: userData }}
              className='text-white'
            />
            {/* <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Suspend', 'error', 'tonal')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'suspend-account' }}
            /> */}
          </div>

          <div>
            <Typography variant='h5'>Banka Bilgileri</Typography>
            <Divider className='mlb-4' />
          </div>
          <div className='flex gap-4 justify-center'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Düzenle', 'primary', 'contained', 'text-white')}
              dialog={EditBankInfo}
              dialogProps={{ data: userData }}
              className='text-white'
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default UserDetails
