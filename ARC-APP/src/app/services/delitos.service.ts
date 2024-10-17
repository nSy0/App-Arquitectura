import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';  

/************************************************************************/
/************************************************************************/
export interface Delito{
  id?: string;
  nombre_vic: string;
  direc_delito: string;
  tipo_transporte: string;
  desc_delin: string;
  dia: number;
  mes: number;
  anio: number;
}
/************************************************************************/
@Injectable({
  providedIn: 'root'
})
export class DelitosService {
/************************************************************************/
  private collecionName="delitos";
/************************************************************************/
/************************************************************************/
  constructor(
    private firestore: AngularFirestore) { }
/************************************************************************/
addDelito(delito:Delito): Promise<void> {
  const id = this.firestore.createId();
  return this.firestore.collection(this.collecionName).doc(id).set({...delito,id})
}
/************************************************************************/
/************************************************************************/
getDelito():Observable<Delito[]>{
  return this.firestore.collection<Delito>(this.collecionName).valueChanges();
}


/************************************************************************/
/************************************************************************/  
}//END DelitosService;
