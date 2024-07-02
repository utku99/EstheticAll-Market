import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'

const borderColor = 'lightgray'
const padding = 10
const data = [{}, {}]

const CustomCard = () => (
  <Card>
    <CardContent className='p-0'>
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          borderRight={1}
          paddingLeft={padding}
          paddingRight={padding}
          paddingTop={padding}
          borderColor={borderColor}
          className='max-sm:border-none'
        >
          <Grid container wrap='wrap' direction='row' spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6'>Sipariş Veren:</Typography>
              <Typography variant='h6' color={'primary'}>
                Estheworld Ataşehir AŞ.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6'>Siparişi No:</Typography>
              <Typography variant='h6' color={'primary'}>
                EST-1881-1938
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='body1'>İstanbul</Typography>
              <Typography variant='body1'>14.10.2024 - 15:50</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          paddingLeft={padding}
          paddingRight={padding}
          paddingTop={padding}
          borderColor={borderColor}
        ></Grid>

        {data.map(item => (
          <>
            <Grid
              item
              xs={12}
              md={8}
              lg={8}
              borderRight={1}
              borderBottom={1}
              padding={padding}
              borderColor={borderColor}
              className='max-sm:border-r-0'
            >
              <Grid container direction={'row'} wrap='wrap' spacing={4}>
                <Grid item xs={12} sm={3}>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/34e4/ee1c/5ea1f231c7984e00c51c6f49fe3bb801?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lM9cJJqCXFdcOYoS-ujRWSgtU5vtyrxvNc-sCPD-EIv3mZZE~vjVfhM3fr-nShNtSUISuS~CDBLQw9mSxpxSdv0SJX2Spb~2kkCsGWZ4q87XPeqz3K7lefea5lxrxb8ZB3sem9Sz2yXFOXzDOhEh2RlSLTETVhbECWTfVM8oMawRw0uBOiL-vBiC7iH39j5~-sJzwnfpUtDT5suNTyWgyQcrKRJ7Vxu~H4TJIvvGDlJTpljQCcvdCrD1gNoIr4w46qyZPIDi70fuN65IWKs~x6pAAgeuPRolFbExNWquz4xftk~-6torXoQWILB3a1ys0DaHxiQjRs5oamWxOUXB6Q__'
                    alt=''
                    width={124}
                    height={147}
                    className='border border-[#D8D6DE] rounded-xs overflow-hidden'
                  />
                </Grid>
                <Grid item xs={12} sm={9} className='justify-center flex flex-col'>
                  <Grid className='flex flex-row space-x-2'>
                    <Typography variant='body1' color={'primary'} className=' inline'>
                      #91716
                    </Typography>
                    <Typography variant='h6'>Alından Temassız Ateş Ölçer</Typography>
                  </Grid>
                  <Grid className='flex flex-row space-x-2'>
                    <Typography>Marka:</Typography>
                    <Typography variant='body2' color={'primary'} className=' inline'>
                      Genius
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} lg={4} borderBottom={1} padding={padding} borderColor={borderColor}>
              <Grid container wrap='wrap' direction={'row'} spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Typography>Birim Fiyatı:</Typography>
                  <Typography color={'primary'}>324.00₺</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography>Adet:</Typography>
                  <Typography color={'primary'}>5</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography>Toplam:</Typography>
                  <Typography color={'primary'}>1,620.00₺</Typography>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}

        <Grid item xs={12} md={8} lg={8} borderRight={1} padding={padding} borderColor={borderColor}></Grid>
        <Grid item xs={12} md={4} lg={4} padding={padding}>
          <Grid container wrap='wrap' direction={'row'} spacing={4}>
            <Grid container wrap='wrap' direction={'row'} spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant='h5'>Sipariş Toplamı:</Typography>
                <Typography variant='h5' color={'primary'}>
                  1,808.00₺
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} className='space-y-2'>
                <Button variant='contained' className='text-white w-[167px]'>
                  Onayla
                </Button>
                <Button variant='outlined' className='w-[167px]'>
                  Reddet
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default CustomCard
