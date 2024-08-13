const RouteBus = require("../models/RouteBus");
const SpecailBus = require("../models/SpeacilBus");

// Add new bus
const addBus = async (req, res) => {
    const { Busname, OwnerName, Phone, location, descripe } = req.body;

    const newBus = new SpecailBus({
        Busname,
        OwnerName,
        Phone,
        location,
        descripe,
    });

    try {
        await newBus.save();
        res.send({ status: "ok", data: "bus added" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
  
const  showBus = async (req, res) => {
    try {
        const buses = await SpecailBus.find({});
        res.send({ status: 'ok', data: buses });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBus = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await SpecailBus.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ error: 'Bus not found' });
        }
        res.send({ status: 'ok', data: 'bus deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




module.exports = {
    addBus,
    showBus,deleteBus
};
