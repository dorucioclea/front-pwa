import Router from 'next/router'
import { useEffect, useState } from 'react'
import { IHttpService } from '@superciety/pwa-core-library'
import { Config } from '../config'
import { useAppDispatch, useAppSelector } from './store'
import { selectUser, selectUserLoggedIn } from './User/store/selectors'
import { logout } from './User/store/slice'

export function useAppGuard(httpService: IHttpService) {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  const user = useAppSelector(selectUser)

  const redirectToAuthPage = () => Router.replace(Config.App.Pages.Auth)

  httpService.onUnauthorized = () => {
    dispatch(logout())
    redirectToAuthPage()
  }

  useEffect(() => {
    if (!isLoggedIn || !user) {
      redirectToAuthPage()
      return
    }
  }, [isLoggedIn, user])
}
