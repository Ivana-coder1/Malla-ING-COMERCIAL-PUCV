const allCourses = {"ICA1161": {"nombre": "INTRO A LA ECONOMÍA", "prerreqs": [], "creditos": 4}, "ICA1101": {"nombre": "ENTORNO LEGAL 1", "prerreqs": [], "creditos": 3}, "ICA1102": {"nombre": "ADMIN DE EMPRESAS", "prerreqs": [], "creditos": 4}, "MAT1371": {"nombre": "MATEMÁTICAS DIREC. 1", "prerreqs": [], "creditos": 7}, "ICA1181": {"nombre": "TALLER EXPRESIÓN 1", "prerreqs": [], "creditos": 1}, "ICA1182": {"nombre": "TALLER TÉCNICAS DE ESTUDIO", "prerreqs": [], "creditos": 1}, "ICA1262": {"nombre": "MICROECONOMÍA 1", "prerreqs": ["ICA1161", "MAT1371"], "creditos": 4}, "ICA1203": {"nombre": "DIRECCIÓN DE EMPRESAS ", "prerreqs": ["ICA1102"], "creditos": 4}, "MAT1272": {"nombre": "MATEMÁTICAS DIREC. 2", "prerreqs": ["MAT1371"], "creditos": 7}, "ICA1273": {"nombre": "ANÁLISIS CUANTITATIVO 1", "prerreqs": ["MAT1371"], "creditos": 4}, "ICA1283": {"nombre": "TALLER HABILIDADES SOCIALES ", "prerreqs": ["ICA1181", "ICA1182"], "creditos": 1}, "ICA2163": {"nombre": "MACROECONOMÍA 1", "prerreqs": ["ICA1262"], "creditos": 4}, "ICA2111": {"nombre": "MATEMÁTICAS FINANCIERAS", "prerreqs": [], "creditos": 2}, "ICA2141": {"nombre": "TECNOLOGÍAS 1", "prerreqs": ["ICA1102"], "creditos": 4}, "ICA2174": {"nombre": "ANÁLISIS CUANTITATIVO 2", "prerreqs": ["MAT1272", "ICA1273"], "creditos": 4}, "ING9901": {"nombre": "INGLÉS 1", "prerreqs": [], "creditos": 2}, "ICR010": {"nombre": "ANTROPOLOGÍA CRISTIANA", "prerreqs": [], "creditos": 2}, "PFF0001": {"nombre": "PFF 1", "prerreqs": [], "creditos": 2}, "ICA2264": {"nombre": "ECONOMETRÍA", "prerreqs": ["ICA2163", "ICA2174"], "creditos": 4}, "ICA2212": {"nombre": "CONTABILIDAD FINANCIERA", "prerreqs": ["ICA1101", "ICA1102", "ICA2111"], "creditos": 4}, "ICA2204": {"nombre": "ADMIN DE NEGOCIOS", "prerreqs": ["ICA1203"], "creditos": 4}, "ICA2242": {"nombre": "TECNOLOGÍAS 2", "prerreqs": ["ICA2141"], "creditos": 4}, "ING9002": {"nombre": "INGLÉS 2", "prerreqs": ["ING9001"], "creditos": 2}, "ICA2284": {"nombre": "TALLER EXPRESIÓN 2", "prerreqs": ["ICA1181"], "creditos": 1}, "ICA2285": {"nombre": "TALLER PENSAMIENTO CRÍTICO", "prerreqs": ["ICA1283"], "creditos": 1}, "ICA3165": {"nombre": "MICROECONOMÍA 2", "prerreqs": ["ICA1262"], "creditos": 4}, "ICA3113": {"nombre": "CONTABILIDAD ADMINISTRATIVA", "prerreqs": ["ICA2212"], "creditos": 4}, "ICA3131": {"nombre": "INTRO INVESTIGACION DE MERCADOS", "prerreqs": ["ICA2174"], "creditos": 3}, "ICA3151": {"nombre": "GESTIÓN DE CREATIVIDAD E INNOVACIÓN", "prerreqs": ["ICA1203"], "creditos": 3}, "ICA3105": {"nombre": "METODOLOGÍA DE INVESTIGACIÓN", "prerreqs": ["ICA1203"], "creditos": 2}, "ICA3143": {"nombre": "INTRO INVESTIGACIÓN DE OPERACIONES", "prerreqs": ["ICA2174"], "creditos": 4}, "ICA3266": {"nombre": "MACROECONOMÍA 2", "prerreqs": ["ICA2163"], "creditos": 4}, "ICA3214": {"nombre": "FINANZAS 1", "prerreqs": ["ICA2204", "ICA3113"], "creditos": 4}, "ICA3232": {"nombre": "MARKETING 1", "prerreqs": ["ICA2204", "ICA3131"], "creditos": 4}, "ICA3221": {"nombre": "DIRECCIÓN DE PERSONAS 1", "prerreqs": ["ICA2204"], "creditos": 4}, "ICA3244": {"nombre": "PRODUCCIÓN Y OPERACIONES", "prerreqs": ["ICA2204", "ICA3143"], "creditos": 4}, "ICA4167": {"nombre": "ECONOMÍA INTERNACIONAL", "prerreqs": ["ICA3165", "ICA3266"], "creditos": 4}, "ICA4115": {"nombre": "FINANZAS 2", "prerreqs": ["ICA2264", "ICA3214"], "creditos": 4}, "ICA4133": {"nombre": "MARKETING 2", "prerreqs": ["ICA3232"], "creditos": 4}, "ICA4122": {"nombre": "DIRECCIÓN DE PERSONAS 2", "prerreqs": ["ICA3221"], "creditos": 4}, "ICA4145": {"nombre": "PRODUCCIÓN Y OPERACIONES 2", "prerreqs": ["ICA3244"], "creditos": 4}, "ICA4208": {"nombre": "ENTORNO LEGAL 2", "prerreqs": ["ICA3214"], "creditos": 3}, "ICA4252": {"nombre": "PLANEACIÓN Y CREACIÓN DE NEGOCIOS", "prerreqs": ["ICA4115", "ICA3244", "ICA4133"], "creditos": 4}, "ICA4207": {"nombre": "CONTROL DE GESTIÓN", "prerreqs": ["ICA2242", "ICA3244", "ICA4115", "ICA4145"], "creditos": 3}, "ICA4253": {"nombre": "INICIATIVA EMPRESARIAL", "prerreqs": ["ICA4133"], "creditos": 4}, "ICA4254": {"nombre": "INTRAPRENEURSHIP ", "prerreqs": ["ICA4122"], "creditos": 2}, "ING9003": {"nombre": "INGLÉS 3", "prerreqs": ["ING9002"], "creditos": 2}, "ICR020": {"nombre": "ÉTICA CRISTIANA", "prerreqs": [], "creditos": 2}, "AO0001": {"nombre": "ASIGNATURAS OPTATIVAS ", "prerreqs": [], "creditos": 12}, "ING9004": {"nombre": "INGLÉS 4", "prerreqs": ["ING9003"], "creditos": 2}, "ICA5187": {"nombre": "TALLER EXPRESIÓN 3", "prerreqs": ["ICA2284"], "creditos": 1}, "ICA5186": {"nombre": "TALLER DE NEGOCIACIÓN PARA DIR.", "prerreqs": ["ICA2285", "ICA4253"], "creditos": 1}, "PFF0002": {"nombre": "PFF 2", "prerreqs": [], "creditos": 2}, "PFF0003": {"nombre": "PFF 3", "prerreqs": [], "creditos": 2}, "ICA5208": {"nombre": "ALTA DIRECCIÓN", "prerreqs": ["ICA4167", "ICA4253", "ICA4254", "ICA5187"], "creditos": 4}, "ICA5209": {"nombre": "TALLER DE TITULACIÓN: SIMULACIÓN", "prerreqs": ["ICA4167", "ICA4253", "ICA4254", "ICA5187"], "creditos": 14}, "ICA5288": {"nombre": "TALLER DE EMPLEABILIDAD", "prerreqs": ["ICA5186"], "creditos": 2}};
const completed = new Set();

function updateCourseStates() {
    document.querySelectorAll('.curso').forEach(curso => {
        const code = curso.dataset.codigo;
        const prereqs = JSON.parse(curso.dataset.prerreqs);

        if (completed.has(code)) {
            curso.className = "curso completado";
        } else if (prereqs.every(pr => completed.has(pr))) {
            curso.className = "curso desbloqueado";
        } else {
            curso.className = "curso bloqueado";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.curso').forEach(curso => {
        curso.addEventListener('click', () => {
            const code = curso.dataset.codigo;
            if (completed.has(code)) {
                completed.delete(code);
            } else {
                completed.add(code);
            }
            updateCourseStates();
        });
    });
    updateCourseStates();
});