import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import SplashScreen from '../components/SplashScreen'
import Register from '../components/Register'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'
import AddAddress from '../components/AddAddress'
import ChangePassword from '../components/ChangePassword'
import ProductCategory from '../components/ProductCategory'
import DetailProduct from '../components/DetailProduct'

const AppNavigator = createStackNavigator({
<<<<<<< HEAD
=======
    Category: {
        screen:DetailProduct
    },
>>>>>>> origin/master
    Auth:{
        screen:Auth
    },
    Category: {
        screen:ProductCategory
    },
    
    SplashScreen:{
        screen:SplashScreen
    },
    Profile:{
        screen:Profile
    },
    EditProfile:{
        screen:EditProfile
    },
    AddAddress:{
        screen:AddAddress
    },
    ChangePassword:{
        screen:ChangePassword
    },
    Register:{
        screen:Register
    }
})

const HomeContainer = createAppContainer(AppNavigator)

export default HomeContainer