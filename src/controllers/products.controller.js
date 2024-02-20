import productDAO from "../DAO/productdao.js";
export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.render('../src/views/index', { products }))
        .catch(err => res.json({
            status: "Server unavailable"
        })
        );
}
export const getOne = (req, res) => {
    console.log("desde el controller")
    productDAO.getOne(req.params.barcode)
        .then(result => {
            !result ? res.json({
                message: "product not found :/"
            }) : res.render('../src/views/edit', { result });
        })
        .catch(err => res.json({
            status: "Server unavailable"
        })
        );
}

export const insertOne = (req, res) => {
    console.log(req.body)
    productDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => res.json({ status: "Server unavailable" }));
}

export const updateOne = (req, res) => {
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/');
        })
        .catch(err => res.json({ status: "Server unavailable" }));
}

export const deleteOne = (req, res) => {
    productDAO.deleteOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message: "Product not found "
            }) : res.redirect('/');
        })
        .catch(err => res.json({ status: "Server unavailable" }));
} 