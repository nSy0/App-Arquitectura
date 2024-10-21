import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore = inject(AngularFirestore)

  /* RECUPERAR CONTRASEÑA */
  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }


}//END FirebaseService;
