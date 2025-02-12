import AuthProdider from "@/components/provider/AuthProvider"
import ProfilePage from "@/components/templates/ProfilePage"



function index() {
  return (
    <AuthProdider>
    <ProfilePage/>
    </AuthProdider>
  )
}

export default index