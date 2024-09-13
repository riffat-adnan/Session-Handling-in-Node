export const setSession = (req, res) => {
    req.session.user = { name: 'John Doe', email: 'john@example.com' };
    res.send('Session data set!');
};

export const getSession = (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.send('No session data found.');
    }
};
