const UsuarioService=require("../services/usuarioService");
class UsuarioController{
    static async listarUsuarios(req,res){
        try{
            let lista=await UsuarioService.listarUsuarios(); 
            res.json(lista);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async crearUsuario(req,res){
        try{
            let {nombre,correo,contrasena}=req.body
            let usuario=await UsuarioService.crearUsuario(nombre,correo,contrasena);
            res.json(usuario);
        }catch(e){
            res.json({eror:"error en la tericion"})
        }
    }
    static async eliminarUsuario(req,res){
        try{
            let {id}=req.params
            let usuario=await UsuarioService.eliminarUsuario(id);
            res.json(usuario);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async actualizarUsuario(req,res){
        try{
            let {id}=req.params
            let {nombre,correo,contrasena}=req.body
            let usuario = await UsuarioService.actualizarUsuario(id,nombre,correo,contrasena);
            res.json(usuario);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async buscarUsuario(req,res){
        try{
            let correo=req.params;
            let usuario = await UsuarioService.buscarUsuario(correo);
            res.json(usuario);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
}
module.exports=UsuarioController;