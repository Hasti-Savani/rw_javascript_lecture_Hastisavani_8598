// {

//   let content = document.getElementById("mainHead")

//   console.log(content);

//   content.style.backgroundColor = "purple"

//   let classContent = document.getElementsByClassName("head")[2]

//   console.log(classContent);

//   classContent.style.backgroundColor=  "black"
//   classContent.style.color = "black"
//   classContent.style.border = "5px solid red"

// }

// Javascript JSON Method

// 1. JSON.parse()
// 2. JSON.stringify()

{
    // let profile = '{"name":"Rakesh" , "age":20 , "gender":"male"}';
    // console.log(profile);
    // console.log(profile.name);
    // console.log(JSON.parse(profile));
    // let result = JSON.parse(profile);
    // console.log(result.gender);
  }
  
  {
    // let profile = { name: "Rakesh", age: 20, gender: "male" };
    // console.log(profile);
    // let result = JSON.stringify(profile);
    // console.log(result);
  }
  
  // Object Method In Javascript
  
  {
    let profile1 = { name: "Rakesh", age: 20, gender: "male" };
    let profile2 = { names: "Ramesh", ages: 21, genders: "male" };
  
    // Object.assign()
  
    // Object.assign(target);
    // Object.assign(target, source1);
    // Object.assign(target, source1, source2);
    // Object.assign(target, source1, source2, /* …, */ sourceN);
  
    let result = Object.assign(profile2, profile1);
  
    console.log(result);
  
    console.log(profile1);
    console.log(profile2);
    console.log(result === profile2);
  }
  
  {
    // Object.create()
  
    // Object.create(proto);
    // Object.create(proto, propertiesObject);
  
     let profile1 = { name: "Rakesh", age: 20, gender: "male" };
  
     let result = Object.create(profile1)
  
     console.log(result);
  
     console.log(result.name);
     
     
  }