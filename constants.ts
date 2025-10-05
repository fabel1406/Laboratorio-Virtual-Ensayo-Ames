import { QuizQuestion, TheoryCardData, LabChoice } from './types';
import BookOpenIcon from './components/icons/BookOpenIcon';
import DnaIcon from './components/icons/DnaIcon';
import FlaskIcon from './components/icons/FlaskIcon';
import ClipboardCheckIcon from './components/icons/ClipboardCheckIcon';

export const THEORY_CARDS: TheoryCardData[] = [
    {
        title: 'Principio del Ensayo',
        content: 'El ensayo de Ames utiliza bacterias auxótrofas para la histidina (His⁻), que no pueden crecer sin histidina. Se evalúa si una sustancia química puede causar mutaciones que reviertan este defecto (reversión a His⁺), permitiendo a las bacterias crecer y formar colonias. Este es un indicador de mutagenicidad.',
        icon: DnaIcon,
        color: 'blue',
    },
    {
        title: 'Cepas Bacterianas',
        content: 'Se usan cepas de Salmonella typhimurium con diferentes mutaciones en el operón his. Las más comunes son: TA98 (mutaciones de cambio de marco), TA100 (sustitución de pares de bases), TA1535 (sustitución de pares de bases) y TA1537 (cambio de marco). Esto permite detectar diferentes tipos de mutágenos.',
        icon: DnaIcon,
        color: 'blue',
    },
    {
        title: 'Activación Metabólica (S9)',
        content: 'Algunas sustancias (pro-mutágenos) no son mutagénicas por sí mismas, pero se convierten en mutágenos activos en el hígado. Se añade una fracción S9 (extracto de hígado de rata) para simular este metabolismo y detectar estos compuestos.',
        icon: FlaskIcon,
        color: 'blue',
    },
    {
        title: 'Metodologías de Ensayo',
        content: 'Existen varias formas de realizar el ensayo: 1) Incorporación en placa: la más común. 2) Pre-incubación: más sensible para ciertos químicos. 3) Desecador: para gases o compuestos volátiles. 4) Spot test: un cribado rápido y cualitativo.',
        icon: ClipboardCheckIcon,
        color: 'blue',
    },
];


