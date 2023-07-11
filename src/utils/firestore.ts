import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase'
import { UserData } from './interface'



export const writeUserData =  async (uid:string, user:UserData) => {
    
    try {
        await setDoc(doc(db, "Users", uid), {
                userid: user.userId,
                firstname: user.firstname,
                lastname: user.lastname,
                gender: user.gender,
                birthday: user.dateOfBirth,
                isVolunteer: user.isVolunteer,
                email: user.email,
                interest: user.interest
            });
            return "success"
        }
        catch(error: any){
            return error.message
        }
        
}
