import React from 'react'
import { styled } from '@mui/material'
import { NextPage } from 'next'
import { Layout } from '../components'
import {HomeHero} from '../sections';

const ContentStyle = styled('div')(({theme}) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const Index:NextPage = () => {
  return (
    <Layout title="Home">
      <ContentStyle>
        <HomeHero />
      </ContentStyle>
    </Layout>
  )
}

export default Index