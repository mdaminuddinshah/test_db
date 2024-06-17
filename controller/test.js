const test = (req,res) => {
    try{
        res.status(201);
        res.send("Hello Amin");
        console.log("Hello Amin")
    } catch (erro){
        res.status(501);
        res.send("Error");
        console.log("Error")
    }
}

export default test;