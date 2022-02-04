import joi from "joi";

const dataVerification = joi.object({
    title: joi.string().required(),
    price: joi.number().min(8).optional(),
    thumbnail: joi.string().required(),
    stock: joi.number().min(100).optional(),
    description: joi.string().required(),
})

async function validateData(req, res, next) {
    const { body } = req
    try {
        await dataVerification.validateAsync(body)
        next()
    } catch (error) {
        next(error)
    }
}

export default validateData;