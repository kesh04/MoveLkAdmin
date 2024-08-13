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

// Create a single route per admin
const createRoute = async (req, res) => {
    const { Busname, To, where, arrival, departure, Nextarrival, Nextdeparture } = req.body;
   

    try {
        // Check if the admin already has a route
       
        const newRoute = new RouteBus({
            Busname,
            To,
            where,
            arrival,
            departure,
            Nextarrival,
            Nextdeparture,
           
        });

        await newRoute.save();
        res.send({ status: "ok", data: "route created" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addBus,
    createRoute,showBus
};
