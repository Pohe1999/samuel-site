import { FaTasks, FaWater, FaShieldAlt, FaPeopleCarry, FaHandHoldingHeart, FaBullhorn, FaBook, FaGlobe, FaVoteYea } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa"; // Icono de enlace externo

const ComisionesGrid = () => {
  const comisiones = [
    { cargo: "Presidente", comision: "1. Comité de Vigilancia de la Contraloría", icono: FaShieldAlt, enlace: "https://vinculacion.cultura.gob.mx/PAICE/normatividad/docs_PAICE_normatividad_2022/2.%20Que%20es%20la%20Contraloria%20Social.pdf" },
    { cargo: "Integrante", comision: "2. Comisión de Recursos Hidráulicos", icono: FaWater, enlace: "https://www.ejemplo.com/comision2" },
    { cargo: "Integrante", comision: "3. Vigilancia del Órgano Superior de Fiscalización", icono: FaTasks, enlace: "https://www.ejemplo.com/comision3" },
    { cargo: "Integrante", comision: "4. Desarrollo y Apoyo Social", icono: FaPeopleCarry, enlace: "https://www.ejemplo.com/comision4" },
    { cargo: "Integrante", comision: "5. Apoyo y Atención a las Personas Migrantes", icono: FaHandHoldingHeart, enlace: "https://www.ejemplo.com/comision5" },
    { cargo: "Integrante", comision: "6. Comité de Comunicación Social", icono: FaBullhorn, enlace: "https://www.ejemplo.com/comision6" },
    { cargo: "Integrante", comision: "7. Comité Editorial y de Biblioteca", icono: FaBook, enlace: "https://www.ejemplo.com/comision7" },
    { cargo: "Integrante", comision: "8. Especial de seguimiento de la Agenda 2030", icono: FaGlobe, enlace: "https://www.ejemplo.com/comision8" },
    { cargo: "Integrante", comision: "9. Comisión electoral y desarrollo democrático", icono: FaVoteYea, enlace: "https://www.ejemplo.com/comision9" }
  ];

  return (
    <div name="comisiones" className="bg-gray-100 shadow-lg rounded-lg p-6 sm:mx-16">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4 border-b-4  border-[#821e30]">Estas son mis Comisiones como diputado local</h1>
      {/* Ajustar el grid para 1 columna en móvil y 2 en pantallas más grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comisiones.map((comision, index) => {
          const Icon = comision.icono;
          return (
            <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Icono y descripción */}
              <div className="flex items-center">
                <Icon size={24} className="text-[#821e30] mr-4" />
                <div>
                  <h2 className="font-bold text-lg text-gray-800">{comision.comision}</h2>
                  <p className="text-gray-600">{comision.cargo}</p>
                </div>
              </div>
              {/* Botón de enlace */}
              {/*<div>
                <a
                  href={comision.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-900 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComisionesGrid;
