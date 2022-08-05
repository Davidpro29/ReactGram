const {body} = require("express-validator")

const userCreateValidation = () =>{
    return [
    body("name")
        .isString().withMessage("O nome é obrigatório.")
        .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("email")
        .isString().withMessage("O e-mail é obrigatório.")
        .isEmail().withMessage("Insira um e-mail válido."),
    body("password")    
        .isString().withMessage("A senha é obrigatória.")
        .isLength().withMessage("A senha precisa ter no mínimo 5 caracteres."),
    body("confirmpassword")
        .isString().withMessage("A confirmação de senha é obrigatória")
        .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("Senhas não conferem");
            }
            return true;
        })
];
};

const loginValidation = () => {
    return [
        body("email")
            .isString().withMessage("E-mail é obrigatório")
            .isEmail().withMessage("Insira um e-mail válido"),
        body("password")
            .isString().withMessage("A senha é obrigatória")
    ];
};

const userUpdateValidation = ()=>{
    return[
        body("name")
            .optional()
            .isLength({min:3})
            .withMessage("Nome precisa de no mínimo 3 caracteres"),
        body("passowrd")
            .optional()
            .isLength({min:3})
            .withMessage("Sua senha precisa de no mínimo 3 caracteres"),
    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
} 