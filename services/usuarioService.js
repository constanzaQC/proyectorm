const {Usuario}=require("../models");

class UsuarioService{
    static async listarUsuarios(){
        try{
            return await Usuario.findAll();
        }
        catch(e){
            console.log("error en el servicio");
        }

    }
    static async crearUsuario(nombre,correo,contrasena){
        try {
            return await Usuario.create({nombre,correo,contrasena})
        }
        catch (e){
            console.log("error en el servicio al guardar");
      
          }
         }
         static async buscarUsuario(){
            try{
                return await Usuario.findOne({where:{correo}})
            }catch (e){
                console.log("error en el servicio buscar");
            }
            
         }
         static async eliminarUsuario(id){
            try{
                    await Usuario.destroy({where:{id}});
                    return "usuario eliminado";
            }catch(e){
                console.log("error en el servicio al eliminar");
            }
         }
         static async actualizarUsuario(){
            try{
                return await Usuario.update(datos,{where:{id}});
                //let uBuscado = await Usuario.findByPk(id);
                //return await uBuscado.update(datos)
                

            }catch(e){
                console.log("error en el servicio");
            }
         }
         static async buscarUsuarios(correo){
            try{
                return await Usuario.findOne({where:{correo}})
            }catch (e){
                console.log("error en el servicio  de buscar");
            }
            
 
        }
}
    
module.exports=UsuarioService;