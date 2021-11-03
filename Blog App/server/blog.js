const jsonFile = require('jsonfile');

exports.readAll = async () => {
       const fileData =  await jsonFile.readFile('blog.json');
       return fileData;
 }

 exports.addUser = async (blog) => {
 try{
    const currentFileData = await jsonFile.readFile('blog.json');
    currentFileData.unshift(blog);
    var x = 0;
    currentFileData.forEach(element => {
        x = x+1;
        element.id = x;
    });
    const updatedFile1 = await jsonFile.writeFile('blog.json', currentFileData);
    return blog;
 }
 catch(err){
    console.log(`err`)
 }
 }

exports.deleteUser = async (id) => {
   try{
     const Data =  await jsonFile.readFile('blog.json');  
     const FilterData = Data.filter(obj => obj.id != id)
     console.log(FilterData)
     const updateFile = await jsonFile.writeFile('blog.json', FilterData);
     return {};
   }catch(err){
      console.log('err');
   }
}

exports.updateUser = async (id, prop, val) => {
   const Data = await jsonFile.readFile('blog.json');
   Data.forEach(element => {
      if(element.id == id){
         element[prop] = val;
      }
   });
   const updateFile = await jsonFile.writeFile('blog.json', Data);
   return {};
}
