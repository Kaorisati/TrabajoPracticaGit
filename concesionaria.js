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
    return autos.filter(au=>au.vendido==true).map(au=>au.precio)
    },
 totalDeVentas: function(){
    if(this.listaDeVentas().length>0){
        return this.listaDeVentas().reduce((a,b)=>a+b )}
        else{ return 0 }
    },
 puedeComprar: function(auto,persona){
    //let auto=this.buscarAuto(pat);
    if(auto.precio<persona.capacidadDePagoTotal & (auto.precio/auto.cuotas)<persona.capacidadDePagoEnCuotas){
         return true
      }else {return false}
    },
 
}

concesionaria.venderAuto("APL123");

console.log(concesionaria.totalDeVentas())
console.log(concesionaria.autosQuePuedeComprar({capacidadDePagoEnCuotas: 30000, capacidadDePagoTotal: 1000000}))