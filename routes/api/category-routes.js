const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
router.get("/", (req, res) => {
   console.log("hellohellohello");
   // find all categories
   // be sure to include its associated Products

   Category.findAll({
      include: {
         model: Product,
         attributes: ["id", "product_name", "price", "stock"],
      },
   })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).send(err);
      });
});

router.get("/:id", (req, res) => {
   // find one category by its `id` value
   // be sure to include its associated Products
   console.log("hihihihihihihi");
   Category.findOne({
      where: {
         id: req.params.id,
      },
      include: {
         model: Product,
         attributes: ["id", "product_name", "price", "stock"],
      },
   })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: "No category found with id" });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post("/", (req, res) => {
   // create a new category
   // expect { category_name: 'makeup' }
   console.log("hehehehe");
   Category.create({
      category_name: req.body.category_name,
   })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put("/:id", (req, res) => {
   // update a category by its `id` value
   console.log("check check check");
   Category.update(
      { category_name: req.body.category_name },
      {
         where: {
            id: req.params.id,
         },
      }
   )
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: "No category found with id" });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

router.delete("/:id", (req, res) => {
   // delete a category by its `id` value
   console.log("testtesttesttest");
   Category.destroy({ where: { id: req.params.id } })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({ message: "No category found with id" });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(err).json(err);
      });
});

module.exports = router;
