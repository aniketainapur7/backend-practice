const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(err, req, res, next)).catch((error) => { next(error) })
    }
}

export { asyncHandler }



// const asyncHandler = (requestHandler) => {
//     return (error, req, res, next) => {
//         Promise.resolve(requestHandler(error,req, res, next)).catch((error) => {next(error)})
//     }
// }

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,req,next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message: error.message

//         })
//     }
// }

