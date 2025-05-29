import Registro from "../Modelo/usuariosRegistro.js"
import bcrypt from 'bcrypt';

export const registrarUsuario= async(request, response)=>{
    try{
        const {nombre,correo,contrasena,telefono,rutEmpresa,enlaceWeb}= request.body;

        const userExist= await Registro.findOne({correo});
        if (userExist){
            return response.status(400).json({message: "El correo ingresado ya está asociado a un usuario existente."});
        }
        if (!nombre || !contrasena ||!correo){
            return response.status(400).json({ error: "Debe ingresar una contraseña." });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        /*crear usuario con contraseña encriptada */
        const newUser = new Registro({
            nombre,
            correo,
            contrasena: hashedPassword,
        });

        if (telefono) {
            newUser.telefono = telefono;
        }

        if (rutEmpresa) {
            newUser.rutEmpresa = rutEmpresa;
        }

        if (enlaceWeb) {
            newUser.enlaceWeb = enlaceWeb;
        }

        const savedData= await newUser.save();
        const {contrasena:_ ,__v, ...usuarioSinPassword } = savedData.toObject();

        response.status(201).json(usuarioSinPassword);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
};