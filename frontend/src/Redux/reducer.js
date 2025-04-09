
const SignUp_state ={
    data : []
}
export const SignUp_reducer = (state=SignUp_state,{action,payload}) =>{
      switch(action)
      {
        case "signup":
        return {
            ...state,
          data : payload
        }
        default : return state
      }

    } 