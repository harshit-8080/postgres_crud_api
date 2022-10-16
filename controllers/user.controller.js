

exports.test = async (req,res)=>{

    try {
        
        return res.status(200).json({
            "msg":"this is user test api"
        })

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}


exports.signup = async(req,res) =>{


    try {
        








    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        })

    }
}