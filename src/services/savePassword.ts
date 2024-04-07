import { useState } from "react";
let concatenarsenha = '';

export function listaSenha (){
  return concatenarsenha;
}


export default function savePasswords(pass:string){
   concatenarsenha += `\n ${pass}}`;
   return concatenarsenha;
}
   