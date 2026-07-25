#!/usr/bin/env python3
"""
Script para añadir palabras clave invisibles (en blanco) a cv.tex
para pasar filtros de sistemas ATS (Applicant Tracking Systems)
"""

import re
import sys

def add_keywords_to_cv(input_file, output_file=None):
    """
    Añade palabras clave invisibles al CV en LaTeX
    
    Palabras clave fijas:
    - master degree
    - AI
    - software developer
    
    Palabras clave variables: edita la lista VARIABLE_KEYWORDS
    """
    
    # PALABRAS CLAVE FIJAS
    FIXED_KEYWORDS = [
        "master degree",
        "AI",
        "artificial intelligence",
        "software developer",
        "machine learning",
        "data analysis"
    ]
    
    # PALABRAS CLAVE VARIABLES - EDITA AQUÍ
    VARIABLE_KEYWORDS = [
        "quantitative finance",
        "python programming",
        "materials engineering",
        "physics",
        "research",
        "innovation"
    ]
    
    # Combinar todas las palabras clave
    all_keywords = FIXED_KEYWORDS + VARIABLE_KEYWORDS
    
    # Crear string de palabras clave en blanco
    keywords_text = " ".join(all_keywords)
    
    # LaTeX command para texto invisible (blanco)
    latex_keywords = f"\\\\textcolor{{white}}{{\\\\tiny {keywords_text}}}\n\n"
    
    # Leer el archivo original
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Buscar donde insertar (después de \begin{document})
    if '\\begin{document}' in content:
        # Insertar después de \begin{document}
        content = content.replace(
            '\\begin{document}',
            '\\begin{document}\n' + latex_keywords
        )
    else:
        # Si no existe, insertar al inicio (después de preámbulo)
        lines = content.split('\n')
        insert_pos = len(lines)
        
        # Insertar antes del \end{document}
        for i, line in enumerate(lines):
            if '\\end{document}' in line:
                insert_pos = i
                break
        
        lines.insert(insert_pos, latex_keywords)
        content = '\n'.join(lines)
    
    # Escribir archivo de salida
    output_path = output_file or input_file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Palabras clave añadidas a {output_path}")
    print(f"\n📝 Palabras clave fijas: {len(FIXED_KEYWORDS)}")
    for kw in FIXED_KEYWORDS:
        print(f"   - {kw}")
    
    print(f"\n🔤 Palabras clave variables: {len(VARIABLE_KEYWORDS)}")
    for kw in VARIABLE_KEYWORDS:
        print(f"   - {kw}")
    
    print(f"\n💡 Para añadir más palabras clave variables:")
    print(f"   1. Edita este script")
    print(f"   2. Añade palabras a la lista VARIABLE_KEYWORDS")
    print(f"   3. Ejecuta: python3 add_keywords.py")

if __name__ == "__main__":
    input_file = "cv.tex"
    
    # Opcionalmente: python3 add_keywords.py cv_output.tex (para backup)
    output_file = sys.argv[1] if len(sys.argv) > 1 else None
    
    add_keywords_to_cv(input_file, output_file)
