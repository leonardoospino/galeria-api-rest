
# Prueba para Sophos Solutions
## Desarrollador: Leonardo F. Ospino Ayala

### Para ejecutar el proyecto:
| Comando |
| ------ |
| npm install |
| npm run dev |

### Funcionamiento
Esta es una API REST para el manejo de una galería de peliculas y series, a continuacion se muestran los endpoints:
| Ambiente | Host |
|--|--|
| Local | http://localhost:4000/api |
| Producción | https://leonardoospino-galeria.herokuapp.com/api |


| Verbo | Ruta | Parámetros |
|--|--|--|
| GET | /galeria | N/A
| GET | /galeria/:type | Serie, Película |
| POST | /galeria | Body (JSON): { title, year, type }
| PUT | /galeria:id | Ejemplo: 60afa98691681c075cf05e6e, Body (JSON): { title, year, type } |
| DELETE | /galeria:id | Ejemplo: 60afa98691681c075cf05e6e |

### Página
La página cuenta con 3 vistas las cuales incluyen el conteo "Me gusta" por cada película guardado en el almacenamiento local segun el id.

	 Vistas
	 - **Todas**: Aquí se muestran todos los registros.
	 - **Películas**: Solo registros de tipo *Película*
	 - **Series**: Solo registros de tipo *Serie*

| Ambiente | Host |
|--|--|
| Local | http://localhost:4000 |
| Producción | https://leonardoospino-galeria.herokuapp.com |
