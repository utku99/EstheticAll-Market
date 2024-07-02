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

const AddBankAccount = ({ open, setOpen, data }) => {
  // States
  const [userData, setUserData] = useState(data || initialData)
  const [fileInput, setFileInput] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const handleClose = () => {
    setOpen(false)
    setUserData(initialData)
  }

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      maxWidth='md'
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
        <DialogContent className='overflow-visible pbs-0 sm:pli-16'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Hesap Adı'
                value={userData?.firstName}
                onChange={e => setUserData({ ...userData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Hesaba Kayıtlı Ad Soyad'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Banka Adı'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Banka Kodu'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='İban'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Swift'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Şube Adı'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Şube Kodu'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={handleClose} type='submit' className='text-white'>
            Kaydet
          </Button>
          <Button variant='outlined' type='reset' onClick={handleClose}>
            İptal
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddBankAccount
