const express=require("express");
const router=express.Router();
const usuarioController=require("../controller/usuarioController"); 
router.get("/usuario",usuarioController.listarUsuarios);
router.post("/usuario",usuarioController.crearUsuario);
router.put("/usuario/:id",usuarioController.actualizarUsuario);
router.delete("/usuario/:id",usuarioController.eliminarUsuario);
router.get("/usuario/:correo",usuarioController.buscarUsuario); 
module.exports=router;
//creado por constanza/quira