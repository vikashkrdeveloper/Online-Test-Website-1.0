const database = require('../model/RegistrationDataSchema2');
const RegistrationControllers2 = async (req, res) => {
    try {
        const { name, registrationno, emailid, department } = req.body;
        if (name && registrationno && emailid && department) {
            const emailidfind = await database.findOne({ emailid });
            const registrationnofindfind = await database.findOne({ registrationno });

            if (emailidfind) {
                res.status(403).send('Email already exist');

            } else {
                if (registrationnofindfind) {
                    res.status(402).send('Registration Number already exist');

                } else {
                    const datainsert = new database({ department, name, registrationno, emailid });
                    await datainsert.save();

                    res.status(200).send('Registration sucessfully');

                }
            }


        }
        else {
            res.status(500).send('All field require');
        }
    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(403).send("Some technical issue");
    }
}
module.exports = RegistrationControllers2;