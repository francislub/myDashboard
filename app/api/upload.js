'use server'

import multer from "multer";
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.join(process.cwd(), 'public/uploads');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueName = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueName);
        },
    }),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    const runMiddleware = promisify(upload.single('image'));

    try {
        await runMiddleware(req, res);

        // Process the upload file or save information to the database
        const { file } = req;
        res.status(200).json({message: 'File uploaded successfully', file });
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

