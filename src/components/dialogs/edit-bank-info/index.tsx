'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import { FormControlLabel } from '@mui/material'

// Component Imports
import DialogCloseButton from '../DialogCloseButton'
import CustomTextField from '@core/components/mui/TextField'
import classNames from 'classnames'
import CustomAvatar from '@/@core/components/mui/Avatar'
import OpenDialogOnElementClick from '../OpenDialogOnElementClick'
import AddBankAccount from './AddBankAccount'

const initialData = {
  firstName: 'Oliver',
  lastName: 'Queen',
  userName: 'oliverQueen',
  billingEmail: 'oliverQueen@gmail.com',
  status: 'active',
  taxId: 'Tax-8894',
  contact: '+ 1 609 933 4422',
  language: ['English'],
  country: 'US',
  useAsBillingAddress: true
}

const status = ['Status', 'Active', 'Inactive', 'Suspended']
const languages = ['English', 'Spanish', 'French', 'German', 'Hindi']
const countries = ['Select Country', 'France', 'Russia', 'China', 'UK', 'US']

const EditBankInfo = ({ open, setOpen, data }) => {
  // States
  const [userData, setUserData] = useState(data || initialData)
  const [accounts, setAccounts] = useState([{}, {}])

  const handleClose = () => {
    setOpen(false)
    setUserData(initialData)
  }

  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      maxWidth='sm'
      scroll='body'
      sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
    >
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle variant='h4' className='flex gap-2 flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
        Banka Bilgileri
        {/* <Typography component='span' className='flex flex-col text-center'>
          Updating user details will receive a privacy audit.
        </Typography> */}
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='overflow-visible pbs-0 sm:pli-8'>
          <Grid container direction={'column'} gap={6}>
            <Grid item>
              <Typography variant='h5'>Hesaplarım</Typography>
            </Grid>
            {accounts.map(item => (
              <Grid item border={1} padding={6} borderColor={'lightgray'} className='rounded-md'>
                <Grid container direction={'row'} spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant='h6'>Garanti Bankası</Typography>
                    <Grid className='flex items-center space-x-2'>
                      <Typography variant='body1'>Hesap Adı:</Typography>
                      <Typography variant='body1'>Ranna Teknoloji</Typography>
                    </Grid>
                    <Grid className='flex items-center space-x-2'>
                      <Typography variant='body1'>IBAN:</Typography>
                      <Typography variant='body1'>2302 5115 2212 9865</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container direction={'row'} gap={4} justifyContent={'flex-end'}>
                      <Grid>
                        <OpenDialogOnElementClick
                          element={Button}
                          elementProps={buttonProps('Düzenle', 'primary', 'outlined')}
                          dialog={AddBankAccount}
                          dialogProps={{ data: [] }}
                          className='text-white'
                        />
                      </Grid>
                      <Grid>
                        <Button variant='outlined' color='secondary'>
                          Sil
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            <Grid item border={1} padding={6} borderColor={'lightgray'} className='rounded-md'>
              <Grid container justifyContent={'center'}>
                <Grid item>
                  <OpenDialogOnElementClick
                    element={Button}
                    elementProps={buttonProps('Yeni Ekle', 'primary', 'outlined')}
                    dialog={AddBankAccount}
                    dialogProps={{ data: [] }}
                    className='text-white'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default EditBankInfo
