function profile(name ,age){
    console.log(" Name is " + name +" and Age is " + age )
}
profile( "Emmilly","Immaculate")
profile("Dan","Aucho")
profile("Gareth","Bale")
profile("Luis","Suarez")
profile("Martin","Luther")

function inner(age){
    console.log("Age is "+ age)
}
function outer(age,func){
    func(age)
}

outer(22,inner);

() => {
    let a ="Hello"
    let b =" World"
    let c = a + b
    console.log(c)
}
const arr=() => {
    let a="Hello"
    let b=" World"
    console.log(a+b)
}
 arr()

for (let i = 0; i < 19; i++) {
console.log("I Love Uganda") 
 }
