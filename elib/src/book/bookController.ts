import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("files", req.files);

        // Ensure req.files is properly casted
        const files = req.files as { [fieldname: string]: Express.Multer.File[] }

        // Extract file details
        const coverImageMimeType = files.coverImage[0].mimetype.split('/').at(-1);
        const fileName = files.coverImage[0].filename;
        const filePath = path.resolve(__dirname, "../../public/data/uploads", fileName);

        // Upload to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            filename_override: fileName,
            folder: "book-covers",
            format: coverImageMimeType
        });

        const bookFileName = files.file[0].filename;
        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            bookFileName
        );

        const bookFileUploadResult = await cloudinary.uploader.upload(
            bookFilePath,
            {
                resource_type: "raw",
                filename_override: bookFileName,
                folder: "book-pdfs",
                format: "pdf",
            }
        );

        console.log("bookFileUploadResult",bookFileUploadResult)

        console.log("Upload Result:", uploadResult);
        res.json({ uploadResult });
    } catch (error) {
        console.error("Error uploading file:", error);
        next(error); // Forward error to middleware
    }
};

export { createBook };
