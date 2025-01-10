import includeUser from "./components/include-user"
import { UserInfo } from "./components/user-info"
import UserForm from "./components/user-form"

const UserInfoWithLoader = includeUser(UserInfo, "3")

function App() {

  return (
    <>
     <UserInfoWithLoader text={'text'} />
     <UserForm />
    </>   
  )
}

export default App
