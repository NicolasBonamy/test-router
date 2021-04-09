const modelUsers = {};

modelUsers.coucou = async (req, res) => {
    try {
        res.status(200).send(`wesh nickel !!!`)
    } catch {
        res.status(200).send(`OOPS`)
    }
};

modelUsers.unique = async (req, res) => {
    try {
        res.status(200).send('Only one can survive !')
    } catch {
        res.status(200).send(`OOPS`)
    }
};

module.exports = modelUsers;
