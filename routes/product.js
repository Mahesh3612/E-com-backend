import Product from "../db/product.js";
import express from "express"
import { addProduct, deleteDataById, getData, getDataById, searchData, sortAsc, sortDsc, updateDataById } from "../controllers/product.js";
import VerifyToken from "../middlware/verifyToken.js";

const router = express.Router();


router.post("/addproduct",addProduct)

router.get("/product",VerifyToken,getData)

router.delete("/product/:id",deleteDataById)

router.put("/product/:id",updateDataById)

router.get("/product/:id",getDataById)

router.get("/search/:key",VerifyToken,searchData)

router.get("/sortAsc/",sortAsc)

router.get("/sortDsc/",sortDsc)



export default router;