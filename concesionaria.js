const autos=require("./autos");


let concesionaria = {
   autos: autos,
 
   buscarAuto: function(pat){
   let pos=autos.map(e=>e.patente).indexOf(pat);
   return autos[pos]
   },
        
     /*  for (i=0;i<=autos.length;i++){
       if(autos[i].patente==pat){
          let pos=i;
         return autos[i]
       }else{
         return null
       }
      }*/
   
   venderAuto:function(pat){
       
        if(this.buscarAuto(pat)!=null){
            this.buscarAuto(pat).vendido=true;
        }     
        
      },

   autosParaLaVenta: function(){
    return autos.filter(au=>au.vendido==false)
 },
 autosNuevos: function(){
    return this.autosParaLaVenta().filter(au=>au.km<100)
 },
 listaDeVentas: function(){
    let pos= autos.map(au=>au.vendido).indexOf(true)
    return autos[pos].precio
 }
}

concesionaria.venderAuto("APL123");

console.log(concesionaria.listaDeVentas())