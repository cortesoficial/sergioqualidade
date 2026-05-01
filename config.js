/**
 * BANCO DE DADOS - QUALIDADE INDUSTRIAL
 * Este arquivo centraliza as bitolas e a lista oficial de defeitos.
 */

// Configuração das Bitolas
const BANCO_BITOLAS = {
    "30x90": {
        nome: "30x90",
        m2Peca: 0.27,
        fatorPegada: 2.70, // Ajustar conforme peças por pegada
        descricao: "Revestimento 30x90"
    },
    "32x60": {
        nome: "32x60",
        m2Peca: 0.192,
        fatorPegada: 3.84,
        descricao: "Revestimento 32x60"
    },
    "45x120": {
        nome: "45x120",
        m2Peca: 0.54,
        fatorPegada: 5.40, // Ajustar conforme peças por pegada
        descricao: "Revestimento 45x120"
    },
    "90x90": {
        nome: "90x90",
        m2Peca: 0.81,
        fatorPegada: 12.15,
        descricao: "Porcelanato 90x90"
    }
};

// Lista de Defeitos (Fonte: image_5789e5.png)
// Organizada em ordem alfabética para facilitar a busca
const DEFEITOS_LISTA = [
    "1 - ARRANHADO",
    "4 - COVINHA",
    "7 - PINGO PRETO",
    "10 - RISCO DE VÉU",
    "14 - SUJEIRA DE ESMALTE",
    "15 - FURO NO ESMALTE",
    "18 - PINGO DE ENGOBE",
    "24 - FERVIDO",
    "26 - PEDRINHA",
    "29 - RA LATERAL",
    "30 - SUJEIRA DE FORNO",
    "34 - RA CANTO",
    "35 - RA CENTRO",
    "37 - SUJEIRA DE BISCOITO",
    "38 - FALHADO",
    "41 - LASCADO",
    "45 - RETRAÇÃO DE ESMALTE",
    "47 - MASSA CONTAMINADA",
    "49 - FORA DE CALIBRE",
    "54 - PONTA QUEBRADA",
    "60 - SUJEIRA DE REBARBADOR",
    "64 - PINGO D'AGUA",
    "73 - FALHA DE VÉU",
    "78 - FORA DE TON",
    "80 - QUEBRA POR TRANCAMENTO",
    "85 - ONDA DE VÉU",
    "88 - GRUMO NO ESMALTE",
    "93 - PINGO DE COBERTURA",
    "99 - QUEBRA DO ROBÔ",
    "106 - DEFORMADO",
    "109 - MARCA DE LIXA",
    "111 - REPRENSADO",
    "114 - QUEBRA DE EMPILHADOR",
    "116 - QUEBRA DE ESTOCAGEM",
    "117 - MATERIAL MOLHADO",
    "118 - DIAGONAL",
    "119 - FALHA DE DIGITAL",
    "122 - CHANFRADO",
    "123 - SERRILHADO",
    "124 - QUEBRA DE RETÍFICA",
    "127 - EMPENO"
];
