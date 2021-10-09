var materials = [{
    s:'Hydrogen',
    t:'Helium',
    u:'Lithium',
    v:'Beryllium'
},{s:'prueba',
    t:'Helium3',
    u:'Lithium3',
    v:'Bllium3'},
{
    s:'Hydrgen3',
    t:'Helium3',
    u:'Lithium3',
    v:'Bllium3'
}];
  
  //Long version - ok
  let a =materials.map(function(material) { 
    return material.s; 
  });
  
  //Arrow function - ok
  let b= materials.map((material) => {
    return material.u.length;
  });
  
  //Shorthand arrow function - ok
 let c= materials.map(str => str.u.length);
 console.log(materials.map(str=>str.s))
 let pos=materials.map(str=>str.s).indexOf("prueba")
 console.log(pos)
 let m= function m(){
    let pos=materials.map(str=>str.s).indexOf("prueba")
    if(pos>=0){
    let mate= materials[pos];
    return mate;
    }else{         return null}};

m().u='cambio'
console.log(materials)




  //What? :)
 //let d= materials.map(({length}) => length));

