import {connection as db} from "../config/index.js"
 class Products{
        fetchProducts(req,res){
        const qry = `
        select prodID,prodName,amount, quantity,category, prodUrl
        FROM PRODUCTS;`
         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }
    fetchProduct(req,res){
        const qry = `
        select prodID,prodName,amount, quantity,category, prodUrl
        FROM PRODUCTS WHERE prodID=${req.params.id};`
         db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                result : result[0]
            })
         })
    }
    addProduct(req,res){
        const qry=` INSERT INTO PRODUCTS SET ?;`
        let data = req.body
        db.query(qry,[data], (err)=>{
          if(err) throw err
          res.json({
            status: res.statusCode,
            msg:'new product was added'
          })
        })
    }
    deleteProducts(req,res){
      const qry=`DELETE FROM PRODUCTS ;`
      db.query(qry, (err)=>{
        if(err) throw err
        res.json({
          status: res.statusCode,
          msg:'Product was deleted!'
        })
      })
  }
deleteProduct(req, res) {
  const qry = `DELETE FROM PRODUCTS WHERE prodID=${db.escape(req.params.id)};`;
  db.query(qry, (err) => {
    if (err) {
      throw err;
    } else {
      res.json({
        status: res.statusCode,
        msg: 'Product is deleted!',
      });
    }
  });
}
  updateProduct(req,res){
    const qry=`UPDATE PRODUCTS SET ? WHERE prodID=${req.params.id};`
    db.query(qry, [req.body], (err)=>{
      if(err) throw err
      res.json({
        status: res.statusCode,
        msg:'Product is updated!'
      })
    })
  }
 }
 export{
    Products
 }