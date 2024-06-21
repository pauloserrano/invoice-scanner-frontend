import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'
import { MODAL_REDUCER_ACTIONS } from '@/reducers/ModalReducer'

export const useModalContext = () => {
  const { state, dispatch } = useContext(ModalContext)

  function openLoginModal(callback?: () => void) {
    dispatch({ type: MODAL_REDUCER_ACTIONS.OPEN_LOGIN_MODAL })
    callback && callback()
  }

  function openSignupModal(callback?: () => void) {
    dispatch({ type: MODAL_REDUCER_ACTIONS.OPEN_SIGNUP_MODAL })
    callback && callback()
  }

  function closeLoginModal(callback?: () => void) {
    dispatch({ type: MODAL_REDUCER_ACTIONS.CLOSE_LOGIN_MODAL })
    callback && callback()
  }

  function closeSignupModal(callback?: () => void) {
    dispatch({ type: MODAL_REDUCER_ACTIONS.CLOSE_SIGNUP_MODAL })
    callback && callback()
  }

  return {
    state,
    actions: {
      openLoginModal,
      openSignupModal,
      closeLoginModal,
      closeSignupModal
    }
  }
}
