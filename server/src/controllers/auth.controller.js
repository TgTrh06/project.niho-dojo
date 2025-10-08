import express from 'express';

export const signup = (req, res) => {
    // Logic for user signup
    res.send('User signed up');
};

export const login = (req, res) => {
    // Logic for user login
    console.log('User logged in');
};

export const logout = (req, res) => {
    // Logic for user logout
    // res.send('User logged out');
    try {
        res.cookie('jwt', "", { maxAge : 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};

export const updateProfile = (req, res) => {
    // Logic for updating user profile
    res.send('User profile updated');
};

export const getProfile = (req, res) => {
    // Logic for getting user profile
    res.send('User profile data');
};