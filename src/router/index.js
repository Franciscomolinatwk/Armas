import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import prueba from '../views/prueba.vue'
import Municion from '../views/Municion.vue'
import FMunicion from '../views/FMunicion.vue'
import Catalogo from "../views/Catalogo"
import Formulario from "../views/Formulario";
import Airsoft from "../views/Airsoft";
import Carabina from "../components/Carabina";
import Escopeta from "../components/Escopeta";
import Arco from "../components/Arco";
import RiflePoston from "../components/RiflePoston";
import Pistola from "../components/Pistola";
import RifleBala from "../components/RifleBala";
import Revolver from "../components/Revolver";
import Ballesta from "../components/Ballesta";
import Fusil from "../components/Fusil";
import AK47 from "@/components/AK47";
import M4 from "@/components/M4";
import BERETTA from "@/components/BERETTA";
import HK from "@/components/HK";
import UMP from "@/components/UMP";
import M4A1 from "@/components/M4A1";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: Catalogo

  },
  {
    path: '/Formulario',
    name: 'Formulario',
    component: Formulario

  },
  {
    path: '/Airsoft',
    name: 'Airsoft',
    component: Airsoft

  },
  {
    path: '/Escopeta',
    name: 'Escopeta',
    component: Escopeta

  },
  {
    path: '/Arco',
    name: 'Arco',
    component: Arco

  },
  {
    path: '/Carabina',
    name: 'Carabina',
    component: Carabina

  },
  {
    path: '/RiflePoston',
    name: 'RiflePoston',
    component: RiflePoston

  },
  {
    path: '/Pistola',
    name: 'Pistola',
    component: Pistola

  },
  {
    path: '/RifleBala',
    name: 'RifleBala',
    component: RifleBala

  },
  {
    path: '/RiflePoston',
    name: 'RiflePoston',
    component: RiflePoston

  },
  {
    path: '/Revolver',
    name: 'Revolver',
    component: Revolver

  },
  {
    path: '/Ballesta',
    name: 'Ballesta',
    component: Ballesta

  },
  {
    path: '/Fusil',
    name: 'Fusil',
    component: Fusil

  },
{
  path: '/prueba',
      name: 'prueba',
    component: prueba

},
  {
    path: '/M4',
    name: 'M4',
    component: M4

  },
  {
    path: '/AK47',
    name: 'AK47',
    component: AK47

  },
  {
    path: '/UMP',
    name: 'UMP',
    component: UMP

  },
  {
    path: '/BERETTA',
    name: 'BERETTA',
    component: BERETTA

  },
  {
    path: '/HK',
    name: 'HK',
    component: HK

  },
  {
    path: '/M4A1',
    name: 'M4A1',
    component: M4A1

  },
  {
      path: '/Municion',
    name: 'Municion',
    component: Municion

  },
  {
    path: '/FMunicion',
    name: 'Fmunicion',
    component: FMunicion

  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
