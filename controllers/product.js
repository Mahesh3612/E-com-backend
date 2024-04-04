
import Product from "../db/product.js";
import VerifyToken from "../middlware/verifyToken.js";



export const addProduct = async (req, res) => {
    let result = await Product(req.body);
    result = await result.save();
    res.send(result)
}

export const getData = async (req, res) => {
    let result = await Product.find({});
    res.send(result)
}

export const deleteDataById = async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id })
    res.send(result)
}

export const updateDataById = async (req, res) => {
    try {
        let result = await Product.findByIdAndUpdate({_id:req.params.id},req.body);
        result = await result.save();
        res.status(201).send(result)
    } catch (e) {
        res.send(e)
    }
}
export const getDataById = async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id })
    res.send(result)
}


export const searchData = async (req, res) => {
    try {
        let result = await Product.find({
            "$or": [
                { name: { $regex: req.params.key } },
                { company: { $regex: req.params.key } }
            ]
        })

        res.send(result)
    } catch (e) {
        res.send(e)
    }

}

export const sortAsc = async (req, res) => {
    let result = await Product.find({}).sort({ price: 1 })
    res.send(result)
}

export const sortDsc = async (req, res) => {
    let result = await Product.find({}).sort({ price: -1 })
    res.send(result)
}