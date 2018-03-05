let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CustomerSchema = mongoose.Schema({

    username: {
        type: String,
        // Trim the 'username' field
        //trim: true,
        // Set a unique 'username' index
        unique: true,
        // Validate 'username' value existance
        required: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        // Set an email index
        index: true,
        // Validate the email format
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password.length >= 6,
            'Password Should Be Longer'
        ]
    },
    date: Date,
    subject: String,
    feedback: String
},{
    collection: "customers"
});

// CustomerSchema.statics.findOneByUsername = function(username, callback) {
// 	// Use the 'findOne' method to retrieve a user document
// 	this.findOne({
// 		username: new RegExp(username, 'i')
// 	}, callback);
// };

// CustomerSchema.methods.authenticate = function(password) {
// 	return this.password === password;
// };

// CustomerSchema.set('toJSON', {
// 	getters: true,
// 	virtuals: true
// });

module.exports = mongoose.model('customers', CustomerSchema);