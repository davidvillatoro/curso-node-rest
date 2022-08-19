
const {Router}= require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuario_control');


const router = Router();

router.get('/', usuariosGet);


router.post('/',usuariosPost);


router.put('/',usuariosPut);


router.delete('/', usuariosDelete);



module.exports = router;