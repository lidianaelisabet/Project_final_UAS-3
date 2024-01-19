// import Model Covid
const Covid = require("../models/Covid");

class CovidController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const covids = await Covid.all();

    const data = {
      message: "Menampilkkan semua covids",
      data: covids,
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
      const { name, phone, address, status } = req.body;
      const covids = await Covid.create({ name, phone, address, status });
      const data = {
        message: "Menambahkan data covids",
        data: covids,
      };
      res.json(data);
    }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const data = {
      message: `Mengedit Covid id ${id}, name ${name}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus Covid id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object CovidController
const object = new CovidController();

// Export object CovidController
module.exports = object;