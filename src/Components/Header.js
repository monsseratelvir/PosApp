import React from 'react';
import { NavLink } from 'react-router-dom'

//Cuando vayas a usar links o enlaces (es lo mismo) en una etiqueta nav, usas "NavLink"  dentro de to={} va la ruta que colocaste en el App.js para llamar el componente.

//Si el enlace esta fuera de una etiqueta nav entonces solo usas Link y lo demás que te dije arriba👆🏻 oki watafakkk ahh y como era para seleccionar la misma palabra varias veces? por ejemplo todos los classname?
//ctrl + d seleccionas una por una
//shift + ctrl + l seleccionas todas
//pero y el login no seria aparte? o sea, no llevaria navbar, solo estaba dandote el ejemplo, lo puedes quitar junto con create-account pero solo del header de App.js dejalos ahí porque los ocupas aish esperame
//eso de form sacarlo de allli, o sea que no este alli dentro sino que vaya afuera, solo de login no se si me explico xd este es el form de login va?
//Cómo así??  esto es de esta pagina?sii ah oks dejame ver algo, listo. creo que aquí terminó mi work asi es, ahorita le meto dinamita a esto no vas a tardar 5 min en escribirme por errrores que te aparecen jajaJAJAJAJAJAJAJAJAJA no le pongas duda pero aquí estaré por si necesitas aiuda oquei vai

const Header = () => {
     return (
          <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink to={'/'} className="navbar-brand" >PossApp</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                   <NavLink to={'/inventario'} className="nav-link" >Inventario</NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink to={'/ventas'} className="nav-link" >Ventas</NavLink>                                   
                              </li>
                              <li className="nav-item">
                                   <NavLink to={'/informe'} className="nav-link" >Informe</NavLink>
                              </li>
                         </ul>
                    </div>
               </nav>
          </header>
     );
};

export default Header;