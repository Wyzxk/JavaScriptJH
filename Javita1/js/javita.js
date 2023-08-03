let 
dineroCofla = prompt ("¿cuánto dinero tienes Cofla?");
dineroPercho = prompt ("¿cuánto dinero tienes Percho?");
dineroPancho = prompt ("¿cuánto dinero tienes Pancho?");
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla comprate el helado de agua")
    alert("y te sobran" + (dineroCofla - 0.6))
//ponemos la wea de (para dinero cofla pq sino se contatena todo 
//y nos manda a la mrd todo pq no se suma strings con numerosss )
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla comprate el helado de crema")
    alert("y te sobran" + (dineroCofla - 1))

}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla comprate el helado de zucarita")
    alert("y te sobran" + (dineroCofla - 1.6))

}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla comprate el helado de mondongo")
    alert("y te sobran" + (dineroCofla - 1.7))

}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla comprate el helado de frambuesa")
    alert("y te sobran" + (dineroCofla - 1.8))

}
else if (dineroCofla >= 2.9){ 
    alert ("Cofla comprate helado con confites o un helado de 1/4kg")
    alert("y te sobran" + (dineroCofla - 2.9))

} else {
    alert("Lo sentimos, te amo pero no traes money")
}
//Perchito monchito juajua
if (dineroPercho >= 0.6 && dineroPercho < 1){
    alert("Percho comprate el helado de agua")

}
else if (dineroPercho >= 1 && dineroPercho < 1.6) {
    alert("Percho comprate el helado de crema")
}
else if (dineroPercho >= 1.6 && dineroPercho < 1.7) {
    alert("Percho comprate el helado de zucarita")
}
else if (dineroPercho >= 1.7 && dineroPercho < 1.8) {
    alert("Percho comprate el helado de mondongo")
}
else if (dineroPercho >= 1.8 && dineroPercho < 2.9) {
    alert("Percho comprate el helado de frambuesa")
}
else if (dineroPercho >= 2.9){ 
    alert ("Percho comprate helado con confites o un helado de 1/4kg")

} else {
    alert("Lo sentimos, te amo pero no traes money")
}
//Panchito mi brother
if (dineroPancho >= 0.6 && dineroPancho < 1){
    alert("Pancho comprate el helado de agua")

}
else if (dineroPancho >= 1 && dineroPancho < 1.6) {
    alert("Pancho comprate el helado de crema")
}
else if (dineroPancho >= 1.6 && dineroPancho < 1.7) {
    alert("Pancho comprate el helado de zucarita")
}
else if (dineroPancho >= 1.7 && dineroPancho < 1.8) {
    alert("Pancho comprate el helado de mondongo")
}
else if (dineroPancho >= 1.8 && dineroPancho < 2.9) {
    alert("Pancho comprate el helado de frambuesa")
}
else if (dineroPancho >= 2.9){ 
    alert ("Pancho helado con confites o un helado de 1/4kg")

} else {
    alert("Lo sentimos, te amo pero no traes money")
}