export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: '¿Cuál es el principio biológico fundamental del Ensayo de Ames?',
    options: [
      'Medir la toxicidad directa de un químico en bacterias.',
      'Evaluar la capacidad de una sustancia para inducir una mutación de reversión de His⁻ a His⁺.',
      'Observar la formación de colonias bacterianas en un medio rico.',
      'Detectar la resistencia a antibióticos inducida por un mutágeno.',
    ],
    correctAnswerIndex: 1,
    feedback: 'Correcto. El ensayo detecta mutágenos por su capacidad de revertir una mutación preexistente, permitiendo a las bacterias sintetizar histidina de nuevo.',
  },
  {
    question: '¿Para qué se utiliza la fracción S9 en el ensayo?',
    options: [
      'Para esterilizar el medio de cultivo.',
      'Como fuente de nutrientes para las bacterias.',
      'Para simular el metabolismo hepático y activar pro-mutágenos.',
      'Para aumentar la permeabilidad de la pared celular bacteriana.',
    ],
    correctAnswerIndex: 2,
    feedback: 'Excelente. La fracción S9 contiene enzimas hepáticas que pueden convertir sustancias químicas no mutagénicas en mutágenos activos, como ocurre en el cuerpo humano.',
  },
  {
    question: 'Si sospechas que una sustancia causa mutaciones de tipo "cambio de marco de lectura" (frameshift), ¿qué cepa sería la más indicada para detectarla?',
    options: [
      'TA100',
      'TA1535',
      'TA98',
      'Todas las cepas por igual',
    ],
    correctAnswerIndex: 2,
    feedback: 'Correcto. La cepa TA98 está específicamente diseñada para detectar mutaciones de cambio de marco de lectura.',
  },
  {
    question: "Las cepas de Salmonella utilizadas en el ensayo de Ames tienen una mutación 'rfa'. ¿Cuál es el propósito de esta mutación?",
    options: [
        'Hacer que las bacterias dependan de la histidina.',
        'Aumentar la permeabilidad de la pared celular a moléculas grandes.',
        'Reparar el ADN dañado por los mutágenos.',
        'Darle a las colonias un color rojo distintivo.',
    ],
    correctAnswerIndex: 1,
    feedback: "¡Exacto! La mutación 'rfa' causa un defecto en la membrana externa, haciéndola más permeable a moléculas grandes como los pro-mutágenos, lo que aumenta la sensibilidad del ensayo.",
  },
  {
      question: "Muchas cepas del ensayo de Ames también contienen una deleción en el gen 'uvrB'. ¿Por qué es importante esta modificación?",
      options: [
          'Para que las bacterias crezcan más rápido.',
          'Para hacerlas resistentes a la ampicilina.',
          'Para inactivar el sistema de reparación por escisión de ADN.',
          'Para permitir la activación metabólica con la fracción S9.',
      ],
      correctAnswerIndex: 2,
      feedback: "¡Correcto! La deleción del gen 'uvrB' elimina la capacidad de la bacteria para reparar el ADN dañado de forma precisa, lo que hace más probable que una mutación se fije y se detecte.",
  },
  {
      question: 'En un experimento, el control negativo muestra 20 colonias de reversión espontánea. La placa tratada con el compuesto X muestra 45 colonias. ¿Cómo se interpreta este resultado?',
      options: [
          'Positivo, porque hay más colonias que en el control.',
          'Positivo, porque el número de colonias es más del doble del control.',
          'Negativo, porque el aumento no es significativo.',
          'Inconcluso, se necesita repetir el experimento.',
      ],
      correctAnswerIndex: 1,
      feedback: 'Muy bien. La regla general es que un resultado se considera positivo si el número de revertantes es al menos el doble del fondo espontáneo (2 x 20 = 40). Como 45 es mayor que 40, el resultado es positivo.',
  },
  {
      question: 'Las cepas TA98 y TA100 contienen el plásmido pKM101. ¿Qué función cumple este plásmido?',
      options: [
          'Proporcionar resistencia a la histidina.',
          'Codificar para la fracción S9.',
          'Aumentar la sensibilidad a los mutágenos mediante la mejora de la reparación de ADN propensa a errores.',
          'Prevenir la reversión espontánea.',
      ],
      correctAnswerIndex: 2,
      feedback: '¡Perfecto! El plásmido pKM101 mejora un sistema de reparación de ADN propenso a errores (reparación SOS), lo que aumenta la tasa de mutación inducida por muchos compuestos y, por tanto, la sensibilidad del ensayo.',
  },
  {
      question: "¿Qué podría causar un resultado 'falso negativo' en un ensayo de Ames, incluso si la sustancia es mutagénica?",
      options: [
          'Usar una concentración demasiado baja del compuesto.',
          'La alta toxicidad (efecto bactericida) del compuesto a la concentración probada.',
          'Olvidar añadir la fracción S9 para un mutágeno directo.',
          'Incubar las placas durante demasiado tiempo.',
      ],
      correctAnswerIndex: 1,
      feedback: '¡Correcto! Si una sustancia es muy tóxica, matará a las bacterias antes de que puedan mutar y formar colonias revertantes. Esto enmascara la mutagenicidad y produce un falso negativo. Por eso se realizan pruebas de toxicidad previas.',
  },
];

export const LAB_STRAINS: LabChoice[] = [
    { id: 'TA98', text: 'Cepa TA98 (Detecta cambios de marco)', feedback: 'Incorrecto. Las nitrosaminas típicamente causan sustituciones de pares de bases, no cambios de marco de lectura.' },
    { id: 'TA100', text: 'Cepa TA100 (Detecta sustitución de bases)', feedback: '¡Correcto! La cepa TA100 es ideal para detectar mutágenos que causan sustituciones de pares de bases, el mecanismo de acción común de las nitrosaminas.' },
    { id: 'TA102', text: 'Cepa TA102 (Detecta agentes oxidantes)', feedback: 'Incorrecto. Aunque útil, la TA102 está diseñada para agentes oxidantes y de entrecruzamiento, no es la primera elección para una nitrosamina.' },
];

export const LAB_METHODS: LabChoice[] = [
    { id: 'incorporation', text: 'Método de Incorporación en Placa', feedback: 'Opción válida, pero no la mejor. La preincubación suele ofrecer mayor sensibilidad para las nitrosaminas.' },
    { id: 'preincubation', text: 'Método de Pre-incubación', feedback: '¡Excelente elección! El método de pre-incubación aumenta el tiempo de contacto entre el mutágeno, la bacteria y la fracción S9, lo que incrementa la sensibilidad del ensayo, ideal para este caso.' },
    { id: 'spot', text: 'Spot Test (Prueba puntual)', feedback: 'Incorrecto. El spot test es una prueba cualitativa y rápida, no es adecuada para un análisis cuantitativo y regulatorio.' },
];

export const LAB_S9_CHOICES: LabChoice[] = [
    { id: 'yes', text: 'Sí, añadir fracción S9', feedback: '¡Correcto! Las nitrosaminas son pro-mutágenos clásicos. Requieren activación metabólica por las enzimas de la fracción S9 para ejercer su efecto mutagénico.' },
    { id: 'no', text: 'No, añadir fracción S9', feedback: 'Incorrecto. Sin la activación metabólica de la fracción S9, la naturaleza mutagénica de la nitrosamina no se detectaría, llevando a un resultado falso negativo.' },
];