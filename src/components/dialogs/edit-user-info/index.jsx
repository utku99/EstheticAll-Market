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

const EditUserInfo = ({ open, setOpen, data }) => {
  // States
  const [userData, setUserData] = useState(data || initialData)
  const [fileInput, setFileInput] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const handleClose = () => {
    setOpen(false)
    setUserData(initialData)
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setFileInput(reader.result)
      }
    }
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('/images/avatars/1.png')
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
        Firma Bilgileri
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
                label='Firma Adı'
                placeholder='ABC Medikal'
                value={userData?.firstName}
                onChange={e => setUserData({ ...userData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Firma Ürün Kategorisi'
                value={userData?.status}
                onChange={e => setUserData({ ...userData, status: e.target.value })}
              >
                {status.map((status, index) => (
                  <MenuItem key={index} value={index === 0 ? '' : status.toLowerCase().replace(/\s+/g, '-')}>
                    {status}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Firma Unvanı'
                placeholder='ABC Medikal Ürünler Pazarlama Lojistik Satış AŞoe'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='E-Posta'
                placeholder='ornekadam34@gmail.com'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Vergi Dairesi'
                placeholder='Üsküdar'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Vergi No'
                placeholder=' Tax-8894'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Adres'
                placeholder='Üsküdar'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='İletişim Telefonu'
                placeholder='+1 (609) 933-44-22'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked={userData?.useAsBillingAddress} />}
                label='Fatura Adresi Olarak Kullan?'
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogContent className='overflow-visible pbs-0 sm:pli-16'>
          <div className='flex max-sm:flex-col items-center gap-6'>
            <img height={100} width={100} className='rounded' src={imgSrc} alt='Profile' />
            <div className='flex flex-grow flex-col gap-4'>
              <Typography>Gerekli görüntü çözünürlüğü 80x80</Typography>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  component='label'
                  variant='contained'
                  className='text-white'
                  htmlFor='account-settings-upload-image'
                >
                  Yeni Fotoğraf Yükle
                  <input
                    hidden
                    type='file'
                    value={fileInput}
                    accept='image/png, image/jpeg'
                    onChange={handleFileInputChange}
                    id='account-settings-upload-image'
                  />
                </Button>
                <CustomAvatar
                  variant='rounded'
                  color='white'
                  className='bg-estheticAll_orange text-white cursor-pointer'
                  size={38}
                  onClick={handleFileInputReset}
                >
                  <i className={classNames('tabler-x', `text-[${20}px]`)} />
                </CustomAvatar>
              </div>
            </div>
          </div>
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

export default EditUserInfo
