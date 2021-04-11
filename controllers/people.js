const Person = require('../models/person');


exports.index = async (request, response, next) => {
    try {
        const people = await Person.find();

        response.status(200).json(people);
    } catch (error) {
        next (error);
    }
}

exports.create = async (request, response, next) => {
    try {
        const {
            firstName,
            lastName,
            age,
            nationality
        } = request.body;

        const person = await Person.create({
            firstName,
            lastName,
            age,
            nationality
        });

        response.status(200).json({
            message: "Person created successfully",
            status: "success",
            person
        })
    } catch (error) {
        next (error);
    }
}
