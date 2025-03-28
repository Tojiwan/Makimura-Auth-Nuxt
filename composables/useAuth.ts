import { useFirebaseAuth } from "vuefire";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

export function useAuth() {
  const auth = useFirebaseAuth();

  const register = async (email: string, password: string) => {
    if (!auth) throw new Error("Auth is not initialized");
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error("Auth is not initialized");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!auth) throw new Error("Auth is not initialized");
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    if (!auth) throw new Error("Auth is not initialized");
  
    const actionCodeSettings = {
      url: `http://localhost:3000/change-password?oobCode=PLACEHOLDER`,
      handleCodeInApp: true, 
    };
  
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
  };
  
  const confirmPassword = async (oobCode: string, newPassword: string) => {
    if (!auth) throw new Error ("Auth is not initialized");
    await confirmPasswordReset(auth, oobCode, newPassword);
  }

  return { register, login, logout, resetPassword, confirmPassword };
}
