import { ModalState } from "@/contexts/ModalContext"

export interface ModalAction {
  type: MODAL_REDUCER_ACTIONS,
  payload?: any
}

export const enum MODAL_REDUCER_ACTIONS {
  OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL",
  CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL",
  OPEN_SIGNUP_MODAL = "OPEN_SIGNUP_MODAL",
  CLOSE_SIGNUP_MODAL = "CLOSE_SIGNUP_MODAL",
  OPEN_LOGOUT_MODAL = "OPEN_LOGOUT_MODAL",
  CLOSE_LOGOUT_MODAL = "CLOSE_LOGOUT_MODAL"
}

export const ModalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case MODAL_REDUCER_ACTIONS.OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModal: { isOpen: true }
      }
    
    case MODAL_REDUCER_ACTIONS.OPEN_SIGNUP_MODAL:
      return {
        ...state,
        signupModal: { isOpen: true }
      }
    
    case MODAL_REDUCER_ACTIONS.OPEN_LOGOUT_MODAL:
      return {
        ...state,
        logoutModal: { isOpen: true }
      }

    case MODAL_REDUCER_ACTIONS.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: { isOpen: false }
      }

    case MODAL_REDUCER_ACTIONS.CLOSE_SIGNUP_MODAL:
      return {
        ...state,
        signupModal: { isOpen: false }
      }
    
    case MODAL_REDUCER_ACTIONS.CLOSE_LOGOUT_MODAL:
      return {
        ...state,
        logoutModal: { isOpen: false }
      }
        
    default: 
      return state
  }
}