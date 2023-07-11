import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { UserData } from './interface';

export const writeUserData = async (uid: string, user: UserData): Promise<string> => {
try {
    await setDoc(doc(db, 'Users', uid), {
    userId: user.userId,
    firstname: user.firstname,
    lastname: user.lastname,
    gender: user.gender,
    birthday: user.dateOfBirth,
    isVolunteer: user.isVolunteer,
    email: user.email,
    interest: user.interest,
    });

    return 'success';
} catch (error: any) {
    return error.message;
}
};






// export const deleteUserAccountIfDataNotExist = async (uid: string, user: any) => {
// try {
//     const userDocRef = doc(db, 'Users', uid);
//     const userDoc = await getDoc(userDocRef);
//     if (!userDoc.exists()) {
//     await deleteUser(user);
//     }
// } catch (error) {
//     console.error(error);
// }
// };
