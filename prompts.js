module.exports = [
    {
        name: 'firebaseProjectID',
        type: 'input',
        message: 'Enter firebase project ID:',
        validate: input => !!input,
        default: 'FIREBASE_PROJECT_ID'
    }
]