
# se continua con lo practicado en logger_base.py

import logging as log

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',  #datefmt es el formato de la fecha
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                    ]) # cuando comience a manejar información, lo redirigira a este archivo 'capa_datos.log'

"""
Esto es util para saber diferentes niveles de error y como llegar a él
asctime = la hora en que ocurrio
levelname = el nivel donde impacto
filename = nombre del archivo
linenno = numero de linea
message = mensaje que envia
"""

# Llamamos una configuracion basica
if __name__ == '__main__':
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel Warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')

"""
La terminal arrojaria =
08:21:18 PM:DEBUG [logger_base_parte2.py:25] Mensaje a nivel debug
08:21:18 PM:INFO [logger_base_parte2.py:26] Mensaje a nivel info
08:21:18 PM:WARNING [logger_base_parte2.py:27] Mensaje a nivel Warning
08:21:18 PM:ERROR [logger_base_parte2.py:28] Mensaje a nivel error
08:21:18 PM:CRITICAL [logger_base_parte2.py:29] Mensaje a nivel critical
PS C:\Users\Arón\TecnicaturaUniversitariaProgramación\_3erSemestre\1.1.Python_3> 
"""