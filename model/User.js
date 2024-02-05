const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        required: true,
        minlength: 4
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
        validator: function(v) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
        }
    },
    address: {
        street: String,
        suite: String,
        city: {
            type: String,
            required: true,
            trim: true,
            validate: {
            validator: function(v) {
                return /^[a-zA-Z ]+$/.test(v);
            },
            message: props => `${props.value} is not a valid city!`
        }
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
            validate: {
            validator: function(v) {
                return /^\d{5}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid zip code!`
            }
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
        validator: function(v) {
            return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        }
    },
    website: {
        type: String,
        required: true,
        trim: true,
        validate: {
        validator: function(v) {
            return /^(http|https):\/\/[^ "]+$/.test(v);
        },
        message: props => `${props.value} is not a valid website!`
        }
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,    
        }
    },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;