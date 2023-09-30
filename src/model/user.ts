import { Schema, model } from 'mongoose';

const  userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        }, {
            timestamps: true,
        }
);

export default model('User', userSchema);