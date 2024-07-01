'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomAvatar from '@/@core/components/mui/Avatar'
import classNames from 'classnames'

const status = ['Status', 'Active', 'Inactive', 'Suspended']

const AddProduct = () => {
  // States
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    productCategory: [],
    statu: '',
    price: '',
    discountPrice: '',
    queueNo: '',
    productDesc: '',
    images: []
  })

  const handleReset = () => {
    setFormData({
      productName: '',
      productCode: '',
      productCategory: [],
      statu: '',
      price: '',
      discountPrice: '',
      queueNo: '',
      productDesc: '',
      images: []
    })
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      let images = formData.images

      reader.onload = async () => {
        await images.push(reader.result)
        await setFormData({ ...formData, images })
      }
      reader.readAsDataURL(files[0])

      //   if (reader.result !== null) {
      //     setFileInput(reader.result)
      //   }
    }
  }

  const handleFileInputReset = (i: number) => {
    let images = formData.images
    let filteredImages = images.filter((_: any, index: number) => i != index)
    setFormData({ ...formData, images: filteredImages })
  }

  return (
    <Card>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Ürün Adı'
                value={formData.productName}
                onChange={e => setFormData({ ...formData, productName: e.target.value })}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Ürün Kodu'
                value={formData.productCode}
                onChange={e => setFormData({ ...formData, productCode: e.target.value })}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                select
                fullWidth
                label='Firma Ürün Kategorisi'
                value={formData.productCategory}
                SelectProps={{
                  multiple: true,
                  onChange: e => setFormData({ ...formData, productCategory: e.target.value })
                }}
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
                select
                fullWidth
                label='Durumu'
                value={formData.statu}
                onChange={e => setFormData({ ...formData, statu: e.target.value })}
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
                type='number'
                label='Fiyat TL'
                value={formData.price}
                onChange={e => setFormData({ ...formData, price: e.target.value })}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                label='İndirimli Fiyat TL'
                value={formData.discountPrice}
                onChange={e => setFormData({ ...formData, discountPrice: e.target.value })}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                label='Sıra No'
                value={formData.queueNo}
                onChange={e => setFormData({ ...formData, queueNo: e.target.value })}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' className='font-medium'>
                Ürün Tanımı
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                multiline
                rows={4}
                value={formData.productDesc}
                onChange={e => setFormData({ ...formData, productDesc: e.target.value })}
              />
            </Grid>

            <Grid item xs={12}>
              {formData.images?.map((img, i) => (
                <div className='flex max-sm:flex-col items-center gap-6 border rounded-md p-4 mb-6'>
                  <div className='flex flex-col gap-4'>
                    <Typography variant='h5'>{i == 0 ? '  Ana Görsel' : 'Ek Görsel ' + i}</Typography>
                    <img height={100} width={170} className='rounded' src={img} alt='Profile' />
                  </div>
                  <div className='flex flex-grow flex-col gap-4'>
                    <Typography>Gerekli görüntü çözünürlüğü 80x80</Typography>
                    <div className='flex flex-col sm:flex-row gap-4'>
                      {/* <Button
                        component='label'
                        variant='contained'
                        className='text-white'
                        htmlFor='account-settings-upload-image'
                      >
                        Yeni Fotoğraf Yükle
                        <input
                          hidden
                          type='file'
                          accept='image/png, image/jpeg'
                          onChange={handleFileInputChange}
                          id='account-settings-upload-image'
                        />
                      </Button> */}
                      <CustomAvatar
                        variant='rounded'
                        color='white'
                        className='bg-estheticAll_orange text-white cursor-pointer'
                        size={38}
                        onClick={() => handleFileInputReset(i)}
                      >
                        <i className={classNames('tabler-x', `text-[${20}px]`)} />
                      </CustomAvatar>
                    </div>
                  </div>
                </div>
              ))}
            </Grid>

            <Grid item xs={12}>
              <Button
                component='label'
                variant='contained'
                className='mie-2 text-white'
                htmlFor='account-settings-upload-image'
              >
                + Görsel Ekle
                <input
                  hidden
                  type='file'
                  accept='image/png, image/jpeg'
                  onChange={handleFileInputChange}
                  id='account-settings-upload-image'
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2 text-white'>
            Kaydet
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='primary'
            onClick={() => {
              handleReset()
            }}
          >
            İptal
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default AddProduct
