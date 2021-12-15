This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

Importante:

Problemáticas encontradas y soluciones implementadas: 
-la Api devuelve un Json de casi 5mil líneas en los que se encuentra todos los nombres de los pokemon y la url con los datos del pokemon,  a su vez la url de cada pokemon devuelve unas 10mil líneas de código con datos específicos del pokemon,
Por la tanto tome la decisión de hacer una Card que tenga información básica sin recurrir a que por cada Card haga una petion a la url del pokemon ya que esto seria una cantidad muy grande lo cual se refleja en el tiempo de carga y los datos consumido para el usuario por cada Card, en caso del que el usuario quiera saber mas información sobre un pokemon en cada card tiene la opción de redirigir a otra pantalla en que hace la petición de información que son 10mil líneas.

-La api no tiene búsquedas por nombres parciales, solo tiene por Id o nombre exacto.
Se implementó búsqueda por nombre parcial de pokemon a partir de 3 letras del nombre, ya que si la petición son con una sola letra en 5mil líneas me traería seguramente muchos pokemones en una sola peticion, también se implementó un debaunce para no hacer 1 peticion por cada pulsación al buscar.

Para mejorar la experiencia de usuario se implemento Modo oscuro con la paleta de color de el sitio de Houm en su tono mas claro, Lazy Load e  Infite Scrool para la carga de datos, se implemento customHooks, tanto para el Debaunce,  peticiones ,se implemente Ts ya que este ofrece beneficios a la hora de utilizar datos/manipular,
