import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';  

/************************************************************************/
/************************************************************************/
export interface Delito{
  id?: string;
  num_delito: number;
  nombre_vic: string;
  direc_delito: string;
  tipo_transporte: string;
  desc_delin: string;
  fecha_delito: string;
}
/************************************************************************/
@Injectable({
  providedIn: 'root'
})
export class DelitosService {
/************************************************************************/
/************************************************************************/
  private collectionName="delitos";
/************************************************************************/
/************************************************************************/
  constructor(
    private firestore: AngularFirestore,
  ) { }
/************************************************************************/
addDelito(delito:Delito): Promise<void> {
  const id = this.firestore.createId();
  return this.firestore.collection(this.collectionName).doc(id).set({...delito,id})
}
/************************************************************************/
/************************************************************************/
getDelito():Observable<Delito[]>{
  return this.firestore.collection<Delito>(this.collectionName).valueChanges();
}
/************************************************************************/
/************************************************************************/
getDelitoById(id: string):Observable<Delito | undefined>{
  return this.firestore.collection(this.collectionName).doc<Delito>(id).valueChanges();
}
/************************************************************************/
/************************************************************************/  
centralAnalisis(){
  return this.firestore.collection<Delito>(this.collectionName).valueChanges();
}
/************************************************************************/
/************************************************************************/  
enviarReporte(){
  return this.firestore.collection<Delito>(this.collectionName).valueChanges();
}
/************************************************************************/
/************************************************************************/  
}//END DelitosService;
